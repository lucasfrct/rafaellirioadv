import { Person } from './Person'

export class Lawyer extends Person {
    
    stateOAB: string = ""
    inscriptionOAB: string = "" 

    public constructor() {
        super({})
    }
}