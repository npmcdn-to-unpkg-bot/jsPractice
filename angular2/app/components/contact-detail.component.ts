import { Component, OnInit } from "@angular/core";
import { RouteParams } from '@angular/router-deprecated';

import { Contact } from "../class/contact";
import { ContactsService } from "../service/contacts.service";

@Component({
	selector : "contact-detail",
	templateUrl : "app/templates/contact-detail.component.html",
})

export class ContactDetailComponent implements OnInit{
	contact: Contact;
	constructor (
		private contactService: ContactsService,
		private routeParams: RouteParams
		){

	}
	ngOnInit (){
		let id = this.routeParams.get("id");
		this.contact = this.contactService.getContact(id);
	}

}