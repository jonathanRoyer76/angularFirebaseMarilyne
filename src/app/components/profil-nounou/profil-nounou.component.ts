import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfilNounouService } from '../../services/profil-nounou.service';
import { profilNounou } from '../../classes/profilNounou';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profil-nounou',
  templateUrl: './profil-nounou.component.html',
  styleUrls: ['./profil-nounou.component.scss']
})
export class ProfilNounouComponent implements OnInit {

  userForm: FormGroup

  constructor(
    private serviceProfilNounou: ProfilNounouService,
    private formBuilder        : FormBuilder,
    private snackBar           : MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      tauxHoraire      : ['', Validators.required],
      montantRepas     : ['', Validators.required],
      montantIndemnites: ['', Validators.required],
      montantGouter    : ['', Validators.required],
      baremeKm         : ['', Validators.required]
    })
  }

  validation(){
    let profil               = new profilNounou();
    let formulaire           = this.userForm.value;
    profil.baremeKm          = formulaire['baremeKm'];
    profil.montantGouters    = formulaire['montantGouter']
    profil.montantIndemnites = formulaire['montantIndemnites']
    profil.montantRepas      = formulaire['montantRepas']
    profil.tauxHoraire       = formulaire['tauxHoraire']
    this.serviceProfilNounou.setProfilNounou(profil).subscribe(retour=>{
      if (retour){
        this.snackBar.open('Profil mis à jour', 'Fermer', {
          duration: 2500}
        )
      }
    })
  }
}
