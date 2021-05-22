import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

    colorMenu: string = "primary"
    
    public footer: any = {
        year: new Date().getFullYear(),
        owner: "Rafael Lírio Advogado",
        designer: "Lucas Costa"
    }

    constructor(private materialize: Angular2MaterializeV1Service, private router: Router) { }

    ngOnInit(): void { 
        
        this.router.events.subscribe((url)=> {
            this.colorMenu =  (
                this.router.url == "/" 
                || this.router.url == "/home"
            ) ? "" : "primary"

        })
    }

    public ngAfterViewInit(): void {

        this.materialize.autoInit()

    }

}