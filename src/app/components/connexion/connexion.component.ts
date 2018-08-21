import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../classes/user';
import { Personne } from '../../classes/personne';

import { UsersService } from '../../services/users.service' 
import { PersonnesService } from '../../services/personnes.service'
import { ErrorHandlerService, modalErrorHandler } from '../../services/error-handler.service'

import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector   : 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls  : ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  user                : User = new User();
  personne            : Personne = new Personne();
  souscriptionUser    : Subscription;
  souscriptionPersonne: Subscription;
  userForm            : FormGroup;

  constructor(
    private serviceUsers   : UsersService,
    private servicePersonne: PersonnesService,
    private snackBar       : MatSnackBar,
    private formBuilder    : FormBuilder,
    private serviceErreur  : ErrorHandlerService
  ) { }

  connexion(){
    //lors du clic sur le bouton connexion dans le formulaire
    const formulaire = this.userForm.value;
    let userTemp = new User();
    userTemp.email=formulaire['email'];
    userTemp.mdp = formulaire['mdp'];
    //se connecter via firebase.auth().signin et récupérer les infos personnes 
    // pour les placer dans un objet personne
    this.serviceUsers.signIn(userTemp);
  }

  //Déconnecte l'utilisateur
  deconnexion(){
    this.serviceUsers.signOut();
  }

  initializeForm(){
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      mdp  : ['', Validators.required]
    })
  }

  ngOnInit() {
    this.initializeForm();
    
    this.souscriptionPersonne = this.servicePersonne.subjectPersonne.subscribe(
      (personne: Personne)=>{
        //La connexion a été établie, on a récupéré les données de la personne connectée
        this.personne=personne;
        this.snackBar.open("Bienvenue " + ((this.personne.prenom)?this.personne.prenom:`visiteur`) + '.', 'Fermer', {
          duration: 2500}
        )
    },
    //une erreur s'est produite
    (error)=>{
      this.serviceErreur.afficheErreur(`Erreur lors de la connexion de l'utilisateur`, error)
    });
    this.souscriptionUser = this.serviceUsers.subjectUser.subscribe(
      (user: User)=>{
        this.user=user;        
    },
    (error)=>{
      this.serviceErreur.afficheErreur(`Erreur lors de la connexion de l'utilisateur`, error)
    });
  }

  ngOnDestroy(){
    this.souscriptionUser.unsubscribe();
    this.souscriptionPersonne.unsubscribe();
  }
}
