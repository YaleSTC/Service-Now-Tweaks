////////
////////
//Put Tooltips on Incident Creation pages
    labeltags=[
      { "labelname": "incident_state",        "labeltitle": "Same as RT.\n\n'Assigned' should be automatically applied when an ST is assigned.\n\n'In Progress' once we have the student's computer or we've given help.\n\n'On Hold' when we're waiting on information from the student. This sends an automatic email which tells them such. It automatically changes back to 'In Progress' when the student responds.\n\n'Resolved' when we've taken all actions, with or without confirmation from the student.\n\n'Closed' will happen automatically two weeks after resolution.", "color": "#E9E" },
      { "labelname": "number",                "labeltitle": "The ID number of the incident", "color": "#DDD" },
      { "labelname": "caller_id",             "labeltitle": "The student we're helping.", "color": "#E9E" },
      { "labelname": "u_contact",             "labeltitle": "The student we're helping (again).\nThis redundant for STC - elsewhere this might be someone's secretary, etc", "color": "#DDD" },
      { "labelname": "notify",                "labeltitle": "'Email' means the student will be emailed. 'None' means they won't be notified of updates.", "color": "#DDD" },
      { "labelname": "contact_type",          "labeltitle": "How the student first contacted us regarding this incident.", "color": "#E9E" },
      { "labelname": "location",              "labeltitle": "STC leaves this blank for now.", "color": "#DDD" },
      { "labelname": "u_it_business_service", "labeltitle": "The Service the student sees. STC uses 'Personal Productivity' for most things. Most common selections:\n\nPersonal Productivity\nOther\nEliApps\nEmail - Legacy", "color": "#DDD" },
      { "labelname": "u_incident_type",       "labeltitle": "STC uses by default\n'Service Interruption'\n\nThe other one we sometimes see is\n'Knowledge Inquiry'\n\nThe others should be used during more widespread problems than we deal with in the TTO.", "color": "#DDD" },
      { "labelname": "u_it_provider_service", "labeltitle": "The Service ITS sees and talks about that students don't always. STC uses 'Personal Computing' most often. Most common selections ones:\n\nPersonal Computing\nSoftware Library\nTelecom", "color": "#DDD" },
      { "labelname": "u_level_1",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#CCF" },
      { "labelname": "u_level_2",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#CCF" },
      { "labelname": "u_level_3",             "labeltitle": "Most common selections for STC:\nHardware => Personal Computer => Laptop\nHardware => Personal Computer => Desktop\nHardware => Data Storage => Storage Device\nHardware => Mobile => Phone\nHardware => Mobile => Tablet\n\nHardware => Audio Visual => (many options)\n\nHardware => Network => Router/Switch\nHardware => Network => VPN\nHardware => Network => WiFi\n\nNetwork => Environment => Ethernet\nNetwork => Environment => WiFi\n\nApplication Software => Client\n", "color": "#CCF" },
      { "labelname": "u_asset_device",        "labeltitle": "Ask ST Managers", "color": "#DDD" },
      { "labelname": "u_component",           "labeltitle": "Specific software or type of device affected.\n(hardware components aren't recorded in SN)\nMost common other ones:\n\nAcrobat Pro X\nAdobe Reader\n\nApple Mail\nThunderbird\nMicrosoft Outlook 2003\nMicrosoft Outlook 2007\nMicrosoft Outlook 2010\nMicrosoft Outlook 2011\n\nEmail Alias\nNetID - Student/ID Interfaces\nNetID/Pin/Password\n\nExcel 2010\n\nDropbox\n\niPad\niPhone\n\nWindows 7\n\nIE 8\nIE7\n\nWiFi\nYale Secure\nYaleGuest\n\nAnyConnect Mobility Client (VPN)\nVPN\n\nYale Secure File Transfer", "color": "#CCF" },
      { "labelname": "opened_at",             "labeltitle": "", "color": "#DDD" },
      { "labelname": "opened_by",             "labeltitle": "", "color": "#DDD" },
      { "labelname": "impact",                "labeltitle": "'Measure of the business criticality of the affected service.' Rule of thumb:\nLow = 1 User\nMedium = <100 Users\nHigh >=100 Users", "color": "#DDD" },
      { "labelname": "urgency",               "labeltitle": "'Measure of the business criticality of based on the impact and on the business needs of the customer.' Rule of thumb:\nLow >24 hrs\nMedium <=24 hrs\nHigh<= Less than 4 hrs", "color": "#DDD" },
      { "labelname": "priority",              "labeltitle": "Sequence in which the incident needs to be resolved, auto-calculated based on impact and urgency.", "color": "#DDD" },
      { "labelname": "assignment_group",      "labeltitle": "STC default is\n'CTS Student Technology Collaborative'\n\n(CTS stands for for Campus Technology Services).\nOther groups we commonly refer tickets to include 'CTS Academic Computing Resources' (ACR), 'CTS Service Desk' (the Help Desk), 'INF Data Network Operations', and 'INF Telecom'.", "color": "#E9E" },
      { "labelname": "assigned_to",           "labeltitle": "The ST primarily responsible for correspondence with the student. Upon incident filing this is left blank, and it will be assigned later", "color": "#E9E" },
      { "labelname": "watch_list",            "labeltitle": "The person-icon makes you a watcher.\nThe lock-icon expands to show more options.\n\nAn email list should always be added to a ticket. You may add addresses like:\nst-bk@yale.edu\nst-grad2@yale.edu\nst-oc2@yale.edu\nlal@yale.edu\nst-macspec@yale.edu\n\nWhen adding an email, be sure to press enter or click the email icon.", "color": "#E9E" },
      { "labelname": "knowledge",             "labeltitle": "Check this if the incident contains information that should be incorporated into a knowledge article.\nIt helps to make a comment below as well.", "color": "#CCF" },
      { "labelname": "time_worked",           "labeltitle": "Don't worry about this stressful time-ticker, your managers aren't counting seconds", "color": "#DDD" },
      { "labelname": "short_description",     "labeltitle": "Just like the 'Subject' field in RT. ResColl should be all uppercase, such as 'BK', 'OC2', 'GRAD2'", "color": "#E9E" },
      { "labelname": "description",           "labeltitle": "'Custom Fields' type data goes here. Everything is very sensitive here - don't change the number of '=' or forget the trailing space or the search won't work. Multiple check-boxes can be selected with an uppercase '[X]'", "color": "#E9E" },
      { "labelname": "comments",              "labeltitle": "For contacting the student, write an email-style message in this box.", "color": "#E9E" },
      { "labelname": "work_notes",            "labeltitle": "For keeping track of what we do. Write 'comments' in this box that we don't need the student to see.", "color": "#E9E" }
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

function removeassignedto(){
  jQuery('#sys_display\\.incident\\.assigned_to').attr('value','')
}

function bluroutselfservice(){
  jQuery('#1f2b42b4c0a80064014872177d5f2d17').css('color', '#DDD')
  //jQuery('#147f91a2d859ac407ac0638b5167dc7f').css('color', '#DDD')
  jQuery('#52fcb171019c640094adf4b82250a685').css('color', '#DDD')
  //jQuery('#e661dff4c611227b01af0af70d4b67f1').css('color', '#DDD')
}


//injects the script and accesskey-link (hidden)
function saveandstay(){
  gsftSubmit(gel('sysverb_update_and_stay'))
  //gsftSubmit('f3401a62012ee4c094adf4b82250a67e')
}
function assignkeystrokes(){
  var script = document.createElement('script');
  script.appendChild(document.createTextNode(saveandstay));
  (document.body || document.head || document.documentElement).appendChild(script);
  jQuery('body').append('<a style="opacity: 0px; display: none;" href="#" accesskey="s" onclick="saveandstay()"> </a>')
}

function insertdashes(withoutdashes){
  return withdashes = withoutdashes.substr(0,3) + "-" + withoutdashes.substr(3,3) + "-" + withoutdashes.substr(6,4)
}

function titletopbar(){
  withoutdashes = jQuery('#sys_readonly\\.incident\\.number').attr('value') 
  withdashes = insertdashes(withoutdashes)
  jQuery('#mandatory_explained').replaceWith('<span style="padding-left:10px; word-wrap:break-word;">' + withdashes + '</span>')
}

function openwatchlist(){
  jQuery('#incident\\.watch_list_unlock').click()
}

function moveshortdescriptionup(){
  //firstrow = jQuery('#section\\.bf1d96e3c0a801640190725e63f8ac80').children('table').children('tbody').children('tr').eq(1)
  //bigtable = jQuery('#label\\.incident\\.incident_state').parent().parent().parent().parent().parent()
  //shortdescrow = jQuery('#element\\.incident\\.short_description')
  //shortdescrow.insertBefore(bigtable)


  //firstrow = jQuery('#section\\.bf1d96e3c0a801640190725e63f8ac80').children('table').children('tbody').children('tr').eq(1)
  //bigtable = jQuery('#label\\.incident\\.incident_state').parent().parent().parent().parent().parent()
  //shortdescrow = jQuery('#element\\.incident\\.short_description')
  //shortdescrow.insertAfter(firstrow)

  firstrow = jQuery('#section\\.bf1d96e3c0a801640190725e63f8ac80').children('table')
  shortdescrow = jQuery('#element\\.incident\\.short_description')
  shortdescrow.wrap('<table />')
  shortdescrow = shortdescrow.parent().parent()

  //firstrow.after('<table>' + shortdescrow + '</table>')
  firstrow.after(shortdescrow)
  shortdescrow = jQuery('#element\\.incident\\.short_description')
  descbox = shortdescrow.children().children('table').children().children().children('td').eq(0)
  kbbutton = shortdescrow.children().children('table').children().children().children('td').eq(1)
  kbbutton.css('padding','5px')
  kbbutton.insertBefore(descbox)
  jQuery('#incident\\.section_header_spacer').css('height', '65px')
}

function noknowledgeredbar(){
    kbarticle = jQuery('#sys_original\\.incident\\.u_kb_article').attr('value');
    if (kbarticle == "" || typeof kbarticle == "undefined"){
      jQuery('tr.header').css('background-color','red')
      jQuery('td.column_head').eq(2).children().first().before('<span style="padding-right:10px; word-wrap:break-word;">please attach a kb article</span>')
    }
}

function hidemarkasduplicate(){
  jQuery('#duplicate_incident').hide()
}

function kbnumberonleft(){
  kbnumber = jQuery('#sys_display\\.incident\\.u_kb_article').attr('value')
  shortdescrow = jQuery('#element\\.incident\\.short_description')
  if ((kbnumber == "" || typeof kbnumber == "undefined")){
    //shortdescrow.children().last().before('<td>'+'KB_ADD_ME'+'</td>')
  }
  else {
    shortdescrow.children().last().before('<td>'+kbnumber+'</td>')
  }
}

function OnASearchPage(){
  return true
}

function OneTaskResult(){
    return (jQuery('#group_8c58a5aa0a0a0b07008047e8ef0fe07d:contains("1 match")').size() && jQuery('#group_8c59970e0a0a0b07013feb5e0d09c952:contains("No match")').size() && jQuery('#group_2b77ce594bd6c0d901b8fbe25ceff671:contains("No match")').size())
}

function OnAKnowledgePage(){
  return true
}

function OneKnowledgeResult(){
  return jQuery('.kb_header_title_row').parent().find('a.kblinked').size() == 1
}


//Call it on pageload
jQuery(document).ready(function(){
  if (OnAnIncidentPage()){
    taglabels();
    watchshortdescription();

    username = jQuery('#sys_display\\.incident\\.caller_id').attr('value');
    if (username == "" || typeof username == "undefined"){
      //ApplyDefaultTemplate();
      removeassignedto();
    }
    if (!(username == "" || typeof username == "undefined")){
      noknowledgeredbar();
    }


    monospacefont();
    assignkeystrokes();
    titletopbar();
    hidemarkasduplicate();
    //moveshortdescriptionup();
    kbnumberonleft();

    openwatchlist();

  }
  
  bluroutselfservice();

  if (OnASearchPage()){
    if(OneTaskResult()){
      location.href = jQuery('#group_8c58a5aa0a0a0b07008047e8ef0fe07d').find('a.formlink').attr('href')
    }
  }


  if (OnAKnowledgePage()){
    if(OneKnowledgeResult()){
      location.href = jQuery('.kb_header_title_row').parent().find('a.kblinked').attr('href')
    }
  }

})
