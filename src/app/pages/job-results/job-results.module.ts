import { NgModule } from '@angular/core';
import { CoreModule } from '@edxp-core/core.module';
import { JobResultsComponent } from '@edxp-pages/job-results/job-results.component';

@NgModule({
  declarations: [JobResultsComponent],
  imports: [CoreModule],
  exports: [JobResultsComponent]
})
export class JobResultsModule {}
