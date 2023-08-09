class AgenGroupPage{

    name_filed = "input[placeholder='Name']"
    description_field = "textarea[name='description']"
    check = "input[type='checkbox']"


    click_agent_group(){
        cy.contains("Agent Groups")
        .click({force:true})
    }
    click_add_new_agent_group(){
        cy.contains("Add New Agent Group")
        .should("be.visible")
        .click({force:true})
    }
    enter_agent_group_name(data){
        cy.get(this.name_filed)
        .should("be.empty")
        .type(data)
    }
    enter_agent_group_description(data){
        cy.get(this.description_field)
        .should("be.empty")
        .type(data)
    }
    select_agent(){
        cy.get('.flex-wrap > .flex').click()
        cy.get(this.check)
    }
    click_saveBtn(){
        cy.contains("Save")
        .click()
    }
}
export default AgenGroupPage;