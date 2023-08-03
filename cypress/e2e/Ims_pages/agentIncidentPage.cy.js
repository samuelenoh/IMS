class AgentIncidentPage{

click_agent_incident(){
    cy.get("p")
    .contains("Agent's Incidents")
    .click()
}
clicK_submit_reply(){
    cy.contains("Submit")
    .click()
}

}
export default AgentIncidentPage;