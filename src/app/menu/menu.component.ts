import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu/Menu'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
     
    public menu: Menu
    public consults: any[] = []

    person: any = {
        name: "Dr. Rafael Lírio",
        profession: "Advogado",
        logoSimpleUrl: "assets/images/rafael-adv-logo-r-white.png",
        logoUrl: "assets/images/rafael-adv-logo-white.png"
    }

    constructor() {
        
        this.menu = new Menu
    
        this.menu.setItem({name: "Escritório", icon: "account_balance", uri:"" })
        this.menu.setItem({ name: "Atuação", icon: "business_center", uri:"" })
        this.menu.setItem({ name: "Contato", icon: "contact_mail", uri:"" })

        let submenu = [] as any
        submenu.push(this.menu.buildItem({ name: "Atendimento", icon: "assignment_ind", uri: "attendance" }))
        //submenu.push(this.menu.buildItem({ name: "Meu Processo", icon: "receipt", uri:"process" }))
        //submenu.push(this.menu.buildItem({ name: "Procuração", icon: "receipt", uri: "procuration" }))
        //submenu.push(this.menu.buildItem({ name: "Declaração", icon: "receipt", uri: "hyposufficiency" }))

        this.menu.setItem({ name: "Consultas", icon: "recent_actors", uri:"solicit", submenu: submenu })

    }

    ngOnInit(): void {
    }

}
