import { Component, OnInit } from '@angular/core';
import { contractData, ContractType } from '../models/contract-type.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  contractTypeData: ContractType[] = contractData;

  constructor() { }

  ngOnInit() { }

}
