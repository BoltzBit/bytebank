import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transfer } from "../models/transfer.model";
import { TransferService } from "../services/transfer.service";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss'] 
})

export class NewTransferComponent{
    @Output() toTransfer: EventEmitter<any> = new EventEmitter<any>();

    public valor: number;
    public destino: string;
    
    constructor(
        private _transferService: TransferService,
        private router: Router){
    }

    public transfer(): void{
        console.log("Solicitada nova transferência");
        const valorEmitter: Transfer = {valor: this.valor, destino: this.destino};

        this._transferService.add(valorEmitter).subscribe({
            next: result => {
                console.log(result);
                this.router.navigateByUrl('extract');
            },
            error: error => console.log(error)
        });
    }

    public clear(): void{
        this.valor = 0;
        this.destino = "";
    }
}