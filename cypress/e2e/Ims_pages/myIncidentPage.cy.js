class MyIncidentPage{

    title = "#title"
    incident_type = "textarea[placeholder='Choose incident type']"
    incident_type_option = "label[for='optioned-1']"
    message = "textarea[name='description']"
    location = "textarea[placeholder='Select Location....']"
    location_option = "label[for='option-3']"
    add_fileBtn = "#files"
    save_btn = "div[class=''] button[type='submit']"

    
    click_add_new_incident(){
        cy.contains("Add New Incident")
        .click()
        cy.contains("Create New Incident")
        .should("contain","Create New Incident")
    }
    enter_incident_title(data){
        cy.get(this.title)
        .type(data)
        .should("have.value","broken screen")
    }
    select_incident_type(){
        cy.get(this.incident_type)
        .click()
        cy.get(this.incident_type_option).click()
        cy.get(this.incident_type)
        .each(($el, index, $list) => {
            const actualText= $el.text()
            const expectedText = 'Leaves';
            if(expect(actualText).to.equal(expectedText)){
                cy.wrap($el).click()
            }
        })
        }
    
    enter_incident_message(data){
        cy.get(this.message)
        .should("be.empty")
        .type(data)
        .and("not.be.empty")
    }
    select_location(){
        cy.get(this.location)
        .click()
        cy.get(this.location_option).click()
    }
    file_upload(fileName){
        cy.get(this.add_fileBtn)
        .attachFile(fileName)
    }
    click_saveBtn(){
        cy.contains("Save")
        .then(($button) => {
            // Check if the button is enabled
            const isButtonEnabled = !$button.prop('disabled');
            if (isButtonEnabled) {
              cy.wrap($button)
              .click({force:true});
            } else {
              cy.log('Button is disabled. Cannot click on it.');
            }
          });
          
    }
    
}
export default MyIncidentPage;