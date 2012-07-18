javascript:(function(){
window.location.replace("http://yale.service-now.com/");
//when page loads
document.getElementById('gsft_main').src="incident.do?sys_id=-1&amp;sysparm_query=active=true&amp;sysparm_stack=incident_list.do?sysparm_query=active=true"
//when iframe loads
document.getElementById('gsft_main').contentWindow.applyTemplate('24c0fd7f2b87e040fde6a4bc59da15ed')
}
