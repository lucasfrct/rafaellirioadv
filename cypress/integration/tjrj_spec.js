describe('Acess TJ/RJ ', {
    viewportHeight: 1080,
    viewportWidth: 1280,
  }, () => {
    
    
    
    beforeEach(()=> {
        cy.visit('https://www3.tjrj.jus.br/segweb/faces/login.jsp?indGet=true&SIGLASISTEMA=PORTALSERV',  { timeout: 3000, onLoad: OnLoad })

        
        cy.get('#txtLogin').type('12960984781', { delay: 300 })
        cy.get('#txtSenha').type('rafixke12', { delay: 100 })

        cy.get('#btnEnviar').click()
        // HOVER: cy.get('#layout_3').trigger('mouseover')
    })
    
    it('Acess TJ/RJ', () => { })
    
    function OnLoad(contenWindow) {
        
    }

})