import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss']
})
export class DetailsListComponent implements OnInit {

  @Input() user?: User;
  @Input() isPartial?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
