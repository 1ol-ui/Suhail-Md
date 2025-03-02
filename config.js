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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnpmUVk4RWdwUTI5SHNJU1AwOTVHb1VjcDdiQjBERVM1UkdFZ1haKzFsMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMjE3Mjk0MzE5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzNCMDlCRkI1QjIzQ0RFQ0E2QjMyRDJGMkM1NEE0NzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQwODUxMjQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFUT2VkYS13Um5lUm84c3RpZTlBS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmU2NmIzMDgtMGVmMC00YzFmLWE1ODYtNzhjZmI2NjYxYWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDg4LFxuICAgICAgNjksXG4gICAgICAzMSxcbiAgICAgIDEyMCxcbiAgICAgIDI0MSxcbiAgICAgIDE3NSxcbiAgICAgIDQyLFxuICAgICAgNjksXG4gICAgICAxNTgsXG4gICAgICAxMTAsXG4gICAgICAxOTYsXG4gICAgICA3MSxcbiAgICAgIDE0OCxcbiAgICAgIDE5LFxuICAgICAgNjMsXG4gICAgICAxNDMsXG4gICAgICA0NyxcbiAgICAgIDE2MSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTY1LFxuICAgICAgMTE4LFxuICAgICAgODMsXG4gICAgICAxMDgsXG4gICAgICA2MixcbiAgICAgIDgwLFxuICAgICAgMTQ3LFxuICAgICAgNjYsXG4gICAgICAxNzksXG4gICAgICAyMTYsXG4gICAgICAyMzgsXG4gICAgICAxNixcbiAgICAgIDE1MCxcbiAgICAgIDIzNyxcbiAgICAgIDQzLFxuICAgICAgMTAyLFxuICAgICAgNTcsXG4gICAgICAyMTMsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0cxRlI3Q0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjEyMTcyOTQzMTk0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTc2NjEzMDQwNTQ1MTo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKdneKYhfCdla/wnZaG8J2Wl/CdlpDwnZWs8J2WkfCdlpHwnZaO8J2WhvCdlpPwnZaI8J2WiuKYheKdnvCfpoXwn6acXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZOMUtBSEVLaVFqYjRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRcE5zTEtKWWx6Z0U3cTltcGI4ZFhYUmpjck8yM1NFNU5ieW5LMHpUU2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjcrTDJyb1hnTTZsaHlzYm8wUGVaZkFnK0ZORTFlazZIQ0VRRDZXK2ROVG1xcldtZUd4dGRlbE1QRkxURHIyNVdacnZsOW1LOFltbmEzRE90a0dkc0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlljSWJvZWNzUS82Q2lKYkN0eloraUVScjJxc240dWVaaEhIOWVnT3JuNEYvSm93V3BtaEg2WFpXMEViWlppZWZUMjdzaUZYWHlQZXI0NkdxZTIrc2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEyMTcyOTQzMTk0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDg1MTI0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5ZNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlk1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlFiSEJFMzNQRlpXaDcrYTJMZmZjcUEwZzRWWmdhNUpKNVkrUk9XS25UMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ3NTQzMjU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQwODUxMTU4MTk3XCJ9Igp9"  // PUT your SESSION_ID 


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
