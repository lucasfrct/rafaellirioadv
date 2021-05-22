import { PersonFactory } from './Person.factory'

export class PersonLegal extends PersonFactory {

    constructor(
        public lins: string = '',
        public stateRegistration: string = '',
        public cityRegistration: string = ''
    ) {
        super({})
    }
    
}