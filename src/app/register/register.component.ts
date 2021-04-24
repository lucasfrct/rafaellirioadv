import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { FirebaseService } from '../firebase/firebase.service'
import { PersonFactory } from '../user/Person.factory'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

    private service: FirebaseService
    public person: PersonFactory
    public erros: any
    
    constructor(private angular2MaterializeService: Angular2MaterializeV1Service) {
        this.service = new FirebaseService
        this.person = new PersonFactory({ uid: this.service.getId() })
        this.person.birthday = new Date()
        this.person.mock()
        //console.log("PERSON VALIDATE: ", this.person.autoValidade())
    }
    
    ngOnInit(): void { }
    
    ngAfterViewInit(): void  {
        this.angular2MaterializeService.initModal("#modalRegisteter")
        setTimeout(()=> { this.angular2MaterializeService.updateTextFields() }, 10)
            
    }
    
    public save(Person: PersonFactory) {
        console.log("PERSON: ", Person.autoValidade())

        

        this.service.user(Person.user())

        /*this.service.person(Person.get())
        this.service.address(Person.address())*/
    }

    public validateName(input: any) {
        console.log("t", input)
        let status = this.person.validateName(this.person.name)
        input.target.classList.remove('validate') 
        input.target.classList.remove('invalid') 
        input.target.classList.remove('valid') 
        if(status == null) input.target.classList.add('validate') 
        if(status == false) input.target.classList.add('invalid')
        if(status == true) input.target.classList.add('valid') 
    }

}
