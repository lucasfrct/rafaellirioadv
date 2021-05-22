export class Address {
    
    constructor(
        public uid: string,
        public cep: string,
        public city: string,
        public district: string,
        public number: string,
        public state: string,
        public street: string,
    ) { 
        
    }

    public mock() {
        
    }
}