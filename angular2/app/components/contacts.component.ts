import { Component, OnInit } from "@angular/core";

import { Contact } from "../class/contact";
import { ContactsService } from "../service/contacts.service";

@Component({
	selector : "<contacts></contacts>",
	templateUrl : "app/templates/contacts.component.html",
})
export class ContactsComponent implements OnInit{
	contacts: Contact[];
	selectedContact: Contact;
	constructor (
			private contactsService: ContactsService
		){

	}
	getContacts (){
		this.contacts = this.contactsService.getContacts();		
	}
	ngOnInit (){
		this.getContacts();
	}
}