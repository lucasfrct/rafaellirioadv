import { Address } from './Address'

export class AddressFactory extends Address {

    constructor({ uid = '', cep = '', city = '', district = '', number = '', state ='', street = ''}) {  
        super(uid, cep, city, district, number, state, street)
    }

    public mock() {
        this.cep= "634300000"
        this.city = "Icó"
        this.district = "Cidade Nova"
        this.number = "318"
        this.state = "CE"
        this.street = "Av. Francisco Caetano Dantas"
    }
}