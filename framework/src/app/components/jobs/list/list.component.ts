import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';

import { JobsService } from 'src/app/services/jobs.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'company', 'zipcode', 'startDate', 'remove'];
  jobs: MatTableDataSource<Job>;

  @ViewChild(MatTable, { static: false }) table: MatTable<Job[]>;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.reset();
  }

  remove(job: Job): void {
    this.jobsService.delete(job).subscribe(
      () => {
        this.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

  removeAll() {
    this.jobs.data = [];
  }

  reset() {
    this.jobsService.all().subscribe(
      (jobs: Job[]) => {
        this.jobs = new MatTableDataSource(jobs);
        this.table.renderRows();
      },
      err => {
        console.log(err);
      }
    );
  }
}
