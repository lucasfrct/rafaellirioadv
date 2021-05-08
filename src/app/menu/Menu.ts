
export class Menu {

    protected icon: string = "menu"
    protected itens: any[] = []
    protected routes: any[] = []

    constructor() { }

    public setIcon(icon: string): string {
        return this.icon = icon
    }

    public getIcon(): string {
        return this.icon
    }

    public setItem(item: any): any {
        this.itens.push(this.buildItem(item))
        this.routes.push(item.uri)
        return item
    }

    public getItens(): any[] {
        return this.itens
    }

    public setRoute(route: string) {
        this.routes.push(route)
    }

    public getRoutes(): any[] {
        return this.routes
    }

    public buildItem({ name = "", icon = "", uri = "", submenu = [] as any}): any {
        
        const that = this
        if(submenu.length > 0) {
            submenu.map((item: any)=> {
                item.uri = `${uri}/${item.uri}`
                that.routes.push(item.uri)
                return item
            })
        }

       return { name: name, icon: icon, uri: uri, submenu: submenu }
    }
}