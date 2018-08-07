import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '../../../../../node_modules/@angular/core/src/render3/instructions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  buscarHeroe( texto: string) {
        this.router.navigate(['/buscador', texto]);
    }

}
