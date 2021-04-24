import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

    public service: any
    public tab: any
    public find: string = ""

    public swipes: any = { 
        ids: ["swipe1", "swipe2", "swipe3", "swipe4"],
        current: 'swipe1',
    }

    public menu: any[] = [
        { name: "recebidos", uri: "received" },
        { name: "processos", uri: "process" }
    ]

    public received: any[] = [
        { icon: "gavel", name: "Rafael", processType: "TOI", description: "Petição" },
        { icon: "gavel", name: "Isnael", processType: "TOI", description: "Petição" },
        { icon: "gavel", name: "Leandro", processType: "TOI", description: "Petição" },
        { icon: "gavel", name: "Leonardo", processType: "TOI", description: "Petição" }
    ]

    constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { }

    ngOnInit(): void {  }
    
    ngAfterViewInit(): void {
        this.tab = this.angular2MaterializeService.initTabs('#tabmenu', { swipeable: true} )
    }

    public tabExe() {
        console.log("click TAB", this.tab)
        this.swipeNext()
    }

    public swipeNext() {
        let lenght = this.swipes.ids.length
        let index = this.swipes.ids.indexOf(this.swipes.current)
        if((index + 1) < lenght) {
            console.log("next", this.swipes.ids[(index + 1)])
            this.swipes.current = this.swipes.ids[(index + 1)]
            this.tab.select(this.swipes.ids[(index + 1)])
        }        
    }

    public swipePrev() {
        let index = this.swipes.ids.indexOf(this.swipes.current)
        if((index - 1) >= 0) {
            console.log("prev", this.swipes.ids[(index - 1)])
            this.swipes.current = this.swipes.ids[(index - 1)]
            this.tab.select(this.swipes.ids[(index - 1)])
        }
        
    }


    public findSet(uri: string) {
        this.find = uri
    }

}
