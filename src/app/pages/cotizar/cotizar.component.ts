import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this._snackBar.open('Debe rellenar todos los campos.', 'Cerrar', {
        duration: 3000,
      });
    } else {
      this.http.post('http://localhost:3000/api/pedidos', form.value).subscribe(
        (response) => {
          this._snackBar.open('Los datos se han enviado correctamente.', 'Cerrar', {
            duration: 2000,
          }).afterDismissed().subscribe(() => {
            form.reset();
          });
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
          this._snackBar.open(`Error al enviar los datos: ${error.error?.message || error.message}`, 'Cerrar', {
            duration: 5000,
          });
        }
      );
    }
  }
}
