import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  usuario: UserModel = new UserModel();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.loadDataForm();
    this.listenerField();
  }

  ngOnInit() {
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

  listenerField() {
    this.form.get('name').valueChanges.subscribe(value => console.log(value));
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  getErrors(field) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  loadDataForm() {
    this.form.reset({
      email: 'adalbeca@gmail.com',
      name: 'adelys belen',
      password: 12345
    });
  }


  resetForm() {
    this.form.reset();
  }

}
