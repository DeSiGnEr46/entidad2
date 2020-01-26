import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../servicios/blockchain.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
  styles: [`
    .ng-invalid.ng-touched:not(form){
      color: red;
  }
`]
})
export class AddTransactionComponent implements OnInit {

  addTrans: FormGroup;

  submitOk: boolean = null;
  submitSusc: Subscription;

  constructor(private _blockService: BlockchainService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.addTrans = new FormGroup({
      'channel': new FormControl(
        'channelall', [
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
        'Org2'),
      'dst': new FormControl(
        '', [
          Validators.required
        ]),
      'ordenante': new FormControl(
        localStorage.getItem('Nombre')),
      'fecha_env': new FormControl(
        '', [
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-[12]\\d{3}$')
      ]),
    });
  }

  ngOnInit() {
    this.submitSusc = this._blockService.submitObservable.subscribe(valor => {
      this.submitOk = valor;
    });

    this.addTrans.controls['key'].disable();
    this.addTrans.controls['channel'].disable();
    this.addTrans.controls['origen'].disable();
    this.addTrans.controls['ordenante'].disable();
  }

  ngOnDestroy() {
    this._blockService.submitObservable.next(null);
    this.submitSusc.unsubscribe();
  }
  
  reload(){
    console.log(this.addTrans.controls['channel'].value);
    this._blockService.getLastKey(this.addTrans.controls['channel'].value.trim()).subscribe( key => {
      this.addTrans.controls['key'].setValue( (+key.response + 1).toString() );
    })
  }

  crear() {
    let trans = {
      channel: this.addTrans.controls['channel'].value.trim(),
      key: this.addTrans.controls['key'].value.trim(),
      producto: this.addTrans.controls['producto'].value.trim(),
      modelo: this.addTrans.controls['modelo'].value.trim(),
      tipo: this.addTrans.controls['tipo'].value.trim(),
      dimensiones: this.addTrans.controls['dimensiones'].value.trim(),
      fechafab: this.addTrans.controls['fecha_fab'].value.trim(),
      materiales: this.addTrans.controls['materiales'].value.trim(),
      descripcion: this.addTrans.controls['descripcion'].value.trim(),
      cantidad: this.addTrans.controls['cantidad'].value.trim(),
      precioud: this.addTrans.controls['precio_ud'].value.trim(),
      preciotot: this.addTrans.controls['precio_tot'].value.trim(),
      org: this.addTrans.controls['origen'].value.trim(),
      dst: this.addTrans.controls['dst'].value.trim(),
      ordenante: this.addTrans.controls['ordenante'].value.trim(),
      fechaenv: this.addTrans.controls['fecha_env'].value.trim()
    }
    console.log(trans);

    this._blockService.submitTransaction(trans).subscribe(resp => {
      this._blockService.submitObservable.next(true);
    },
      error => {
        this._blockService.submitObservable.next(false);
        console.log(error);
      })
  }

}
