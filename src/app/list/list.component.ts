import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service'
import { PersonFactory } from '../person/Person.fatory';
import { User } from '../user/user'


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    @Output () user = new EventEmitter <String> ();
    @Output () address = new EventEmitter <String> ();
    @Output () person = new EventEmitter <String> ();

    public users: any
    private service: FirebaseService
    public search: any

    constructor() {
        this.service = new FirebaseService
    }

    ngOnInit(): void {
        this.service.users((users: Object[]) => {
            this.users = users
        })
    }

    public select(user: any) {
        
        this.service.loadAddress(user.id, (address: any)=> {

            this.service.loadPerson(user.id, (person: any)=> {

                console.log("MOUNT PERSON FACTORY: ", person)
                this.user.emit(user)
                this.address.emit(address)
                this.person.emit(person)
            })

        } )
    }

    public toggleSelect(element: any) {
        element.target.classList.toggle("active")
    }

}

