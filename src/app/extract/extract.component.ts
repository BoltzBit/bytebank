import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  public transferencias: any[];

  constructor(private _transferService: TransferService) { }

  ngOnInit(): void {
    this.transferencias = this._transferService.transfers;
  }

}
