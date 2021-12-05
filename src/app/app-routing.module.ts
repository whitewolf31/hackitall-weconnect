import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CREATE_JOB_ROUTE, CREATE_PERSON_ROUTE, JOB_RESULT_ROUTE, PERSON_TYPE_ROUTE } from '@edxp-core/utils/routes.constants';
import { CreateJobComponent } from '@edxp-pages/create-job/create-job.component';
import { CreatePersonComponent } from '@edxp-pages/create-person/create-person.component';
import { JobResultsComponent } from '@edxp-pages/job-results/job-results.component';
import { PersonTypeComponent } from '@edxp-pages/person-type/person-type.component';

const routes: Routes = [
  {
    path: `${CREATE_JOB_ROUTE}`,
    component: CreateJobComponent
  },
  {
    path: `${PERSON_TYPE_ROUTE}`,
    component: PersonTypeComponent
  },
  {
    path: `${JOB_RESULT_ROUTE}`,
    component: JobResultsComponent
  },
  {
    path: `${CREATE_PERSON_ROUTE}`,
    component: CreatePersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
