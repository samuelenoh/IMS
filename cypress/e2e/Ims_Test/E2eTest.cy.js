import Login from "../Ims_pages/LoginPage.cy";
import AgentIncidentPage from "../Ims_pages/agentIncidentPage.cy";
import IncidentDetailPage from "../Ims_pages/incidentDetailPage.cy";
import IncidentMessagePage from "../Ims_pages/incidentMessagePage.cy";
import Incident from "../Ims_pages/incidentPage.cy";
import IncidentStatusPage from "../Ims_pages/incidentStatusPage.cy";
import Location from "../Ims_pages/locationPage.cy";
import MyIncidentPage from "../Ims_pages/myIncidentPage.cy";
import Settings from "../Ims_pages/settings.cy";
import SeverityLevelPage from "../Ims_pages/severityLevelPage.cy";

describe(" ",()=>{
  const login = new Login()
  const incident = new Incident()
  const myIncident = new MyIncidentPage()
  const agentIncident = new AgentIncidentPage()
  const detailPage = new IncidentDetailPage()
  const message = new IncidentMessagePage()
  const setting = new Settings()
  const location = new Location()
  const severity = new SeverityLevelPage()
  const status = new IncidentStatusPage()
  
  let loginData,incidentData,lotionData,severityData,statusData;
  const file = 'file.pdf';

     before(" ", ()=>{
         
      cy.visit(Cypress.env('url'));
      
        // Load the fixture data before the test suite starts
        cy.fixture("ims_data.json").then((data) => {
           loginData = data[0]
           incidentData = data[1]
           lotionData = data[2]
           severityData = data[3]
           statusData = data[4]

        
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
      myIncident.click_add_new_incident()
      myIncident.enter_incident_title(incidentData.title)
      myIncident.select_incident_type()
      myIncident.enter_incident_message(incidentData.incident_message)
      myIncident.select_location()
      myIncident.file_upload(file)
      myIncident.click_saveBtn()
     
  })
  it("Verify incident created can be viewed in the incident detail page",()=>{
    incident.click_incident_created_in_table()
    incident.click_incidentTab()
    detailPage.verify_incident_detail_page_title()
  })
  it("Verify that a user can message an agent",()=>{
    message.click_message_button()
    message.add_chat_message_to_incident(incidentData.incident_message)
  })
  it("Verify that an agent can view incident assigned to them",()=>{
    incident.click_incidentTab()
    agentIncident.click_agent_incident()
    incident.click_incidentTab()
    incident.click_incident_created_in_table()
  })
  it("Verify that a user can message an agent",()=>{
    message.click_message_button()
    message.add_chat_message_to_incident(incidentData.incident_message)
    agentIncident.clicK_submit_reply()
  })
  it("Verify that an admin can create a location",()=>{
   setting.click_on_settings_tab()
   setting.click_on_Location()
   setting.click_on_settings_tab()
   location.click_add_new_location()
   location.enter_location_name(lotionData.name)
   location.enter_location_description(lotionData.description)
   myIncident.click_saveBtn()
   location.verify_location_created(lotionData.name)
  })
  it("Verify that an admin can create a severity level",()=>{
    setting.click_on_settings_tab()
    severity.click_severity_level()
    setting.click_on_settings_tab()
    severity.click_add_new_severity()
    severity.enter_severity_name(severityData.severity_name)
    severity.enter_severity_descruiption(severityData.description)
    myIncident.click_saveBtn()
    severity.verifying_severity_created()
   })
   it("Verify that an admin can create incindent status",()=>{
    setting.click_on_settings_tab()
    status.click_incident_status()
    setting.click_on_settings_tab()
    status.click_add_new_incident_status()
    status.enter_status_name(statusData.statusName)
    status.enter_status_description(statusData.description)
    status.click_showReply_btn()
   })
})