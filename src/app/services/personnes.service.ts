import { Injectable, OnInit } from '@angular/core'; 
import { Personne } from '../classes/personne';
import { Subject, Observable } from 'rxjs';
import * as firebase from 'firebase'
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  private personneConnecte : Personne=null;
  subjectPersonne= new Subject<Personne>();

  constructor(
    private serviceError: ErrorHandlerService
  ) { }

  ngOnInit(){
    this.personneConnecte = new Personne(); 
  }

  emitSubjectPersonne(){
    this.subjectPersonne.next(this.personneConnecte);
  }

  //Retourne personneConnecte
  getPersonneConnecte():Personne{
    return this.personneConnecte;
  }

  //Définit la personne connectée au site
  setPersonneConnecte(personne: Personne){
    this.personneConnecte=personne;
  }

  //procédure d'enregistrement d'une nouveau Personne
  registerNewPersonne(personne: Personne, fichier?: File): Observable<boolean>{
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);    
    return new Observable<boolean>((observer)=>{
      if (fichier){
        let emplacement = 'avatars/'+Date.now()+fichier.name;
        let upload = firebase.storage().ref().child(emplacement).put(fichier)   
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
          // Chargement en cours
        },
        (error)=>{
          this.serviceError.afficheErreur('Erreur lors du chargement de la photo','Erreur inconnue')
        },
        ()=>{
          firebase.storage().ref().child(emplacement).getDownloadURL().then(url=>{
            personne.urlPhoto=url;
            firebase.firestore().collection('personnes').doc(personne.nom+'_'+personne.prenom).set({
                nom          : personne.nom,
                prenom       : personne.prenom,
                dateNaissance: personne.dateNaissance,
                adresse      : personne.adresse,
                telPortable  : personne.telPortable,
                mail         : personne.mail,
                actif        : personne.actif,
                status       : personne.status,
                urlPhoto     : personne.urlPhoto  
              }).then(()=>{
                observer.next(true);
              },(error)=>{
                this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
                observer.next(false); 
              })
          })
          observer.next(true);
        })
        // observer.next(true);
      }else{
        console.log('fichier absent')
        observer.next(false) 
      }
      // observer.next(false)
      // firebase.firestore().collection('personnes').doc(personne.nom+'_'+personne.prenom).set({
      //   nom          : personne.nom,
      //   prenom       : personne.prenom,
      //   dateNaissance: personne.dateNaissance,
      //   adresse      : personne.adresse,
      //   telPortable  : personne.telPortable,
      //   mail         : personne.mail,
      //   actif        : personne.actif,
      //   status       : personne.status,
      //   urlPhoto     : personne.urlPhoto  
      // }).then(()=>{
      //   observer.next(true);
      // },(error)=>{
      //   this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
      //   observer.next(false);
      // })
    });
  }

  //enregistre l'avatar sur le serveur
  uploadAvatarUser(fichier :File){   
    return new Observable<string>((observer)=>{
      if (!fichier){
        this.serviceError.afficheErreur('Erreur','fichier absent');
        observer.next('echec');
      } 
      if (!firebase.auth().currentUser){
        this.serviceError.afficheErreur('Erreur de transfert','Utilisateur non connecté');
        observer.next('echec')
      }
      let emplacement = 'avatars/'+Date.now()+fichier.name;
      console.log(emplacement)
      let upload = firebase.storage().ref().child(emplacement).put(fichier);
      // upload.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
      //   // Chargement en cours
      // },
      // (error)=>{
      //   this.serviceError.afficheErreur('Erreur lors du chargement de la photo','Erreur inconnue')
      //   observer.next('echec')
      // },
      // ()=>{
      //   console.log(firebase.storage().ref().getDownloadURL())
      //   observer.next('reussi') 
      // })
    })
  }
}
