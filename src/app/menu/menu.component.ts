import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAdmin : boolean = false;
  type : any;

  constructor(private httpClientService: HttpClientService,
    public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.isAdminFn();
  }

  isAdminFn(){
    this.type = this.httpClientService.getRole();
    if(this.type ==='admin'){
      this.isAdmin = true;
    }
  }
}
