import { Injectable } from '@angular/core';
import {  } from '../../'
import { Observable } from 'rxjs';
import { Contrat } from '../classes/contrat';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrat : Contrat = new Contrat();

  constructor(
    private serviceErreurs: ErrorHandlerService
  ) { }

  // Ajoute un contrat
  registerNewContrat():Observable<boolean>{
    return new Observable<boolean>(observer=>{});
  }

  // Modifie un contrat
  updateContrat():Observable<boolean>{
    return new Observable<boolean>(observer=>{});
  }

  // Supprime un contrat
  deleteContrat():Observable<boolean>{
    return new Observable<boolean>(observer=>{});
  }

  // cherche un contrat suivant le nom de l'enfant
  getContratByNomEnfant(nomEnfantt: string):Observable<boolean>{
    return new Observable<boolean>(observer=>{});
  }

  // Calcule et met à jour le taux oraire brut lors de la saisie du net
  calculTauxHoraireBrut(){
    this.contrat.tauxHoraireBrut = this.contrat.tauxHoraireNet*100/77
    // this.calculSalaireBaseBrut()
    // this.calculCPBaseBrut()
    // this.calculCPBaseNet()
  }

  // Calcule la moyenne du nombre d'heures de garde par mois
  calculMoyenneHeuresParMois(){
    this.contrat.moyNbHeuresGardeMois = (this.contrat.nbHeuresGardeSemaine * this.contrat.nbSemainesGardeAn) / 12
  }

  // Calcule la moyenne de jours par mois
  calculMoyenneJoursParMois(){
    this.contrat.moyNbJoursGardeMois = (this.contrat.nbSemainesGardeAn*this.contrat.nbJoursGardeSemaine) / 12
  }

  // Calcule le salaire net de base
  calculSalaireBaseNet(){
    this.contrat.salaireBaseNet = (this.contrat.tauxHoraireNet*this.contrat.nbSemainesGardeAn*this.contrat.nbHeuresGardeSemaine)/12    
    // this.calculSalaireBaseBrut()
    // this.calculCPBaseBrut()
    // this.calculCPBaseNet()
    // this.calculSalaireTotalBaseNet()
  }

  // Calcule le salaire brut de base
  calculSalaireBaseBrut(){
    this.contrat.salaireBaseBrut = (this.contrat.tauxHoraireBrut*this.contrat.nbSemainesGardeAn*this.contrat.nbHeuresGardeSemaine)/12  
    // this.calculCPBaseBrut()
    // this.calculCPBaseNet()
    // this.calculSalaireTotalBaseBrut()
  }

  // Calcule la base de rémunération des congés payés brut
  calculCPBaseBrut(){
    this.contrat.congesPayesBaseBrut = (5*this.contrat.tauxHoraireBrut*this.contrat.nbHeuresGardeSemaine) / 12    
    // this.calculSalaireTotalBaseBrut()
  }

  // Calcule la base de rémunération des congés payés net
  calculCPBaseNet(){
    this.contrat.congesPayesBaseNet = (5*this.contrat.tauxHoraireNet*this.contrat.nbHeuresGardeSemaine) / 12    
    // this.calculSalaireTotalBaseNet()
  }

  // Calcule le total brut du salaire 
  calculSalaireTotalBaseBrut(){
    this.contrat.salaireTotalBaseBrut = this.contrat.salaireBaseBrut + this.contrat.congesPayesBaseBrut
  }

  // Calcule le total net du salaire
  calculSalaireTotalBaseNet(){
    this.contrat.salaireTotalBaseNet = this.contrat.salaireBaseNet + this.contrat.congesPayesBaseNet
  }

  // MAJ du contrat et calculs
  majContratCalculMontants(pContrat: Contrat):Observable<Contrat>{
    return new Observable<Contrat>(observer=>{
      if (pContrat){
        this.calculTauxHoraireBrut();
        this.calculMoyenneHeuresParMois();
        this.calculMoyenneJoursParMois();
        this.calculSalaireBaseNet();
        this.calculSalaireBaseBrut();
        this.calculCPBaseBrut();
        this.calculCPBaseNet();
        this.calculSalaireTotalBaseBrut();
        this.calculSalaireTotalBaseNet();
        observer.next(this.contrat);
      }else{
        this.serviceErreurs.afficheErreur('Erreur', 'le contrat passé est vide ou absent');
        observer.next(null);
      }
    })
  }
}