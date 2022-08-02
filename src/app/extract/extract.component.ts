import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  public transferencias: Transfer[];

  constructor(private _transferService: TransferService) { }

  ngOnInit(): void {
    this._transferService.transfers().subscribe((transferencias: Transfer[]) => {
      console.table(transferencias);
      this.transferencias = transferencias
    });
  }

}
