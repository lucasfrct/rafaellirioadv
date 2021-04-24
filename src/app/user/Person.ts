import { User } from './User'
import { Address } from '../address/Address'

export class Person extends User {

    public rg: string = ""
    public cpf: string = ""
    public nacionality: string = ""
    
    public marital: string = ""

    public profession: string = ""

    public Addresses: any[] = []
    public Address: Address

    constructor({ uid = ''}) {
        super({})
    
        this.Address = new Address({uid: this.uid})

    }

    public addAddress() {
        this.Addresses.push(this.Address)
    }
}