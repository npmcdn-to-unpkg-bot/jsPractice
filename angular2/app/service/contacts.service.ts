
import { Contact } from "../class/contact";
import { CONTACTS } from "../data/contacts.data";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactsService{
	getContacts (){
		return CONTACTS;
	}
}
