import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TransferService {
    private listaTransfer: any[];

    constructor() {
        this.listaTransfer = [];
    }

    get transfers(){
        return this.listaTransfer;
    }

    add(transfer: any): void{
        this.hidrate(transfer);
        
        this.listaTransfer.push(transfer);
    }

    private hidrate(transfer: any): void{
        transfer.data = new Date();
    }
}
