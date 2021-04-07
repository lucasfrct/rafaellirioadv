export class Country {

    public name: string = "Brasil"
    public acronym: string = "BR"
    // Estado
    public state: string = ""
    // Federal Unit | unidade federal | sigla
    public FU: string = ""
    public city: string = ""
    public CEP: string = ""

    constructor({ 
        name= 'Barsil', 
        acronym= 'BR', 
        state= 'Riio de Janeiro', 
        fu= 'RJ', 
        city= 'São Francisco do Itabapoana', 
        cep = "28230-000" 
    }) {
        this.name = name
        this.acronym = acronym
        this.state = state
        this.FU = fu
        this.city = city
        this.CEP = cep
    }

    
}
