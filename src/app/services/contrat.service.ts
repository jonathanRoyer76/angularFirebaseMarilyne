import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../classes/contrat';
import { ErrorHandlerService } from './error-handler.service';
import * as firebase from 'firebase'
import { DonneesContrat } from '../classes/donneesContrat';
import { PersonnesService } from './personnes.service';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrat : Contrat = new Contrat();

  constructor(
    private serviceErreurs : ErrorHandlerService,
    private servicePersonne: PersonnesService
  ) { }

  // Ajoute un contrat
  registerNewContrat(pDonneesContrat: DonneesContrat):Observable<boolean>{    
    return new Observable<boolean>(observer=>{
      firebase.firestore().collection('contrats').doc(pDonneesContrat.enfant.nom+'_'+pDonneesContrat.enfant.prenom).set(
        JSON.parse(JSON.stringify(pDonneesContrat))
      ).then(()=>{
        this.servicePersonne.checkAndAddPersonne(pDonneesContrat.docteur);
        this.servicePersonne.checkAndAddPersonne(pDonneesContrat.mere);
        this.servicePersonne.checkAndAddPersonne(pDonneesContrat.pere);
        this.servicePersonne.checkAndAddPersonne(pDonneesContrat.tuteur);
        this.servicePersonne.checkAndAddPersonne(pDonneesContrat.enfant);
        observer.next(true); 
      },(error)=>{
        observer.next(false); 
      })
    });
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
  getContratByNomPrenomEnfant(nomEnfant: string):Observable<boolean>{
    return new Observable<boolean>(observer=>{});
  }

  // Récupère la liste des contrats
  getListeContrats(): Observable<DonneesContrat[]>{    
    return new Observable<DonneesContrat[]>(observer=>{
      let retour =[];
      firebase.firestore().collection('contrats').get().then(bdd=>{
        if (bdd){
          bdd.docs.forEach(temp=>{
            retour.push(JSON.parse(JSON.stringify(temp.data()))) 
          })
        }else console.log('retour vide')
      })
      observer.next(retour)
    })
  }
  // Calcule et met à jour le taux oraire brut lors de la saisie du net
  private calculTauxHoraireBrut(){
    this.contrat.tauxHoraireBrut = this.contrat.tauxHoraireNet*100/77
    this.calculSalaireBaseBrut()
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
  }

  // Calcule la moyenne du nombre d'heures de garde par mois
  private calculMoyenneHeuresParMois(){
    this.contrat.moyNbHeuresGardeMois = (this.contrat.nbHeuresGardeSemaine * this.contrat.nbSemainesGardeAn) / 12
  }

  // Calcule la moyenne de jours par mois
  private calculMoyenneJoursParMois(){
    this.contrat.moyNbJoursGardeMois = (this.contrat.nbSemainesGardeAn*this.contrat.nbJoursGardeSemaine) / 12
  }

  // Calcule le salaire net de base
  private calculSalaireBaseNet(){
    this.contrat.salaireBaseNet = (this.contrat.tauxHoraireNet*this.contrat.nbSemainesGardeAn*this.contrat.nbHeuresGardeSemaine)/12    
    this.calculSalaireBaseBrut()
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
    this.calculSalaireTotalBaseNet()
  }

  // Calcule le salaire brut de base
  private calculSalaireBaseBrut(){
    this.contrat.salaireBaseBrut = (this.contrat.tauxHoraireBrut*this.contrat.nbSemainesGardeAn*this.contrat.nbHeuresGardeSemaine)/12  
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
    this.calculSalaireTotalBaseBrut()
  }

  // Calcule la base de rémunération des congés payés brut
  private calculCPBaseBrut(){
    this.contrat.congesPayesBaseBrut = (5*this.contrat.tauxHoraireBrut*this.contrat.nbHeuresGardeSemaine) / 12    
    this.calculSalaireTotalBaseBrut()
  }

  // Calcule la base de rémunération des congés payés net
  private calculCPBaseNet(){
    this.contrat.congesPayesBaseNet = (5*this.contrat.tauxHoraireNet*this.contrat.nbHeuresGardeSemaine) / 12    
    this.calculSalaireTotalBaseNet()
  }

  // Calcule le total brut du salaire 
  private calculSalaireTotalBaseBrut(){
    this.contrat.salaireTotalBaseBrut = this.contrat.salaireBaseBrut + this.contrat.congesPayesBaseBrut
  }

  // Calcule le total net du salaire
  private calculSalaireTotalBaseNet(){
    this.contrat.salaireTotalBaseNet = this.contrat.salaireBaseNet + this.contrat.congesPayesBaseNet
  }

  // MAJ du contrat et calculs
  majContratCalculMontants(pContrat: Contrat):Observable<Contrat>{
    return new Observable<Contrat>(observer=>{
      if (pContrat){
        this.contrat=pContrat;
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