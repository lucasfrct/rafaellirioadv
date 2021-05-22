import { Lawyer } from './Lawyer'

export class Lawyerfactory extends Lawyer{

    constructor(){
        super()
        this.mock()
    }

    public mock() {
        this.uid ="00000000000000000000000000000002"
        this.tel = 21979427649
        this.name = "Rafael Lírio Moreira"
        this.nacionality = "Brasileiro"
        this.marital = "Solteiro"
        this.profession = "Advogado"

        this.stateOAB = 'RJ'
        this.OAB = "214.790"

        /*this.Address.street = "Rua Major Graça"
        this.Address.number = "160"
        this.Address.district = "Gargaú,"
        this.Address.city = "São Francisco de Itabapoana"
        this.Address.state = "RJ"
        this.Address.cep = "28230-000"*/
    }


}