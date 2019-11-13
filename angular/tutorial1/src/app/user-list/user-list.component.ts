import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Usuario[];
  constructor() {
    this.users = [
                    {nombre: "ricardo", apellidos: "salas", edad: 35},
                    {nombre: "azael", apellidos: "gonzalez", edad: 33},
                    {nombre: "rodrigo", apellidos: "navarro", edad: 36},
                    {nombre: "alex", apellidos: "perez", edad: 42}
    ]
   }

  ngOnInit() {
  }

}
