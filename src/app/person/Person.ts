import { UserFactory } from '../user/User.factory'
import { AddressFactory } from '../address/Address.factory'
import { Rg } from '../core/Rg'
import { RgFactory } from '../core/Rg.factory'

export class Person extends UserFactory {

    public mainAddress: AddressFactory
    public rg: Rg

    protected addresses: any[] = []
    protected phones: any[] = []
    
    constructor(
        uid: string, 
        name: string, 
        nickname: string, 
        email: string, 
        tel: number,
        public nacionality: string,
        public marital: string,
        public profession: string,
        public phone: number

    ) {
        super({uid, name, nickname, email, tel})
        
        this.mainAddress = new AddressFactory({uid: this.uid})
        this.rg = new RgFactory({uid: this.uid})
    }

    public addAddress(address: AddressFactory): AddressFactory {
        this.addresses.push(address)
        return address
    }

    public getAddresses(): any[] {
        return this.addresses
    }

    public getMainAddress(): AddressFactory {
        return this.mainAddress
    }

    public setMainAddress(address: AddressFactory): AddressFactory {
	    return this.mainAddress = address
    }

    public addPhone(phone: number): number {
        this.phones.push(phone)
        return phone
    }

    public getPhones(): any[] {
        return this.phones
    }

    public getRg(): Rg {
        return this.rg
    }

    public setRg(rg: Rg): Rg {
        return this.rg = rg
    }

    public getNacionality(): string {
        return this.nacionality
    }

    public setNacionality(nacionality: string): string {
        return this.nacionality = nacionality
    }

    public getMarital(): string {
        return this.marital
    }

    public setMarital(marital: string): string {
        return this.marital = marital
    }

    public getProfession(): string {
        return this.profession
    }

    public setProfession(profession: string): string {
        return this.profession = profession
    }

    public mock() {
        
    }
}