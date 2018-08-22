import { Injectable } from '@angular/core';
import { profilNounou } from '../classes/profilNounou';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilNounouService {

  private profil: profilNounou

  constructor(private serviceErreurs: ErrorHandlerService) { }

  // Définit le profil 
  setProfilNounou(profil: profilNounou):Observable<boolean>{
    return new Observable<boolean>(observer=>{
      firebase.firestore().collection('nounou').doc('profil').set({
        tauxHoraire      : profil.tauxHoraire,
        montantRepas     : profil.montantRepas,
        montantIndemnites: profil.montantIndemnites,
        montantGouter    : profil.montantGouters,
        baremeKm         : profil.baremeKm
      }).then(()=>{
        observer.next(true);
      },
      (error)=>{
        this.serviceErreurs.afficheErreur('Erreur dans l\'enregistrement du profil nounou', error);
        observer.next(false);
      })
    })
  }

  // Récupère le profil
  getProfilFromServer():Observable<profilNounou>{
    return new Observable<profilNounou>(observer=>{
      firebase.firestore().collection('nounou').doc('profil').get().then(snap=>{
        if (snap){
          let retour = new profilNounou();
          retour.baremeKm=snap.data()['baremeKm'];
          retour.montantGouters=snap.data()['montantGouter'];
          retour.montantIndemnites=snap.data()['montantIndemnites'];
          retour.montantRepas=snap.data()['montantRepas'];
          retour.tauxHoraire=snap.data()['tauxHoraire'];
          observer.next(retour); 
        }else{
          this.serviceErreurs.afficheErreur('Le profil n\'est pas renseigné','Remplissez le profil en premier lieu');          
          observer.next(null);
        }
      },
      error=>{
        this.serviceErreurs.afficheErreur('Une erreur s\'est produite lors de la récupération du profil',error);
        observer.next(null); 
      })
    })
  }
}
