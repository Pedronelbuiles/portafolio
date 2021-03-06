import { RouterModule, Routes } from '@angular/router';


import {
	PortafolioComponent,
	ItemComponent,
	AboutComponent,
	BuscarComponent
} from './component/index.paginas';

const app_routes: Routes = [
	{ path: 'home', component: PortafolioComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'buscar/:parametro', component: BuscarComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });