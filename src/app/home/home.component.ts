import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {


    constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { 

    }

    ngOnInit(): void { }

    public ngAfterViewInit(): void {
        this.angular2MaterializeService.autoInit()
    }

}