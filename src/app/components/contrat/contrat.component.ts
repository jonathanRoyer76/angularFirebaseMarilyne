import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DonneesContrat } from '../../classes/donneesContrat';
import { Contrat } from '../../classes/contrat';
import { Planning } from '../../classes/planning';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  private userForm: FormGroup;
  donneesContrat: DonneesContrat;

  constructor(
    private formBuilder: FormBuilder) { }

  // Calcule et met à jour le taux oraire brut lors de la saisie du net
  calculTauxHoraireBrut(value){
    this.donneesContrat.contrat.tauxHoraireNet = value
    this.donneesContrat.contrat.tauxHoraireBrut = this.donneesContrat.contrat.tauxHoraireNet*100/77
    this.calculSalaireBaseBrut()
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
  }
  // Calcule la moyenne du nombre d'heures de garde par mois
  calculMoyenneHeuresParMois(){
    this.donneesContrat.contrat.moyNbHeuresGardeMois = (this.donneesContrat.contrat.nbHeuresGardeSemaine * this.donneesContrat.contrat.nbSemainesGardeAn) / 12
    this.userForm.get('moyHeuresParMois').setValue(this.donneesContrat.contrat.moyNbHeuresGardeMois);
  }
  // Calcule la moyenne de jours par mois
  calculMoyenneJoursParMois(){
    this.donneesContrat.contrat.moyNbJoursGardeMois = (this.donneesContrat.contrat.nbSemainesGardeAn*this.donneesContrat.contrat.nbJoursGardeSemaine) / 12
    this.userForm.get('moyJoursParMois').setValue(this.donneesContrat.contrat.moyNbJoursGardeMois);
  }
  // Calcule le salaire net de base
  calculSalaireBaseNet(){
    this.donneesContrat.contrat.salaireBaseNet = (this.donneesContrat.contrat.tauxHoraireNet*this.donneesContrat.contrat.nbSemainesGardeAn*this.donneesContrat.contrat.nbHeuresGardeSemaine)/12    
    this.userForm.get('salaireBaseNet').setValue(this.donneesContrat.contrat.salaireBaseNet);
    this.calculSalaireBaseBrut()
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
    this.calculSalaireTotalBaseNet()
  }
  // Calcule le salaire brut de base
  calculSalaireBaseBrut(){
    this.donneesContrat.contrat.salaireBaseBrut = (this.donneesContrat.contrat.tauxHoraireBrut*this.donneesContrat.contrat.nbSemainesGardeAn*this.donneesContrat.contrat.nbHeuresGardeSemaine)/12  
    console.log(this.userForm.get('salaireBaseBrut').value)
    this.calculCPBaseBrut()
    this.calculCPBaseNet()
    this.calculSalaireTotalBaseBrut()
  }
  // Calcule la base de rémunération des congés payés brut
  calculCPBaseBrut(){
    this.donneesContrat.contrat.congesPayesBaseBrut = (5*this.donneesContrat.contrat.tauxHoraireBrut*this.donneesContrat.contrat.nbHeuresGardeSemaine) / 12    
    this.userForm.get('congesPayesBaseBrut').setValue(this.donneesContrat.contrat.congesPayesBaseBrut);
    this.calculSalaireTotalBaseBrut()
  }
  // Calcule la base de rémunération des congés payés net
  calculCPBaseNet(){
    this.donneesContrat.contrat.congesPayesBaseNet = (5*this.donneesContrat.contrat.tauxHoraireNet*this.donneesContrat.contrat.nbHeuresGardeSemaine) / 12    
    this.userForm.get('congesPayesBaseNet').setValue(this.donneesContrat.contrat.congesPayesBaseNet);
    this.calculSalaireTotalBaseNet()
  }
  // Calcule le total brut du salaire 
  calculSalaireTotalBaseBrut(){
    this.donneesContrat.contrat.salaireTotalBaseBrut = this.donneesContrat.contrat.salaireBaseBrut + this.donneesContrat.contrat.congesPayesBaseBrut
    this.userForm.get('salaireBaseBrut').setValue(this.donneesContrat.contrat.salaireTotalBaseBrut);
  }
  // Calcule le total net du salaire
  calculSalaireTotalBaseNet(){
    this.donneesContrat.contrat.salaireTotalBaseNet = this.donneesContrat.contrat.salaireBaseNet + this.donneesContrat.contrat.congesPayesBaseNet
    this.userForm.get('salaireTotalBaseNet').setValue(this.donneesContrat.contrat.salaireTotalBaseNet);
  }

  envoiContrat(){

  }

  ngOnInit() {
    this.intiForm();
    this.donneesContrat                      = new DonneesContrat()
    this.donneesContrat.contrat              = new Contrat();
    this.donneesContrat.enfant               = new Personne()
    this.donneesContrat.mere                 = new Personne()
    this.donneesContrat.pere                 = new Personne()
    this.donneesContrat.docteur              = new Personne()
    this.donneesContrat.tuteur               = new Personne()   
    this.donneesContrat.planning             = new Planning()
  }

  intiForm(){
    this.userForm= this.formBuilder.group({
      enfantNom: ['', Validators.required],
      enfantPrenom: ['', Validators.required],
      enfantDateNaissance: [''],
      mereNom: ['', Validators.required],
      merePrenom: ['', Validators.required],
      mereMail: [''],
      mereAdresse: [''],
      mereTelPortable: [''],
      pereNom: ['', Validators.required],
      perePrenom: ['', Validators.required],
      pereMail: [''],
      pereAdresse: [''],
      pereTelPortable: [''],
      tuteurNom: [''],
      tuteurPrenom: [''],
      tuteurTelPortable: [''],
      tuteurAdresse: [''],
      medecinNom: [''],
      medecinPrenom: [''],
      medecinTelPortable: [''],
      medecinAdresse: [''],
      moyHeuresParSemaine: [''],
      moySemainesParAn: [''],
      nbJoursParSemaine: [''],
      moyHeuresParMois: [''],
      moyJoursParMois: [''],
      dateDebut: [''],
      dateFin: [''],
      tauxHoraireBrut: [''],
      tauxHoraireNet: [''],
      salaireBaseBrut: [''],
      congesPayesBaseBrut: [''],
      salaireTotalBaseBrut: [''],
      salaireBaseNet: [''],
      congesPayesBaseNet: [''],
      datesalaireTotalBaseNetFin: [''],
      salaireTotalBaseNet: [''],
      montantRepas: [''],
      montantIndemnites: [''],
      montantGouter: [''],
      baremeKm: [''],
      lundiArrivee: [''],
      lundiDepart: [''],
      mardiArrivee: [''],
      mardiDepart: [''],
      mercrediArrivee: [''],
      mercrediDepart: [''],
      jeudiArrivee: [''],
      jeudiDepart: [''],
      vendrediArrivee: [''],
      vendrediDepart: [''],
      samediArrivee: [''],
      samediDepart: [''],
      dimancheArrivee: [''],
      dimancheDepart: [''] 
    })
  }

}
