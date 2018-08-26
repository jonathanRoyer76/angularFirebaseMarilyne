import { Component, Inject } from '@angular/core';
import { DateAdapter, throwToolbarMixedModesError } from '@angular/material'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Personne } from '../../classes/personne';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { PersonnesService } from '../../services/personnes.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.scss'],
  preserveWhitespaces: true
})
export class UpdatePersonneComponent {

  userForm   : FormGroup
  fichier    : File
  personne   : Personne
  listeStatus: string[]=['Administrateur', 'Nounou', 'Parent', 'Enfant', 'Tuteur', 'Medecin'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Personne,
    public ref: MatDialogRef<UpdatePersonneComponent>,
    
    private formBuilder    : FormBuilder,
    private adapter        : DateAdapter<Personne>,
    private servicePersonne: PersonnesService
  ) { 
    this.personne=data;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.adapter.setLocale('fr-FR');
    this.userForm = this.formBuilder.group({
      nom          : [this.personne.nom, Validators.required],
      prenom       : [this.personne.prenom, Validators.required],
      telPortable  : [this.personne.telPortable, Validators.pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)],
      dateNaissance: [this.personne.dateNaissance, Validators.minLength(0)],
      mail         : [this.personne.mail, [Validators.required, Validators.email]],
      adresse      : [this.personne.adresse, ],
      actif        : [this.personne.actif, ],
      status       : [this.personne.status, ] 
    })
  }

  validation(){

    let formulaire = this.userForm.value;          
    this.personne.nom           = formulaire['nom'];
    this.personne.prenom        = formulaire['prenom'];
    this.personne.dateNaissance = formulaire['dateNaissance'];
    this.personne.adresse       = formulaire['adresse'];
    this.personne.telPortable   = formulaire['telPortable'];
    this.personne.mail          = formulaire['mail'];
    this.personne.actif         = formulaire['actif'];
    this.personne.status        = formulaire['status'];  
    
    this.servicePersonne.updatePersonne(this.personne).subscribe(retour=>{
      if (retour) this.ref.close('true')
    })
  }

  selectionFichier(event){
    this.fichier=event.target.files[0]; 
  }

  annulation(){

  }
}
