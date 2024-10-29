import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.css']
})
export class FormulariosReactivosComponent {

  public registerForm!: FormGroup /* al poner ! angular sabe que esto en algún momento se va a llenar */
  public usuarios: any = []

  constructor(private fb: FormBuilder) { 
    /* constructor --> servicio que tiene angular mediante los formularios */
    /* formBuilder --> interfaz de formGroup */
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
/*       confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]  */

    })
  }

  handleRegisterForm(){
    if(this.registerForm.valid){
      alert ('El usuario se ha registrado con éxito.')
      this.usuarios.push(this.registerForm.value)
      this.registerForm.reset()
  
    }else{
      alert('No se ha podido registrar el usuario, revise los datos proporcionados. ')
    
    }
  }

}
