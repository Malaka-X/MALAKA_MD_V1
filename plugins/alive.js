const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'https://github.com/Navinofc44/Autovoice-data/raw/refs/heads/main/Converted%20By%20%C2%BBS%CA%9C%C9%9B%CA%9C%CA%8C%CA%80%CA%8C.mp3'
                    }
let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now!!👋  │─◎◎▷*
*╘╰────────────╯╜*
*│A QUEEN-LITHU-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*
 *➣ ʏᴏᴜᴛᴜʙᴇ⚡*= https://www.youtube.com

*➣ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ⚡* = https://whatsapp.com/channel/0029VasctJ90LKZDfJ4JZp2d

*©ᴘᴏᴡᴇʀᴅ ʙʏ Qᴜᴇᴇɴ ʟɪᴛʜᴜ ᴍᴅ*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp3', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://ibb.co/F0ccn0P`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
