import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  constructor(public http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/users/all")
      .subscribe(data => {
        this.users = data;
      }, err => {
        console.log(err);
      })
  }

}

