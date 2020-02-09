import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';
import {HomePageComponent} from '../home-page/home-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn : String;

  constructor(private authenticationService: HomePageComponent) {
    
}

private changeName(name: string): void {
  console.log("IS IS CALLED FINALLY********")
    this.isLoggedIn = name;
}

  ngOnInit() {
    this.LoggedIn();
    this.authenticationService.emmiterService.subscribe(name => console.log("DJDJDJ**********"));
    
  }

  LoggedIn(){
    console.log("HEADER PAGE",localStorage.getItem('userId'))
    if(!localStorage.getItem('userId')){
     this.isLoggedIn="LOGIN/REGISTER"
    }
    else{
      this.isLoggedIn=''
    }

  }

}
