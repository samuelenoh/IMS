class IncidentTypePage{
    name_field = "input[placeholder='Name']"
    description_field = "textarea[name='description']"
    click_incident_type(){
        cy.contains("Incident Types")
        .click({force:true})
    }
    click_add_new_incident_type(){
        cy.contains("Add New Incident")
        .click()
    }
    enter_incident_type_name(data){
        cy.get(this.name_field)
        .should("be.empty")
        .type(data)
    }
    select_agent(){
        cy.get("div[class='relative z-10'] div:nth-child(2)")
        // .contains("select an agent")
        .click()
    }
    enter_incident_type_description(data){
        cy.get(this.description_field)
        .should("be.empty")
        .type(data)
    }
    

}
export default IncidentTypePage;