import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../servicios/blockchain.service';
import { Router } from '@angular/router';
import { Trans } from '../../interfaces/trans.interface';
import { LogService } from 'src/app/servicios/log.service';

@Component({
  selector: 'app-world-state',
  templateUrl: './world-state.component.html',
  styleUrls: ['./world-state.component.scss']
})
export class WorldStateComponent implements OnInit {

  channelall: Trans[];
  channel13: Trans[];

  channelall_lastKey: string = ""; 
  channel13_lastKey: string = "";

  constructor(private _blockService:BlockchainService, private _router: Router, private _logService:LogService) { 
  }

  ngOnInit() {
    this.queryChannelAll();
    this.getLastKeyAll();
  }

  esAdmin():boolean{
    return this._logService.esAdmin();
  }

  getLastKeyAll(){
    this._blockService.getLastKey("channelall").subscribe( (key) => {
      console.log(key.response);
      this.channelall_lastKey = (+key.response + 1).toString();
    })
  }

  queryChannelAll(): any{
    this.getLastKeyAll();

    let lastIdx;
    if(this.channelall_lastKey == ""){
      lastIdx = "9";
    }else{
      lastIdx = this.channelall_lastKey;
    }
    this._blockService.queryTransactions("channelall","1",lastIdx).subscribe((datos) => {
      console.log(JSON.parse(datos.response));
      this.channelall = JSON.parse(datos.response);
    })
  }
}
