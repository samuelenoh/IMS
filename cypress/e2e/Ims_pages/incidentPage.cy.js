class Incident{
    addNew_incident = "button[type='submit']"
    
    save_btn = "div[class=''] button[type='submit']"
    incident_created = ".bg-white > :nth-child(1) > :nth-child(2)"
    message_button = "p[class='mt-1']"
    text_area = "div[data-placeholder*='Write message..']"
    reply_button ="button[type='submit'] p"

    click_incidentTab(){
        cy.get("p")
        .contains("Incidents")
        .click()
    }
    click_myIncident(){
        cy.get("p")
        .contains("My incidents")
        .click()
    }
    click_incident_created_in_table(){
        cy.get(this.incident_created)
        .click({force: true})
    }
}
export default Incident;