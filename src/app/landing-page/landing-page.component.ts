import { Component, OnInit } from '@angular/core';
import { User } from 'interfaces/user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  user: User = {
    Name: '',
    Pin: 0,
    Language: 'Select A Language'
  }

  userPin!: number

  exsistingUser: boolean = true

  ngOnInit(): void {

    if (JSON.parse(window.localStorage.getItem("slanguage-User") as string) == null) {
      console.log("NEW USER")
      this.exsistingUser = false
    }

    // JSON.parse(window.localStorage.getItem("slanguage-User") as string);
    // window.localStorage.removeItem("slanguage-User");
    // window.localStorage.setItem("slanguage-User", JSON.stringify(arguements))
    }
  


}
