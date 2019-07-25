import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../models/job.model';
import { JobsService } from '../../../services/jobs.service';

import { contractData, ContractType } from '../models/contract-type.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  contractTypeData: ContractType[] = contractData;
  form: FormGroup;

  constructor(
    private jobsService: JobsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(new Job());
  }

  onSave(): void {
    // console.log(this.form.value);
    this.jobsService.add(this.form.value).subscribe(
      (job: Job) => console.log(job),
      err => console.log(err)
    );

    this.form.reset();
  }
}
