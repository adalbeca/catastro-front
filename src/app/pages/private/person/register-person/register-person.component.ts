import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonModel } from '../../../../models/person.model';

@Component({
  selector: 'app-register',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {

  form: FormGroup;
  person: PersonModel = new PersonModel();

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
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

  createForm() {
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  getErrors(field) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }


  resetForm() {
    this.form.reset();
  }


}
