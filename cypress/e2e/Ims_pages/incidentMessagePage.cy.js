class IncidentMessagePage{
    message_button = "p[class='mt-1']"
    text_area = "div[data-placeholder*='Write message..']"
    reply_button ="button[type='submit'] p"

    click_message_button(){
        cy.get(this.message_button).click()
    }
    add_chat_message_to_incident(data){
        cy.get(this.text_area)
        .type(data)
        cy.get(this.reply_button)
        .then(($button) => {
            // Check if the button is enabled
            const isButtonEnabled = !$button.prop('disabled');
            if (isButtonEnabled) {
              cy.wrap($button)
              .click({force:true});
            } else {
              cy.log('Button is disabled. Cannot click on it.');
            }
          })
}

}
export default IncidentMessagePage;