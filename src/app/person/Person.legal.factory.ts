import { PersonLegal } from './Person.legal'

export class PersonLegalFactory extends PersonLegal {

    constructor() {
        super()
    }
    
    public mock() {
        this.name = "Lucas Ferreira Costa"
        this.nickname = "lfrct"
        this.email = "lucasfrct@gmail.com"
        this.tel = 88981584026
        this.nacionality = "Barasileiro"
        this.marital = "casado"
        this.profession = "Produtor Audio Visual"
        this.phone = 88981584026
        this.rg.mock()
        this.mainAddress.mock()
        this.lins = "123456677890"
        this.stateRegistration = "123456677890"
        this.cityRegistration = "123456677890"
    }


}