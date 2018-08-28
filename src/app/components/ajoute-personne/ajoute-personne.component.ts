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
  
  listeStatus   : string[] = ['Administrateur', 'Nounou', 'Parent', 'Enfant', 'Tuteur', 'Medecin'];
  nomFichier    : string
  fichier       : File
  userForm      : FormGroup;
  isAccess      : boolean  = false;
  defautHomme   = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-homme.png?alt=media&token=9a9fc729-52ee-4be1-af69-3ad4b1ee9c22'
  defautFemme   = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-femme.png?alt=media&token=42d68cc1-1e62-4ddd-a57d-cd5f2ca428ea'
  defautEnfant  = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-enfant.png?alt=media&token=db7a591b-3eb3-4973-9a63-a283de87dc69'
  defautMedecin = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-medecin.png?alt=media&token=74076e51-de2b-410d-95cc-39d013bacb02'
  avatar        = 'defautHomme'

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
      password     : [''],
    })
  }

  validation(){
    
    let personne   :Personne=new Personne();
    let formulaire = this.userForm.value;    
    
    personne.nom           = formulaire['nom'];
    personne.prenom        = formulaire['prenom'];
    personne.idDoc         = personne.nom+'_'+personne.prenom;
    personne.dateNaissance = formulaire['dateNaissance'];
    personne.adresse       = formulaire['adresse'];
    personne.telPortable   = formulaire['telPortable'];
    personne.mail          = formulaire['mail'];
    personne.actif         = true;
    personne.status        = 'Parent';
    if (!this.fichier){
      switch(this.avatar){
        case 'defautHomme':
        personne.urlPhoto=this.defautHomme
        break;
        case 'defautFemme':
        personne.urlPhoto=this.defautFemme
        break;
        case 'defautEnfant':
        personne.urlPhoto=this.defautEnfant
        break;
        case 'defautMedecin':
        personne.urlPhoto=this.defautMedecin
        break;
        default:
        personne.urlPhoto=this.defautHomme
        break;
      }
    } 
    this.servicePersonne.registerNewPersonne(personne, this.fichier).subscribe(retour=>{
      if (retour){
        if (this.isAccess && formulaire['mail']!="" && !this.userForm.controls['mail'].errors && formulaire['password']!=""){
          
          let user      = new User();
          user.email=formulaire['mail'];
          user.mdp=formulaire['password'];
          user.urlPhoto = personne.urlPhoto;
          this.serviceUsers.registerNewUser(user).subscribe(retour=>{
            if (retour) this.snackBar.open(`Enregistrement effectué`, 'Fermer', {
              duration: 2500}
            )
          });
        }
      }
      this.snackBar.open('Enregistrement effectué','Fermer', {duration: 2500}); 
    });
  }

  selectionFichier(event){
    this.fichier=event.target.files[0]; 
    this.nomFichier=this.fichier.name;
  }

  changeAcces(){
    this.isAccess=(this.userForm.value['accesSite'])
    if (this.isAccess) this.userForm.controls['password'].enable()
    else this.userForm.controls['password'].disable()
  }

  ngOnInit() {
    this.initForm();
    this.userForm.controls['password'].disable()
  }
}
