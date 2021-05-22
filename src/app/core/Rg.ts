export class Rg {

    public constructor(
        public uid: string,                  // ID de usuário
        public number: number,            // numero do RG
        public numberCopy: number,        // numero da via: primeira via | segunda via
        public dateExpedition: Date,      // Data da expedicao        
        public issuingBody: string,       // orgao emissor [SSP - secretaria de seguranca publica]
        public name: string,              // nome completo
        public father: string,            // nome do pai
        public mother: string,            // nome da mae
        public naturalness: string,       // naturalidade [cidade /* estado]
        public origin: string,            // origem do documento
        public cpf: string,               // numero do cpf
        public birthday: Date,            // data de aniversario
        public photo: any,                // foto no 
        public digital: any,              // foto da impressao digirta do polegar
        public signature: any             // foto da assinatura 

    ) {

    }

    public id(uid: string = '') {
        if(uid.length > 10) { this.uid = uid }
        return this.uid
    }

    public getNumber(): number {
        return this.number
    }

    public setNumber(number: number):number {
        return this.number = number
    }

    public getNumberCopy(): number {
        return this.numberCopy
    }

    public setNumberCopy(numberCopy: number): number {
        return this.numberCopy = numberCopy
    }

    public getDateExpedition(): Date {
        return this.dateExpedition
    }

    public setDateExpedition(dateExpedition: Date): Date {
        return this.dateExpedition = dateExpedition
    }

    public getIssuingBody(): string {
        return this.issuingBody
    }

    public setIssuingBody(issuingBody: string): string {
        return this.issuingBody = issuingBody
    } 

    public getName(): string {
        return this.name
    }

    public setName(name: string): string {
        return this.name = name
    }

    public getFather(): string {
        return this.father
    }

    public setFather(father: string): string {
        return this.father = father
    }

    public getMother(): string {
        return this.mother
    }

    public setMother(mother: string): string {
        return this.mother = mother
    }

    public getNaturalness(): string {
        return this.naturalness
    }

    public setNaturalness(naturalness: string): string {
        return this.naturalness = naturalness
    }

    public getOrigin(): string {
        return this.origin
    }

    public setOrigin(origin: string): string {
        return this.origin = origin
    }

    public getCpf(): string {
        return this.cpf
    }

    public setCpf(cpf: string): string {
        return this.cpf = cpf
    }

    public getBirthday(): Date {
        return this.birthday
    }

    public setBirthday(birthday: Date): Date {
        return this.birthday = birthday
    }

    public getPhoto(): any {
        return this.photo
    }

    public setPhoto(photo: any) {
        return this.photo = photo
    }

    public getDital(): any {
        return this.digital
    }

    public setDigital(digital: any): any {
        return this.digital = digital
    }

    public getSignature(): any {
        return this.signature
    }

    public setSignature(signature: any): any {
        return this.signature = signature
    }

    public mock() {
        
    }
}