import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toi',
    templateUrl: './toi.component.html',
    styleUrls: ['./toi.component.css']
})
export class ToiComponent implements OnInit {

    public comarca: any = "São Francisco do Itabapoana"
    public name: any = "--nome ou razão social-- "
    public cnpj: any = "0000000000/000-00"
    public cpf: any = "000000000-00"
    public email: any = "aaa@aaaaa.com"
    public street: any = "--rua--"
    public number: any = "000"
    public district: any = "--bairro--"
    public city: any = "--cidade--"
    public state: any = "--estado--"
    public cep: any = "--cep--"
    public description01: any = "--descrição--"
    public date: any = "--data--"
    
    public user = {
        name: "",
        tel: "",
        email: ""
    }

    public address = {
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
        
    }

    ngOnInit(): void {
    }

    public loadUser(user: any) { this.user = user }
    public loadAddress(address: any) { this.address = address }
    public loadPerson(person: any) { this.person = person }

}
