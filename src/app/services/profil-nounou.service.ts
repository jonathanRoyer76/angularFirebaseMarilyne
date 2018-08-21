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
}
