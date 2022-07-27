import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss'] 
})

export class NewTransferComponent{
    @Output() toTransfer: EventEmitter<any> = new EventEmitter<any>();

    public valor: number;
    public destino: number;
    
    public transfer(): void{
        console.log("Solicitada nova transferência");
        const valorEmitter = {valor: this.valor, destino: this.destino};

        this.toTransfer.emit(valorEmitter);

        this.clear();
    }

    public clear(): void{
        this.valor = 0;
        this.destino = 0;
    }
}