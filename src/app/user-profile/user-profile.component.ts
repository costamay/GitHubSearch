import { ProfileService } from './../profile.service';
import { User } from './../user';


import { Component, OnInit } from '@angular/core';
import { setMaxListeners } from 'cluster';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
profile: User;
searchTerm:string;
  constructor(private profileservice: ProfileService) { 
    // this.profile = profileservice.searchUsers();
    // this.profileservice.searchUsers(this.searchTerm);
    // this.profile = this.profileservice.user;

   
  }
  getUsers(){
    this.profileservice.searchUsers(this.searchTerm);
    this.profile = this.profileservice.user
  }



  ngOnInit() {
    
  }

}
