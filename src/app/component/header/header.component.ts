import { Component } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

	constructor( public _is:InfoService, private router:Router ){

	}

	buscar_producto( parametro:string ){
			this.router.navigate( ['buscar', parametro] );
		}

}
