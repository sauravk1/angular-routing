import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../services/deactivate-guard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IDeactivateGuard {

  constructor(private activatedRoute: ActivatedRoute) { }
  user!: { id: string; name: string; };
  editUser! : { id: string; name: string; };
  ngOnInit(): void {

    this.activatedRoute.data.subscribe( (data)=> {
      this.user = {
        id: data['user']['id'],
        name: data['user']['name']
      };
      this.editUser = {...this.user};
    })
  
  }
  canExit() {
    if(this.user.id != this.editUser.id || this.user.name != this.editUser.name) {
      if( confirm("Are you sure?")) {
        return true;
    } else {
      return false;
    }
    }
    return true;
  }
}
