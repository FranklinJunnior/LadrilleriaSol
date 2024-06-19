import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  categoria: string;
  imagen: string;
  enlace: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [
    { nombre: 'King Kong', categoria: 'muro', imagen: 'assets/imagenes/kingkong.png', enlace: '/productos/ladrillos-para-muro/king-kong' },
    { nombre: 'Pandereta', categoria: 'muro', imagen: 'assets/imagenes/pandereta.png', enlace: '/productos/ladrillos-para-muro/pandereta' },
    { nombre: 'Techo 10', categoria: 'techo', imagen: 'assets/imagenes/techo10.png', enlace: '/productos/ladrillos-para-techo/techo10' },
    { nombre: 'Techo 12', categoria: 'techo', imagen: 'assets/imagenes/techo12.png', enlace: '/productos/ladrillos-para-techo/techo12' },
    // Agrega más productos según sea necesario
  ];

  terminoBusqueda: string = '';
  categoriaSeleccionada: string = 'Todos';

  get productosFiltrados() {
    return this.productos.filter(producto => {
      const coincideCategoria = this.categoriaSeleccionada === 'Todos' || producto.categoria === this.categoriaSeleccionada;
      const coincideBusqueda = producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  actualizarTerminoBusqueda(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.terminoBusqueda = inputElement.value;
  }

}
