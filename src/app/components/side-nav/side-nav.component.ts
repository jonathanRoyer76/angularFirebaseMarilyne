import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { User } from '../../classes/user'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  user: User;
  soucriptionUsers : Subscription

  constructor(
    private serviceUsers : UsersService
  ) { }
 
  ngOnInit() {    
    this.user = new User();
    this.soucriptionUsers = this.serviceUsers.subjectUser.subscribe(
      (temp: User)=>{
        this.user=temp;
      }
    );
  }

  ngOnDestroy(){
    this.soucriptionUsers.unsubscribe();
  }
}
