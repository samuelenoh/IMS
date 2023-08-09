class Settings{

click_on_settings_tab(){
    cy.contains("Settings")
    .click({force:true})
}
click_on_users(){
    cy.contains("Users")
    .click()
}
click_on_Admin(){
    cy.contains("Admin")
    .click()
}
click_on_Agents(){
    cy.contains("Agents")
    .click()
}
click_on_Agent_group(){
    cy.contains("Agent Groups")
    .click()
}
click_on_Incident_Types(){
    cy.contains("Incident Types")
    .click() 
}
click_on_Incident_Status(){
    cy.contains("Incident Status")
    .click()
}
click_on_Severity_Level(){
    cy.contains("Severity Level")
    .click()
}
click_on_Location(){
    cy.contains("Location")
    .click()
}

}
export default Settings;