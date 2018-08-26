import { Injectable, OnInit } from '@angular/core'; 
import { Personne } from '../classes/personne';
import { Subject, Observable } from 'rxjs';
import * as firebase from 'firebase'
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  private personneConnecte: Personne = null;
  subjectPersonne         = new Subject<Personne>();
  listePersonnes          = [];
  filtreAffichage         : boolean
  subjectFiltre           = new Subject<boolean>()

  constructor(
    private serviceError: ErrorHandlerService
  ) { }

  ngOnInit(){
    this.personneConnecte = new Personne(); 
  }

  // Définit si on affiche les personnes inactives
  setFiltreAffichagePersonnes(res: boolean){
    this.filtreAffichage=res;
    this.emitChangementFiltre();
  }

  // Emet le signal de changement de filtre
  emitChangementFiltre(){
    this.subjectFiltre.next(this.filtreAffichage)
  }

  emitSubjectPersonne(){
    this.subjectPersonne.next(this.personneConnecte);
  }

  // Mise à jour d'une personne
  updatePersonne(personne: Personne):Observable<boolean>{
    return new Observable<boolean>(observer=>{
      if (personne.idDoc){
        firebase.firestore().collection('personnes').doc(personne.idDoc).update(JSON.parse(JSON.stringify(personne)))
        .then(()=>{
          observer.next(true) 
        })   
      }else{
        this.serviceError.afficheErreur('Erreur dans la mise à jour du profil', 'non trouvé dans la base de données')
        observer.next(false);
      }
    })
  }

  //Retourne personneConnecte
  getPersonneConnecte():Personne{
    return this.personneConnecte;
  }

  //Définit la personne connectée au site
  setPersonneConnecte(personne: Personne){
    this.personneConnecte=personne;
    this.emitSubjectPersonne();
  }

  //procédure d'enregistrement d'une nouveau Personne
  registerNewPersonne(personne: Personne, fichier?: File): Observable<boolean>{       
    return new Observable<boolean>((observer)=>{
      if (fichier){
        this.enregistreAvatar(fichier).subscribe(url=>{
          if (url){
            personne.urlPhoto=url;
            firebase.firestore().collection('personnes').doc(personne.nom+'_'+personne.prenom).set(
              JSON.parse(JSON.stringify(personne))).then(()=>{
                observer.next(true);
              },
              (error)=>{
                this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
                observer.next(false); 
            })
          }
        })        
        firebase.firestore().collection('personnes').doc(personne.nom+'_'+personne.prenom).set(
          JSON.parse(JSON.stringify(personne))).then(()=>{
            observer.next(true);
          },
          (error)=>{
            this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
            observer.next(false); 
        })
      }else{
        firebase.firestore().collection('personnes').doc(personne.nom+'_'+personne.prenom).set(
          JSON.parse(JSON.stringify(personne))).then(()=>{
            observer.next(true);
          },
          (error)=>{
            this.serviceError.afficheErreur('Erreur survenur lors de l\'ajout', error);
            observer.next(false); 
        })
        observer.next(false) 
      }
    });
  }

  enregistreAvatar(fichier: File):Observable<string>{
    return new Observable<string>(observer=>{
      if (fichier){
        let emplacement = 'avatars/'+Date.now()+fichier.name;
        let upload = firebase.storage().ref().child(emplacement).put(fichier)   
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
          // Chargement en cours
        },
        (error)=>{
          this.serviceError.afficheErreur('Erreur lors du chargement de la photo','Erreur inconnue')
          observer.next(null)
        },
        ()=>{     
          firebase.storage().ref().child(emplacement).getDownloadURL().then(url=>{            
            observer.next(url);
          })          
        })
      }
    })
  }
 
  // retourne la liste des personnes enregistrées
  getListePersonnes():Observable<Personne[]>{
    return new Observable<Personne[]>(observer=>{
      let retour=[];
      firebase.firestore().collection('personnes').get().then(snap=>{
        if (snap){
          snap.docs.forEach(temp=>{
            let personne=JSON.parse(JSON.stringify(temp.data()))
            personne.idDoc=temp.id
            retour.push(personne)
          })
          observer.next(retour);
        }else observer.next(null);
      })
    })
  }
 
  // Vérifie les doublons et ajoute dans la bdd
  checkAndAddPersonne(personne: Personne){ 
    this.getListePersonnes().subscribe(liste=>{
      if (liste){  
        this.listePersonnes=liste;
        // Vérifie si les personnes saisies sont déjà dans la bdd
        if (personne.prenom!='' && personne.nom!=''){
          if (!this.listePersonnes.find(el=>{return el.nom===personne.prenom;})){
            if (!this.listePersonnes.find(el=>{return el.prenom===personne.nom;})){ 
              // Ajout dans la bdd
              this.registerNewPersonne(personne).subscribe()  
            }
          }
        }
      }
    })
  }

  // Connecte la personne gràce a son mail et sopn mdp
  connectePersonneByMail(mail: string):Observable<Personne>{
    return new Observable<Personne>(observer=>{
      this.getPersonneByMail(mail).subscribe(personne=>{
        if (personne){
          this.setPersonneConnecte(personne);
          observer.next(personne);
        }else{
          observer.next(null);
        }
      })
    })    
  }

  // Retrouve une personne en fonction de son mail
  getPersonneByMail(mail: string):Observable<Personne>{
    return new Observable<Personne>(observer=>{
      firebase.firestore().collection('personnes').where('mail','==',mail).get().then(snap=>{
        if (!snap.empty){
          let retour = new Personne()
          retour = JSON.parse(JSON.stringify(snap.docs[0].data()))
          retour.idDoc = snap.docs[0].id
          observer.next(retour) 
        }else observer.next(null)
      })
    })
  }

  // Retrouve une personne en fonction de ses nom et prénom
  getPersonneByPrenomAndNom(prenom: string, nom: string):Observable<Personne>{
    return new Observable<Personne>(observer=>{
      let retour = new Personne();
      firebase.firestore().collection('personnes').where('prenom','==',prenom).where('nom','==',nom).get().then(snap=>{
        if (snap){
          retour=JSON.parse(JSON.stringify(snap.docs[0].data()));
          retour.idDoc=snap.docs[0].id
          observer.next(retour);
        }else{
          this.serviceError.afficheErreur('Résultat :','Personne n\'est enregistré avec ces noms et prénoms');
          observer.next(null);
        }
      })
    })
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
      let upload = firebase.storage().ref().child(emplacement).put(fichier);
    })
  }

  // Desactive une personne
  changeActif(personne: Personne):Observable<boolean>{
    return new Observable<boolean>(observer=>{
      firebase.firestore().collection('personnes').doc(personne.idDoc).update(
        JSON.parse(JSON.stringify(personne))
      ).then(()=>{
        observer.next(true)
      })
      .catch(error=>{
        this.serviceError.afficheErreur('Une erreur s\est produite',error)
      })
    })
  }
}
