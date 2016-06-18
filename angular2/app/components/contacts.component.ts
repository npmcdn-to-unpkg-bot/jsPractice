import { Component, OnInit } from "@angular/core";

import { Contact } from "../class/contact";
import { ContactService } from "../service/contacts.service";
@Component({
	selector : "<contacts></contacts>",
	templateUrl : "app/tamplates/contacts.html",

});

export class Contacts implements OnInit{
	contacts: Contact[];
	selectedContact: Contact;
	constructor (
			private contactsService: ContactService
		){

	}
	getContacts (){
		this.contacts = this.contactsService.getContacts();		
	}
	ngOnInit (){
		this.getContacts();
	}
}