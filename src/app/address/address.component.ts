import { Component, OnInit, Input } from '@angular/core';
import { AddressFactory } from "./Address.factory"

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

    @Input() address: any

    constructor() { 
    }

    ngOnInit(): void {
    }

}
