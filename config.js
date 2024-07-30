const { readFileSync } = require('fs')
require("dotenv").config();

module.exports = {
    /**
     * bot details and parameters
     */
    botname: process.env.BotName || "ADK 리츄",
    footer: process.env.Footer || "© ADK 리츄",
    prefa: process.env.Prefix || ".",
    themeemoji: process.env.ThemeEmoji || "🌟",

    /**
     * owner details and parameters
     */
    ownername: process.env.Owner_Name || "ADK 리츄",
    ownernumber: process.env.Owner_Number || "916282122603",
    instagramId: process.env.Insta || "adkrichu",

    /**
     * other details and parameters
     */
    author: process.env.Author || "@adkrichu",
    packname: process.env.PackName || "ᴉᴛᴢ ᴍᴇ ᴀᴅᴋ_ʀᴉᴄʜᴜ",
    socialLink: process.env.Web || "https://youtube.com/@adkrichu?si=EDG4FAFLTr2H_XJa",
    groupLink: process.env.GcLink || "https://chat.whatsapp.com/I9WpnuNlTj8ELutpU4qfl7",
    warns: Number(process.env.Warn_Limits) || 3,
    cooldown: 5, // default cooldown time per command in seconds
    mongoUrl: process.env.MongoDB || "mongodb+srv://vijayayakumar06:r9X3xMqv57gIMN56@cluster0.iudh0r2.mongodb.net/",
    sessionId: process.env.SESSION_ID || "VElwV1VSeVkjY3pvQkcwM2prR0o2RDI4ejMzL_Queen-Anya_TgySUxpQ3BERTRfZmlURFU0VE1acDdL_Queen-Anya_cw==",

    /**
     * thumbnails and medias
     */
    image_1: readFileSync('https://telegra.ph/file/492557f2589925dc372c1.jpg'), // primary image
    image_2: readFileSync('https://telegra.ph/file/492557f2589925dc372c1.jpg'), // secondry image
    imageUrl: "https://telegra.ph/file/492557f2589925dc372c1.jpg", // image url, to replace to your url upload your image to https://imgbb.com
    imageMentionUrl: "https://telegra.ph/file/492557f2589925dc372c1.jpg", // image for mention reply audio media
    aliveMedia: readFileSync("https://telegra.ph/file/6ecbccfe98d8ca16e1ef3.mp4"),
    menuMedia: readFileSync('https://telegra.ph/file/495965dc32e44cf68fa33.mp4'),
    ownerMentionMp3: readFileSync('https://telegra.ph/file/12cb47b0f2d8b10d67555.mp4'),  // audio for mention reply audio media

    /**
     * core parameters and values
     */
    ownercon: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...({ remoteJid: 'status@broadcast' }), }, message: { contactMessage: { displayName: this.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${this.ownername},;;;\nFN:${this.ownername}\nitem1.TEL;waid=${this.ownernumber}:${this.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: this.image_2, thumbnail: this.image_2, sendEphemeral: true } } },
    fakeshop: { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 1234, status: 200, thumbnail: this.image_1, surface: 200, message: this.botname, orderTitle: this.ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore: 999, isForwarded: true}, sendEphemeral: true },
    message: {
        success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
        admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
        botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
        owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
        group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
        private: 'This command is only for private chats.',
        wait: '🔄 Processing request...',
        error: "❌ Oops! An error occurred while processing your request. Please try again later.",
        ban: `You're banned from using this bot!`,
        nsfw: 'This group is not *NSFW* enabled.',
        banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
    }
}
