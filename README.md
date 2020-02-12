# CB_LookUp
Web app where any domain user can pull Most Recent User and used Chrome devices from CB_Activity, without admin access.

So, to begin with, you need to grab a copy of CB_Activity and set it up.
https://github.com/NoSubstitute/CB_Activity

Then in the files (in this project) listed below you need to add the correct reference to your CB_Activity file.
In each file there is a phrase "Replace with fileID of your CB_Activity spreadsheet" to where you need to copy your sheetId (the unique middle-part of your Google Sheet URL). Make sure you do not remove the enclosing " " quotation marks. They are essential and must remain in the code.

findCBOU.gs

findUserDevices.gs

findUserOU.gs

Then you save all your code and go to Publish, Deploy as web app.

Choose to run the app as "Me" (meaning your own user, or the user that owns the script, and has access to the CB_ACtivity file). This means that the actual user doesn't have to accept any access to use the web app, as you will do it and act on their behalf. If you want, you can instead choose "User accessing the web app", but then you must make sure that all users that needs to use the web app also has read access to the CB_Actifity file. In some circumstances, that might be preferable.

When you have selected your options, click Publish. You are then given the exec URL of your web app, which you can distribute to users who should have access to the app.

If you ever need to change the code, don't forget to publish a "New" Project version, so your new code is made available to your users. While experimenting, you yourself can always use the linked "latest code", which is a dev version of your code, which doesn't require publishing to run.
