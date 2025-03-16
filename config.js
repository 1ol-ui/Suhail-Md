const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "12172943194";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_08_03_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRW5qQkV1NDVSVkZQQkZOVHVpcWpXeE5rY0JrVmoycG1leWwrM25walRMWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWndCV0NTeXVSQWkzcEQ3Y21QVmlEd1wiLFxuICBcInBob25lSWRcIjogXCIzMGE4M2FlMC1kODIxLTRjNjEtYWJkOC1lNzE5NWE5NDk5MDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMTAxLFxuICAgICAgMTc5LFxuICAgICAgNTcsXG4gICAgICAxODgsXG4gICAgICA3NixcbiAgICAgIDY5LFxuICAgICAgMTQxLFxuICAgICAgMTU5LFxuICAgICAgNDIsXG4gICAgICAxNjcsXG4gICAgICAxMSxcbiAgICAgIDEyMSxcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDM2LFxuICAgICAgODUsXG4gICAgICAxMzAsXG4gICAgICAxOSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDc4LFxuICAgICAgOTIsXG4gICAgICAxMTQsXG4gICAgICAxNzcsXG4gICAgICA2MyxcbiAgICAgIDIyNyxcbiAgICAgIDIxMixcbiAgICAgIDUsXG4gICAgICAyMDYsXG4gICAgICAyNDcsXG4gICAgICAyMTYsXG4gICAgICAxMDEsXG4gICAgICAxOCxcbiAgICAgIDIwMCxcbiAgICAgIDIzNSxcbiAgICAgIDE5NyxcbiAgICAgIDYwLFxuICAgICAgMzYsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTQk00UUdZRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTIxNzI5NDMxOTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5NzY2MTMwNDA1NDUxOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmpOMUtBSEVKcmYzTDRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRcE5zTEtKWWx6Z0U3cTltcGI4ZFhYUmpjck8yM1NFNU5ieW5LMHpUU2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlp2ZmFsdGNHbDFPbkNXVm4vREF0K1hXTU9qVVR6NzE3UlNoMmJrM1NXZHBLTXBVYXJxa09QL254YUhoTm5vaEM5eG1SbnJGY1NkeTRZT0dmUHVFWEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlo0UGpFM0s1TGZaVldmbXFqR1FrSEVsOFFnSGtpdXhCNkJXUjRBeFNjYTBKQkhCOWZ6aGZreVFQaDljdkliWUdUT2YyYUViN01zcDlVZlBEdHVPRmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEyMTcyOTQzMTk0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjE1NTY3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5ZNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlk0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwialhFZDlWd2tXNFF5eWJLNWZRcU5UcEphM212UGFiUUoySnk0ZGxLL3FYOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ3NTQzMjUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQwODUwNjI1NjYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "❝★𝕯𝖆𝖗𝖐𝕬𝖑𝖑𝖎𝖆𝖓𝖈𝖊★❞🦅🦜 ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
