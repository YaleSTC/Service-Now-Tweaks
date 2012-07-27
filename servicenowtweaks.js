////////
////////
//Put Tooltips on Incident Creation pages
    labeltags=[
      { "labelname": "incident_state",        "labeltitle": "Same as RT", "color": "#DDD" },
      { "labelname": "number",                "labeltitle": "The ID number of the incident", "color": "#DDD" },
      { "labelname": "caller_id",             "labeltitle": "The student we're helping.", "color": "#AAF" },
      { "labelname": "u_contact",             "labeltitle": "The student we're helping (again).\nThis redundant for STC - elsewhere this might be someone's secretary, etc", "color": "#DDD" },
      { "labelname": "notify",                "labeltitle": "'Email' means the student will be emailed. 'None' means they won't be notified of updates.", "color": "#DDD" },
      { "labelname": "contact_type",          "labeltitle": "How the student first contacted us regarding this incident.", "color": "#DDD" },
      { "labelname": "location",              "labeltitle": "STC leaves this blank for now.", "color": "#DDD" },
      { "labelname": "u_it_business_service", "labeltitle": "STC uses 'Personal Productivity' as default. Most common selections:\n\nPersonal Productivity\nEliApps\nEmail - Legacy", "color": "#DDD" },
      { "labelname": "u_incident_type",       "labeltitle": "STC uses 'Service Interruption' as default.\nThe others should be used during more widespread problems than we deal with in the TTO.", "color": "#DDD" },
      { "labelname": "u_it_provider_service", "labeltitle": "STC uses 'Personal Computing' as default. Most common selections ones:\n\nPersonal Computing\nSoftware Library\nTelecom", "color": "#DDD" },
      { "labelname": "u_level_1",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#AAF" },
      { "labelname": "u_level_2",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#AAF" },
      { "labelname": "u_level_3",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#AAF" },
      { "labelname": "u_asset_device",        "labeltitle": "Ask ST Managers", "color": "#DDD" },
      { "labelname": "u_component",           "labeltitle": "Specific software or type of device affected.\n(hardware components aren't recorded in SN)\nMost common other ones:\n\nAcrobat Pro X\nAdobe Reader\n\nApple Mail\nThunderbird\nMicrosoft Outlook 2003\nMicrosoft Outlook 2007\nMicrosoft Outlook 2010\nMicrosoft Outlook 2011\n\nEmail Alias\nNetID - Student/ID Interfaces\nNetID/Pin/Password\n\nExcel 2010\n\nDropbox\n\niPad\niPhone\n\nWindows 7\n\nIE 8\nIE7\n\nWiFi\nYale Secure\nYaleGuest\n\nAnyConnect Mobility Client (VPN)\nVPN\n\nYale Secure File Transfer", "color": "#DDD" },
      { "labelname": "opened_at",             "labeltitle": "", "color": "#DDD" },
      { "labelname": "opened_by",             "labeltitle": "", "color": "#DDD" },
      { "labelname": "impact",                "labeltitle": "'Measure of the business criticality of the affected service.' Rule of thumb:\nLow = 1 User\nMedium = <100 Users\nHigh >=100 Users", "color": "#DDD" },
      { "labelname": "urgency",               "labeltitle": "'Measure of the business criticality of based on the impact and on the business needs of the customer.' Rule of thumb:\nLow >24 hrs\nMedium <=24 hrs\nHigh<= Less than 4 hrs", "color": "#DDD" },
      { "labelname": "priority",              "labeltitle": "Sequence in which the incident needs to be resolved, auto-calculated based on impact and urgency.", "color": "#DDD" },
      { "labelname": "assignment_group",      "labeltitle": "STC default is\n'CTS Student Technology Collaborative'\n\n(CTS stands for for Campus Technology Services)", "color": "#DDD" },
      { "labelname": "assigned_to",           "labeltitle": "The ST primarily responsible for correspondence with the student. Upon incident filing this is left blank, and it will be assigned later", "color": "#DDD" },
      { "labelname": "watch_list",            "labeltitle": "The lock-icon expands to show more options.\nThe person-icon makes you a watcher", "color": "#DDD" },
      { "labelname": "knowledge",             "labeltitle": "Check this if the incident contains information that should be incorporated into a knowledge article.\nIt helps to make a comment below as well.", "color": "#AAF" },
      { "labelname": "time_worked",           "labeltitle": "Don't worry about this stressful time-ticker, your managers aren't counting seconds", "color": "#DDD" },
      { "labelname": "short_description",     "labeltitle": "Just like the 'Subject' field in RT. For now we'll continue to write them including the netid:\n'[csw3] Description Of The Problem'", "color": "#DDD" },
      { "labelname": "description",           "labeltitle": "'Custom Fields' data goes here.", "color": "#AAF" },
      { "labelname": "comments",              "labeltitle": "For contacting the student, write an email-style message in this box.", "color": "#DDD" },
      { "labelname": "work_notes",            "labeltitle": "For keeping track of what we do. Write just about everything in this box.", "color": "#DDD" }
    ]


function taglabels(){
  for (var i = 0; i < labeltags.length; i++) {
    labeltag = jQuery("#label\\.incident\\." + labeltags[i]['labelname'])
    labeltag.after('<td style="background-color:' + labeltags[i]['color'] + '; vertical-align:middle; padding-left:5px; padding-right:5px; cursor:default;" title="' + labeltags[i]['labeltitle'] +  '"> ✵ </td>')
    //labeltag.parent().children(':last-child').append('<span style="padding-left:5px;" title="' + labeltags[i]['labeltitle'] +  '">(?)</span>')
    //.append('<span style="padding-left:5px;">(?)</div>')
    //labeltag.append('<span style="float:right;" title="' + labeltags[i]['labeltitle'] +  '">(?)</span>')
    //labeltag.attr('title', labeltags[i]['labeltitle'])
  }
}



function OnAnIncidentPage(){
  if (jQuery('h2.form_header').length > 0){
    return jQuery('h2.form_header').contents().html().indexOf("Incident") > -1
  }
  else {return false}
}

////////
////////
//Apply STC Default Template
function ApplyDefaultTemplate(){
    location.assign("javascript:applyTemplate('048063642bebe080fcb01abf59da1596')");
}



////////
////////
//Watch the short description field, auto-click kbpopup button when pressing enter
function watchshortdescription(){
  jQuery('#incident\\.short_description').keydown(function(event){
    if(event.keyCode == 13){ //if enter is pressed
      //jQuery('#incident\\.short_description').parent().siblings().children().children('img').click();
      location.assign("javascript:kbPopup('incident.short_description')");
    }
  })
}

//Call on pageload


////////
////////
//Autocomplete triggers on paste
//http://forum.jquery.com/topic/mouse-paste-binding-won-t-fire-jquery-ui-autocomplete-keyboard-paste-is-fine
//
//
//

function monospacefont(){
  jQuery('#incident\\.description').css('font-family', 'monospace')
  jQuery('#incident\\.description').css('padding', '10px')
  jQuery('div.activity_field[name=description]').children().children().children().children('td').css('font-family', 'monospace')
}


//Call it on pageload
jQuery(document).ready(function(){
  if (OnAnIncidentPage()){
    taglabels();
    watchshortdescription();
    username = jQuery('#sys_display\\.incident\\.caller_id').attr('value');
    if (username == "" || typeof username == "undefined"){
      ApplyDefaultTemplate();
    }
    monospacefont();
  }



})

