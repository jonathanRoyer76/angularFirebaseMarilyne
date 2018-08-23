import { Component, OnInit } from '@angular/core';
import { ContratService } from '../../services/contrat.service';
import { DonneesContrat } from '../../classes/donneesContrat';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.scss']
})
export class ListePersonnesComponent implements OnInit {

  listeDonneesContrat: DonneesContrat[]

  constructor(
    private serviceContrat: ContratService
  ) { }

  ngOnInit() {
    this.serviceContrat.getListeContrats().subscribe(retour=>{
      console.log(retour) 
    })
  }

}
