import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})

export class SlideComponent implements OnInit {

    person: any = {
        name: "Dr. Rafael Lírio",
        description: "Com anos de atuação e experiência de profissão em grandes escritórios, podemos lhe ajudar com soluções jurídicas de forma eficaz.",
        photoUrl: "assets/images/perfil.png"
    }



    constructor() { }

    ngOnInit(): void { }

}

