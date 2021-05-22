import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1'
import { ClientFactory } from './Client.factory'
import { PersonFactory } from '../person/Person.factory'
import { PersonLegalFactory } from '../person/Person.legal.factory'

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, AfterViewInit {

    public client: ClientFactory
    public contraryPart: PersonLegalFactory
    public representative: PersonFactory

    public steps: any[] = [
        { title: "Cliente", id: "step-client"},
        { title: "Cliente Endereço", id: "step-address"},
        { title: "Representante Legal", id: "step-representative"},
        { title: "Parte Contrária", id: "step-contrary-part"},
        { title: "Relato dos Fatos", id: "step-facts"},
    ]

    private tab: any = null

    public control: any = {
        current: this.steps[0],
        check: false
    }

    constructor(public materialize: Angular2MaterializeV1Service) {
        
        this.client = new ClientFactory({})
        this.contraryPart =  new PersonLegalFactory()
        this.representative = new PersonFactory({})

        this.client.mock()
        
        this.contraryPart.mock()
        this.representative.mock()
        
        this.client.addContraryParts(this.contraryPart)
        this.client.addRepresentative(this.representative)

        console.log(this.client)
     }

    ngOnInit(): void {
    }

    ngAfterViewInit():void {
        setTimeout(()=> {
            this.tab = this.materialize.initTabs("#client-tab", { swipeable: false})
            this.materialize.updateTextFields()
        }, 10)
    }

    public next() {

        console.log("Client: ", this.client)

        this.control.current = this.steps[ this.steps.indexOf(this.control.current) + 1]
        
        if(this.control.current.id == this.steps[2].id && !this.control.check) {
            this.control.current = this.steps[ this.steps.indexOf(this.control.current) + 1]
        }

        this.tab = this.materialize.initTabs("#client-tab", { swipeable: true})
        this.tab.select(this.control.current.id)
        this.tab = this.materialize.initTabs("#client-tab", { swipeable: false})
    }

    public prev() {
        this.control.current = this.steps[ this.steps.indexOf(this.control.current) - 1]

        if(this.control.current.id == this.steps[2].id && !this.control.check) {
            this.control.current = this.steps[ this.steps.indexOf(this.control.current) - 1]
        }
        
        this.tab = this.materialize.initTabs("#client-tab", { swipeable: true})
        this.tab.select(this.control.current.id)
        this.tab = this.materialize.initTabs("#client-tab", { swipeable: false})
    }

    public save() {

    }

    public ChangeRepresentative(check: any) {
        this.control.check = check.checked
        console.log("Check: ", this.control.check)
    }

}
