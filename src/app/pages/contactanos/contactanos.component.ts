import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      this._snackBar.open('Debe rellenar todos los campos.', 'Cerrar', { duration: 3000 });
    } else {
      this.http.post('http://localhost:3000/api/contactos', contactForm.value).subscribe(
        (response) => {
          this._snackBar.open('Los datos se han enviado correctamente.', 'Cerrar', { duration: 2000 }).afterDismissed().subscribe(() => {
            contactForm.resetForm();
          });
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
          this._snackBar.open(`Error al enviar los datos: ${error.error?.message || error.message}`, 'Cerrar', { duration: 5000 });
        }
      );
    }
  }
}
