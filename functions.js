
function getUserData(data) {
    //* Working Sheet
    var ws = ss.getSheetByName("UsersTable");

    ws.appendRow([data.firstName, data.lastName, data.ldap + "@google.com", data.team, new Date()]);
}

function sendNotification(data) {
    MailApp.sendEmail(data.email, "Hello " + data.name, "Hi " + data.name + " this is a message sent from Google Apps Script :)");
}