import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CoreModule } from '@edxp-core/core.module';
import { CreatePersonComponent } from '@edxp-pages/create-person/create-person.component';

@NgModule({
  declarations: [CreatePersonComponent],
  imports: [CoreModule, MatSliderModule, FormsModule, ReactiveFormsModule],
  exports: [CreatePersonComponent]
})
export class CreatePersonModule {}
