import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() user?: User;

  constructor(private conServ: ConnectionService) { }

  ngOnInit(): void {
    
    
  }

}
