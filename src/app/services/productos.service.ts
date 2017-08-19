import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos:any [] = [];
  	productos_filtrado:any [] = [];
	cargando:boolean = false;

  	constructor( private http:Http ) { 
  		this.cargar_prouductos();
  	 }

  	 public buscar_producto( parametro:string ){
	    if (this.productos.length === 0) {
	      this.cargar_prouductos().then( () => {
	        //termino de la carga
	        this.filtrar_productos(parametro);
	      });
	    }else{
	      this.filtrar_productos(parametro);
	    }
	  }

	  private filtrar_productos( parametro:string ){
	    this.productos_filtrado = [];
	    parametro = parametro.toLowerCase();
	    this.productos.forEach( prod => {
	      if ( prod.categoria.indexOf( parametro ) >=0 || prod.titulo.toLowerCase().indexOf( parametro ) >=0 ) {
	        this.productos_filtrado.push(prod);
	      }
	    })
	  }

	  public cargar_producto( cod:string){
	  	return this.http.get(`https://portafolio-61cf8.firebaseio.com/productos/${cod}.json`)
	  }

	  public cargar_prouductos(){
	  	let promesa = new Promise( (resolve, reject) => { 
	        this.http.get("https://portafolio-61cf8.firebaseio.com/productos_idx.json")
	      .subscribe(res => {
	        this.cargando = true;
	        this.productos = res.json();
	        resolve();
	      });
	    });
	    return promesa;
	  }

}
