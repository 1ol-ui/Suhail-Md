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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_28_03_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWUwyT1ZYajYxSklGYlRtajNkWjUrQlJuNGhLRHhFNVVVRWFub2VseG5uQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1hHdV9XWjBRRU95ZFB2VmlIN25GUVwiLFxuICBcInBob25lSWRcIjogXCIzM2Q0MjQ2Zi0zODMwLTQwOGItYTgyMS00ZmQ1MGE0NWU0MDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICA0OSxcbiAgICAgIDEwMixcbiAgICAgIDI1MixcbiAgICAgIDI1MSxcbiAgICAgIDQ2LFxuICAgICAgMjQ5LFxuICAgICAgNTEsXG4gICAgICAxNjUsXG4gICAgICAxNDIsXG4gICAgICAyMTUsXG4gICAgICAxMjAsXG4gICAgICAxNTAsXG4gICAgICAxMjMsXG4gICAgICA2NixcbiAgICAgIDI5LFxuICAgICAgMTgwLFxuICAgICAgNDksXG4gICAgICAxNzcsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDIxNyxcbiAgICAgIDk0LFxuICAgICAgMTkzLFxuICAgICAgMTQ3LFxuICAgICAgMzUsXG4gICAgICAyMzYsXG4gICAgICAyNDEsXG4gICAgICAxNTksXG4gICAgICA1NixcbiAgICAgIDIwOCxcbiAgICAgIDEyNCxcbiAgICAgIDg2LFxuICAgICAgMjA5LFxuICAgICAgMjQ2LFxuICAgICAgMTQzLFxuICAgICAgMTI0LFxuICAgICAgNjAsXG4gICAgICAxNDcsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHU1pDTDI0OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTIxNzI5NDMxOTQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTc2NjEzMDQwNTQ1MToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM04xS0FIRUpLdSs3NEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFwTnNMS0pZbHpnRTdxOW1wYjhkWFhSamNyTzIzU0U1TmJ5bkswelRTaXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzQwZDgrM0p4RHB3aG5BSHJRcnhGY0ZPZnN6US8zME1PWm5hbnB6N0JjdE1peW0xazZrMW91aDNtRi9LeXludjVINGtteEs5bUEyNHJjVDdUMThXQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMzZHTFkrbVBTemJDekVUZ2x5ejNNMFdmbVIxRG5zNDM1anp2U05qZXdUMThyT0ZqUnJEMEYxM0FUTDBOeWVmQVpITXhtUmg3VXlCR3kwQWNqQ2l3QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTIxNzI5NDMxOTQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjY1NzMwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURNQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRE1DLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXhlMVdYdklHMkZXT0ZReGRtajNYMkhScGdwcUlDWHZzdFJDendDZi9tWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ3NTQzMjYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQyNjU3MjQ2NjczXCJ9Igp9"  // PUT your SESSION_ID 


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
