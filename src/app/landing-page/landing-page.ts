import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
/**
   * Maneja el envío del formulario de contacto. Por ahora muestra un mensaje.
   */
  onSubmit(): void {
    alert('¡Gracias por tu mensaje!');
  }
}
