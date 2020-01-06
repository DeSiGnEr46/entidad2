import { Component, OnInit } from '@angular/core';
import { LogService } from '../../servicios/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Nombre:String;

  constructor(private _logService: LogService) { }

  ngOnInit() {
    //Comprobamos si la sesión del usuario está activa
    if (this.sesionActiva()) {
      this.Nombre = localStorage.getItem("Nombre");
    }
  }

  sesionActiva(): boolean {
    return this._logService.sesionValida();
  }
}
