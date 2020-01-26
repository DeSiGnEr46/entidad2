import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  nodeapi: string = "https://51.145.147.212:8080/api/";
  transacciones: string[]
  submitObservable:BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.submitObservable = new BehaviorSubject<boolean>(null);
  }

  test(): any{
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    let url = `${this.nodeapi}test`;
    return this.http.get(url, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
      })
    )
  }

  getLastKey(channel:string): any{
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let datos = {
      channel : channel,
      key : "lastKey"
    }

    let body = JSON.stringify(datos);
    console.log(body);

    let url = `${this.nodeapi}query`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        if (resp.ok) {
          return resp.body;
        } 
      })
    )
  }

  queryTransactions(channel:string, initKey:string, endKey:string): any {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let datos = {
      channel : channel,
      initKey : initKey,
      endKey : endKey
    }
    let body = JSON.stringify(datos);
    console.log(body);

    let url = `${this.nodeapi}queryall`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        if (resp.ok) {
          return resp.body;
        } 
      })
    )
  }

  queryTransaction(channel:string, key:string): any {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let datos = {
      channel : channel,
      key : key
    }
    let body = JSON.stringify(datos);
    console.log(body);

    let url = `${this.nodeapi}query`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        if (resp.ok) {
          return resp.body;
        } 
      })
    )
  }

  queryHist(channel:string, key:string): any {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let datos = {
      channel : channel,
      key : key
    }
    let body = JSON.stringify(datos);
    console.log(body);

    let url = `${this.nodeapi}queryhist`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        if (resp.ok) {
          return resp.body;
        } 
      })
    )
  }

  submitTransaction(newTrans:any): any {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let body = JSON.stringify(newTrans);
    console.log(body);

    let url = `${this.nodeapi}addship`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        return resp;
      })
    )
  }

  editTransaction(newTrans:any): any {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let body = JSON.stringify(newTrans);
    console.log(body);

    let url = `${this.nodeapi}editship`;
    return this.http.post(url, body, { headers, observe: 'response' }).pipe(
      map(resp => {
        console.log(resp);
        return resp;
      })
    )
  }
}
