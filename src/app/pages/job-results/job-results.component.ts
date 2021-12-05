import { Component, OnInit } from '@angular/core';
import { PersonService } from '@edxp-core/services/person.service';
import { Person } from '@edxp-pages/job-results/person.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'hack-job-results',
  templateUrl: './job-results.component.html',
  styleUrls: ['./job-results.component.scss']
})
export class JobResultsComponent implements OnInit {
  public persons$: Observable<Person[]> = this.personService.persons$;

  constructor(private personService: PersonService) {}

  public ngOnInit(): void {}
}
