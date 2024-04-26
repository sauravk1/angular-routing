import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: { id: string; name: string; };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    }
    console.log(this.activatedRoute.queryParams)
    this.activatedRoute.params.subscribe( (data: Params) =>{
     this.user = {
      id: data['id'],
      name: data['name']
     }
    })
  }
  onUserEdit() {
    this.router.navigate(['/users', this.user.id,this.user.name, 'edit'], {
      queryParamsHandling: 'preserve',
    })
  }

}
