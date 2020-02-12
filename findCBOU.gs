function findCBOU(sernum) {
  var serno = sernum;
  var sheetID = "Replace with fileID of your CB_Activity spreadsheet";
  // Get the CB_Activity spreadsheet
  var ss = SpreadsheetApp.openById(sheetID);
  // Set the Devices sheet as the sheet we're working in
  var sheet = ss.getSheetByName('Devices');
  var lastrow = sheet.getLastRow();
  var lastcolumn = sheet.getLastColumn();
  var range = sheet.getRange(2,1,lastrow-1,lastcolumn);
  var data = range.getValues();
  
  var serialsList = data.map(function(r){ return r[1];});
  var ousList = data.map(function(r){ return r[0];});
  var mruList = data.map(function(r){ return r[3];});
                         
  var position = serialsList.indexOf(serno)
  if (position > -1){
    var ou = ousList[position];
    var recentUser = mruList[position];
  } else {
    var serno = "No serial or serial not found"
    var ou = ""
    var recentUser = ""
  }
  
  Logger.log([{Serial: serno, OU: ou, RecentUser: recentUser}]);
  return [serno, ou, recentUser];  
}
