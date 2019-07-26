import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../components/jobs/models/job.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  add(job: Job): Observable<Job> {
    return this.http.post<Job>('/jobs', job);
  }

  all(): Observable<Job[]> {
    return this.http.get('/jobs')
      .pipe(
        map(
          (jobs: Job[]) => jobs)
      );
  }

  update(job: Job): Observable<Job> {
    return this.http.put<Job>('/jobs', job);
  }

  delete(job: Job): Observable<any> {
    return this.http.delete('/jobs/' + job.id);
  }
}
