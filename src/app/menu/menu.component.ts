import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { Menu } from '../menu/Menu'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
    
    
    public menu: Menu
    public consults: any[] = []

    perfil: any = {
        name: "Dr. Rafael Lírio",
        profession: "Advogado",
        logoSimpleUrl: "assets/images/rafael-adv-logo-r-white.png",
        logoUrl: "assets/images/rafael-adv-logo-white.png"
    }

    constructor(private angular: Angular2MaterializeV1Service) {
        
        this.menu = new Menu

        this.menu.setItem( {name: "Escritório", icon: "account_balance", uri:"" })
        this.menu.setItem({ name: "Atuação", icon: "business_center", uri:"" })
        this.menu.setItem({ name: "Contato", icon: "contact_mail", uri:"" })


        let submenu = [] as any
        //submenu.push(this.menu.buildItem({ name: "Meu Processo", icon: "receipt", uri:"process" }))
        submenu.push(this.menu.buildItem({ name: "Atendimento", icon: "assignment_ind", uri: "attendance" }))
        submenu.push(this.menu.buildItem({ name: "Procuração", icon: "receipt", uri: "procuration" }))
        submenu.push(this.menu.buildItem({ name: "Declaração", icon: "receipt", uri: "hyposufficiency" }))

        this.menu.setItem({ name: "Consultas", icon: "recent_actors", uri:"solicit", submenu: submenu })

        console.log("MENU: ", this.menu)

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        //this.angular.initDropdown('.dropdown-content');
    }

}
