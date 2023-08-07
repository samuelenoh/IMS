class IncidentStatusPage{

    name_field = "input[placeholder='Name']"
    description_feild = "textarea[name='description']"
    show_reply_btn = "#show_on_reply"
    
    click_incident_status(){
        cy.contains("Incident Status")
        .click()
    }
    click_add_new_incident_status(){
        cy.contains("Add New Incident Status")
        .click()
    }
    enter_status_name(data){
        cy.get(this.name_field)
        .should("be.empty")
        .type(data)
    }
    enter_status_description(data){
        cy.get(this.description_feild)
        .should("be.empty")
        .type(data)
    }
    click_showReply_btn(){
        cy.get(this.show_reply_btn)
        .should("not.be.checked")
        .check()
    }
}
export default IncidentStatusPage;