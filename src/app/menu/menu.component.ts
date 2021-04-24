import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu/Menu'
import { MenuConsults } from '../menu/MenuConsults'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public menu: Menu
    public consults: MenuConsults

    perfil: any = {
        name: "Dr. Rafael Lírio",
        profession: "Advogado",
        logoSimpleUrl: "assets/images/rafael-adv-logo-r-white.png",
        logoUrl: "assets/images/rafael-adv-logo-white.png"
    }

    constructor() {
        this.menu = new Menu
        this.consults = new MenuConsults
    }

    ngOnInit(): void {
    }

}
