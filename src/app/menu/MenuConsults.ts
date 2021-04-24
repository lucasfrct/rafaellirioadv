export class MenuConsults {

    icon: string = "recent_actors"
    
    itens: any[] = [
        { name: "Meu Processo", icon: "assignment", uri:"solicit/process" },
        { 
            name: "Solicitação", 
            icon: "library_books", 
            uri:"solicit",
            submenu: [
                { name: "Registro", icon: "assignment_ind", uri: "solicit/register" },
                { name: "Procuração", icon: "receipt", uri: "solicit/procuration" }
            ]
        },
    ]

    constructor() { }

    public setItens({ name = "", icon = "", uri = "", submenu = []}) {
        this.itens.push({ name: name, icon: icon, uri: uri, submenu: submenu})
    }
}