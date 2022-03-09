import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users?: User[] = [];

  constructor(private conServ: ConnectionService) { }

  ngOnInit(): void {
    //this.conServ.fetchUsers()
    //.then(resp => resp.json())
    //.then(jsonArray => this.users = jsonArray)

    this.conServ.getUsers().subscribe(userArray => this.users = userArray);

  }

}
