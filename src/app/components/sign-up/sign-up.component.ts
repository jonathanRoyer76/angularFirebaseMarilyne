import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users.service' 
import { PersonnesService } from '../../services/personnes.service'
import { ErrorHandlerService } from '../../services/error-handler.service'

import { User } from '../../classes/user';
import { Personne } from '../../classes/personne';

import { MatSnackBar, DateAdapter } from '@angular/material'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  fichier   : File
  userForm  : FormGroup;
  nomFichier: string;

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
      nom           : ['', Validators.required],
      prenom         : ['', Validators.required],
      password       : ['', Validators.required],
      confirmPassword: ['', Validators.required],
      telPortable    : ['', Validators.pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)],
      dateNaissance  : ['', Validators.minLength(0)],
      mail           : ['', [Validators.required, Validators.email]],
      adresse        : ['', ]
    })
  }

  validation(){

    let user       = new User();
    let personne   :Personne=new Personne();
    let formulaire = this.userForm.value;    
    
    if (formulaire['password'] == formulaire['confirmPassword']){
      user.email    = formulaire['mail'];
      user.mdp      = formulaire['password'];    
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
    }else{
      this.serviceErreur.afficheErreur('Erreur de saisie :','Les mots de passe sont différents')
    }
  }

  selectionFichier(event){
    this.fichier=event.target.files[0];   
    this.nomFichier=event.target.value  
  }

  ngOnInit() {
    this.initForm();
  }
}
