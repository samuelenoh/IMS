import Login from "../Ims_pages/LoginPage.cy";
import IncidentDetailPage from "../Ims_pages/incidentDetailPage.cy";
import IncidentMessagePage from "../Ims_pages/incidentMessagePage.cy";
import Incident from "../Ims_pages/incidentPage.cy";

describe(" ",()=>{
  const login = new Login()
  const incident = new Incident()
  const detailPage = new IncidentDetailPage()
  const message = new IncidentMessagePage()
  
  let loginData,incidentData;
  const file = 'file.pdf';

     before(" ", ()=>{
         
      cy.visit(Cypress.env('url'));
      
        // Load the fixture data before the test suite starts
        cy.fixture("ims_data.json").then((data) => {
           loginData = data[0]
           incidentData = data[1]
        
          })
    }) 

  it("Verifying logging into the system with valid credentials",()=>{
      login.enter_email(loginData.email)
      login.enter_password(loginData.password)
      login.click_signIn_Button()
      login.verify_success_message()
     
      
  })
  it("Verifying that a user can create an incident successfully",()=>{
     incident.click_incidentTab()
      incident.click_myIncident()
      incident.click_add_new_incident()
      incident.enter_incident_title(incidentData.title)
      incident.select_incident_type()
      incident.enter_incident_message(incidentData.incident_message)
      incident.select_location()
      incident.file_upload(file)
      incident.click_saveBtn()
     
  })
  it("Verify incident created can be viewed in the incident detail page",()=>{
    incident.click_incident_created_in_table()
    incident.click_incidentTab()
    detailPage.verify_incident_detail_page_title()
  })
  it("Verify the messaging functionality",()=>{
    message.click_message_button()
    message.add_chat_message_to_incident(incidentData.incident_message)
  })
})