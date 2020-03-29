import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonModel } from '../../../../models/person.model';
import { PersonService } from '../../../../services/person.service';
@Component({
  selector: 'app-consult',
  templateUrl: './consult-person.component.html',
  styleUrls: ['./consult-person.component.scss']
})
export class ConsultPersonComponent implements OnInit {
  form: FormGroup;
  person: PersonModel = new PersonModel();

  constructor(private formBuilder: FormBuilder, private service: PersonService) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  createForm() {
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],

    });
  }


  getErrors(field) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }


  onSubmit() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(controlx => controlx.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    console.log(this.form.value);
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }




}
