import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService} from '../../app/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  
})
@Injectable()
export class HomePageComponent implements OnInit {
  @Output() emmiterService: EventEmitter<any> = new EventEmitter();

  public products:any;
  responseData: any;
  
  constructor( public service: AppService) { }

  ngOnInit() {
    console.log("fkhfkh")
    this.getProductList();
    this.emmiterService.emit("LOGIN/REGISTER");
  }

  

getProductList(){
  this.service.directGetApi('product').subscribe(response => {
    
    console.log("in API >>>>>>>>>>", response)
    this.responseData = response;
    if (this.responseData.length) {
      this.service.showSuccess("Product list found successfully");
      this.products=this.responseData;
    }

    else {
      console.log("login_err", )
      this.service.toastErr("No product found.")
    }
  }, error => {
    this.service.toastErr('Something went wring')

  })

}

}
