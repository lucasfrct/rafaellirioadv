export class Address {
    cep: string = ''
    city: string = ''
    district: string = ''
    number: string = ''
    state: string = ''
    street: string = ''

    constructor({ cep = '', city = '', district = '', number = '', state ='', street = ''}) {
        this.cep = cep
        this.city = city
        this.district = district
        this.number = number
        this.state = state
        this.street = street
    }
}