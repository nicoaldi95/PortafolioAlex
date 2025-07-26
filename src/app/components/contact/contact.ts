import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = { nombre: '', email: '', mensaje: '' };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post('/api/contact', this.formData).subscribe({
      next: () => {
        alert('¡Gracias por tu mensaje!');
        this.formData = { nombre: '', email: '', mensaje: '' };
      },
      error: () => {
        alert('Ocurrió un error al enviar el mensaje.');
      }
    });
  }
}
