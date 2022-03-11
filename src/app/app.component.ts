import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> Hola {{name}} </h1>
              <p>usando template literals</p>`,
  styles: ['h1 { color:red } p { color: green} '],
})
export class AppComponent {
  name = 'Angular';
}

//@Component (de la porpia libreria de Angular) es un decorador - typescript. Un componente es un trozo de pantalla con lógica

//selector - es la etiqueta para meterla en el html

//templateUrl - es la vista, s ve en el app.component.html o en el propio app.component.ts quitando la "Url" del "template"

//error de ejecución y error de compilación. En la compilación ya no podrías subir el proyecto a PRD

//{{name}} interpolación para construir vistas de forma dinámica
