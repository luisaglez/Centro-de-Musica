import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';


import{ProductoService } from '../../../services/producto.service';

import{Producto} from '../../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();


  }

  onSubmit(ProductoForm: NgForm)
  {
    if(ProductoForm.value.$key== null)
    this.productoService.insertProducto(ProductoForm.value);
    else
    this.productoService.updateProducto(ProductoForm.value);
    this.resetForm(ProductoForm);
  }
  resetForm(productoForm?: NgForm)
  {
    if(productoForm != null)
    productoForm.reset();
    this.productoService.selectedProducto= new Producto();
  }

}
