labeltags=[
  { "labelname": "incident_state",        "labeltitle": "Same as RT" },
  { "labelname": "number",                "labeltitle": "The ID number of the incident" },
  { "labelname": "caller_id",             "labeltitle": "The student we're helping." },
  { "labelname": "u_contact",             "labeltitle": "The student we're helping (again).\nThis redundant for STC - elsewhere this might be someone's secretary, etc" },
  { "labelname": "notify",                "labeltitle": "'Email' means the student will be emailed. 'None' means they won't be notified of updates." },
  { "labelname": "contact_type",          "labeltitle": "How the student first contacted us regarding this incident." },
  { "labelname": "location",              "labeltitle": "STC leaves this blank for now." },
  { "labelname": "u_it_business_service", "labeltitle": "STC uses 'Personal Productivity' as default. Most common selections:\n\nPersonal Productivity\nEliApps\nEmail - Legacy" },
  { "labelname": "u_incident_type",       "labeltitle": "STC uses 'Service Interruption' as default.\nThe others should be used during more widespread problems than we deal with in the TTO." },
  { "labelname": "u_it_provider_service", "labeltitle": "STC uses 'Personal Computing' as default. Most common selections ones:\n\nPersonal Computing\nSoftware Library\nTelecom" },
  { "labelname": "u_level_1",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nHardware => Audio Visual => (many options)\n\nApplication Software => Client" },
  { "labelname": "u_level_2",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nHardware => Audio Visual => (many options)\n\nApplication Software => Client" },
  { "labelname": "u_level_3",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nHardware => Audio Visual => (many options)\n\nApplication Software => Client" },
  { "labelname": "u_asset_device",        "labeltitle": "Ask LAL" },
  { "labelname": "u_component",           "labeltitle": "Specific software or type of device affected.\n(hardware components aren't recorded in SN)\nMost common other ones:\n\nAcrobat Pro X\nAdobe Reader\n\nApple Mail\nThunderbird\nMicrosoft Outlook 2003\nMicrosoft Outlook 2007\nMicrosoft Outlook 2010\nMicrosoft Outlook 2011\n\nEmail Alias\nNetID - Student/ID Interfaces\nNetID/Pin/Password\n\nExcel 2010\n\nDropbox\n\niPad\niPhone\n\nWindows 7\n\nIE 8\nIE7\n\nWiFi\nYale Secure\nYaleGuest\n\nAnyConnect Mobility Client (VPN)\nVPN\n\nYale Secure File Transfer" },
  { "labelname": "opened_at",             "labeltitle": "" },
  { "labelname": "opened_by",             "labeltitle": "" },
  { "labelname": "impact",                "labeltitle": "'Measure of the business criticality of the affected service.' Rule of thumb:\nLow = 1 User\nMedium = <100 Users\nHigh >=100 Users" },
  { "labelname": "urgency",               "labeltitle": "'Measure of the business criticality of based on the impact and on the business needs of the customer.' Rule of thumb:\nLow >24 hrs\nMedium <=24 hrs\nHigh<= Less than 4 hrs" },
  { "labelname": "priority",              "labeltitle": "Sequence in which the incident needs to be resolved, auto-calculated based on impact and urgency." },
  { "labelname": "assignment_group",      "labeltitle": "STC default is\n'CTS Student Technology Collaborative'\n\n(CTS stands for for Campus Technology Services)" },
  { "labelname": "assigned_to",           "labeltitle": "Blank upon incident filing, it will be assigned later" },
  { "labelname": "watch_list",            "labeltitle": "The lock-icon expands to show more options.\nThe person-icon makes you a watcher" },
  { "labelname": "knowledge",             "labeltitle": "Check this if the incident contains information that should be incorporated into a knowledge article.\nIt helps to make a comment below as well." },
  { "labelname": "time_worked",           "labeltitle": "Don't worry about this stressful time-ticker, your managers aren't counting seconds" },
  { "labelname": "short_description",     "labeltitle": "Just like the 'Subject' field in RT. For now we'll continue to write them including the netid:\n'[csw3] Description Of The Problem'" },
  { "labelname": "description",           "labeltitle": "'Custom Fields' data goes here." },
  { "labelname": "comments",              "labeltitle": "For contacting the student, write an email-style message in this box." },
  { "labelname": "work_notes",            "labeltitle": "For keeping track of what we do. Write just about everything in this box." },
]

function taglabels(){
  if (jQuery('iframe#gsft_main').length){ // if it's an iframe
    for (var i = 0; i < labeltags.length; i++) {
      labeltag = jQuery('iframe#gsft_main').contents().find("#label\\.incident\\." + labeltags[i]['labelname'])
      labeltag.attr('title', labeltags[i]['labeltitle'])
    }
  }
  if (!jQuery('iframe#gsft_main').length){ // if it's a standalone page
    for (var i = 0; i < labeltags.length; i++) {
      labeltag = jQuery("#label\\.incident\\." + labeltags[i]['labelname'])
      labeltag.attr('title', labeltags[i]['labeltitle'])
    }
  }
}

jQuery(document).ready(function(){taglabels()}) //call as a standalone page
jQuery("iframe#gsft_main").load(function(){taglabels()}) //call when navigationg within service now (which changes this particular iframe)
//jQuery("iframe.gb_iframe").load(function(){taglabels()}) //call as a popout won't work well
