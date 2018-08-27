import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users.service' 
import { PersonnesService } from '../../services/personnes.service'
import { ErrorHandlerService } from '../../services/error-handler.service'

import { User } from '../../classes/user';
import { Personne } from '../../classes/personne';

import { MatSnackBar, DateAdapter } from '@angular/material'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-ajoute-personne',
  templateUrl: './ajoute-personne.component.html',
  styleUrls: ['./ajoute-personne.component.scss']
})
export class AjoutePersonneComponent implements OnInit {
  
  listeStatus: string[]=['Administrateur', 'Nounou', 'Parent', 'Enfant', 'Tuteur', 'Medecin'];
  nomFichier: string
  fichier   : File
  userForm  : FormGroup;
  isAccess: boolean=false;

  constructor(
    private location       : Location,
    private serviceUsers   : UsersService,
    private servicePersonne: PersonnesService,
    private snackBar       : MatSnackBar,
    private formBuilder    : FormBuilder,
    private serviceErreur  : ErrorHandlerService,
    private adapter        : DateAdapter<any>
  ) { }

  initForm(){
    this.adapter.setLocale('fr-FR');
    this.userForm = this.formBuilder.group({
      nom          : ['', Validators.required],
      prenom       : ['', Validators.required],
      telPortable  : ['', Validators.pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)],
      dateNaissance: ['', Validators.minLength(0)],
      mail         : ['', [Validators.email]],
      adresse      : ['', ],
      accesSite    : false,
      password     : ['']
    })
  }

  validation(){

    let user       = new User();
    let personne   :Personne=new Personne();
    let formulaire = this.userForm.value;    
      
    personne.nom           = formulaire['nom'];
    personne.prenom        = formulaire['prenom'];
    personne.dateNaissance = formulaire['dateNaissance'];
    personne.adresse       = formulaire['adresse'];
    personne.telPortable   = formulaire['telPortable'];
    personne.mail          = formulaire['mail'];
    personne.actif         = true;
    personne.status        = 'Parent';
    this.servicePersonne.registerNewPersonne(personne, this.fichier).subscribe(retour=>{
      if (retour){
        user.urlPhoto=personne.urlPhoto;
        this.serviceUsers.registerNewUser(user).subscribe(retour=>{
          if (retour) this.snackBar.open(`Enregistrement effectué`, 'Fermer', {
            duration: 2500}
          )
        });
      }
      this.snackBar.open('Enregistrement effectué','Fermer', {duration: 2500});
    }); 
  }

  selectionFichier(event){
    this.fichier=event.target.files[0]; 
    this.nomFichier=this.fichier.name;
  }

  changeAcces(){
    this.isAccess=(!this.userForm.value['accesSite']) 
  }

  ngOnInit() {
    this.initForm();
  }
}
