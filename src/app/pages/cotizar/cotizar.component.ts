// src/app/pages/cotizar/cotizar.component.ts
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
      return;
    }

    const sede = form.value.sede;
    const kingKong = form.value.kingKong || 0;
    const pandereta = form.value.pandereta || 0;
    const techo10 = form.value.techo10 || 0;
    const techo12 = form.value.techo12 || 0;

    // Suma total de ladrillos
    const totalLadrillos = kingKong + pandereta + techo10 + techo12;

    // Validar cantidad y sede
    if ((sede === 'caracoto' || sede === 'sanmiguel') && totalLadrillos > 3000) {
      this._snackBar.open('La cantidad de ladrillos es ser menor a 3000. ¿Desea enviar de todas formas?', 'Enviar de todas formas', {
        duration: 8000,
      }).onAction().subscribe(() => {
        this.enviarFormulario(form);
      });
    } else {
      // Envío del formulario
      this.enviarFormulario(form);
    }
  }

  enviarFormulario(form: NgForm) {
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
