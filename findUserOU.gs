function findUserOU(uname) {
  var userinfoin = uname;
  if (!userinfoin.trim()) {{var userinfo = "No user"};}
  else {{var userinfo = userinfoin}
  var sheetID = "Replace with fileID of your CB_Activity spreadsheet";
  // Get the CB_Usage spreadsheet
  var ss = SpreadsheetApp.openById(sheetID);
  // Set the Devices sheet as the sheet we're working in
  var sheet = ss.getSheetByName('Devices');
  var lastrow = sheet.getLastRow();
  var lastcolumn = sheet.getLastColumn();
  var range = sheet.getRange(2,1,lastrow-1,lastcolumn);
  var data = range.getValues();
  
  var serialsList = data.map(function(r){ return r[1];});
  var mruList = data.map(function(r){ return r[3];});
  
  var position = mruList.indexOf(userinfoin);
  if (position > -1){
    var serno = serialsList[position];
  } else {
    var serno = "No serial or serial not found";
    var ou = "";
    var recentUser = "";
    } 
  Logger.log([userinfo, serno]);
  return [userinfo, serno];
}
