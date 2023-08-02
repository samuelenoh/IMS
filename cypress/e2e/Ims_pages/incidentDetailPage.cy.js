class IncidentDetailPage{


    
    verify_incident_detail_page_title(){
        const detail ="Incident Details"
        cy.contains(detail)
        .then(($text) => {
            const text =$text.text()
        cy.log(text); 
        cy.expect(text)
        .to.equal(detail);
     });  
    }
}
export default IncidentDetailPage;