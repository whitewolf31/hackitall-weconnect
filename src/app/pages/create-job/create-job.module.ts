import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CoreModule } from '@edxp-core/core.module';
import { CreateJobComponent } from '@edxp-pages/create-job/create-job.component';

@NgModule({
  declarations: [CreateJobComponent],
  imports: [CoreModule, FormsModule, ReactiveFormsModule, MatSliderModule],
  exports: [CreateJobComponent]
})
export class CreateJobModule {}
