import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Country } from '../country/country'
import { FirebaseService } from '../firebase/firebase.service'

@Component({
    selector: 'app-toi',
    templateUrl: './toi.component.html',
    styleUrls: ['./toi.component.css']
})
export class ToiComponent implements OnInit, AfterViewInit {

    protected service: FirebaseService

    public description01: any = "--descrição--"

    public country = { city: "" }

    public company = {
        name: "LIGHT SERVIÇOS DE ELETRICIDADE S/A",
        cnpj: "00.000.000/0001-46",
        street: 'Avenida Marechal Floriano',
        number: '168',
        district: "Centro",
        city: "Rio de Janeiro",
        state: 'RJ',
        cep: "20080-002"

    }

    public client = {
        code: "00000000",
        street: 'Avenida Marechal Floriano',
        number: "100",
        district: "Centro",
        city: "Rio de Janeiro",
        state: "RJ",
        cep: "20080-002",
        attendance: [
            { code: "0000000", date: "00/00/0000", }
        ],
        fines: [
            { value: "000,00" }
        ],
        protocols: [
            { number: '00000000000000000000', }
        ]
    }
    
    public user: any = {
        name: "",
        tel: "",
        email: ""
    }

    public address: any = {
        cep: "",
        city: "",
        district: "",
        number: "",
        state: "",
        street: ""
    }

    public person: any = {
        cpf: ""
    }

    constructor() {
        this.service = new FirebaseService
    }

    ngOnInit(): void {
        this.country = new Country({})
    }

    ngAfterViewInit(): void {
        //this.service.comarcaAdd(new Country(this.county))
    }

    public loadUser(user: any) { this.user = user }
    public loadAddress(address: any) { this.address = address }
    public loadPerson(person: any) { this.person = person }


}
