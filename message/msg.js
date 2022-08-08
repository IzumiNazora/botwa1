//SCRIPT BY MR.108P ONLY CASE MR.108P
"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { pinterest } = require("../lib/pinterest")
const { darkjokes } = require("../lib/darkjokes")
const { igstalk } = require("../lib/igstalk")
const { lirikLagu } =require("../lib/lirik.js")
const { igstory } = require("../lib/igstory")
const { mediafire } = require("../lib/mediafire")
const { ephoto } = require("../lib/ephoto")
const { igDownloader } = require("../lib/igdown")
const { wikiSearch } = require("../lib/wiki")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { addAfkUser, checkAfkUser, getAfkReason, getAfkTime, getAfkId, getAfkPosition } = require("../lib/afk");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");
const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const igApi = require("insta-fetcher");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const FormData = require("form-data");

global.APIs = {
	zenz: 'https://zenzapis.xyz/',
	amel: 'https://melcanz.com/',
}
global.APIKeys = {
	'https://zenzapis.xyz': 'rembotz',
}
const apikey = "melcantik"
const keyanto = "hardianto"
const jojoapi = "Syaa"
const ikiapi = "FuckBitch"
const chrisapi = "IzumiBot"
const lolapi = "Rembot0"

// SETTING BOT AND OWNER //
const nobot = "6287796838726" // Ganti No Bot Kalian
const namabot = "Rembotz" // Ganti Nama Bot Kalian
const nameown = "IzumiNazora" // Ganti Nama Kalian
const numown = "0815-3416-2316" // Ganti Nomor Kalian
const nameowner = "IzumiNazora" // Ganti Nama Kalian
const footer = "Rembotz �2022" // Ganti Nama Bot Kalian
const capt = "*By RemBotz �2022*" // Ganti Nama Bot Kalian
const nomorown = "https://wa.me/6281534162316" // Ganti Nomor Kalian
const note = "*Bot Ini Dalam Pengembangan*\n*Jika Ada Fitur Yang Eror Segera Hub Owner*" // Kalau Mau Ganti Aja
const namagrup = "Group Rembotz" // Ubah Nama Group Mu

// SETTING DONASI //
const gopay = "0815-3416-2316" // Ganti Nomor Gopay Mu
const pulsa = "0815-3416-2316" // Ganti No Pulsa Mu
const insta = "Izumi_Nazora" // Ganti Nama IG Mu
const github = "Izumibotz" // Ganti Nama Github Mu
const linkdonasi = "https://link.dana.id/qr/3x34pi54" // Ganti Link Qris Mu

// SEWA BOT SETTINGS//
const qris = "https://link.dana.id/qr/3x34pi54"
const nomor = "wa.me/6281534162316"
const tujuhhari = "5.000"
const tigapuluhhari = "10.000"
const setahun = "20.000"
const permanen = "30.000"

//Setting Rekber // Lu Ubah Aja Soalnya Gw Bukan Anak JB:v //
const rekbera = "0-49K : 5K"
const rekberb = "50-110K : 10K"
const rekberc = "111-199K : 15K"
const rekberd = "200-299K : 20K"
const rekbere = "300-399K : 25K"
const rekberf = "400-499K : 30K"
const rekberg = "500-699K : 40K"
const rekberh = "700-1JT : 50K"

// Setting Payment 
const via = "DANA&GOPAY" // Terserah Mau Payment Apa Aja

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let tebakgambar = []
let kuiscuy = []
let tebaktebakan = []
let tekateki = []
let tebakkimia = []
let tb = []
let tebaklagu = []
let siapaaku = []
let susun = []

//Prefix
let multi = true
let nopref = false
let prefa = '/'

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let antiyt = JSON.parse(fs.readFileSync('./database/antilinkyt.json'));
let antitiktok = JSON.parse(fs.readFileSync('./database/antilinktt.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store, _afk) => {
	try {
		let { ownerNumber, ownerName, botName, gamewaktu, limitCount } = setting
		let { allmenu } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
		const toJSON = j => JSON.stringify(j, null,'\t')
		if (multi){
		    var prefix = /^[锟斤拷锟阶�锟斤拷锟斤拷锟斤拷_=|~!?#$%^&.+-,\/\\锟絕]/.test(chats) ? chats.match(/^[锟斤拷锟阶�锟斤拷锟斤拷锟斤拷_=|~!?#$%^&.+-,\/\\锟絕]/gi) : '#'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
		const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}@s.whatsapp.net`, "6281511480762@s.whatsapp.net"].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isBan = cekBannedUser(sender, ban)
		const isMuted = isGroup ? mute.includes(from) : false
        const isAfkOn = checkAfkUser(sender, afk)
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiWame = isGroup ? antiwame.includes(from) : false
        const isAntiYt = isGroup ? antiyt.includes(from) : false
        const isAntiTt = isGroup ? antitiktok.includes(from) : false
        const isBadword = isGroup ? grupbadword.includes(from) : false
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user

        const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "120363040646100247@g.us","inviteCode": "https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq","groupName": "AzzBot", "caption": `锟� ${pushname}`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363040646100247@g.us" } : {}) },message: { "imageMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '100000000', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fake = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `120363040646100247@g.us` } : {}) },message: { "imageMessage": { "title":`REMBOTZ MULTI DEVICE\n${ucapanWaktu} ${pushname !== undefined ? pushname : `Kak`}`, "h": `Hmm`,'seconds': '100000000', 'caption': `REMBOTZ MULTI DEVICE\n${ucapanWaktu} ${pushname !== undefined ? pushname : `Kak`}`, 'jpegThumbnail': fs.readFileSync(setting.pathimg)}}}
    const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hidetag Cuy!`,jpegThumbnail: fs.readFileSync(setting.pathimg)}}}
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
           var button = [
		        	{ urlButton: { displayText: `Source`, url : `https://youtu.be/${data.id}` } },
	         		{ quickReplyButton: { displayText: `馃幍 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
	         		{ quickReplyButton: { displayText: `馃帴 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, image: {url: data.thumb}, templateButtons: button, footer: 'Pilih Salah Satu Button Dibawah', mentions: [sender]} )
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => conn.sendMessage(ownerNumber, { text: `Send Play Error : ${e}` }))
           })
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const fakemsg = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: fake})
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+${ownerNumber}` } },
		const buttonsDefault = [
			{ urlButton: { displayText: `${namagrup}`, url : `${setting.grup}` } },
			{ urlButton: { displayText: `Nomer Owner`, url : `${nomorown}` } },
			{ quickReplyButton: { displayText: `馃挵 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Script`, id: `${prefix}sc` } },
		]
		const button5 = [
			{ callButton: { displayText: `Number Owner`, phoneNumber: `${numown}` } },
			{ urlButton: { displayText: `Youtube`, url : `${setting.youtube}` } },
			{ quickReplyButton: { displayText: `Back To Menu 馃敊`, id: `${prefix}menu` } },
		]
		const buttonsSewa = [
			{ urlButton: { displayText: `${namagrup}`, url : `${setting.grup}` } },
			{ urlButton: { displayText: `Website`, url : `${setting.website}` } },
			{ quickReplyButton: { displayText: `Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } },
		]
		const buttonsMenu = [
			{ urlButton: { displayText: `${namagrup}`, url : `${setting.grup}` } },
			{ urlButton: { displayText: `Youtube`, url : `${setting.youtube}` } },
			{ quickReplyButton: { displayText: `Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
			{ quickReplyButton: { displayText: `Premium`, id: `${prefix}daftarprem` } },
		]
		const buttonsDiamondFF = [
			{ urlButton: { displayText: `Website`, url : `${setting.website}` } },
			{ quickReplyButton: { displayText: `Format ID`, id: `${prefix}formatid` } },
		]
		const buttonsAllmenu = [
		    { urlButton: { displayText: `Youtube`, url : `${setting.youtube}` } },
		    { urlButton: { displayText: `Website`, url : `${setting.website}` } },
			{ quickReplyButton: { displayText: `All Menu`, id: `${prefix}allmenu` } },
			{ quickReplyButton: { displayText: `Thanks To`, id: `${prefix}tqto` } },
		]
		const buttonsAntilink = [
			{ quickReplyButton: { displayText: `Antilink Enable`, id: `${prefix}antilinka enable` } },
			{ quickReplyButton: { displayText: `Antilink Disable`, id: `${prefix}antilinka disable` } },
		]
		const buttonsAntilinkyt = [
			{ quickReplyButton: { displayText: `Antilink Youtube Enable`, id: `${prefix}antilinkyta enable` } },
			{ quickReplyButton: { displayText: `Antilink Youtube Disable`, id: `${prefix}antilinkyta disable` } },
		]
		const buttonsAntilinktt = [
			{ quickReplyButton: { displayText: `Antilink Tiktok Enable`, id: `${prefix}antilinktta enable` } },
			{ quickReplyButton: { displayText: `Antilink Tiktok Disable`, id: `${prefix}antilinktta disable` } },
		]
		const buttonsAntiwame = [
			{ quickReplyButton: { displayText: `Antiwame Enable`, id: `${prefix}antiwamea enable` } },
			{ quickReplyButton: { displayText: `Antiwame Disable`, id: `${prefix}antiwamea disable` } },
		]
		const buttonsGroup = [
			{ quickReplyButton: { displayText: `Group Open`, id: `${prefix}groupa open` } },
			{ quickReplyButton: { displayText: `Group Close`, id: `${prefix}groupa close` } },
		]
		const buttonsAntibad = [
			{ quickReplyButton: { displayText: `Anti Badword Enable`, id: `${prefix}antibadworda enable` } },
			{ quickReplyButton: { displayText: `Anti Badword Disable`, id: `${prefix}antibadworda disable` } },
		]
		const buttonsRekber = [
			{ urlButton: { displayText: `Chat Owner`, url : `${nomorown}` } },
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

         // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(`://chat.whatsapp.com`)) {
                reply(`*[ GROUP LINK DETECTOR ]*\n\nKamu Mengirim Link Grup, Bot Akan Kick Kamu`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
         // Anti YT
        if (isGroup && isAntiYt && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(`https://youtu.be/`)) {
                reply(`*[ YOUTUBE LINK DETECTOR ]*\n\nKamu Mengirim Link Grup, Bot Akan Kick Kamu`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        // Anti Tiktok
        if (isGroup && isAntiTt && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(`https://vt.tiktok.com/`)) {
                reply(`*[ TIKTOK LINK DETECTOR ]*\n\nKamu Mengirim Link Grup, Bot Akan Kick Kamu`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
         // Anti wame
        if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(wa.me\/)/gi)) {
                reply(`*[ NOMOR LINK DETECTOR ]*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick`)
                number = sender

      conn.groupParticipantsUpdate(from, [number], "remove")

            }
        }
                // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*[ ANTI BADWORD ]*\n\nSepertinya kamu sudah berkata kasar lebih dari 3x, maaf kamu akan di kick`)
                        number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }

		// Auto Read & Presence Online
		conn.sendReadReceipt(from, sender, [msg.key.id])
		conn.sendPresenceUpdate('available', from)
		conn.sendPresenceUpdate('composing', from)
		
        // Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }

		// Premium
		_prem.expiredCheck(conn, premium)

    // Banned
        if (isBan) return
        BannedExpired(ban)
        
        // Mute
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }
        
        // Afk
        if (isGroup) {
            if (mentioned.length !== 0){
                for (let ment of mentioned) {
                    if (checkAfkUser(ment, afk)) {
                        const getId = getAfkId(ment, afk)
                        const getReason = getAfkReason(getId, afk)
                        const getTime = Date.now() - getAfkTime(getId, afk)
                        const heheh = ms(getTime)
                        await mentions(`*銆� AFK MODE 銆�*\n\n*Sssttt! Orangnya lagi AFK, jangan diganggu!*\n\n*Nama :* @${ment.split('@')[0]}\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} \`\`\`Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\`\`\``, [ment], true)
                        sendMess(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nIn Group : ${groupName}\nPesan : ${chats}`)
                    }
                }
            }
            if (checkAfkUser(sender, afk)) {
                afk.splice(getAfkPosition(sender, afk), 1)
                fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
                await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
            }
        }
        
		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

// Auto Youtube Downloader

let yutu = `https://youtu${chats.slice(13)}`

if (!isGroup){

if (chats.startsWith(yutu)) {

            y2mateA(yutu).then( data => {

              conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fvideo})

})

}

}

if (isGroup) {

if (chats.startsWith(yutu)) {

  var buttonsYt = [

			{ urlButton: { displayText: `Link`, url : `${yutu}` } },

			{ quickReplyButton: { displayText: `Video`, id: `${prefix}ytmp4 ${yutu}` } },

			{ quickReplyButton: { displayText: `Voice Not`, id: `${prefix}ytmp3vn ${yutu}` } },

			{ quickReplyButton: { displayText: `Document`, id: yutu } },

		]

            y2mateA(yutu).then( data => {

              conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4'}, {quoted: msg})

              var caption = monospace(`Auto Download Youtube, Pilih Tipe Berikut`)

              conn.sendMessage(sender, {text: caption, templateButtons: buttonsYt, footer: botName, mentions: [sender]} )

					  })

            }

}

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var tebakgmbr = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakgambar` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: tebakgmbr, footer: 'TEBAK - GAMBAR', mentions: [sender]} )  
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
		
		cekWaktuGame(conn, kuiscuy)
		if (isPlayGame(from, kuiscuy) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, kuiscuy)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
			var kode = randomNomor(1000000000, 9000000000)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, kuiscuy)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakkata` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK KATA', mentions: [sender]} )  
		    kuiscuy.splice(getGamePosi(from, kuiscuy), 1)
		  }
		}
		
		cekWaktuGame(conn, tekateki)
		if (isPlayGame(from, tekateki) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tekateki)) {
		    var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tekateki)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tekateki` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'KUIS V2', mentions: [sender]} )  
		    tekateki.splice(getGamePosi(from, tekateki), 1)
		  }
		}
		
		cekWaktuGame(conn, tebakkimia)
		if (isPlayGame(from, tebakkimia) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakkimia)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tebakkimia)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakkimia` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK KIMIA', mentions: [sender]} )  
		    tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
		  }
		}
		
		cekWaktuGame(conn, tebaktebakan)
		if (isPlayGame(from, tebaktebakan) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaktebakan)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tebaktebakan)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}kuis` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'KUIS', mentions: [sender]} )  
		    tebaktebakan.splice(getGamePosi(from, tebaktebakan), 1)
		  }
		}
		cekWaktuGame(conn, tebaklagu)
		if (isPlayGame(from, tebaklagu) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebaklagu)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tebaklagu)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebaklagu` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'Tebak Lagu', mentions: [sender]} )  
		    tebaklagu.splice(getGamePosi(from, tebaklagu), 1)
		  }
		}
		
		cekWaktuGame(conn, susun)
		if (isPlayGame(from, susun) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, susun)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, susun)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}susunkata` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'Susun Kata', mentions: [sender]} )  
		    susun.splice(getGamePosi(from, susun), 1)
		  }
		}
		
		cekWaktuGame(conn, siapaaku)
		if (isPlayGame(from, siapaaku) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, siapaaku)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, siapaaku)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}siapakahaku` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK AKU', mentions: [sender]} )  
		    siapaaku.splice(getGamePosi(from, siapaaku), 1)
		  }
		}
		
		cekWaktuGame(conn, tb)
		if (isPlayGame(from, tb) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tb)) {
		    var htgm = randomNomor(200, 400)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tb)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakbendera` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK BENDERA', mentions: [sender]} )  
		    tb.splice(getGamePosi(from, tb), 1)
		  }
		}
		
if (chats.startsWith(`bot`)){
 var teks = `Halo Kak ${pushname} \n\nAda Yang Bisa Saya Bantu ? Klik Buttton Dibawah Untuk Memulai Menu`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
if (chats.startsWith(`Bot`)){
 var teks = `*Halo Kak ${pushname}*\n\n*_Ada Yang Bisa Saya Bantu ? Klik Buttton Dibawah Untuk Memulai Menu_*`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
if (chats.startsWith(`@380999367339`)){ 
var teks = `*Halo Kak ${pushname}*\n\n*_Ada Yang Bisa Saya Bantu ? Klik Buttton Dibawah Untuk Memulai Menu_*`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
if (chats.startsWith(`Tes`)){ 
var teks = `*Halo Kak ${pushname}*\n\n*_Ada Yang Bisa Saya Bantu ? Klik Buttton Dibawah Untuk Memulai Menu_*`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
if (chats.startsWith(`tes`)){ 
var teks = `*Halo Kak ${pushname}*\n\n*_Ada Yang Bisa Saya Bantu ? Klik Buttton Dibawah Untuk Memulai Menu_*`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
if (chats.startsWith(`@6281534162316`)){ 
var teks = `*Halo Kak ${pushname}*\n\n*_Jangan Tag Owner Ku Dia Lagi Sibuk_*`
var buttonsDefa = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu" }, type: 1 }]
conn.sendMessage(from, { caption: teks, image: fs.readFileSync(setting.pathimg), buttons: buttonsDefa, footer: `${setting.botName}` }, { quoted: fake })
}
 
if (chats.startsWith("@37258266435")){
	/*conn.sendMessage(from, { react: { text: `馃槏`, key: msg.key }})*/
   conn.sendMessage(from, { audio: {url : `https://d.top4top.io/m_22231oj7h1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command){
            case prefix+'P': case prefix+'proses':{
            	if (!isQuotedMsg) return reply(`Reply Message nya!`)
            	if (!isGroup) return fakemsg(mess.OnlyGrup)
                fakemsg(`*銆� TRANSAKSI PENDING 銆�*\n\n\`\`\`TANGGAL : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nJAM : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB\nSTATUS : Pending\`\`\`\n\nPesanan @${sender} Sedang Diproses`)
            }
                break
             case prefix+'D': case prefix+'done':{
             	if (!isQuotedMsg) return reply(`Reply Message nya!`)
             	if (!isGroup) return fakemsg(mess.OnlyGrup)
                fakemsg(`*銆� TRANSAKSI BERHASIL 銆�*\n\n\`\`\`TANGGAL : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nJAM : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB\nSTATUS : Berhasil\`\`\`\n\nTerimakasih @${sender} Next Order Ya`)
            }
                break
			// Main Menu
			case prefix+'allmenu':
			  /*conn.sendMessage(from, { audio: fs.readFileSync('audio/Menu.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})*/
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    
				/*conn.sendMessage(from, { react: { text: `馃憢`, key: msg.key }})*/
conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/chris2.jpg'), templateButtons: buttonsMenu, footer: `${footer}`, mentions: [sender]} )
				break
case prefix+'delete':
  case prefix+'d':
    case prefix+'del':
  conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
  break
case prefix+'menu':
  var teks = `${ucapanWaktu} kak 

*[ REMBOTZ-2022 ]*
鉃wner:IzumiNazora
鉃otName:Rembotz
鉃unVia:Heroku

馃棑锔廡anggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
鈴癢aktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
馃煝Waktu Online : *_Runtime : ${runtime(process.uptime())}_*


馃搶Note : ${note}`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/chris2.jpg'), templateButtons: buttonsAllmenu, footer: `${footer}`, mentions: [sender]} )
			    break
case prefix+'donasiah':
  fakemsg(`Jika Ingin Donasi Harap Hubungi Owner\n\nhttps://wa.me/${ownerNumber}`)
  break
case prefix+'donasi':
  case prefix+'donate':
  var donasibut = [
			{ urlButton: { displayText: `Group RemBotz`, url : `${setting.grup}` } },
			{ quickReplyButton: { displayText: `Aku Ingin Donasi`, id: `${prefix}donasiah` } },
		]
var teks = `  鈹�
  鈹溾攢 鉂� GOPAY
  鈹溾攢 鉂� ${gopay}
  鈹溾攢 鉂� DANA
  鈹溾攢 鉂� ${pulsa}
  鈹溾攢 鉂� INSTAGRAM
  鈹斺攢 鉂� https://www.instagram.com/${insta}
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`
 conn.sendMessage(from, { caption: teks, image: {url: `${linkdonasi}`}, templateButtons: donasibut, footer: 'DONASI UNTUK PERKEMBANGAN BOT MD', mentions: [sender]} )  
			    break
case prefix+'daftarprem':
  var teks = `*[ LIST HARGA PREM ]*

_Yakin kamu mau daftar ke premium?_

*Keuntungan :*
- Limit Unlimited
- Akses Fitur Premium
- Tidak Ada Kata ~Limit Menurun~

*LIST DAFTAR PREMIUM*
- Rp. 5.000 - 7 Hari
- Rp. 10.000 - 1 Bulan`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/premium.jpg'), templateButtons: button5, footer: 'DAFTAR PREM UNTUK AKSES FITUR PREMIUM', mentions: [sender] })
			    break

case prefix+'rekber': //CASE BY MR.108P
  var teks = `*[ LIST HARGA REKBER ]*

 ${rekbera}
 ${rekberb}
 ${rekberc}
 ${rekberd}
 ${rekbere}
 ${rekberf}
 ${rekberg}
 ${rekberh}`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/rekber.jpg'), templateButtons: buttonsRekber, footer: 'LIST REKBER', mentions: [sender] })
			    break

case prefix+'sc': //CASE BY MR.108P
  var teks = `*SOURCE CODE*
SCRIPT BY MR .108P
`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/chris2.jpg'), templateButtons: button5, footer: `${footer}`, mentions: [sender] })
			    break
case prefix+'rules': //CASE BY MR.108P
  var teks = `*RULES AND FAQ*

1. Jangan spam bot. 馃檯
Sanksi: *鉂� WARN/SOFT BLOCK*

2. Jangan telepon bot. 鈽庯笍
Sanksi: *鉂� SOFT BLOCK*

3. Jangan mengeksploitasi bot.馃槚
Sanksi: *PERMANENT BLOCK*

馃棷锔� Bot tidak atau lambat merespon ?
鉃★笍 Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules鈥硷笍

馃棷锔� Dimana saya bisa mendapatkan Script dari bot ini ?
鉃★笍 Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

馃棷锔� Prefixnya apa ya?
鉃★笍 Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

馃棷锔� Kak, kok syaa chat owner tidak direspon?
鉃★笍 Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

鈿狅笍 Segala kebijakan dan ketentuan ${setting.botName} di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*锕�*)

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan ${setting.botName}
馃槚馃檹`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/rules.jpg'), templateButtons: button5, footer: 'PATUHI RULES YANG ADA JANGAN LANGGAR RULES NYA JIKA MELANGGAR ADA AKIBAT NYA', mentions: [sender] })
			    break
case prefix+'sewabot': //CASE BY MR.108P
  var teks = `*鈹�鈹� 銆� SEWA BOT 銆� 鈹�鈹�*

*Harga Sewa*
7 Hari = ${tujuhhari}
30 Hari = ${tigapuluhhari}
1 Tahun = ${setahun}
Permanen = ${permanen}

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Gratis Premium 7 Hari
- Menyapa Member Join Ke Group
- Dan Lainnya

*_Pembayaran Melalui Qris Link Qris = ${qris}_*

*_Untuk Konfirmasi Saldo Hubungi Owner Silakan Klick Link Di Bawah_*
*_${nomor}_*`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/sewa.jpg'), templateButtons: buttonsSewa, footer: `漏 Sewa Bot ${nameown}`, mentions: [sender] })
			    break
case prefix+'kodeotp':
case prefix+'listkodeotp':
var teks = `*KODE OTP WHATSAPP*

_1. Vietnam / +84 = 3K_
_2. Ukraine / +380 = 4K_
_3. Estonia / +372 = 3K_
_4. Indonesia / +62 = 3K_
_5. Russia / +7 = 3K_

\`\`\`TIDAK MENERIMA VIPUL
SCAN QR DI ATAS PEMBAYARAN BISA MELAUI = GOPAY - OVO - DANA - SHOOPEPAY - DLL\`\`\``
var kode = [{buttonId: `/owner`, buttonText: { displayText: "Owner" }, type: 1 }]
				conn.sendMessage(from, { caption: teks, image: { url: `${linkdonasi}` }, buttons: kode, footer: 'Silakan Hubungi Owner Untuk Melanjutkan Pesananmu' }, { quoted: fake })
				break
case prefix+'jadibot':
case prefix+'listjadibot':
  var teks = `*[ LIST JADI BOT ]*

Jasa Jadi Bot:15k
Satus :Permanen

*_Pembayaran Via : ${via}_*

*Jika Ingin Order Klick Button Dibawah Atau Ketik ${prefix}formatjd*`
			    var jd = [{buttonId: `/formatjd`, buttonText: { displayText: "Format Jadi Bot" }, type: 1 }]
				conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/chris2.jpg'), buttons: jd, footer: `Klik Button Dibawah Untuk Mengisi Formulir Atau Bisa Ketik ${prefix}formatjd` }, { quoted: fake })
				break
case prefix+'formatjd':
fakemsg(`[JASA JADI BOT]\n\nHARGA/DANA :15K\nSTATUS :PERMANENT\n*KIRIM*\n\nNAMA BOT:\nNAMA OWNER:\nNOMOR BOT:\nNOMOR OWNER:\nNAMA GITHUB:\nNAMA IG:\nNOMOR/LINK PEMBAYARAN STORE SHOP:(NOMOR/LINK)\nLINK GRUP:\n\nBUAT LOGO UNTUK BOT NYA\n\nSYARAT:\nHARUS ADA 2 HP UNTUK SCANE QR NYA\n\n_SEKIAN TERIMAKASI_\n\n*Kirim Formulir Ini Ke ${nomor}*`)
  break
case prefix+'runtime':
case prefix+'tes':
  var teks = `*鈹�鈹� 銆� TES STATUS BOT 銆� 鈹�鈹�*


*[ STATUS BOT ONLINE ]*
*_Runtime : ${runtime(process.uptime())}_*`
			    conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/tes.jpg'), templateButtons: buttonsSewa, footer: `漏 Bot By ${nameown}`, mentions: [sender] })
			    break
case prefix+'grouprembot':
  fakemsg(`Group ${setting.botName}\n${setting.grup}`)
  break
			case prefix+'speed':
			case prefix+'ping':
			  reply("Testing Speed...")
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            fakemsg(`*${latensi.toFixed(4)}* Second Membalas Chat Anda`)
		            break
case prefix+'infobot':
  case prefix+'inforobot':
    case prefix+'info':
      var caption = `*[ Info ${botName} ]*

Haii, aku adalah *${botName}*, Yang bisa membantu anda untuk membuat stiker dan download lagu yang di udah di program oleh Pemilik Aku *${ownerName}* aku mempunyai lebih dari 100 fitur yang bisa kau gunakan dengan gratis, kamu Bisa melihat fitur fitur tersebut dengan cara ketik /menu.

*Nama Bot :* ${botName}
*Name Owner :* ${ownerName}
*Nomor Bot :* wa.me/${botNumber}
*Nomor Owner :* wa.me/${ownerNumber}
*Engine :* NodeJs
*Status :* Aktif
*Aktif Selama :* ${runtime(process.uptime())}
*Auto Download :* Aktif

===================
Thanks To
- Ortu
- Allfriends
- ${ownerName}`

conn.sendMessage(from, {caption: caption, image: fs.readFileSync('media/chris2.jpg')}, {quoted: fake})
break
case prefix+'thanksto':
case prefix+'tqto':
var but = [{buttonId: `/owner`, buttonText: { displayText: "Owner" }, type: 1 }]
  var teks = `*鈹�鈹� 銆� THANKS TO 銆� 鈹�鈹�*
*- IzumiNazora :*
*https://youtube.com/channel/UCal0HWOurq6GIF4_z0N2B6Q*`
conn.sendMessage(from, { caption: teks, image: { url: `https://telegra.ph/file/690548b0ce1de0b305496.jpg` }, buttons: but, footer: 'Thanks You For Making This Bot' }, { quoted: fake })
break
			/*case prefix+'donate':
			case prefix+'donasi':
			    reply(`鈼� DONASI
  鈹�
  鈹溾攢 鉂� GOPAY
  鈹溾攢 鉂� 088213292687
  鈹溾攢 鉂� OVO
  鈹溾攢 鉂� 088213292687
  鈹溾攢 鉂� PULSA
  鈹溾攢 鉂� 081319944917
  鈹溾攢 鉂� PULSA2
  鈹溾攢 鉂� 088213292687
  鈹溾攢 鉂� INSTAGRAM
  鈹斺攢 鉂� https://www.instagram.com/chris.tianid
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`)
			    break*/
			case prefix+'owner':
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], ownerName, fake)
			    }
			    break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
case prefix+'block':
  case prefix+'blok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "block")
                    }
                    } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa block Owner`)
                    conn.updateBlockStatus(quotedMsg.sender, "block")
                    reply(`Sukses block target`)}
  break 
  case prefix+'unblock':
    case prefix+'unblok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "unblock")
                    }
                    } else if (isQuotedMsg) {
                    
                    conn.updateBlockStatus(quotedMsg.sender, "unblock")
                    reply(`Sukses buka block target`)}
  break 
  case prefix+'setprefix':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[2], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case prefix+'unban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case prefix+'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break


	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': case prefix+'stikergif': case prefix+'stikgif':
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: fake })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case prefix+'toimg': case prefix+'toimage':
			case prefix+'tovid': case prefix+'tovideo':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, { image: { url: `./${rand2}` }}, { quoted: fake })
			      limitAdd(sender, limit)
				  fs.unlinkSync(`./${rand2}`)
			    })
			    } else {
			    fakemsg(mess.wait)
		          webp2mp4File(`./${rand1}`).then( data => {
			       fs.unlinkSync(`./${rand1}`)
			       conn.sendMessage(from, { video: { url: data.result }}, { quoted: fake })
			       limitAdd(sender, limit)
				  })
			    }
			    break
case prefix+'stikerpatrick':
            axios.get(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=Rembot0`).then(({ data }) => {
                conn.sendMessage(from, {sticker: {url: 'https://api.lolhuman.xyz/api/sticker/patrick?apikey=Rembot0'}}, {quoted: fake})
            })
            break

case prefix+'stikergura':
            axios.get(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=Rembot0`).then(({ data }) => {
                conn.sendMessage(from, {sticker: {url: 'https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=Rembot0'}}, {quoted: fake})
            })
            break

case prefix+'stikeramongus':
            axios.get(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=Rembot0`).then(({ data }) => {
                conn.sendMessage(from, {sticker: {url: 'https://api.lolhuman.xyz/api/sticker/amongus?apikey=Rembot0'}}, {quoted: fake})
            })
            break

case prefix+'stikeranjing':
            axios.get(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=Rembot0`).then(({ data }) => {
                conn.sendMessage(from, {sticker: {url: 'https://api.lolhuman.xyz/api/sticker/anjing?apikey=Rembot0'}}, {quoted: fake})
            })
            break
	        // Downloader Menu

case prefix+'tiktoknowm':
case prefix+'tiktok':
				  case prefix+'tt':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
            if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
            axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=Rembot0&url=${q}`).then(({ data }) => {
				fakemsg(mess.wait)
                conn.sendMessage(from, { caption: `Succes Download Video Tiktok, Thanks For Using Rembotz by Izumi`, video: { url: data.result.link }, mimetype: 'video/mp4' })
            })
            break
			case prefix+'tiktokaudio'://MASIH DALAM PERBAIKAN
				case prefix+'ttaudio':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
			    hxz.ttdownloader(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: fake })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break

				case prefix+'mediafire':
				  if (!isPremium)return reply(mess.OnlyPrem)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
					var data = await fetchJson(`https://zenzapis.xyz/downloader/mediafire?apikey=rembotz&url=${q}`)
					conn.sendMessage(from, { document: { url: data.url }, fileName: `${data.filename}`, mimetype: 'zip' }, { quoted: fake })
					limitAdd(sender, limit)
					break
            case prefix+'play':
				case prefix+'yt':
					case prefix+'youtube':
					if (!isGroup) return reply(mess.OnlyGrup)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                fakemsg(mess.wait)
                await sendPlay(from, q)
				limitAdd(sender, limit)
                break

case prefix+'ytmp4': case prefix+'mp4':
if (!isGroup) return reply(mess.OnlyGrup)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
			    y2mateV(args[1]).then ( data => {
			      var capt = monospace(`Title : ${data[0].judul}`)
			      conn.sendMessage(from, {caption: capt, video: {url: data[0].link}}, {quoted: fake})
			    }).catch(() => reply(mess.error.api))
			    break
/*case prefix+'ytmp3': case prefix+'mp3':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*â‰» Title :* ${data.title}\n*â‰» Quality :* ${data.medias[7].quality}\n*â‰» Size :* ${data.medias[7].formattedSize}\n*â‰» Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
				///SCRAPER YTMP3 BY ARASYA RAFI
case prefix+'ytmp3':
if (!isGroup) return reply(mess.OnlyGrup)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
				y2mateA(q).then( data => {
					var capt = `馃摏 *Title :* ${data[0].judul}\n馃敯 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: fake}) 
					
					conn.sendMessage(from, { audio: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp4' }, { quoted: fake })
					  }
					  )
limitAdd(sender, limit)
              break
			  case prefix+'ytmp3vn':
			if (!isGroup) return reply(mess.OnlyGrup)
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
				y2mateA(q).then( data => {
					var capt = `馃摏 *Title :* ${data[0].judul}\n馃敯 *Size Video :* ${data[0].size}\n猡碉笍 *Download :* ${data[0].link}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg}) 
					
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
					  }
					  )
				limitAdd(sender, limit)
				  break
				  
			case prefix+'getvideo': case prefix+'getvidio':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    fakemsg(mess.wait)
			    y2mateV(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var capt = monospace(`Judul : ${data[0].judul}`)
			      conn.sendMessage(from, { video: { url: data[0].link }, caption: capt }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    fakemsg(mess.wait)
			    y2mateA(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: msg})
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length == 0) return reply(`Example: ${prefix + command} https://instagram.com/`)
            fakemsg(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=Rembot0&url=${q}`).then(({ data }) => {
                conn.sendMessage(from, { caption: `Succes Download Video Instagram, Thanks For Using Rembotz by Izumi`, video: { url: data.result }, mimetype: 'video/mp4' })
            })
            break

case prefix+'igstory':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
            if (args.length == 0) return reply(`Example: ${prefix + command} https://instagram.com/`)
            fakemsg(mess.wait)
            axios.get(`https://zenzapis.xyz/downloader/instagram/story?apikey=rembotz&username=${q}`).then(({ data }) => {
                conn.sendMessage(from, { caption: `Succes Download Video Instagram, Thanks For Using Rembotz by Izumi`, video: {url: data.result}, mimetype: 'video/mp4' })
            })
            break

			case prefix+'facebook': case prefix+'fbdl':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			fakemsg(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=Rembot0&url=${q}`).then(({ data }) => {
                conn.sendMessage(from, { caption: `Succes Download Video Instagram, Thanks For Using Rembotz by Izumi`, video: { url: data.result }, mimetype: 'video/mp4' })
            })
            break

case prefix+'hentaivideo': 
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			fakemsg(mess.wait)
            axios.get(`https://zenzapis.xyz/downloader/hentaivid?apikey=rembotz`).then(({ data }) => {
            	var capt = `*Title :* ${data.result.tilte}\n馃敯 *Link :* ${data.result.link}\n *Category :* ${data.result.category}\n *Share :* ${data.result.share_count}\n *Views :* ${data.result.views_count}\n Type :* ${data.result.type}`
                conn.sendMessage(from, { caption: {capt}, video: { url: data.result.video_1.video_2 }, mimetype: 'video/mp4' })
            })
            break
			// Owner Menu
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case prefix+'masuk':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, { text: `*[ ${botName} Broadcast ]*\n\n${q}` })
                               await sleep(1000)
                            }
                            break
			case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
case prefix+'block':
  case prefix+'blok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "block")
                    }
                    } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa block Owner`)
                    conn.updateBlockStatus(quotedMsg.sender, "block")
                    reply(`Sukses block target`)}
  break 
  case prefix+'unblock':
    case prefix+'unblok':
  if (!isOwner)return reply(mess.OnlyOwner)
  if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        conn.updateBlockStatus(mentioned[0], "unblock")
                    }
                    } else if (isQuotedMsg) {
                    
                    conn.updateBlockStatus(quotedMsg.sender, "unblock")
                    reply(`Sukses buka block target`)}
  break 
  case prefix+'setprefix':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
			// Random Menu
  case prefix+'katagalau':
    case prefix+'galau':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes = JSON.parse(fs.readFileSync('./fitur/katagalau.json'))
var hasil = pickRandom(kotes)
var quot = [
			{ quickReplyButton: { displayText: `Next Kata Galau 鉃★笍`, id: `${prefix}katagalau` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: 'Galau Mulu', mentions: [sender]} )
		limitAdd(sender, limit)
break
case prefix+'quotes':
  case prefix+'quote':
    case prefix+'katakata':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes2 = JSON.parse(fs.readFileSync('./fitur/quotes.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next Quotes 鉃★笍`, id: `${prefix}quote` } },
		]
		
		conn.sendMessage(from, {text: hasil.quotes, templateButtons: quot, footer: `~ ${hasil.author}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
case prefix+'covid': case prefix+'covid19': case prefix+'kopit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/covidworld?apikey=${jojoapi}`)
  var captnya = `*[ COVID WORLD ]*\n\nTotal Kasus Seluruh Dunia : *${data.result.totalCases}* Jiwa\nTotal Sembuh : *${data.result.recovered}* Jiwa\nMeninggal : *${data.result.deaths}* Jiwa\nKasus Aktif : *${data.result.activeCases}*\nKasus Tertutup : *${data.result.closedCases}*\n\nPembaruan Terakhir Pada : *${data.result.lastUpdate}*`
   conn.sendMessage(from, {caption: captnya, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: fake})
   limitAdd(sender, limit)
   break
//Persingkat Url CASE BY MR.108P
case prefix+'shortlink':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/shorturl?url=${args[1]}2`)
			    fakemsg(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'cuttly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/cuttly?url=${args[1]}`)
			    fakemsg(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'bitly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/bitly?url=${args[1]}`)
			    fakemsg(`*Link : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'tinyurl':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/tinyurl?url=${args[1]}`)
			    fakemsg(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'hitungmundur':
  if (args.length < 2) return reply(`Mana tanggalnya?\nContoh : ${prefix}hitungmundur 12 10 2022`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (isNaN(args[1], args[2], args[3])) return reply(`Harus berupa angka`)
				var data = await fetchJson(`https://melcanz.com/countdown?tanggal=${args[1]}&bulan=${args[2]}&tahun=${args[3]}&apikey=${apikey}`)
			    reply(`Terisisa ${data.result}`)
				limitAdd(sender, limit)
				break
case prefix+'kbbi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const kbbi = args.join(" ")
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/kbbi?kata=${args[1]}&apikey=${jojoapi}`)
			    fakemsg(`Kata : ${kbbi}\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
//Primbon Menu CASE BY MR.108P
case prefix+'artimimpi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artimimpi = args.join(" ")
				var data = await fetchJson(`https://zenzapis.xyz/primbon/artimimpi?query=${args[1]}&apikey=rembotz`)
			    fakemsg(`Mimpi : ${q}\n\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
case prefix+'artinama':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artinama = args.join(" ")
				var data = await fetchJson(`https://zenzapis.xyz/primbon/artinama?text=${args[1]}&apikey=rembotz`)
			    fakemsg(`Nama : ${q}\n\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
			case prefix+'cecan': case prefix+'cewek':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cecan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
			case prefix+'cogan': case prefix+'cowok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cogan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
				break
case prefix+'naruto':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/naruto`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'yaoi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				fakemsg(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'loli':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/loli`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'cosplay':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/cosplay`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cosplay anime", image: { url: `https://christian-id-api.herokuapp.com/api/random/cosplay?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallpaperanime':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallpaperanime`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper anime", image: { url: `https://api.lolhuman.xyz/api/random/wallnime?apikey=Rembot0`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallpapersearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallpapersearch`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper", image: { url: `https://api.lolhuman.xyz/api/wallpaper2?apikey=Rembot0&query=${args[1]}`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallpubg':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallpubg`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper PUBG", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/pubg?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'walljeniblpk':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/walljeniblpk`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper JENI", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/jeni?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'walljisokim':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/walljeniblpk`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper JISO", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/jiso?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallcecan':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallcecan`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper CECAN", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/cecan2?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallcogan':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallcecan`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper COGAN", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/cogan2?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallsatanic':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallsatanic`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper SATANIC", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/satanic?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallquote':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallquote`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper QUOTE", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/katakata?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallkartun':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallkartun`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper KARTUN", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/kartun?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallplanet':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallplanet`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper PLANET", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/tatasurya?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallcyberspace':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallcyberspace`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper CYBERSPACE", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/cyberspace?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallgaming':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallgaming`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper GAMING", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/gaming?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallprogram':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallprogram`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper PROGRAMING", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/programing?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallteknologi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallteknologi`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper TEKNOLOGI", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/teknologi?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallmountain':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallmountain`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper MOINTAIN", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/mountain?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'walldoraemon':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/walldoraemon`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper DORAEMON", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/doraemon?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wallhacker':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallhacker`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Wallpaper HEKEL😱😱😱", image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/hekel?apikey=IzumiBot`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'randommeme':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/randommeme`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "AWOWOOKWOK", image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=Rembot0`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'blush':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Blush ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/blush?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'cringe':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Cringe ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/cringe?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'dance':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Dance ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/dance?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'poke':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Poke ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/poke?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wink':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Wink ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/wink?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'happy':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Happy ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/happy?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'slap':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Slap ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/slap?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'kill':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Kill ,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/kill?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'glomp':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/glomp?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'nom':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/nom?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'handhold':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/handhold?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'highfive':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/highfive?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'wave':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/wave?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'smile':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/smile?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'yeet':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/yeet?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'bonk':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/bonk?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'smug':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/smug?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'pat':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/pat?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'lick':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/lick?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'kiss':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/kiss?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'awoo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/awoo?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'hug':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/hug?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'cry':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/cry?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'cuddle':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/cuddle?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'bully':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				conn.sendMessage(from, { caption: "Random Image,Jangan Lupa jadikan sticker ketik /s", image: { url: `https://api.lolhuman.xyz/api/random/bully?apikey=Rembot0`},  quoted: fake })
			    limitAdd(sender, limit)
 			    break

//[NSFW]
case prefix+'wallanimehentai':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				fakemsg(mess.wait)
				var but = [{buttonId: `/wallanimehentai`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "BERTOBAT LAH BANG", image: { url: `https://zenzapis.xyz/api/morensfw/mobilewall?apikey=rembotz`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'yurihentai':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				fakemsg(mess.wait)
				var but = [{buttonId: `/yurihentai`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "BERTOBAT LAH BANG", image: { url: `https://api.lolhuman.xyz/api/random2/yuri?apikey=Rembot0`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break


case prefix+'milf':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				fakemsg(mess.wait)
				var but = [{buttonId: `/milf`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "BERTOBAT LAH BANG", image: { url: `https://zenzapis.xyz/randomanime/milf?apikey=rembotz`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
///[FITURNSWF]

case prefix+'neko':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
				var but = [{buttonId: `/neko`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Neko", image: { url: `https://zenzapis.xyz/randomanime/neko?apikey=rembotz`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
			    var but = [{buttonId: `/waifu`, buttonText: { displayText: "Selanjutnya" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Waifu", image: { url: `https://zenzapis.xyz/randomanime/waifu?apikey=rembotz`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'husbu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				fakemsg(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/husbu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
			// Search Menu
			case prefix+'grupwa': case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				fakemsg(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  fakemsg(teks)
				  limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				fakemsg(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  conn.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `/pinterest ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
				    limitAdd(sender, limit)
				  }
				})
			    break
			case prefix+'yts': case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				fakemsg(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�\n\n*No Urutan : ${no.toString()}*\n*鈻� Judul :* ${yt[i].title}\n*鈻� ID :* ${yt[i].videoId}\n*鈻� Channel :* ${yt[i].author.name}\n*鈻� Upload :* ${yt[i].ago}\n*鈻� Ditonton :* ${yt[i].views}\n*鈻� Duration :* ${yt[i].timestamp}\n*鈻� URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: fake })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
//report
case prefix+'report':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} laporan`)
        fakemsg(`Sukses Kirim Ke Owner, Main虏 banned!`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ USER REPORTS ]*\nThe Message : ${q}`, fake)
        }
        limitAdd(sender, limit)
        break
case prefix+'request':
        if (args.length < 2) return reply(`Kirim perintah ${command} laporan`)
        fakemsg(`*Sukses Request Fitur Ke Owner*`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ REQUEST FITUR ]*\nThe Message : ${q}`, fake)
        }
        limitAdd(sender, limit)
        break
case prefix+'join':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} Link Grup Kamu`)
        fakemsg(`Sukses Kirim Ke Owner, tunggu Laporan 3/4 menitan untuk masukan bot ke grup`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ JOIN GRUP ]*\nLink nya : ${q}`, fake)
        }
        limitAdd(sender, limit)
        break
// CASE BY MR.108P
case prefix+'wame':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} 62899xxxxxxxx`)
fakemsg(`*[ WAME ]*\n*_Link : https://wa.me/${q}_*`)
limitAdd(sender, limit)
break
case prefix+'linkig':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} chris.tianid`)
fakemsg(`*[ INSTAGRAM ]*\n*_Link : https://instagram.com/${q}_*`)
limitAdd(sender, limit)
break
case prefix+'github':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Mr.108P`)
fakemsg(`*[ GITHUB ]*\n*_Link : https://github.com/${q}_*`)
limitAdd(sender, limit)
break
//Sound Menu CASE BY MR.108P
case prefix+'sound1':
conn.sendMessage(from, { audio: fs.readFileSync('audio/sound1.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound2':
conn.sendMessage(from, { audio: fs.readFileSync('audio/sound2.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound3':
conn.sendMessage(from, { audio: fs.readFileSync('audio/sound3.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound4':
conn.sendMessage(from, { audio: fs.readFileSync('audio/sound4.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound5':
conn.sendMessage(from, { audio: fs.readFileSync('audio/sound5.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound6':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio1.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound7':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio2.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound8':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio3.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound9':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio4.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound10':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio5.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound11':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio6.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound12':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio7.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound13':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio8.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound14':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio9.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound15':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio10.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound16':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio11.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound17':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio12.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound18':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio13.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound19':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio14.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound20':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio15.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound21':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio16.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound22':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio17.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound23':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio18.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound24':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio19.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound25':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio20.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound26':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio21.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
case prefix+'sound27':
conn.sendMessage(from, { audio: fs.readFileSync('audio/audio22.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
break
//game & fun menu
//suit menu
case prefix+'suit':
  var but = [{buttonId: `#sbatu`, buttonText: { displayText: "Batu 鉁�" }, type: 1 }, {buttonId: `#sgunting`, buttonText: { displayText: "Gunting 鉁岋笍" }, type: 1 }, {buttonId: `#skertas`, buttonText: { displayText: "Kertas 鉁�" }, type: 1 }]
  var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS*\n*JIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS*\n*KAMU MENANG!!*`
conn.sendMessage(from, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik #sgunting, #sbatu, #skertas_", templateButtons: but }, {quoted: msg})
break
case prefix+'sbatu':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
					const batuh = batu[Math.floor(Math.random() * batu.length)]
					var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
					conn.sendMessage(from, { text: batuh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'sgunting':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					conn.sendMessage(from, { text: guntingh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'skertas':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					conn.sendMessage(from, { text: kertash2 }, { quoted: msg })
gameAdd(sender, glimit)
break
//akher nsfw
case prefix+'slot':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const pepekk = [
        '馃崐 : 馃崚 : 馃崘',
        '馃崚 : 馃敂 : 馃崐',
        '馃崌 : 馃崌 : 馃崘',
        '馃崐 : 馃崑 : 馃敂', //Arasya
        '馃敂 : 馃崚 : 馃崘',
        '馃敂 : 馃崚 : 馃崐',
        '馃崐 : 馃崑 : 馃敂',        
        '馃崘 : 馃崚 : 馃崑',
        '馃崘 : 馃崚 : 馃崘',
        '馃崐 : 馃崚 : 馃崚',
        '馃敂 : 馃敂 : 馃崌',
        '馃崒 : 馃崒 : 馃敂',
        '馃 : 馃 : 馃 Win馃憫',
        '馃崘 : 馃敂 : 馃敂',
        '馃崐 : 馃崑 : 馃崚',
        '馃尪锔� : 馃尪锔� : 馃尪锔� Win馃憫',
        '馃崑 : 馃崑 : 馃崑 Win馃憫',
        '馃敂 : 馃敂 : 馃崌',
        '馃敂 : 馃崌 : 馃崌', 
        '馃敂 : 馃崘 : 馃敂',
        '馃崒 : 馃崒 : 馃崒 Win馃憫'
        ]
  const kalah = [
        '馃崐 : 馃崚 : 馃崘',
        '馃崚 : 馃敂 : 馃崐',
        '馃崌 : 馃崌 : 馃崘',
        '馃崐 : 馃崑 : 馃敂', //Arasya
        '馃敂 : 馃崚 : 馃崘',
        '馃敂 : 馃崚 : 馃崐',
        '馃崐 : 馃崑 : 馃敂',        
        '馃崘 : 馃崚 : 馃崑',
        '馃崘 : 馃崚 : 馃崘',
        '馃崐 : 馃崚 : 馃崚',
        '馃敂 : 馃敂 : 馃崌',
        '馃崒 : 馃崒 : 馃敂',
        '馃崘 : 馃敂 : 馃敂',
        '馃崐 : 馃崑 : 馃崚',
        '馃敂 : 馃敂 : 馃崌',
        '馃敂 : 馃崌 : 馃崌', 
        '馃敂 : 馃崘 : 馃敂',
        ]
 const kalah2 = [
        '馃崐 : 馃崚 : 馃崘',
        '馃崚 : 馃敂 : 馃崐',
        '馃崌 : 馃崌 : 馃崘',
        '馃崐 : 馃崑 : 馃敂', //Arasya
        '馃敂 : 馃崚 : 馃崘',
        '馃敂 : 馃崚 : 馃崐',
        '馃崐 : 馃崑 : 馃敂',        
        '馃崘 : 馃崚 : 馃崑',
        '馃崘 : 馃崚 : 馃崘',
        '馃崐 : 馃崚 : 馃崚',
        '馃敂 : 馃敂 : 馃崌',
        '馃崒 : 馃崒 : 馃敂',
        '馃崘 : 馃敂 : 馃敂',
        '馃崐 : 馃崑 : 馃崚',
        '馃敂 : 馃敂 : 馃崌',
        '馃敂 : 馃崌 : 馃崌', 
        '馃敂 : 馃崘 : 馃敂',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 馃幇 GAME SLOT 馃幇 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 馃敂 : 馃敂 : 馃敂`
        var but = [{buttonId: `${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
conn.sendMessage(from, { text: slotnya, buttons: but, footer: "漏 Slot By Yahyaganzz\n@wibu_indo_88881", templateButtons: but }, {quoted: fake})
gameAdd(sender, glimit)
        break
case prefix+'cekme':
  case prefix+'me':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  const ganteng = ['Cakep 鉁旓笍','Jelek Anjrit 鉂�']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `

					 conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: cek, image: { url: res }}, {quoted: fake})).catch(() => conn.sendMessage(from, {caption: cek, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: fake}))
				    limitAdd(sender, limit)
				    break
case prefix+'y':
  fakemsg("Yey Prediksi Bot Benar")
  break
case prefix+'n':
  fakemsg("Yah Maaf Ya kak:(")
  break
case prefix+'test':
fakemsg("Bot Online")
break
case prefix+'apakah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bisakah':
  case prefix+'bisa':
    case prefix+'bisagak':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bagaimanakah':
  case prefix+'gimanakah':
    case prefix+'gimana':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'rate':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
conn.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'gantengcek':
  case prefix+'cekganteng':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Yahyaganzz`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cantikcek':
  case prefix+'cekcantik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Yahyaganzz`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'sangecek':
  case prefix+'ceksange':
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'kapankah':
  case prefix+'kapan':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cekbapak': // CASE BY MR.108P
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Liaa Cans']
					const cekbapak = bapak[Math.floor(Math.random() * bapak.length)]
					conn.sendMessage(from, { text: `Pertanyaan : Cek Bapak\nJawaban : ${cekbapak}` }, { quoted: msg })
					break
case prefix+'truth':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(`*_TRUTH_* Jawablah Dengan Jujur`)
  var truth = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?','Pernah gak sih ngeliat dia lagi sama yg lain?']
  var caption = pickRandom(truth)
  conn.sendMessage(from, {caption: `[ TRUTH!! ]\n${caption}`, image: fs.readFileSync('media/truthdare.jpg')}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'dare':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(`*_DARE_* Lakukan Tantangan Yang Diberikan Oleh Bot!`)
  var dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
  var caption = pickRandom(dare)
  conn.sendMessage(from, {caption: `[ DARE!! ]\n${caption}`, image: fs.readFileSync('media/truthdare.jpg')}, {quoted: fake})
  limitAdd(sender, limit)
  break
			case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(100, 150)
				     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1锔忊儯','2锔忊儯','3锔忊儯','4锔忊儯','5锔忊儯','6锔忊儯','7锔忊儯','8锔忊儯','9锔忊儯']
                     })
					 gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
				var tg = JSON.parse(fs.readFileSync('./fitur/tebakgambar.json'))
				var data = pickRandom(tg)
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nDeskripsi : ${data.deskripsi}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: data.img}}, {quoted: fake})
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'tebakkata':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, kuiscuy)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, kuiscuy[getGamePosi(from, kuiscuy)].msg)
				var kuisnya = JSON.parse(fs.readFileSync('./fitur/tebakkata.json'))
				var kukus = pickRandom(kuisnya)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${kukus.soal}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, kuiscuy)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'susunkata':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, susun)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, susun[getGamePosi(from, susun)].msg)
				var ngen = JSON.parse(fs.readFileSync('./fitur/susunkata.json'))
				var kukus = pickRandom(ngen)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*SUSUN KATA*\n\n`+monospace(`Susunlah Kalimat Berikut :\n${kukus.soal}\nPetunjuk : ${kukus.tipe}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Susun Kalimat', jawab, gamewaktu, res, susun)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebakbendera':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tb)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tb[getGamePosi(from, tb)].msg)
				var teben = JSON.parse(fs.readFileSync('./fitur/tebakbendera.json'))
				var kukus = pickRandom(teben)
				  kukus.name = kukus.name.split('Jawaban ').join('')
				  var teks = `*TEBAK BENDERA*\n\n`+monospace(`Petunjuk : ${kukus.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nFlag Code : ${kukus.flag}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: kukus.img}}, {quoted: fake})
				  .then( res => {
					var jawab = kukus.name.toLowerCase()
					addPlayGame(from, 'TEBAK BENDERA', jawab, gamewaktu, res, tb)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'kuis':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebaktebakan)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebaktebakan[getGamePosi(from, tebaktebakan)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebaktebakan.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${hayo.soal}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'KUIS GAME', jawab, gamewaktu, res, tebaktebakan)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tekateki':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tekateki)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tekateki[getGamePosi(from, tekateki)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tekateki.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*TEKA TEKI*\n\n`+monospace(`Soal : ${hayo.soal}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'TEKA TEKI', jawab, gamewaktu, res, tekateki)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebaklagu':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebaklagu)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebaklagu[getGamePosi(from, tebaklagu)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebaklagu.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.judul = hayo.judul.split('Judul ').join('')
				  var teks = `*TEBAK LAGU*\n\n`+monospace(`Tebak Lagu Berikut\nArtis : ${hayo.penyanyi}\nPetunjuk : ${hayo.judul.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  conn.sendMessage(from, {audio: {url: hayo.link}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.judul.toLowerCase()
					addPlayGame(from, 'TEBAK LAGU', jawab, gamewaktu, res, tebaklagu)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'siapakahaku':
  case prefix+'siapaaku':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, siapaaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, siapaaku[getGamePosi(from, siapaaku)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/siapakahaku.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*Siapa Aku?*\n\n`+monospace(`Soal : ${hayo.soal}\nNomor Soal Ke : ${hayo.index}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'Siapa Aku?', jawab, gamewaktu, res, siapaaku)
					gameAdd(sender, glimit)
				  })
			    break
case prefix+'tebakkimia':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakkimia)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakkimia[getGamePosi(from, tebakkimia)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fitur/tebakkimia.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.unsur = hayo.unsur.split('Jawaban ').join('')
				  var teks = `*TEBAK KIMIA*\n\n`+monospace(`Soal : Apa Kepanjangan Dari Unsur ${hayo.lambang}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fake})
				  .then( res => {
					var jawab = hayo.unsur.toLowerCase()
					addPlayGame(from, 'TEBAK KIMIA', jawab, gamewaktu, res, tebakkimia)
					gameAdd(sender, glimit)
				  })
			    break
             
			// Group Menu
case prefix+'antilink':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Mode Antilink Silakan Pilih On/Off*\n`
 conn.sendMessage(from, { text: teks, footer: "ANTILINK", templateButtons: buttonsAntilink }, {quoted: fake})
 break
case prefix+'antilinkyt':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Mode Antilink Youtube Silakan Pilih On/Off*\n`
 conn.sendMessage(from, { text: teks, templateButtons: buttonsAntilinkyt, footer: 'ANTILINK YOUTUBE', mentions: [sender]} )  
 break
case prefix+'antilinktt':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Mode Antilink Tiktok Silakan Pilih On/Off*\n`
 conn.sendMessage(from, { text: teks, templateButtons: buttonsAntilinktt, footer: 'ANTILINK TIKTOK', mentions: [sender]} )  
 break
case prefix+'antibadword':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Mode Antiwame Silakan Pilih On/Off*\n`
 conn.sendMessage(from, { text: teks, templateButtons: buttonsAntibad, footer: 'ANTI BADWORD', mentions: [sender]} )  
 break
case prefix+'antiwame':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Mode Antiwame Silakan Pilih On/Off*\n`
 conn.sendMessage(from, { text: teks, templateButtons: buttonsAntiwame, footer: 'ANTIWAME', mentions: [sender]} )  
 break
case prefix+'group': case prefix+'grup':
   if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 var teks = `\n*Setting Group Silakan Pilih Open/Close*\n`
 conn.sendMessage(from, { text: teks, templateButtons: buttonsGroup, footer: 'SETTING GROUP', mentions: [sender]} )  
 break
case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                if (body.slice(150)) return reply('Alasanlu kepanjangan')
                let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                addAfkUser(sender, Date.now(), reason, afk)
                mentions(`*Nama :* @${sender.split('@')[0]} sedang afk\n*Alasan :* ${reason}`, [sender], true)
                break
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'groupa': case prefix+'grupa':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem }, {quoted: fdoc})
			    break
case prefix+'tagall':
      if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
      if (args.length < 2) return reply(`Kirim perintah ${command} Pesan nya yang ingin disampaikan`)
     var mems = []
      var teks = `*[ TAG ALL ]*\nPesan : ${q}\n\n`
      for (let i of groupMembers) {
        teks += ` @${i.id.split("@")[0]}\n`
        mems.push(i.id)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      break
case prefix+'listadmin':
  if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
   var mems = []
      var teks = `*[ TAG ADMIN ]*\n${q !== undefined ? q : `Pesan Tidak Ada`}\n`
      for (let i of groupAdmins) {
        teks += ` @${i.split("@")[0]}\n`
        mems.push(i)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      break
case prefix+'infogc':
  case prefix+'infogrup':
    case prefix+'grupinfo':
      case prefix+'infogroup':
        case prefix+'groupinfo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isGroup)return reply(mess.OnlyGrup)
  var owngc = groupMetadata.owner
  var caption = `*[ ${groupMetadata.subject} ]*\n\n*Nama Grup :* ${groupMetadata.subject}\n*Pemilik Grup :* @${owngc.split("@")[0]}\n*Di Buat Pada :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Jumlah Member :* ${groupMembers.length}\n*Jumlah Admin :* ${groupAdmins.length}\n*Antilink :* ${isAntiLink ? 'Aktif ' : 'Gak Aktif '}\n*Deskripsi :* ${groupMetadata.desc}`
  conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: caption, image: { url: res }, mentions: [owngc]}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: caption, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}, mentions: [owngc]}, {quoted: msg}))
  limitAdd(sender, limit)
  break
case prefix+'promote':
  case prefix+'admin':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dijadikan admin grup`)
    }
    break
case prefix+'demote':
  case prefix+'unadmin':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan admin yang ingin diturunkan menjadi member`)
    }
    break
case prefix+'kick':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break

case prefix+'add':
  if (!isOwner)return reply("_Maaf Fitur Ini Di Nonaktifkan Oleh Owner, Karena menyebabkan nomer bot 3 kali ke banned_")
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
case prefix+'antibadworda':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case prefix+'addbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
case prefix+'mute':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
case prefix+'antilinka':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('*Antilink grup aktif*')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('*Antilink grup nonaktif*')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
                }
                break
case prefix+'antilinkyta':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antilinkyt enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiYt) return reply(`Udah aktif`)
                    antiyt.push(from)
					fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antiyt))
					reply('*Antilink Youtube aktif*')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antiyt.indexOf(from)
                    antiyt.splice(anu, 1)
                    fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antiyt))
                    reply('*Antilink Youtube nonaktif*')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilinkyt enable`)
                }
                break
case prefix+'antilinktta':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antilinktt enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiTt) return reply(`Udah aktif`)
                    antitiktok.push(from)
					fs.writeFileSync('./database/antilinktt.json', JSON.stringify(antitiktok))
					reply('*Antilink Tiktok aktif*')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antitiktok.indexOf(from)
                    antitiktok.splice(anu, 1)
                    fs.writeFileSync('./database/antilinktt.json', JSON.stringify(antitiktok))
                    reply('*Antilink Tiktok nonaktif*')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilinktt enable`)
                }
                break
case prefix+'antiwamea':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiWame) return reply(`Udah aktif`)
                    antiwame.push(from)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('*Antiwame Grup Aktif*')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antiwame.indexOf(from)
                    antiwame.splice(anu, 1)
                    fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
                    reply('*Antiwame Grup Nonaktif*')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                }
                break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*鈹�鈹� 銆� TOP BALANCE 銆� 鈹�鈹�*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                fakemsg(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6281319944917 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 fakemsg(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                fakemsg(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    fakemsg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
//Api Anto
case prefix+'ssweb':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  fakemsg(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/tools/ssweb?url=${seweb}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
  case prefix+'sshpfull':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  fakemsg(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=phone&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'ssdesktop':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  fakemsg(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=desktop&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'nuliskanan':
  var kanan = chats.slice(11)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Izumi Ganteng\n\n鈿狅笍 *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  fakemsg(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis?text=${kanan}`}}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'foliokiri':
  var fkiri = chats.slice(10)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Izumi Ganteng\n\n鈿狅笍 *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  fakemsg(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${fkiri}`}}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'nulis':
  case prefix+'tulis':
    case prefix+'menulis':
fakemsg(`*[ COMMAND NOT FOUND ]*
Command Salah 鉂�
Silahkan Pilih Type Buku/Folio Berikut

- ${prefix}foliokiri <Text>
- ${prefix}nuliskanan <Text>

Note : Anggap "<" dan ">" Tidak Ada
 `)
 break
//Wallpaper
case prefix+'hinata': // CASE BY MR.108P
var query = ["hinata hd","hinata anime"]
				var but = [{buttonId: `/hinata`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Hinata", image: { url: `https://zenzapis.xyz/randomanime/v2/hinata?apikey=rembotz`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'minato': // CASE BY MR.108P
var query = ["minato hd","minato anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/minato`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Minato", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'boruto': // CASE BY MR.108P
var query = ["boruto hd","boruto anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/boruto`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Boruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'yotsuba': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["yotsuba hd","yotsuba anime","nakano yotsuba"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/yotsuba`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yotsuba", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu2': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["random waifu hd","waifu anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/waifu2`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Waifu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'shinomiya': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["shinomiya","shinomiya hd","shinomiya anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/shinomiya`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto shinomiya", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'yumeko': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["yumeko","yumeko hd","yumeko anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/yumeko`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto yumeko", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'shizuka': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["shizuka","shizuka hd","shizuka anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/shizuka`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto shizuka", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'mikasa': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["mikasa","mikasa hd","mikasa anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/mikasa`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto mikasa", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'elaina': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["elaina","elaina hd","elaina anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/elaina`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto elaina", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'deidara': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["deidara","deidara hd","deidara anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/deidara`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto deidara", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'itachi': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["itachi","itachi hd","itachi anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/itachi`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto itachi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'sakura': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["sakura","sakura hd","sakura anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/sakura`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto sakura", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
case prefix+'madara': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["madara","madara hd","madara anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/madara`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Madara", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'tsunade': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["tsunade","tsunade hd","tsunade anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/tsunade`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Tsunade", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'onepiece': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["onepiece","onepiece hd","onepiece anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/onepiece`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Onepiece", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break

case prefix+'megumin': // CASE BY MR.108P
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
var query = ["megumin","megumin hd","megumin anime"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/megumin`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Megumin", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
			    limitAdd(sender, limit)
 			    break
//nsfw
case prefix+'pussy':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var pussy = JSON.parse(fs.readFileSync('./fitur/nsfw/pussy.json'))
var hasil = pickRandom(pussy)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break
case prefix+'masturbation':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var masturbation = JSON.parse(fs.readFileSync('./fitur/nsfw/masturbation.json'))
var hasil = pickRandom(masturbation)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
case prefix+'hentai':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
case prefix+'blowjob':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var bj = JSON.parse(fs.readFileSync('./fitur/nsfw/blowjob.json'))
var hasil = pickRandom(bj)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
case prefix+'bdsm':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var bdsm = JSON.parse(fs.readFileSync('./fitur/nsfw/bdsm.json'))
var hasil = pickRandom(bdsm)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")

  fakemsg(mess.wait)

var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
case prefix+'ass':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var ass = JSON.parse(fs.readFileSync('./fitur/nsfw/ass.json'))
var hasil = pickRandom(ass)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 
case prefix+'ahegao':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
var ahegao = JSON.parse(fs.readFileSync('./fitur/nsfw/ahegao.json'))
var hasil = pickRandom(ahegao)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: fake})
break 

case prefix+'cuckold':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/cuckold?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'cum':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/cum?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'ero':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/ero?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'femdom':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/femdom?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'hentaigif':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/hentaigif?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'jahy':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/jahy?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'glasses':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/glasses?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'gangbang':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://zenzapis.xyz/api/morensfw/gangbang?apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'lolihentai':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://christian-id-api.herokuapp.com/api/wallpaper/nsfwloli?apikey=IzumiBot`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'lolihentai2':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'hololewd':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'sideoppai':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'animefeets':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'animebooty':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'animearmpits':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'hentaifemdom':
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `SANGE KOK SAMA KARTUN!!!!`, image: { url: `https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=Rembot0`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'animefanart':
fakemsg(mess.wait)
var but = [{buttonId: `/animefanart`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
conn.sendMessage(from, {caption: `RANDOM ANIME FANART`, image: { url: `https://api.lolhuman.xyz/api/random/art?apikey=Rembot0`}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fake })
limitAdd(sender, limit)
break

case prefix+'whatanime':
            if (!isImage && !isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
            var form = new FormData()
            form.append('img', stream, 'tahu.jpg')
            axios.post(`https://api.lolhuman.xyz/api/wait?apikey=Rembot0&img=${q}`, form).then(({ data }) => {
                var caption = `Anilist id : ${data.result.anilist_id}\n`
                caption += `MAL id : ${data.result.mal_id}\n`
                caption += `Title Romaji : ${data.result.title_romaji}\n`
                caption += `Title Native : ${data.result.title_native}\n`
                caption += `Title English : ${data.result.title_english}\n`
                caption += `at : ${data.result.at}\n`
                caption += `Episode : ${data.result.episode}\n`
                caption += `Similarity : ${data.result.similarity}`
                conn.sendMessage(from, { video: { url: data.result.video }, mimetype: 'video/mp4', caption })
            })
            break

 case prefix+'character':
            if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
            axios.get(`https://api.lolhuman.xyz/api/character?apikey=Rembot0&query=${q}`).then(({ data }) => {
                var caption = `Id : ${data.result.id}\n`
                caption += `Name : ${data.result.name.full}\n`
                caption += `Native : ${data.result.name.native}\n`
                caption += `Favorites : ${data.result.favourites}\n`
                caption += `Media : \n`
                for (var x of data.result.media.nodes) {
                    caption += `- ${x.title.romaji} (${x.title.native})\n`
                }
                caption += `\nDescription : \n${data.result.description.replace(/__/g, '_')}`
                conn.sendMessage(from, { image: { url: data.result.image.large }, caption })
            })
            break

case prefix+'gimage':
            fakemsg(mess.wait)
            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
            axios.get(`https://api.lolhuman.xyz/api/gimage2?apikey=Rembot0&query=${q}`).then(({ data }) => {
                for (var x of data.result.slice(0, 5)) {
                    conn.sendMessage(from, { image: { url: x }, quoted: fake })
                }
            })
            break

case prefix+'anime':
            if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
            axios.get(`https://api.lolhuman.xyz/api/anime?apikey=Rembot0&query=${q}`).then(({ data }) => {
                var caption = `Id : ${data.result.id}\n`
                caption += `Id MAL : ${data.result.idMal}\n`
                caption += `Title : ${data.result.title.romaji}\n`
                caption += `English : ${data.result.title.english}\n`
                caption += `Native : ${data.result.title.native}\n`
                caption += `Format : ${data.result.format}\n`
                caption += `Episodes : ${data.result.episodes}\n`
                caption += `Duration : ${data.result.duration} mins.\n`
                caption += `Status : ${data.result.status}\n`
                caption += `Season : ${data.result.season}\n`
                caption += `Season Year : ${data.result.seasonYear}\n`
                caption += `Source : ${data.result.source}\n`
                caption += `Start Date : ${data.result.startDate.day} - ${data.result.startDate.month} - ${data.result.startDate.year}\n`
                caption += `End Date : ${data.result.endDate.day} - ${data.result.endDate.month} - ${data.result.endDate.year}\n`
                caption += `Genre : ${data.result.genres.join(', ')}\n`
                caption += `Synonyms : ${data.result.synonyms.join(', ')}\n`
                caption += `Score : ${data.result.averageScore}%\n`
                caption += `Characters : \n`
                for (var x of data.result.characters.nodes) {
                    caption += `- ${x.name.full} (${x.name.native})\n`
                }
                caption += `\nDescription : ${data.result.description}`
                conn.sendMessage(from, { image: { url: data.result.coverImage.large }, caption })
            })
            break

///MAKER MENU BY JOJO AND AzzBot!!!
case prefix+'greenneon':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/greenneon?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'matrix':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/matrix?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'codmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/codwarzone?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'lolmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/lolbanner?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'lolmaker2':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'dotamaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'cartongravity':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'hackmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'aovmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'pubgmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'mlmaker':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=${lolapi}&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'breakwall':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://melcanz.com/textpro/breakwall?text=${args[1]}&apikey=${apikey}`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logo':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logo?text=${args[1]}&text2=${args[2]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logo2':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logo2?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logo3':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logo3?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logo4':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logo4?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logogaming':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logogaming?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logogirl':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/logogirl?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'magma':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/magma?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'crackedstone':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/crackedstone?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'spiderlogo':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/spiderlogo?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'freefire':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/ffcover?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'crossfire':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/crossfire?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'galaxy':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/galaxy?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'glass':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/glass?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'neon':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/neon?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'beach':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/beach?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'awan':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/ephoto/awan?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'remmaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://melcanz.com/rem?nama=${args[1]}&apikey=${apikey}`}}, {quoted: fake})
break

case prefix+'nekomaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://melcanz.com/girlneko?nama=${args[1]}&nama2=${args[2]}&apikey=${apikey}`}}, {quoted: fake})
break

case prefix+'lolimaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://melcanz.com/lolimaker?nama=${args[1]}&nama2=${args[2]}&apikey=${apikey}`}}, {quoted: fake})
break

case prefix+'kanekimaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://melcanz.com/kaneki?nama=${args[1]}&apikey=${apikey}`}}, {quoted: fake})
break

case prefix+'sadmaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://melcanz.com/sadboy?nama=${args[1]}&nama2=${args[2]}&apikey=${apikey}`}}, {quoted: fake})
break

case prefix+'typography':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/ephoto/typography?text=${args[1]}&text2=${args[2]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'3dchristmas':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3dchristmas?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'3ddeepsea':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3ddeepsea?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'americanflag':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/americanflag?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'3dscifi':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3dscifi?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'3drainbow':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3drainbow?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'3dwaterpipe':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3dwaterpipe?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'halloween':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/halloween?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'sketch':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/sketch?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'bluecircuit':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/bluecircuit?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'space':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/space?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'metallic':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/metallic?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'metaldark':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/metaldark?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'fiction':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/fiction?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'greenhorror':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/greenhorror?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'transformer':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/transformer?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'berry':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/berry?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'thunder':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/thunder?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'tahta': case prefix+'hartatahta':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  reply(`Harta Tahta *${q}* Sedang Di Buat`)
conn.sendMessage(from, {caption: `*HARTA*\n*TAHTA*\n*${q}*`, image: { url: `https://hardianto.xyz/api/maker/harta-tahta?apikey=${keyanto}&text=${q}`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'woodheart':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${q}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'3dneonlight':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/3dneonlight?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'impressiveglitch':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/impressiveglitch?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'blackpinkmaker':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'futureneon':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/futureneon?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'sandwriting':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/sandwriting?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'sandsummer':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/sandsummer?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'sandengraved':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/sandengraved?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'neonlight':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/neonlight?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'text1917':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/text1917?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'minion':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/minion?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'deluxesilver':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/deluxesilver?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'bloodfrosted':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'halloween2':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/halloween?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'bokeh':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/bokeh?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'toxic':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/toxic?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'box3d':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/box3d?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'roadwarning':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/roadwarning?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'luxury':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/luxury?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'summersand':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome/summersand?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'steel3d':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'coolgravity':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

case prefix+'wallgravity':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://api.lolhuman.xyz/api/textprome2/wallgravity?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
limitAdd(sender, limit)
break

//FITUR MAKER +2\\

case prefix+'sadcat':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/creator/sadcat?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'trump':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/creator/trump?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'changemymind':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/creator/changemymind?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'kannagen':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/creator/kannagen?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'pikachumeme':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://zenzapis.xyz/creator/pikachu?text=${args[1]}&apikey=rembotz`}}, {quoted: fake})
break

case prefix+'mememaker':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/memecreator?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`}}, {quoted: fake})
break

case prefix+'mememaker1':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme1?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
break

case prefix+'mememaker2':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1 | text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme2?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
break

case prefix+'mememaker3':
if (args.length < 3) return reply(`Kirim perintah ${command} *text1 text2 text3*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme3?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}&text3=${args[3]}`}}, {quoted: fake})
break

case prefix+'mememaker4':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme4?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
break

case prefix+'mememaker5':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme5?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
break

case prefix+'mememaker6':
if (args.length < 3) return reply(`Kirim perintah ${command} *text1 | text2 | text3*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme6?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}&text3=${args[3]}`}}, {quoted: fake})
break

case prefix+'mememaker7':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme7?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
break

case prefix+'mememaker8':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/meme8?apikey=Rembot0&text1=${args[1]}&text2=${args[2]}`}}, {quoted: fake})
break

case prefix+'ohno':
if (args.length < 2) return reply(`Kirim perintah ${command} *text*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fakemsg(mess.wait)
conn.sendMessage(from, {caption: `${capt}`, image: {url: `https://api.lolhuman.xyz/api/creator/ohno?apikey=Rembot0&text=${args[1]}`}}, {quoted: fake})
break

case prefix+'say': case prefix+'tts':
  if (args.length < 2) return reply(`Kirim perintah ${command} Text`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   conn.sendMessage(from, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${q}&language=id`}, mimetype: 'audio/mp4', ptt: true}, {quoted: fake})
limitAdd(sender, limit)
   break
case prefix+'nabi': case prefix+'kisahnabi':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://zenzapis.xyz/islami/kisahnabi/muhammad?apikey=rembotz`)
				var kisahnya = `*Nama Nabi :* ${data.result.name}\n*Kelahiran :* ${data.result.wafat_usia}\n*Tempat Tinggal :* ${data.result.singgah}\n*Kisah Nabi :* ${data.result.kisah}`
			    reply(kisahnya)
				limitAdd(sender, limit)
				break
case prefix+'quranaudio': case prefix+'quranvn':
  if (args.length < 2) return reply(`Kirim perintah ${command} surah ayat\nContoh : ${command} 1 2`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isNaN(args[2])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hardianto.xyz/api/muslim/quran?surah=${args[1]}&ayat=${args[2]}&apikey=${keyanto}`)

conn.sendMessage(from, { audio: {url : pickRandom(data.result.data.audio.secondary)}, mimetype: 'audio/mp4', ptt: true})
limirAdd(sender, limit)
break
case prefix+'quran':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nomer`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hadi-api.herokuapp.com/api/quran?no=${q}`)
			    reply(`*Surah :* ${data.result.surah}\n*Ayat :* \n${data.result.ayat}\n*Arti :* \n${data.result.terjemahan}`)
			    break
case prefix+'listquran':
  var listquran = `*[ LIST QURAN ]*

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82.Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)`
  textImg(listquran)
  break
case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke': case prefix+'meme': case prefix+'memeindo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
var hasil = pickRandom(darkjoke)
conn.sendMessage(from, {caption: 'Ancrit', image: {url: hasil.result}}, {quoted: fake})
limitAdd(sender, limit)
break


case prefix+'readmore':
  case prefix+'more':
    if (args.length < 2) return reply(`Kirim perintah ${command} Text1|Text2`)
    var read = q.split('|')[0] ? q.split('|')[0] : q
                var morr = q.split('|')[1] ? q.split('|')[1] : ''
    var retmor = `${read}${readmore}${morr}`
    conn.sendMessage(from, { text: retmor}, { quoted: fake })
    break
case prefix+'izumi':
  case prefix+'simi':
 var text = `${q}`
var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  conn.sendMessage(from, { text: cimcimi.success}, {quoted: fake})
  break
case prefix+'igstalk':
  case prefix+'stalkig':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} chris.tianid`)
    var data = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${q}&apikey=hardianto`)
    var caption = `*[ INSTAGRAM STALK ]*\n\n馃懁Username : ${data.username}\n馃摏 Full Name : ${data.fullname}\n鉁旓笍 Verified : ${data.verified}\n馃懃 Followers : ${data.followers}\n馃珎 Following : ${data.follow}\n馃棧锔� Kategori ${data.category}\n\n${readmore} *锟� Rembotz*`
    conn.sendMessage(from, {caption: caption, image: {url: data.thumbnail}}, {quoted: fake})
    limitAdd(sender, limit)
    break
case prefix+'ghstalk': //CASE BY MR.108P
  case prefix+'stalkgh':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} chris.tianid`)
    var data = await fetchJson(`https://hadi-api.herokuapp.com/api/githubstalk?username=${q}`)
    var caption = `*[ GITHUB STALK ]*\n\nBio : ${data.result.bio}\nCompany : ${data.result.company}\nEmail : ${data.result.email}\nTwiter Username : ${data.result.twiter_username}\nPublic Repo : ${data.result.public_repo}\nPublic Gists : ${data.result.public_gists}\nFollowers : ${data.result.follower}\nFollowing : ${data.result.following}\nLocation : ${data.result.location}\nType : ${data.result.Type}\n\n${readmore} *BY MR.108P*`
    conn.sendMessage(from, {caption: caption, image: {url: data.result.avatar}}, {quoted: fake})
    limitAdd(sender, limit)
    break
case prefix+'qrcode':
  case prefix+'qr':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} AzzBot`)
    reply(`Membuat Qr Code`)
    conn.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://docs-jojo.herokuapp.com/api/qrcode?text=${q}`}}, {quoted: fake})
    limitAdd(sender, limit)
    break
case prefix+'cersex':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
  var caption = `*[ CERSEX ]*\n\n*Judul* : ${data.result.judul}\n*Cerita* : ${data.result.cersex}\n${readmore} *${setting.botName}*`
  conn.sendMessage(from, {caption: caption, image: {url: data.result.img}}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'cerpen':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
  var text = `*[ CERPEN ]*\n\n*Judul* : ${data.result.title}\n*Kategori* : ${data.result.kategori}\n*Cerritanya* : ${data.result.cerpen}`
  conn.sendMessage(from, {text: text}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'faktaunik':
  case prefix+'faktamenarik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
var caption = `Tahukah kamu?
${data.result}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Fakta Unik" }, type: 1 }]
conn.sendMessage(from, { text: caption, buttons: but, footer: `${footer}`, templateButtons: but }, {quoted: fake})
limitAdd(sender, limit)
break
//maker arasya
case prefix+'leaves':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/natural-leaves?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `${capt}`, image: {url: data.result}}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'3d':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/3d-gradient?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `${capt}`, image: {url: data.result}}, {quoted: fake})
  limitAdd(sender, limit)
  break
case prefix+'logowolf':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/logowolf?text=${args[1]}&text2=${args[2]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'logowolf2':
if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: `${capt}`, image: { url: `https://zenzapis.xyz/textpro/logowolf2?text=${args[1]}&text2=${args[2]}&apikey=rembotz`}}, {quoted: fake})
limitAdd(sender, limit)
break
//Amel
case prefix+'ppcp':
case prefix+'ppcouple':
  case prefix+'pp':
var couple = JSON.parse(fs.readFileSync('./fitur/couple.json'))
var hasil = pickRandom(couple)
conn.sendMessage(from, {caption: `Cowo`, image: {url: hasil.male}}, {quoted: fake})
conn.sendMessage(from, {caption: `Cewe`, image: {url: hasil.female}}, {quoted: fake})
break 
  break
case prefix+'xnxx':
  case prefix+'xnxxdownload':
	if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
if (!args[1].includes('xnxx')) return reply(mess.error.Iv)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
var data = await fetchJson(`https://melcanz.com/xnxxdl?url=${q}&apikey=${apikey}`)
fakemsg(mess.wait)
conn.sendMessage(from, {video: {url: data.result.files.high}}, {quoted: fake})
break
case prefix+'react':
  case prefix+'reaction':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
 conn.sendMessage(from, { react: { text: `${q}`, key: msg.key }})
 limitAdd(sender, limit)
 break
 //BOLEH DI AKTIFIN JIKA MENGGUNAKAN HEROKU
case prefix+'halah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'a'))
  limitAdd(sender, limit)
  break
case prefix+'hilih':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'i'))
  break
case prefix+'huluh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'u'))
  limitAdd(sender, limit)
  break
case prefix+'heleh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'e'))
  limitAdd(sender, limit)
  break
case prefix+'holoh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'o'))
  limitAdd(sender, limit)
  break
  case prefix+'translate':
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	if (!isQuotedMsg) return reply(`Reply Message nya!\nContoh Penggunaan : ${prefix}translate id en`)
	if (!args[1]) return reply(`Dari bahasa apa?`)
	if (!args[2]) return reply(`Mau Di translate ke bahasa apa?`)
	 var quoted = quotedMsg.chats
var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${quoted}&from=${args[1]}&to=${args[2]}`)
conn.sendMessage(from, {text: data.translated_text}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'igv':
	case prefix+'igreels':
		case prefix+'igvideo':
			if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    fakemsg(mess.wait)
			if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			igDownloader(args[1]).then ( data => {
				conn.sendMessage(from, {video: {url: data.result.link}}, {quoted: msg})
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
break
case prefix+'igf':
	case prefix+'igfoto':
		case prefix+'igpic':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
            if (args.length == 0) return reply(`Example: ${prefix + command} https://instagram.com/`)
            fakemsg(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=Rembot0&url=${q}`).then(({ data }) => {
                conn.sendMessage(from, { caption: `Succes Download Foto Instagram, Thanks For Using Rembotz by Izumi`, image: { url: data.result }, quoted: fake})
            })
            break

case prefix+'tw':
	case prefix+'twfoto':
		case prefix+'twpic':
			if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
            if (args.length == 0) return reply(`Example: ${prefix + command} https://instagram.com/`)
            fakemsg(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/twitterimage?apikey=Rembot0&url=${q}`).then(({ data }) => {
                conn.sendMessage(from, { caption: `Succes Download Foto Instagram, Thanks For Using Rembotz by Izumi`, image: { url: data.result }, quoted: fake})
            })
            break

case prefix+'wiki':
	case prefix+'wikipedia':
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		if (args.length < 2) return reply(`Kirim perintah ${command} Pencarian`)
		reply(`Sedang mencari ${q}`)
		wikiSearch(q).then ( data => {
			var caption = `*JUDUL* : ${q}\n*PENJELASAN* : ${data[0].wiki}`
			conn.sendMessage(from, {caption: caption, image: {url: data[0].thumb}}, {quoted: fake})
		})
		limitAdd(sender, limit)
		break
case prefix+'asupan':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  fakemsg(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./fitur/asupan.json'))
var hasil = pickRandom(asupan)
conn.sendMessage(from, {video: {url: hasil.url}}, {quoted: fake})
break
case prefix+'dadu':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var dadu = JSON.parse(fs.readFileSync('./fitur/dadu.json'))
var hasil = pickRandom(dadu)
conn.sendMessage(from, {sticker: {url: hasil.url}}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'getpp':
case prefix+'getprofile':
  case prefix+'getpic':
if (!isQuotedMsg) return reply(`Reply Message nya!`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
conn.profilePictureUrl(quotedMsg.sender, 'image').then( res => conn.sendMessage(from, { image: { url: res }}, {quoted: fake})).catch(() => conn.sendMessage(from, {caption: `Yah maaf kak, dia ini gak pake foto profile, kayaknya dia depresiiiii/Di Private...\n\nJadiii aku kasih ini ajaaa ya`, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: fake}))
limitAdd(sender, limit)
break
case prefix+'suratto':
  case prefix+'surat':
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var number = q.split('|')[0] ? q.split('|')[0] : q
                var text = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
                var caption = `*[ FITUR BOT SURAT ]*\nDari : @${sender}\nUntuk : Kamu\nPesan : *${text}*`
conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/surat.jpeg')}, {quoted: fake})
limitAdd(sender, limit)
break
case prefix+'gombal':
  case prefix+'gombalan':
    var gombal = JSON.parse(fs.readFileSync('./fitur/gombalan.json'))
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var hasil = pickRandom(gombal)
var gom = [
			{ quickReplyButton: { displayText: `Next Gombalan 鉃★笍`, id: `${command}` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: gom, footer: `Cie Di Gombal Robot\n~ Instagram : @chris.tianid`, mentions: [sender]} )
limitAdd(sender, limit)
break
case prefix+'textchat':
  case prefix+'kirim':
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
    if (!isOwner) return reply(mess.OnlyOwner)
  var number = q.split('|')[0] ? q.split('|')[0] : q
                var text = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
                var caption = `*[ PESAN DARI OWNER ]*\nDari : Owner\nUntuk : Kamu\nPesan : *${text}*`
conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/surat.jpeg')}, {quoted: fake})
break
case prefix+'lirik':
  if (args.length < 2) return reply(`kirim Perintah ${command} Judul Lagu`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  fakemsg(mess.wait)
  lirikLagu(q).then ( data => {
    var caption = `*[ > 馃幍 LIRIK LAGU 馃幍 < ]*\n\n*Lirik :* ${data[0].result}`
    conn.sendMessage(from, {text: caption}, {quoted: msg})
    limitAdd(sender, limit)
  }).catch(() => reply(`Lagu ${q} Tidak Di Temukan`))
  break
case prefix+'sendvirus':
  case prefix+'sendvirtex':
  case prefix+'sv':
				fakemsg("Sukses Mengirim Virtex")
  if (!isOwner)return reply(mess.OnlyOwner)
  if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/1.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/2.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/3.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/4.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/virtex.txt')})
  conn.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('fitur/virtex/5.txt')})
  break
case prefix+'kontak':
  if (args.length < 2) return fakemsg(`kirim Perintah ${command} Nomer Kontak|Nama Kontak\nContoh ${command} 6281511480762|AzzBot`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var nom = q.split('|')[0] ? q.split('|')[0] : q
                var or = q.split('|')[1] ? q.split('|')[1] : ''
  sendContact(from, `${nom}@s.whatsapp.net`, or, fake)
  limitAdd(sender, limit)
  break
default:
			if (isGroup && isCmd) {
				fakemsg(`*Hallo Kak ${pushname}*\n*Maaf Command ${command} Tidak Ada Di Dalam ${prefix}menu*`)
			}
		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
