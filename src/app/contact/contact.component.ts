import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent  implements  OnInit {

  formularioContacto: FormGroup;
  usuarioActivo:string = 'Pedro';

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }
  
  hasErrors(controlName: string ,errorType?: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError('required') &&
      this.formularioContacto.get(controlName)?.touched
    );
  }
  enviar() {
    console.log(this.formularioContacto.value);
  }
}
