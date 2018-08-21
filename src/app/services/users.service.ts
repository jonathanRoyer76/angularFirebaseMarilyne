import { Injectable, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Subject, Observable, observable } from 'rxjs';
import * as firebase from 'firebase';
import { ErrorHandlerService } from './error-handler.service';
import { PersonnesService } from './personnes.service';
import { Personne } from '../classes/personne';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userConnecte : User=null;
  subjectUser= new Subject<User>();

  constructor(
    private serviceErreur  : ErrorHandlerService,
    private servicePersonne: PersonnesService
  ) { 
    firebase.auth().onAuthStateChanged(
      (user)=>{
        let personne = new Personne();
        if (user){
          this.userConnecte             = new User();
          this.userConnecte.email       = user.email;  
          this.userConnecte.urlPhoto    = user.photoURL;
          this.userConnecte.isConnected = true;                    
          firebase.firestore().collection('personnes').where('mail','==',user.email).get().then(snap=>{
            if (!snap.empty){
              personne.actif         = snap.docs[0].data()['actif']
              personne.adresse       = snap.docs[0].data()['adresse']
              personne.dateNaissance = snap.docs[0].data()['dateNaissance']
              personne.mail          = snap.docs[0].data()['mail']
              personne.nom           = snap.docs[0].data()['nom']
              personne.prenom        = snap.docs[0].data()['prenom']
              personne.status        = snap.docs[0].data()['status']
              personne.telPortable   = snap.docs[0].data()['telPortable']
              personne.urlPhoto      = snap.docs[0].data()['urlPhoto']
            }
            this.servicePersonne.setPersonneConnecte(personne)        
            this.userConnecte.status=personne.status
          })
        }else{
          this.userConnecte=new User();
        }
        this.emitSubjectUser();
      }
    )
  }

  ngOnInit(){
    this.userConnecte = new User();     
  }

  emitSubjectUser(){
    this.subjectUser.next(this.userConnecte);
  }

  getUserConnecte():User{
    return this.userConnecte;
  }

  //Procédure de connexion
  signIn(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.mdp).then(
      ()=>{},
      (erreur)=>{
        this.userConnecte= new User();
        switch (erreur.code){
          case 'auth/invalid-email':
            this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'le mail saisi est invalide');
            break;
          case 'auth/user-not-found':
            this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Utilisateur introuvable');
            break;
          case 'auth/user-disabled':
            this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Utilisateur désactivé');
            break;
          case 'auth/wrong-password':
            this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Mot de passe incorrect');
            break;
          default:
        this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", erreur/*'Une erreur s\'est produite dans la connexion de l\'utilisateur'*/);
        }
      }
    )
  }

  // Déconnexion
  signOut(){
    firebase.auth().signOut();
  }

  // Enregistrement d'un nouveau user
  registerNewUser(user: User): Observable<boolean>{  
    return new Observable<boolean>((observer)=>{
       firebase.auth().createUserWithEmailAndPassword(user.email, user.mdp).then( 
        (retourUser)=>{
          user.uidfirebase=retourUser.user.uid;
          if (user.urlPhoto!='') this.updatePhotoUser(user)
          observer.next(true);
        },
        (erreur)=>{
          let messageErreur = '';
          switch (erreur.code){
            case 'auth/invalid-email':
            messageErreur = 'le mail saisi est invalide';
              this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
              break;
            case 'auth/email-already-in-use':
            messageErreur = 'E-mail déjà enregistré sur le site';
              this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
              break;
            case 'auth/operation-not-allowed':
            messageErreur = 'Opération non permise';
              this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
              break;
            case 'auth/weak-password':
            messageErreur = 'Mot de passe trop faible';
              this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
              break;
            default:
            messageErreur = 'Une erreur s\'est produite dans l\'enregistrement de l\'utilisateur';
              this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
          }
          observer.next(false);   
        }
      )      
    })
  } 

  //MAJ du profil connecté
  updatePhotoUser(user: User): Observable<boolean>{    
    return new Observable<boolean>((observer)=>{
      if (!firebase.auth().currentUser){
        firebase.auth().signInWithEmailAndPassword(user.email, user.mdp).then(()=>{},
        (error)=>{
          this.serviceErreur.afficheErreur('Erreur lors de la mise à jour du profil', error);
          observer.next(false);  
        })
      }
      let userFirebase :firebase.User=firebase.auth().currentUser;
      userFirebase.photoURL=user.urlPhoto;
      firebase.auth().updateCurrentUser(userFirebase).then(()=>{
        observer.next(true);
      },
      (error)=>{
        this.serviceErreur.afficheErreur('Erreur lors de la mise à jour du profil', error);
        observer.next(false);
      })
    })
  }
}

