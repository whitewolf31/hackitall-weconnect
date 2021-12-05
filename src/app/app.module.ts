import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateJobModule } from '@edxp-pages/create-job/create-job.module';
import { CreatePersonModule } from '@edxp-pages/create-person/create-person.module';
import { JobResultsModule } from '@edxp-pages/job-results/job-results.module';
import { PersonTypeModule } from '@edxp-pages/person-type/person-type.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateJobModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PersonTypeModule,
    JobResultsModule,
    CreatePersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
