import { Component } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss'] 
})

export class NewTransferComponent{
    public valor: number;
    public destino: number;
    //teste
    public transfer(): void{
        console.log("Solicitada nova transferência");
        console.log("valor: ", this.valor);
        console.log("destino: ", this.destino);
    }
}