import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    public user = {
        id: "",
        name: "",
        nickname: "",
        tel: "",
        email: "",
        date: new Date()
    }

    public person = {
        id: "",
        cpf: "",
        rg: "",
    }

    public address = {
        id: "",
        street: "",
        number: "",
        district: "",
        city: "",
        state: "",
        cep: ""
    }

    public firebaseService: any
    
    constructor() {
        this.firebaseService = new FirebaseService
    }
    
    ngOnInit(): void { }

    public save() {
        
        var newKey = this.firebaseService.genId()
        
        this.user.id = newKey
        this.person.id = newKey
        this.address.id = newKey
        this.user.date = new Date()

        this.firebaseService.user(this.user)
        this.firebaseService.person(this.person)
        this.firebaseService.address(this.address)
    }

}
