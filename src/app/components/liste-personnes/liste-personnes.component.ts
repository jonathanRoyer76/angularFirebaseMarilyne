import { Component, OnInit,Injectable, OnDestroy } from '@angular/core';
import { PersonnesService } from '../../services/personnes.service';
import { Personne } from '../../classes/personne';
import { UpdatePersonneComponent } from '../update-personne/update-personne.component';
import { MatDialog, MatSnackBar} from '@angular/material'; 
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.scss']
})
export class ListePersonnesComponent implements OnInit, OnDestroy {

  listePersonnes    = [];
  filtre            : boolean;
  souscriptionFiltre:  Subscription

  constructor(
    private servicePersonne: PersonnesService,
    public dialog          : MatDialog,
    private snackBar       : MatSnackBar
  ) { }

  ngOnInit() {
    this.servicePersonne.subjectFiltre.subscribe(retour=>{
      this.filtre=retour; 
    })    
    this.servicePersonne.getListePersonnes().subscribe(retour=>{
      this.listePersonnes=retour;    
    })
  }

  // Mise à jour du profil
  onUpdateProfil(personne: Personne){
    let dialogRef = this.dialog.open(UpdatePersonneComponent, {
      data: personne
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.snackBar.open('Modifications enregistrées','Fermer',{
          duration: 2500 
        })
      }
    });
  }

  // Désactiver une personne
  onDesactiver(personne: Personne){
    personne.actif=false
    this.servicePersonne.changeActif(personne).subscribe()
  }

  // Active une personne
  onActiver(personne: Personne){
    personne.actif=true
    this.servicePersonne.changeActif(personne).subscribe()
  }

  ngOnDestroy(){
    
  }
}
