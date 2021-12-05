import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { HttpService } from '@edxp-core/api/http.service';
import { PersonService } from '@edxp-core/services/person.service';
import { JOB_RESULT_ROUTE, PERSON_TYPE_ROUTE, ROOT_ROUTE } from '@edxp-core/utils/routes.constants';

@Component({
  selector: 'hack-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  public jobPostingForm!: FormGroup;
  public keywords: { name: string }[] = [];

  public yearsOfXp: number = 0;
  public salary: number = 500;

  public phdSelected: boolean = false;
  public masterSelected: boolean = false;
  public bachelorSelected: boolean = false;

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router, private personService: PersonService) {}

  public addKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) this.keywords.push({ name: value });

    event.chipInput?.clear();
  }

  public remove(keyword: { name: string }) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  public ngOnInit(): void {
    this.jobPostingForm = this.fb.group({
      jobPostingName: this.fb.control('', Validators.required),
      jobPostingDescription: this.fb.control(''),
      bachelorSelected: this.fb.control(false),
      masterSelected: this.fb.control(false),
      phdSelected: this.fb.control(false)
    });
  }

  public sendRequest(): void {
    this.httpService
      .sendJobPosting({
        jobPostingName: this.jobPostingForm.get('jobPostingName')?.value,
        jobPostingDescription: this.jobPostingForm.get('jobPostingDescription')?.value,
        keywords: this.keywords,
        BS: this.jobPostingForm.get('bachelorSelected')?.value,
        MS: this.jobPostingForm.get('masterSelected')?.value,
        PhD: this.jobPostingForm.get('phdSelected')?.value,
        YoE: this.yearsOfXp,
        salary: this.salary,
        type: 'get'
      })
      .subscribe((result: any[]) => {
        this.personService.setPersonsSubject(
          result.map((unparsedPerson) => ({
            name: unparsedPerson.name,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            keywords: unparsedPerson.keywords.substring(0, unparsedPerson.keywords.length - 2).split(', '),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            certifications: unparsedPerson.certifications.substring(0, unparsedPerson.certifications.length - 2).split(', '),
            YoE: unparsedPerson.YoE,
            education: unparsedPerson.education,
            rating: unparsedPerson.rating
          }))
        );
        this.router.navigate([ROOT_ROUTE, JOB_RESULT_ROUTE]);
      });
  }

  public showYoE(value: number): string {
    return value.toString().concat('y');
  }

  public showPrice(value: number): string {
    return value.toString();
  }

  public updateYoE(value: MatSliderChange): void {
    this.yearsOfXp = value.value ?? 0;
  }

  public updateSalary(value: MatSliderChange): void {
    this.salary = value.value ?? 500;
  }

  public setBachelor(checked: boolean): void {
    if (checked) this.jobPostingForm.get('bachelorSelected')?.patchValue(true);
  }

  public setMaster(checked: boolean): void {
    if (checked) {
      this.jobPostingForm.get('masterSelected')?.patchValue(true);
      this.setBachelor(true);
    }
  }

  public goBack(): void {
    this.router.navigate([ROOT_ROUTE, PERSON_TYPE_ROUTE]);
  }
}
