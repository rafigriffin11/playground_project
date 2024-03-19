describe('Frames Test', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err.message);
            return false;
        });
    });
    it('finds text inside of frames', () => {
        cy.visit('https://demoqa.com/frames');
        cy.frameLoaded('#frame1').then(($iframe) => {
            const iframeContent = $iframe.contents().find('body');
            cy.wrap(iframeContent).find('input').type('This is a sample page')
        })
    });
    it('finds text inside of frames', () => {
        cy.visit('https://demoqa.com/frames');
        cy.frameLoaded('#frame2').then(($iframe) => {
            const iframeContent = $iframe.contents().find('body');
            cy.wrap(iframeContent).find('input').type('This is a sample page')
        })
    });
})


// it('finds text in iframe', () => {
//     cy.visit('https://demoqa.com/frames').contains('This is a sample page')
//     cy.get('iframe')
// })