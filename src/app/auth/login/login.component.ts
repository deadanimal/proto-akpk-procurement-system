import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  roleRadio: string;
  
  focus
  focus1
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.roleRadio) {
      this.router.navigate(["/" + this.roleRadio + "/dashboard"]);
    } else {
      alert("Please choose role!");
    }
  }

}
