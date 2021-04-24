import { ClientFactory } from '../user/Client.factory'
import { Lawyerfactory } from '../user/Lawyer.factory'
import { Address } from '../address/Address'

export class Procuration {
    
    public uid: string = ''
    public code: string = '001'

    public type: string = "Procuração"
    public title: string = 'Procuração'
    
    public action: string = 'em Ação de Declaração de Inexistência de Débito c/c Danos Morais'
    
    public date:string = '23 de Abril de 2021'

    public Client: ClientFactory
    public Lawyer: Lawyerfactory
    public Address: Address

    constructor() {
        this.Client = new ClientFactory
        this.Lawyer = new Lawyerfactory
        
        this.uid = this.Client.uid

        this.Address = new Address({uid: this.uid})

        this.mock()
    }

    public mock() {
        this.Address.street = "centro"
        this.Address.number = "01"
        this.Address.district = "Centro"
        this.Address.city = "Icó"
        this.Address.state = "CE"
        this. Address.cep = "63.430-000"

        this.date = String(new Date())

    }

}