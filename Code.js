//* Global Variables
var sheetId = "1J5oQtPs8vHvaVTOuRo7_BEn6u3jBoCVL0ZnQwhwYFGM";
//* Access the SpreadSheet
var ss = SpreadsheetApp.openById(sheetId);


function doGet(e) {
  var page = e.parameter.page;

  if (page !== undefined) {
    switch (page) {
      case "form":
        return getForm();

      case "table":
        return getTable();

      default:
        return getIndex();
    }
  }

  return getIndex();

}

function getIndex() {
  var page = HtmlService.createTemplateFromFile("index");
  return page.evaluate();
}

function getForm() {
  //* Working Sheet
  var ws = ss.getSheetByName("TeamLeaders");
  //* Team leaders List
  var tls = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();

  var page = HtmlService.createTemplateFromFile("form");
  //* Pasing team leaders to the view
  page.teamLeaders = tls;
  return page.evaluate();
}

function getTable() {
  //* Team Members List
  var ws = ss.getSheetByName("UsersTable");
  var users = ws.getRange(2, 1, ws.getRange("A1").getDataRegion().getLastRow(), 5).getValues();

  var page = HtmlService.createTemplateFromFile("table");
  //* Pasing Users to the view
  page.teamMembers = users;
  return page.evaluate();
}




