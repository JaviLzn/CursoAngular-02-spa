import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeTarjeta: any [] = [];
  @Input() indiceHeroe: number;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verHeroes() {
    this.router.navigate (['/heroe', this.indiceHeroe]);
  }

}
