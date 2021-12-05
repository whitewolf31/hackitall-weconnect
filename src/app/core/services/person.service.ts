import { Injectable } from '@angular/core';
import { Person } from '@edxp-pages/job-results/person.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personsSubject: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  public persons$: Observable<Person[]> = this.personsSubject.asObservable();

  constructor() {}

  public setPersonsSubject(persons: Person[]): void {
    this.personsSubject.next(persons);
  }
}
