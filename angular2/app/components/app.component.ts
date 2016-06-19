import { Component } from "@angular/core";

import { Contact } from "../class/contact";
import { ContactsService } from "../service/contacts.service";
import { ContactsComponent } from "./contacts.component";

@Component({
	selector : "my-app",
	template : `<h1>My first angular 2 app</h1>
			<contacts></contacts>
			`,
	styleUrls : ["app/style/style.css"],
	directives : [ContactsComponent],
	providers : [ContactsService]
})

export class AppComponent{
	
}