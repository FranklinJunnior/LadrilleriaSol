import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {
  opcionSeleccionada: string = '';  // Variable para almacenar la opción seleccionada
  valorIngresado: number | undefined;  // Variable para almacenar el valor ingresado
  imagenMostrar: string | undefined;  // Variable para almacenar la imagen a mostrar
  mensaje: string | undefined;  // Variable para almacenar el mensaje a mostrar

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recibe los parámetros de la ruta '/inicio/:opcion'
    this.route.paramMap.subscribe(params => {
      this.opcionSeleccionada = params.get('opcion') || '';
    });
  }

  // Función para mostrar la imagen y el mensaje según la opción y el valor ingresado
  mostrarImagen() {
    if (this.valorIngresado !== undefined) {
      if (this.opcionSeleccionada === 'juliaca') {
        this.imagenMostrar = 'assets/ciudades/juliaca.jpg';
        this.mensaje = 'Puedes pedir esa cantidad de ladrillos en la fábrica de Juliaca';
      } else if (this.valorIngresado < 3000) {
        if (this.opcionSeleccionada === 'caracoto') {
          this.imagenMostrar = 'assets/ciudades/caracoto.jpg';
          this.mensaje = 'Puedes comprar los ladrillos en Caracoto';
        } else if (this.opcionSeleccionada === 'sanmiguel') {
          this.imagenMostrar = 'assets/ciudades/sanmiguel.jpg';
          this.mensaje = 'Puedes comprar los ladrillos en San Miguel';
        }
      } else {
        this.imagenMostrar = 'assets/ciudades/juliaca.jpg';
        this.mensaje = 'Esa es una gran cantidad de ladrillos, mejor pídelo desde la fábrica ubicada en Juliaca';
      }
    }
  }
}
