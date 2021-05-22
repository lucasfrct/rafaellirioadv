import { PersonFactory } from '../person/Person.factory'

export class Client extends PersonFactory{   

    protected representartives: any[] = []
    protected contraryParts: any[] = []

    public constructor({ uid = ''}){
        super({uid: uid})
    }

    public addRepresentative(representaitve: PersonFactory): PersonFactory {
        representaitve.id(this.uid)
        this.representartives.push(representaitve)
        return representaitve
    }

    public getRepresentatives(): any[] {
        return this.representartives
    }

    public addContraryParts(contraryPart: PersonFactory): PersonFactory {
        contraryPart.id(this.uid)
        this.contraryParts.push(contraryPart)
        return contraryPart
    }

    public getContraryParts(): any[] {
        return this.contraryParts
    }

    

}