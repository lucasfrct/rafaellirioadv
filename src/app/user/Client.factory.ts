import { Client } from './Client'

export class ClientFactory extends Client {

    public constructor(){
        super({})
        this.uid  = ''

        this.mock()
    }

    public mock() {
        this.uid = "0000000000000000000000000001"
        this.name = "Lucas Ferreira Costa"
        this.nacionality = "Brasileiro"
        this.marital = "Casado"
        this.profession = "Produtor Áudio Visual"
        this.rg = "56.228.473-4"
        this.cpf = '08721587647'
        this.Address.cep = "63.430-000"
        this.Address.street = "Av. Francisco Caetano Dantas"
        this.Address.number = "318"
        this.Address.district = "Cidade Nova"
        this.Address.city = "Icó"
        this.Address.state = "CE"
    }
}