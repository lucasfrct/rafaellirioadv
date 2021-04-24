export class Menu {

    icon: string = "menu"
    
    itens: any[] =  [
        { name: "Escritório", icon: "account_balance", uri:"" },
        { name: "Atuação", icon: "business_center", uri:"" },
        { name: "Contato", icon: "contact_mail", uri:"" },
    ]

    constructor() { }

    public setItens({ name = "", icon = "", uri = ""}) {
        this.itens.push({ name: name, icon: icon, uri: uri})
    }
}