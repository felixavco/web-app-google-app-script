//* Global Variables
var sheetId = "1J5oQtPs8vHvaVTOuRo7_BEn6u3jBoCVL0ZnQwhwYFGM";
//* Access the SpreadSheet
var ss = SpreadsheetApp.openById(sheetId);


function doGet() {
  //* Working Sheet
  var ws = ss.getSheetByName("TeamLeaders");
  //* Team leaders List
  var tls = ws.getRange(1,1,ws.getRange("A1").getDataRegion().getLastRow(),1).getValues();

  //* Team Members List
  var ws = ss.getSheetByName("UsersTable");
  var users = ws.getRange(2,1,ws.getRange("A1").getDataRegion().getLastRow(),5).getValues();

  var page = HtmlService.createTemplateFromFile("index");
  //* Pasing team leaders and Team members list to the view
  page.teamLeaders = tls;
  page.teamMembers = users;
  return page.evaluate();
}

function getUserData(data) {
  //* Working Sheet
  var ws = ss.getSheetByName("UsersTable");

  ws.appendRow([data.firstName, data.lastName, data.ldap + "@google.com", data.team, new Date()]);
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
