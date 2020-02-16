// result is an array of objects if header row is specified, otherwise it is an array of arrays
//var result = Utils.gvizQuery(
//    "[YOUR_SPREADSHEET_ID]", 
//    "[YOUR_QUERY_STRING]", 
//    [SHEET_ID_IF_NEEDED], // can be a number (the sheetId), or the name of the sheet; if not needed, but headers are, pass in undefined
//    [RANGE], // specify range, ex: `A2:O`
//    [HEADER_ROW_INDEX_IF_NEEDED] // always a number
//);

function queryCBOU(sernum) {
  var sernoin = sernum;
  if (!sernoin.trim()) {{var sernoin = "No serial"};}
  else {{var serno = sernoin}
        var qUser = "select B,A,D where B contains '" + serno + "'";
var result = Utils.gvizQuery(
    "1Wv62V5fklNRgFeonA5nT8T5fYB3q_NybGVp9A4eRZLc", 
  qUser,
  "Devices",
  "A1:D"
);
       } 
//  Logger.log([serno, result]);
    Logger.log([result]);
//  return [serno, result];
  return [result];
}
