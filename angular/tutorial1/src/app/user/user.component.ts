import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nombre : string;
  apellidos : string;
  edad : number;
  constructor() { 
    this.nombre = "ricardo";
    this.apellidos = "salas";
    this.edad = 35;
  }
  ngOnInit() {
  }

}
