import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';

@Injectable({
    providedIn: 'root'
})
export class TransferService {
    private listaTransfer: any[];
    private url: string = 'http://localhost:3000/transferencias';

    constructor(private _httpClient: HttpClient) {
        this.listaTransfer = [];
    }

    public transfers(): Observable<Transfer[]>{
        return this._httpClient.get<Transfer[]>(this.url);
    }

    public add(transfer: Transfer): Observable<Transfer>{
        this.hidrate(transfer);
        
        return this._httpClient.post<Transfer>(this.url, transfer);
    }

    private hidrate(transfer: any): void{
        transfer.data = new Date();
    }
}
