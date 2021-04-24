

export class Address {
    
    public uid: string = ''
    public cep: string = ''
    public city: string = ''
    public district: string = ''
    public number: string = ''
    public state: string = ''
    public street: string = ''

    constructor({ uid = '', cep = '', city = '', district = '', number = '', state ='', street = ''}) { 
        this.uid = uid
        this.cep = cep
        this.city = city
        this.district = district
        this.number = number
        this.state = state
        this.street = street
    }
}