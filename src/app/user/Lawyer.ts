import { PersonFactory } from '../person/Person.factory'

export class Lawyer extends PersonFactory {
    
    stateOAB: string = ""
    OAB: string = "" 

    public constructor() {
        super({})
    }
}