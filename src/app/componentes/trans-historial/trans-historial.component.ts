import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../servicios/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trans-historial',
  templateUrl: './trans-historial.component.html',
  styleUrls: ['./trans-historial.component.scss']
})
export class TransHistorialComponent implements OnInit {

  historial: any[];
  key: string;

  constructor(private _blockService: BlockchainService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.queryHist();
  }

  ngOnInit() {
    this.queryHist();
  }

  queryHist() {
    this._activatedRoute.params.subscribe(datos => {
      this.key = datos['id'];
      this._blockService.queryHist(datos['channel'], datos['id']).subscribe(
        resp => {
          let hists = JSON.parse(resp.response);
          console.log(hists);
          this.historial = hists;
        })
    })
  }


}
