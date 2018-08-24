import { Component, OnInit } from '@angular/core';
import { PersonnesService } from '../../services/personnes.service';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.scss']
})
export class ListePersonnesComponent implements OnInit {

  listePersonnes =[]

  constructor(
    private servicePersonne: PersonnesService
  ) { }

  ngOnInit() {
    this.servicePersonne.getListePersonnes().subscribe(retour=>{
this.listePersonnes=retour;    })
  }

}
