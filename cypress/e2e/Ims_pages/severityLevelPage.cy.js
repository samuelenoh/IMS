class SeverityLevelPage{

    name_feild = "#name"
    description_field = "textarea[name='description']"
   click_severity_level(){
    cy.contains("Severity Level")
    .click()
   }
   click_add_new_severity(){
    cy.contains("Add New Severity")
    .should("be.visible")
    .click()
   }
   enter_severity_name(data){
    cy.get(this.name_feild)
    .should("be.empty")
    .type(data)
   }
   enter_severity_descruiption(data){
    cy.get(this.description_field)
    .should("be.empty")
    .type(data)
   }
   verifying_severity_created(){
    cy.get("tbody tr:nth-child(1)")
    .contains("High low")
   }
}
export default SeverityLevelPage;