import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../servicios/blockchain.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-editar-transaccion',
  templateUrl: './editar-transaccion.component.html',
  styleUrls: ['./editar-transaccion.component.scss'],
  styles: [`
    .ng-invalid.ng-touched:not(form){
      color: red;
  }
`]
})
export class EditarTransaccionComponent implements OnInit {

  editTrans: FormGroup;

  submitOk: boolean = null;
  submitSusc: Subscription;

  ngOnInit() {
    //Inicialización de los parámetros del formulario con los valores de la transacción
    this._activatedRoute.params.subscribe(datos => {
      this._blockService.queryTransaction(datos['channel'], datos['id']).subscribe(
        resp => {
          let trans = JSON.parse(resp.response);
          console.log(trans);
          console.log(trans.producto);
          this.editTrans.controls['channel'].disable();
          this.editTrans.controls['key'].disable();
          this.editTrans.controls['ordenante'].disable();
          this.editTrans.controls['origen'].disable();

          this.editTrans.controls['channel'].setValue(datos['channel']);
          this.editTrans.controls['key'].setValue(datos['id']);
          this.editTrans.controls['producto'].setValue(trans.producto);
          this.editTrans.controls['modelo'].setValue(trans.modelo);
          this.editTrans.controls['tipo'].setValue(trans.tipo);
          this.editTrans.controls['dimensiones'].setValue(trans.dimensiones);
          this.editTrans.controls['fecha_fab'].setValue(trans.fechafab);
          this.editTrans.controls['materiales'].setValue(trans.materiales);
          this.editTrans.controls['descripcion'].setValue(trans.descripcion);
          this.editTrans.controls['cantidad'].setValue(trans.cantidad);
          this.editTrans.controls['precio_ud'].setValue(trans.precio_ud);
          this.editTrans.controls['precio_tot'].setValue(trans.precio_tot);
          this.editTrans.controls['origen'].setValue(trans.origen);
          this.editTrans.controls['dst'].setValue(trans.dst);
          this.editTrans.controls['ordenante'].setValue(localStorage.getItem("Nombre"));
          this.editTrans.controls['fecha_env'].setValue(trans.fechaenv);
        }
      )
    })

    this.submitSusc = this._blockService.submitObservable.subscribe(valor => {
      this.submitOk = valor;
    })
  }

  ngOnDestroy() {
    this._blockService.submitObservable.next(null);
    this.submitSusc.unsubscribe();
  }

  constructor(private _blockService: BlockchainService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.editTrans = new FormGroup({
      'channel': new FormControl(
        '', [
        Validators.required,
      ]),
      'key': new FormControl(
        '', [
        Validators.required,
      ]),
      'producto': new FormControl(
        ''),
      'modelo': new FormControl(
        ''),
      'tipo': new FormControl(
        ''),
      'dimensiones': new FormControl(
        ''),
      'fecha_fab': new FormControl(
        '', [
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
      ]),
      'materiales': new FormControl(
        ''),
      'descripcion': new FormControl(
        ''),
      'cantidad': new FormControl(
        ''),
      'precio_ud': new FormControl(
        ''),
      'precio_tot': new FormControl(
        ''),
      'origen': new FormControl(
        ''),
      'dst': new FormControl(
        ''),
      'ordenante': new FormControl(
        localStorage.getItem("Nombre")),
      'fecha_env': new FormControl(
        '', [
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
      ]),
    });
  }

  reload() {
    this._activatedRoute.params.subscribe(datos => {
      this._blockService.queryTransaction(datos['channel'], datos['id']).subscribe(
        resp => {
          let trans = JSON.parse(resp.response);
          console.log(trans);

          this.editTrans.controls['channel'].disable();
          this.editTrans.controls['key'].disable();
          this.editTrans.controls['ordenante'].disable();
          this.editTrans.controls['origen'].disable();

          this.editTrans.controls['channel'].setValue(datos['channel']);
          this.editTrans.controls['key'].setValue(datos['id']);
          this.editTrans.controls['producto'].setValue(trans.producto);
          this.editTrans.controls['modelo'].setValue(trans.modelo);
          this.editTrans.controls['tipo'].setValue(trans.tipo);
          this.editTrans.controls['dimensiones'].setValue(trans.dimensiones);
          this.editTrans.controls['fecha_fab'].setValue(trans.fechafab);
          this.editTrans.controls['materiales'].setValue(trans.materiales);
          this.editTrans.controls['descripcion'].setValue(trans.descripcion);
          this.editTrans.controls['cantidad'].setValue(trans.cantidad);
          this.editTrans.controls['precio_ud'].setValue(trans.precio_ud);
          this.editTrans.controls['precio_tot'].setValue(trans.precio_tot);
          this.editTrans.controls['origen'].setValue(trans.origen);
          this.editTrans.controls['dst'].setValue(trans.dst);
          this.editTrans.controls['ordenante'].setValue(localStorage.getItem("Nombre"));
          this.editTrans.controls['fecha_env'].setValue(trans.fechaenv);
        }
      )
    })
  }

  editar() {
    let trans = {
      channel: this.editTrans.controls['channel'].value.trim(),
      key: this.editTrans.controls['key'].value.trim(),
      producto: this.editTrans.controls['producto'].value.trim(),
      modelo: this.editTrans.controls['modelo'].value.trim(),
      tipo: this.editTrans.controls['tipo'].value.trim(),
      dimensiones: this.editTrans.controls['dimensiones'].value.trim(),
      fechafab: this.editTrans.controls['fecha_fab'].value.trim(),
      materiales: this.editTrans.controls['materiales'].value.trim(),
      descripcion: this.editTrans.controls['descripcion'].value.trim(),
      cantidad: this.editTrans.controls['cantidad'].value.trim(),
      precioud: this.editTrans.controls['precio_ud'].value.trim(),
      preciotot: this.editTrans.controls['precio_tot'].value.trim(),
      org: this.editTrans.controls['origen'].value.trim(),
      dst: this.editTrans.controls['dst'].value.trim(),
      ordenante: this.editTrans.controls['ordenante'].value.trim(),
      fechaenv: this.editTrans.controls['fecha_env'].value.trim()
    }
    console.log(trans);

    this._blockService.editTransaction(trans).subscribe(resp => {
      this._blockService.submitObservable.next(true);
    },
      error => {
        this._blockService.submitObservable.next(false);
        console.log(error);
      })
  }

  /*******************************
  Funciones de validación extras
  ********************************/
  noVacio(control: FormControl): { [s: string]: boolean } { //Devuelve un string seguido de un valor booleano
    if (typeof control.value === 'string' && !control.value.trim()) {
      return {
        novacio: true
      }
    }
    return null;
  }

}
