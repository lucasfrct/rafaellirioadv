import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';

@Component({
    selector: 'app-attendance',
    templateUrl: './attendance.component.html',
    styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit, AfterViewInit {

    constructor(private angular: Angular2MaterializeV1Service) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.angular.updateTextFields()
    }

}
