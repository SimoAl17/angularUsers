import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.scss']
})
export class SingleUserPageComponent implements OnInit {

  user?: User;
  posts?: Post[];

  constructor(private conServ: ConnectionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idS = this.route.snapshot.paramMap.get("id");
    let id = 0;
    if (idS) {
      id = parseInt(this.route.snapshot.paramMap.get("id")!);
    }
    this.conServ.getUser(id).subscribe(userData => this.user = userData);
    
  }

  loadPosts(){
    if (this.user) {
      this.conServ.getPostsOfUser(this.user.id).subscribe(
        data => this.posts = data
      )  
    }
    
  }

}
