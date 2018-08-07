import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeTarjeta: Heroe [] = [];
  @Input() indiceHeroe: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroes() {
    this.router.navigate (['/heroe', this.indiceHeroe]);
    // this.heroeSeleccionado.emit( this.indiceHeroe );

  }

}
