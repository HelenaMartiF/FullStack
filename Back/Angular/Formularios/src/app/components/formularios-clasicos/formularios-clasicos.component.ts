import { Component } from '@angular/core';

@Component({
  selector: 'app-formularios-clasicos',
  templateUrl: './formularios-clasicos.component.html',
  styleUrls: ['./formularios-clasicos.component.css']
})
export class FormulariosClasicosComponent {

  public registerForm: any = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confimPassword: ""
  };



  handleRegisterForm(){

  
    const registerFormValues = Object.values(this.registerForm); /* saca los valores de los campos rellenados en el formulario y los mete en registerFormValues */
    const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if(registerFormValues.includes("")){ /* si alguno de los valores dentro de registerFormValues (los campos del formulario) está vacío da true entonces acciona la función */
     return alert("Por favor, rellene todos los campos obligatorios")
    }

    if(regExp.test(this.registerForm.password)){
      return alert("La contraseña debe contener, una mayúscula, un número y un carácter especial.")
    }


    if(this.registerForm.password !== this.registerForm.confimPassword){
      return alert("Las contraseñas no coinciden.")
    }else{
      return alert("El usuario se ha registrado con éxito")
    }
  }


}
