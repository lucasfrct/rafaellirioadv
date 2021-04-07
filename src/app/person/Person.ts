export class Person {

    cpf: string = ""
    rg: string = ""

    constructor({ cpf = '', rg = ''}) {
        this.cpf = cpf
        this.rg = rg
    }
}

console.log("person")