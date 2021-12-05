import { NgModule } from '@angular/core';
import { CoreModule } from '@edxp-core/core.module';
import { PersonTypeComponent } from '@edxp-pages/person-type/person-type.component';

@NgModule({
  declarations: [PersonTypeComponent],
  imports: [CoreModule],
  exports: [PersonTypeComponent]
})
export class PersonTypeModule {}
