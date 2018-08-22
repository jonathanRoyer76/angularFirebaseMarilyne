import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DonneesContrat } from '../../classes/donneesContrat';
import { Contrat } from '../../classes/contrat';
import { Planning } from '../../classes/planning';
import { Personne } from '../../classes/personne';
import { ProfilNounouService } from '../../services/profil-nounou.service';
import { profilNounou } from '../../classes/profilNounou';
import { ContratService } from '../../services/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  private userForm: FormGroup;
  donneesContrat  : DonneesContrat;
  profilNounou    : profilNounou;

  constructor(
    private formBuilder        : FormBuilder,
    private serviceProfilNounou: ProfilNounouService,
    private serviceContrat     : ContratService
  ) { }    

  envoiContrat(){
    let formulaire=this.userForm.value;
    this.donneesContrat.enfant.nom=formulaire['enfantNom'];
    //Finir le remplissage et appeler la méthode du service
  }

  ngOnInit() {
    this.intiForm();
    this.getProfilNounou(); 
    this.userForm.get('tauxHoraireBrut').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){   
          this.mapObjetContratVersFormulaire(retour);                   
        }
      })            
    })
    this.userForm.get('moyHeuresParSemaine').valueChanges.subscribe(valeur=>{ 
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })           
    })
    this.userForm.get('moySemainesParAn').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })            
    })
    this.userForm.get('nbJoursParSemaine').valueChanges.subscribe(valeur=>{ 
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })           
    })
    this.userForm.get('moyHeuresParMois').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){   
          this.mapObjetContratVersFormulaire(retour);                   
        }
      })            
    })
    this.userForm.get('moyJoursParMois').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })            
    })
    this.userForm.get('tauxHoraireNet').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })            
    })
    this.userForm.get('salaireBaseBrut').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })            
    })
    this.userForm.get('congesPayesBaseBrut').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){   
          this.mapObjetContratVersFormulaire(retour);                   
        }
      })
           
    })
    this.userForm.get('salaireTotalBaseBrut').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants (this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })          
    })
    this.userForm.get('salaireBaseNet').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){   
          this.mapObjetContratVersFormulaire(retour);                  
        }
      })           
    })
    this.userForm.get('congesPayesBaseNet').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                    
        }
      })           
    })
    this.userForm.get('salaireTotalBaseNet').valueChanges.subscribe(valeur=>{
      this.serviceContrat.majContratCalculMontants(this.mapValeursFormulaireVersObjetContrat()).subscribe(retour=>{
        if (retour){  
          this.mapObjetContratVersFormulaire(retour);                
        }
      })           
    })
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
    this.userForm.get('baremeKm').setValue(pContrat.baremeKm);
    this.userForm.get('congesPayesBaseBrut').setValue(pContrat.congesPayesBaseBrut);
    this.userForm.get('congesPayesBaseNet').setValue(pContrat.congesPayesBaseNet);
    this.userForm.get('montantGouter').setValue(pContrat.montantGouter);
    this.userForm.get('montantIndemnites').setValue(pContrat.montantIndemnites);
    this.userForm.get('montantRepas').setValue(pContrat.montantRepas);
    this.userForm.get('moyHeuresParMois').setValue(pContrat.moyNbHeuresGardeMois);
    this.userForm.get('moyJoursParMois').setValue(pContrat.moyNbJoursGardeMois);
    this.userForm.get('moyHeuresParSemaine').setValue(pContrat.nbHeuresGardeSemaine);
    this.userForm.get('nbJoursParSemaine').setValue(pContrat.nbJoursGardeSemaine);
    this.userForm.get('moySemainesParAn').setValue(pContrat.nbSemainesGardeAn);
    this.userForm.get('salaireBaseBrut').setValue(pContrat.salaireBaseBrut);
    this.userForm.get('salaireBaseNet').setValue(pContrat.salaireBaseNet);
    this.userForm.get('salaireTotalBaseBrut').setValue(pContrat.salaireTotalBaseBrut);
    this.userForm.get('salaireTotalBaseNet').setValue(pContrat.salaireTotalBaseNet);
    this.userForm.get('tauxHoraireBrut').setValue(pContrat.tauxHoraireBrut);
    this.userForm.get('tauxHoraireNet').setValue(pContrat.tauxHoraireNet);
  }

  // Convertit les données présentes dans le formulaire dans un objet pour travail dans le service
  mapValeursFormulaireVersObjetContrat(): Contrat{
    let retour: Contrat=new Contrat();

    retour.baremeKm             = this.userForm.get('baremeKm').value;
    retour.congesPayesBaseBrut  = this.userForm.get('congesPayesBaseBrut').value;
    retour.congesPayesBaseNet   = this.userForm.get('congesPayesBaseNet').value;
    retour.montantGouter        = this.userForm.get('montantGouter').value;
    retour.montantIndemnites    = this.userForm.get('montantIndemnites').value;
    retour.montantRepas         = this.userForm.get('montantRepas').value;
    retour.moyNbHeuresGardeMois = this.userForm.get('moyHeuresParMois').value;
    retour.moyNbJoursGardeMois  = this.userForm.get('moyJoursParMois').value;
    retour.nbHeuresGardeSemaine = this.userForm.get('moyHeuresParSemaine').value;
    retour.nbJoursGardeSemaine  = this.userForm.get('nbJoursParSemaine').value;
    retour.nbSemainesGardeAn    = this.userForm.get('moySemainesParAn').value;
    retour.salaireBaseBrut      = this.userForm.get('salaireBaseBrut').value;
    retour.salaireBaseNet       = this.userForm.get('salaireBaseNet').value;
    retour.salaireTotalBaseBrut = this.userForm.get('salaireTotalBaseBrut').value;
    retour.salaireTotalBaseNet  = this.userForm.get('salaireTotalBaseNet').value;
    retour.tauxHoraireBrut      = this.userForm.get('tauxHoraireBrut').value;
    retour.tauxHoraireNet       = this.userForm.get('tauxHoraireNet').value;

    return retour;
  }

  test(){
    console.log(this.userForm.get('enfantNom').value)
  }
}
