import { Person } from './Person'

export class PersonFactory extends Person {

    public constructor({uid = ''}) {
        super({})
        this.uid = uid
    }

    public user() {
        return { uid: this.uid, birthday: this.birthday, name: this.name, nickname: this.nickname, email: this.email, tel: this.tel }
    }



    public get() {
        return { uid: this.uid, cpf: this.cpf, rg: this.rg }
    }

    public mock() {
        this.name = "Lucas Costa"
        this.nickname = "lucasfrct"
        this.email = "lucasfrct@gmail.com"
        this.tel= "(88) 98158-4026"
        /*this.cep = "63430000"
        this.city = "Icó"
        this.district = "Cidade Nova"
        this.number = "318"
        this.state = "CE"
        this.street = "Francisco Caetano Dantas"
        this.cpf = "08721587647"
        this.rg = "562284734"*/
    }

    public autoValidade(): any {
        let errors = { 
            name: this.validateName(this.name, 9)
        }

        return errors
        
    }

    public validateName(name: string = '', inferior = 3,  superior = 11): any {
        let valid: any = null

        if(name.length <= inferior) valid = null
        if(name.length > inferior ) valid = false
        if(name.length >= superior) valid = true

        console.log("Validate name: ", valid)

        return  valid
    }
}