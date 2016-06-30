import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router-deprecated';

import { Contact } from "../class/contact";
import { ContactsService } from "../service/contacts.service";

@Component({
	selector : "<contacts></contacts>",
	templateUrl : "app/templates/contacts.component.html",
	styleUrls : [
			"app/style/contacts.component.css",
		],
})
export class ContactsComponent implements OnInit{
	contacts: Contact[];
	selectedContact: Contact;
	constructor (
			private router: Router,
			private contactsService: ContactsService
		){

	}
	ngOnInit() {
		this.getContacts();
	}
	select (contact){
		this.selectedContact = contact;
	}
	getContacts () {
		this.contactsService.getContacts().then(
			contacts => this.contacts = contacts
			);		
	}
	gotoDetail (){
		this.router.navigate(["Detail",{
			id : this.selectedContact.id
		}]);
	}
}