import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CREATE_JOB_ROUTE, CREATE_PERSON_ROUTE, ROOT_ROUTE } from '@edxp-core/utils/routes.constants';

@Component({
  selector: 'hack-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.scss']
})
export class PersonTypeComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public goToCreateJob(): void {
    this.router.navigate([ROOT_ROUTE, CREATE_JOB_ROUTE]);
  }

  public goToCreatePerson(): void {
    this.router.navigate([ROOT_ROUTE, CREATE_PERSON_ROUTE]);
  }
}
