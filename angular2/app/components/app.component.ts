import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { Contact } from "../class/contact";
import { ContactsService } from "../service/contacts.service";
import { ContactsComponent } from "./contacts.component";
import { ContactDetailComponent } from "./contact-detail.component";

@Component({
	selector : "my-app",
	template : `<h1>My first angular 2 app</h1>
			<router-outlet></router-outlet>
			`,
	styleUrls : ["app/style/style.css"],
	directives : [
		ROUTER_DIRECTIVES,
	],
	providers : [
			ContactsService,
			ROUTER_PROVIDERS,
	],
})

@RouteConfig([
	{
		path : "/list",
		name : "List",
		component : ContactsComponent,
		useAsDefault: true,
	},
	{
		path : "/detail/:id",
		name : "Detail",
		component : ContactDetailComponent,
	}

])

export class AppComponent{
	
}