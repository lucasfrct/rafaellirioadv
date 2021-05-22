import { Person } from './Person'

export class PersonFactory extends Person {

    public constructor({uid = ''}) {
        super(uid, '', '', '', 0, '', '', '', 0)
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