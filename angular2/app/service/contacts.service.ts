
import { Contact } from "../class/contact";
import { CONTACTS } from "../data/contacts.data";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactsService{
	getContacts (){
		return Promise.resolve(CONTACTS);
	}
	getContact (id){
		return CONTACTS.filter(function(o) {
			return o.id === id;
		})[0];
	}
}
