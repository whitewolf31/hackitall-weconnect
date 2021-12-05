import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { HttpService } from '@edxp-core/api/http.service';
import { PersonService } from '@edxp-core/services/person.service';
import { PERSON_TYPE_ROUTE, ROOT_ROUTE } from '@edxp-core/utils/routes.constants';

@Component({
  selector: 'hack-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  public accountForm!: FormGroup;
  public keywords: { name: string }[] = [];
  public certifications: { name: string }[] = [];

  public createdAccount: boolean = false;

  public yearsOfXp: number = 0;

  public phdSelected: boolean = false;
  public masterSelected: boolean = false;
  public bachelorSelected: boolean = false;

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router, private personService: PersonService) {}

  public addCertification(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) this.certifications.push({ name: value });

    event.chipInput?.clear();
  }

  public removeCertification(certification: { name: string }) {
    const index = this.certifications.indexOf(certification);
    if (index >= 0) {
      this.certifications.splice(index, 1);
    }
  }

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
    this.accountForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control(''),
      bachelorSelected: this.fb.control(false),
      masterSelected: this.fb.control(false),
      phdSelected: this.fb.control(false)
    });
  }

  public sendRequest(): void {
    this.httpService
      .sendJobPosting({
        firstName: this.accountForm.get('firstName')?.value,
        lastName: this.accountForm.get('lastName')?.value,
        keywords: this.keywords,
        certifications: this.certifications,
        BS: this.accountForm.get('bachelorSelected')?.value,
        MS: this.accountForm.get('masterSelected')?.value,
        PhD: this.accountForm.get('phdSelected')?.value,
        YoE: this.yearsOfXp,
        type: 'create'
      })
      .subscribe((result: any[]) => {
        this.createdAccount = true;
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

  public setBachelor(checked: boolean): void {
    if (checked) this.accountForm.get('bachelorSelected')?.patchValue(true);
  }

  public setMaster(checked: boolean): void {
    if (checked) {
      this.accountForm.get('masterSelected')?.patchValue(true);
      this.setBachelor(true);
    }
  }

  public goBack(): void {
    this.router.navigate([ROOT_ROUTE, PERSON_TYPE_ROUTE]);
    this.createdAccount = false;
  }
}
