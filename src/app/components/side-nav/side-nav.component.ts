import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { User } from '../../classes/user'
import { Subscription } from 'rxjs';
import { PersonnesService } from '../../services/personnes.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  user            : User;
  soucriptionUsers: Subscription
  chkTous         = false;

  constructor(
    private serviceUsers    : UsersService,
    private servicePersonnes: PersonnesService
  ) { }
 
  ngOnInit() {    
    this.user = new User();
    this.soucriptionUsers = this.serviceUsers.subjectUser.subscribe(
      (temp: User)=>{
        this.user=temp;
      }
    );
    this.servicePersonnes.setFiltreAffichagePersonnes(this.chkTous)
  }

  ngOnDestroy(){
    this.soucriptionUsers.unsubscribe();
  }

  changementFiltre(){
    this.servicePersonnes.setFiltreAffichagePersonnes(!this.chkTous);
  }
}
