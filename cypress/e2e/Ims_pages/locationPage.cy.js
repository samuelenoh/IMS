class Location{

    nameField = "#name"
    descriptionField = "textarea[name='description']"
    locationCreated = ".bg-white > :nth-child(1) > :nth-child(1)"

    click_add_new_location(){
        cy.contains("Add New Location")
        .click()
    }
    enter_location_name(data){
        cy.get(this.nameField)
        .type(data)
    }
    enter_location_description(data){
        cy.get(this.descriptionField)
        .type(data)
    }
    verify_location_created(expectedText){
        cy.get(this.locationCreated)

        .invoke('text')
        .then((actualText) => {
          expect(actualText).equal(expectedText); 
        });
    }
   
}
export default Location;