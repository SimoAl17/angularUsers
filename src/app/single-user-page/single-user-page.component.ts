import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.scss']
})
export class SingleUserPageComponent implements OnInit {

  user?: User;

  constructor(private conServ: ConnectionService) { }

  ngOnInit(): void {
    this.conServ.getUser(1).subscribe(userData => (this.user = userData));
    
  }


}
