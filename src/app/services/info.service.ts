import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

	info:any = {};
	cargada:boolean = false;
	carga_fire:boolean = false;
	equipo:any[] = [];

  	constructor( public http:Http ) { 
  		this.carga_info();
  		this.cargando_fire();

  	 }

	public carga_info(){
		  	this.http.get("assets/data/info.pagina.json")
	  			 .subscribe(data => { this.cargada = true;
	  			 					  this.info = data.json();
	  			 					});
	   }

	   public cargando_fire(){
		  	this.http.get("https://portafolio-61cf8.firebaseio.com/equipo.json")
	  			 .subscribe(data => { this.carga_fire = true;
	  			 					            this.equipo = data.json();
	  			 					});
	   }  	 

}
