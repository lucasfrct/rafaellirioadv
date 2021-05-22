import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { Procuration } from './Procuration'
import { FirebaseService } from '../firebase/firebase.service'

@Component({
    selector: 'app-procuration',
    templateUrl: './procuration.component.html',
    styleUrls: ['./procuration.component.css']
})
export class ProcurationComponent implements OnInit, AfterViewInit {


    modal: any = null

    public control: any = {
        visualize: false,
    }

    //public Procuration: Procuration

    constructor(private materialize: Angular2MaterializeV1Service, private firebase: FirebaseService) { 
        
        //this.Procuration = new Procuration
        //console.log("PRO", this.Procuration)
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.modal = this.materialize.initModal("#modal-procuration")
        
        setTimeout(() => {
            this.materialize.updateTextFields()
        }, 10);

        setTimeout(() => {
            this.firebase.procurations((data: any)=> {
                
            })
        }, 2000);
    }

    public visualize() {
        this.modal.open()
    }

    public save() {
        //console.log("SAVE PROCURATION: ", this.Procuration)
        //this.firebase.procuration(this.Procuration)
       
    }

}
