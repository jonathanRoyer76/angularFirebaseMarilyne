import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DonneesContrat } from '../../classes/donneesContrat';
import { Contrat } from '../../classes/contrat';
import { Planning } from '../../classes/planning';
import { Personne } from '../../classes/personne';
import { ProfilNounouService } from '../../services/profil-nounou.service';
import { profilNounou } from '../../classes/profilNounou';
import { ContratService } from '../../services/contrat.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  private userForm: FormGroup;
  donneesContrat  : DonneesContrat = new DonneesContrat();
  profilNounou    : profilNounou;

  constructor(
    private formBuilder        : FormBuilder,
    private serviceProfilNounou: ProfilNounouService,
    private serviceContrat     : ContratService,
    private router             : Router,
    private snackBar           : MatSnackBar
  ) { }    

  envoiContrat(){
    let formulaire=this.userForm.value;
    // Données enfant
    this.donneesContrat.enfant.nom           = formulaire['enfantNom'];
    this.donneesContrat.enfant.prenom        = formulaire['enfantPrenom'];
    this.donneesContrat.enfant.dateNaissance = formulaire['enfantDateNaissance'];
    this.donneesContrat.enfant.status        = 'Enfant';
    this.donneesContrat.enfant.actif         = 'true';
    this.donneesContrat.enfant.urlPhoto      = 'https: //firebasestorage.googleapis.com/v0/b/marilyne-angular.appspot.com/o/avatars%2Fdefaut-enfant.jpg?alt=media&token=8818f30c-6946-4622-8856-e7ab4887126f';
    // Données mère
    this.donneesContrat.mere.nom         = formulaire['mereNom'];
    this.donneesContrat.mere.prenom      = formulaire['merePrenom'];
    this.donneesContrat.mere.mail        = formulaire['mereMail'];
    this.donneesContrat.mere.adresse     = formulaire['mereAdresse'];
    this.donneesContrat.mere.telPortable = formulaire['mereTelPortable'];
    this.donneesContrat.mere.actif       = 'true';
    this.donneesContrat.mere.status      = 'Parent';
    this.donneesContrat.mere.urlPhoto    = 'https: //firebasestorage.googleapis.com/v0/b/marilyne-angular.appspot.com/o/avatars%2Fdefaut-femme.svg?alt=media&token=11a82e9c-3aa7-45e2-a937-9fcfb51ba923';
    // Données père
    this.donneesContrat.pere.nom         = formulaire['pereNom'];
    this.donneesContrat.pere.prenom      = formulaire['perePrenom'];
    this.donneesContrat.pere.mail        = formulaire['pereMail'];
    this.donneesContrat.pere.adresse     = formulaire['pereAdresse'];
    this.donneesContrat.pere.telPortable = formulaire['pereTelPortable'];
    this.donneesContrat.pere.actif       = 'true';
    this.donneesContrat.pere.status      = 'Parent';
    this.donneesContrat.pere.urlPhoto    = 'https: //firebasestorage.googleapis.com/v0/b/marilyne-angular.appspot.com/o/avatars%2Fdefaut-homme.svg?alt=media&token=a5d989cd-fae6-404c-a5ec-9ca4293a0786';
    // Données tuteur
    this.donneesContrat.tuteur.nom         = formulaire['tuteurNom'];
    this.donneesContrat.tuteur.prenom      = formulaire['tuteurPrenom'];
    this.donneesContrat.tuteur.telPortable = formulaire['tuteurTelPortable'];
    this.donneesContrat.tuteur.adresse     = formulaire['pereAdresse'];
    this.donneesContrat.tuteur.actif       = 'true';
    this.donneesContrat.tuteur.status      = 'Tuteur';
    this.donneesContrat.tuteur.urlPhoto    = 'https: //firebasestorage.googleapis.com/v0/b/marilyne-angular.appspot.com/o/avatars%2Fdefaut-homme.svg?alt=media&token=a5d989cd-fae6-404c-a5ec-9ca4293a0786';
    // Données medecin
    this.donneesContrat.docteur.nom         = formulaire['medecinNom'];
    this.donneesContrat.docteur.prenom      = formulaire['medecinPrenom'];
    this.donneesContrat.docteur.telPortable = formulaire['medecinTelPortable'];
    this.donneesContrat.docteur.adresse     = formulaire['medecinAdresse'];
    this.donneesContrat.docteur.actif       = 'true';
    this.donneesContrat.docteur.status      = 'Medecin';
    this.donneesContrat.docteur.urlPhoto    = 'https: //firebasestorage.googleapis.com/v0/b/marilyne-angular.appspot.com/o/avatars%2Fdefaut-medecin.jpg?alt=media&token=912889cf-ee89-431e-8492-81e98975e23f';
    // Données contrat déjà remplies
    // Données planning
    this.donneesContrat.planning.lundi.heureArrivee    = formulaire['lundiArrivee']
    this.donneesContrat.planning.lundi.heureDepart     = formulaire['lundiDepart']
    this.donneesContrat.planning.mardi.heureArrivee    = formulaire['mardiArrivee']    
    this.donneesContrat.planning.mardi.heureDepart     = formulaire['mardiDepart']
    this.donneesContrat.planning.mercredi.heureArrivee = formulaire['mercrediArrivee']
    this.donneesContrat.planning.mercredi.heureDepart  = formulaire['mercrediDepart']
    this.donneesContrat.planning.jeudi.heureArrivee    = formulaire['jeudiArrivee']
    this.donneesContrat.planning.jeudi.heureDepart     = formulaire['jeudiDepart']
    this.donneesContrat.planning.vendredi.heureArrivee = formulaire['vendrediArrivee']
    this.donneesContrat.planning.vendredi.heureDepart  = formulaire['vendrediDepart']
    this.donneesContrat.planning.samedi.heureArrivee   = formulaire['samediArrivee']
    this.donneesContrat.planning.samedi.heureDepart    = formulaire['samediDepart']
    this.donneesContrat.planning.dimanche.heureArrivee = formulaire['dimancheArrivee']
    this.donneesContrat.planning.dimanche.heureDepart  = formulaire['dimancheDepart'] 
    //Appeler la méthode du service   
    this.serviceContrat.registerNewContrat(this.donneesContrat).subscribe(retour=>{
      if (retour){
        this.snackBar.open('Enregistrement effectué', 'Fermer', {
          duration: 2500}
        )
      }
    }); 
  }
  
  ngOnInit() {
    this.initForm();
    this.getProfilNounou();     
    this.donneesContrat          = new DonneesContrat();
    this.donneesContrat.contrat  = new Contrat();
    this.donneesContrat.enfant   = new Personne();
    this.donneesContrat.mere     = new Personne();
    this.donneesContrat.pere     = new Personne();
    this.donneesContrat.docteur  = new Personne();
    this.donneesContrat.tuteur   = new Personne();   
    this.donneesContrat.planning = new Planning();
    this.userForm.get('nbHeuresGardeSemaine').valueChanges.subscribe(valeur => {this.donneesContrat.contrat.nbHeuresGardeSemaine = valeur});
    this.userForm.get('nbSemainesGardeAn').valueChanges.subscribe(valeur    => {this.donneesContrat.contrat.nbSemainesGardeAn    = valeur});
    this.userForm.get('nbJoursGardeSemaine').valueChanges.subscribe(valeur  => {this.donneesContrat.contrat.nbJoursGardeSemaine  = valeur});
    this.userForm.get('moyNbHeuresGardeMois').valueChanges.subscribe(valeur => {this.donneesContrat.contrat.moyNbHeuresGardeMois = valeur});
    this.userForm.get('moyNbJoursGardeMois').valueChanges.subscribe(valeur  => {this.donneesContrat.contrat.moyNbJoursGardeMois  = valeur});
    this.userForm.get('tauxHoraireBrut').valueChanges.subscribe(valeur      => {this.donneesContrat.contrat.tauxHoraireBrut      = valeur});
    this.userForm.get('tauxHoraireNet').valueChanges.subscribe(valeur       => {this.donneesContrat.contrat.tauxHoraireNet       = valeur});
    this.userForm.get('salaireBaseBrut').valueChanges.subscribe(valeur      => {this.donneesContrat.contrat.salaireBaseBrut      = valeur});
    this.userForm.get('congesPayesBaseBrut').valueChanges.subscribe(valeur  => {this.donneesContrat.contrat.congesPayesBaseBrut  = valeur});
    this.userForm.get('salaireTotalBaseBrut').valueChanges.subscribe(valeur => {this.donneesContrat.contrat.salaireTotalBaseBrut = valeur});
    this.userForm.get('salaireBaseNet').valueChanges.subscribe(valeur       => {this.donneesContrat.contrat.salaireBaseNet       = valeur});
    this.userForm.get('congesPayesBaseNet').valueChanges.subscribe(valeur   => {this.donneesContrat.contrat.congesPayesBaseNet   = valeur});
    this.userForm.get('salaireTotalBaseNet').valueChanges.subscribe(valeur  => {this.donneesContrat.contrat.salaireTotalBaseNet  = valeur});
    this.userForm.get('montantRepas').valueChanges.subscribe(valeur         => {this.donneesContrat.contrat.montantRepas         = valeur});
    this.userForm.get('montantIndemnites').valueChanges.subscribe(valeur    => {this.donneesContrat.contrat.montantIndemnites    = valeur});
    this.userForm.get('montantGouter').valueChanges.subscribe(valeur        => {this.donneesContrat.contrat.montantGouter        = valeur});
    this.userForm.get('baremeKm').valueChanges.subscribe(valeur             => {this.donneesContrat.contrat.baremeKm             = valeur});
  }

  initForm(){
    this.userForm= this.formBuilder.group({
      enfantNom                 : ['', Validators.required],
      enfantPrenom              : ['', Validators.required],
      enfantDateNaissance       : [''],
      mereNom                   : ['', Validators.required],
      merePrenom                : ['', Validators.required],
      mereMail                  : [''],
      mereAdresse               : [''],
      mereTelPortable           : [''],
      pereNom                   : ['', Validators.required],
      perePrenom                : ['', Validators.required],
      pereMail                  : [''],
      pereAdresse               : [''],
      pereTelPortable           : [''],
      tuteurNom                 : [''],
      tuteurPrenom              : [''],
      tuteurTelPortable         : [''],
      tuteurAdresse             : [''],
      medecinNom                : [''],
      medecinPrenom             : [''],
      medecinTelPortable        : [''],
      medecinAdresse            : [''],
      nbHeuresGardeSemaine      : [''],
      nbSemainesGardeAn         : [''],
      nbJoursGardeSemaine       : [''],
      moyNbHeuresGardeMois      : [''],
      moyNbJoursGardeMois       : [''],
      dateDebut                 : [''],
      dateFin                   : [''],
      tauxHoraireBrut           : [''],
      tauxHoraireNet            : [''],
      salaireBaseBrut           : [''],
      congesPayesBaseBrut       : [''],
      salaireTotalBaseBrut      : [''],
      salaireBaseNet            : [''],
      congesPayesBaseNet        : [''],
      datesalaireTotalBaseNetFin: [''],
      salaireTotalBaseNet       : [''],
      montantRepas              : [''],
      montantIndemnites         : [''],
      montantGouter             : [''],
      baremeKm                  : [''],
      lundiArrivee              : [''],
      lundiDepart               : [''],
      mardiArrivee              : [''],
      mardiDepart               : [''],
      mercrediArrivee           : [''],
      mercrediDepart            : [''],
      jeudiArrivee              : [''],
      jeudiDepart               : [''],
      vendrediArrivee           : [''],
      vendrediDepart            : [''],
      samediArrivee             : [''],
      samediDepart              : [''],
      dimancheArrivee           : [''],
      dimancheDepart            : [''] 
    })
  }

  getProfilNounou(){
    this.serviceProfilNounou.getProfilFromServer().subscribe(profil=>{
      if (profil){
        this.userForm.get('montantRepas').setValue(profil.montantRepas);
        this.userForm.get('montantIndemnites').setValue(profil.montantIndemnites);
        this.userForm.get('montantGouter').setValue(profil.montantGouters);
        this.userForm.get('baremeKm').setValue(profil.baremeKm);
        this.userForm.get('tauxHoraireNet').setValue(profil.tauxHoraire);
      }
    })
  }

  // Convertit l'objet retourné par le service pour l'affichage dans le service
  mapObjetContratVersFormulaire(pContrat: Contrat){
    this.userForm.get('baremeKm').setValue(Number(pContrat.baremeKm).toFixed(2));
    this.userForm.get('congesPayesBaseBrut').setValue(Number(pContrat.congesPayesBaseBrut).toFixed(2));
    this.userForm.get('congesPayesBaseNet').setValue(Number(pContrat.congesPayesBaseNet).toFixed(2));
    this.userForm.get('montantGouter').setValue(Number(pContrat.montantGouter).toFixed(2));
    this.userForm.get('montantIndemnites').setValue(Number(pContrat.montantIndemnites).toFixed(2));
    this.userForm.get('montantRepas').setValue(Number(pContrat.montantRepas).toFixed(2));
    this.userForm.get('moyNbHeuresGardeMois').setValue(Number(pContrat.moyNbHeuresGardeMois).toFixed(2));
    this.userForm.get('moyNbJoursGardeMois').setValue(Number(pContrat.moyNbJoursGardeMois).toFixed(2));
    this.userForm.get('nbHeuresGardeSemaine').setValue(pContrat.nbHeuresGardeSemaine);
    this.userForm.get('nbJoursGardeSemaine').setValue(pContrat.nbJoursGardeSemaine);
    this.userForm.get('nbSemainesGardeAn').setValue(pContrat.nbSemainesGardeAn);
    this.userForm.get('salaireBaseBrut').setValue(Number(pContrat.salaireBaseBrut).toFixed(2));
    this.userForm.get('salaireBaseNet').setValue(Number(pContrat.salaireBaseNet).toFixed(2));
    this.userForm.get('salaireTotalBaseBrut').setValue(Number(pContrat.salaireTotalBaseBrut).toFixed(2));
    this.userForm.get('salaireTotalBaseNet').setValue(Number(pContrat.salaireTotalBaseNet).toFixed(2));
    this.userForm.get('tauxHoraireBrut').setValue(Number(pContrat.tauxHoraireBrut).toFixed(2));
    this.userForm.get('tauxHoraireNet').setValue(Number(pContrat.tauxHoraireNet).toFixed(2)); 
  }

  // Convertit les données présentes dans le formulaire dans un objet pour travail dans le service
  mapValeursFormulaireVersObjetContrat(): Contrat{
    console.log(parseFloat(this.userForm.get('congesPayesBaseBrut').value))
    let retour: Contrat=new Contrat();

    retour.baremeKm             = parseFloat(this.userForm.get('baremeKm').value);
    retour.congesPayesBaseBrut  = parseFloat(this.userForm.get('congesPayesBaseBrut').value);
    retour.congesPayesBaseNet   = parseFloat(this.userForm.get('congesPayesBaseNet').value);
    retour.montantGouter        = parseFloat(this.userForm.get('montantGouter').value);
    retour.montantIndemnites    = parseFloat(this.userForm.get('montantIndemnites').value);
    retour.montantRepas         = parseFloat(this.userForm.get('montantRepas').value);
    retour.moyNbHeuresGardeMois = parseFloat(this.userForm.get('moyNbHeuresGardeMois').value);
    retour.moyNbJoursGardeMois  = parseFloat(this.userForm.get('moyNbJoursGardeMois').value);
    retour.nbHeuresGardeSemaine = parseFloat(this.userForm.get('nbHeuresGardeSemaine').value);
    retour.nbJoursGardeSemaine  = parseFloat(this.userForm.get('nbJoursGardeSemaine').value);
    retour.nbSemainesGardeAn    = parseFloat(this.userForm.get('nbSemainesGardeAn').value);
    retour.salaireBaseBrut      = parseFloat(this.userForm.get('salaireBaseBrut').value);
    retour.salaireBaseNet       = parseFloat(this.userForm.get('salaireBaseNet').value);
    retour.salaireTotalBaseBrut = parseFloat(this.userForm.get('salaireTotalBaseBrut').value);
    retour.salaireTotalBaseNet  = parseFloat(this.userForm.get('salaireTotalBaseNet').value);
    retour.tauxHoraireBrut      = parseFloat(this.userForm.get('tauxHoraireBrut').value);
    retour.tauxHoraireNet       = parseFloat(this.userForm.get('tauxHoraireNet').value); 

    return retour; 
  }


  majNbHeuresGardeSemaine(){
    this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(retour=>{
      if (retour) this.mapObjetContratVersFormulaire(retour);
    })
  }

  majNbSemainesGardeAn(){
    this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(retour=>{
      if (retour) this.mapObjetContratVersFormulaire(retour);
    })
  }

  majNbJoursGardeSemaine(){
    this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(retour=>{
      if (retour) this.mapObjetContratVersFormulaire(retour);
    })
  }

  majTauxHoraireNet(){
    this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(retour=>{
      if (retour) this.mapObjetContratVersFormulaire(retour);
    })
  }

  // test(){
  //   console.log(this.userForm.get('enfantNom').value)
  // }
}
