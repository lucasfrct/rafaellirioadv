import { Rg } from './Rg'

export class RgFactory extends Rg {

    public constructor({ 
        uid = '',
        number = 0,
        numberCopy = 0,
        dateExpedition = new Date(),
        issuingBody = '',
        name = '',
        father = '',
        mother = '',
        naturalness = '',
        origin = '',
        cpf = "",
        birthday = new Date(),

    }) {
        super( 
            uid,
            number,
            numberCopy,
            dateExpedition,
            issuingBody,
            name,
            father,
            mother,
            naturalness,
            origin,
            cpf,
            birthday, 
            '','', ''
        )
    }

    public mock() {
        this.number = 12341234
        this.numberCopy = 2
        this.dateExpedition = new Date('2015/03/06')
        this.issuingBody = "SSP"
        this.name = "Lucas Ferreira Costa"
        this.father = "Roberto Costa"
        this.mother = "Maria Helena Ferreira Costa"
        this.naturalness = "Belo Horizonte - MG"
        this.origin = "Icó-CE Lima Campos CC:LLV/FLS: 103"
        this.cpf = "08721587647"
        this.birthday = new Date('1987/10/19')
    }
}