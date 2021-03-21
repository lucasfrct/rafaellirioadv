import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service'


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
    private firebaseService: any
    public search: any


    constructor() {
        this.firebaseService = new FirebaseService
    }

    ngOnInit(): void {
        this.firebaseService.users((users: any) => {
            this.users = users
            console.log("Users: ", users)
        })
    }

    public select(user: any) {
        
        this.firebaseService.loadAddress(user.id, (address: any)=> {

            this.firebaseService.loadPerson(user.id, (person: any)=> {
                console.log("select: ", user)
                console.log("adress", address)
                console.log("person", person)
                
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
