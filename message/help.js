const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `╭────┈ ↷
┃□│✎┊*REM BOT -X*
┃□│╭────────╯
┃□││❏Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃□││❏Sisa Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃□││❏Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
┃□││❏Balance : $${toCommas(getBalance(sender, balance))}
┃□││❏Group :https://chat.whatsapp.com/BCkpE5V83v5AfnmnN7lNaK
╰─────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏  *Main Menu*
╰─❁۪۪ 
> ${prefix}menu
> ${prefix}owner
> ${prefix}donasi
> ${prefix}speed
> ${prefix}runtime
> ${prefix}cekprem
> ${prefix}listprem
> ${prefix}daftarprem
> ${prefix}listban
> ${prefix}rules
> ${prefix}izumi *text*
> ${prefix}simi *text*
> ${prefix}grouprembot
> ${prefix}delete
> ${prefix}thanksto
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Converter/Tools*
> ${prefix}stiker *ReplyGambar/Caption*
> ${prefix}toimg *ReplyStiker* (PERBAIKAN)
> ${prefix}tovid *ReplyStiker*
╰───────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Sound Menu*
> ${prefix}sound1
> ${prefix}sound2
> ${prefix}sound3
> ${prefix}sound4
> ${prefix}sound5
> ${prefix}sound6
> ${prefix}sound7
> ${prefix}sound8
> ${prefix}sound9
> ${prefix}sound10
> ${prefix}sound11
> ${prefix}sound12
> ${prefix}sound13
> ${prefix}sound14
> ${prefix}sound15
> ${prefix}sound16
> ${prefix}sound17
> ${prefix}sound18
> ${prefix}sound19
> ${prefix}sound20
> ${prefix}sound21
> ${prefix}sound22
> ${prefix}sound23
> ${prefix}sound24
> ${prefix}sound25
> ${prefix}sound26
> ${prefix}sound27
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Downloader*
> ${prefix}play *Judul Lagu*
> ${prefix}youtube *LinkYT*
> ${prefix}ytmp4 *LinkYT*
> ${prefix}ytmp3 *LinkYT*
> ${prefix}ytmp3vn *LinkYT*
> ${prefix}getvideo
> ${prefix}getmusic
> ${prefix}ig *Instagram Video/Reels*
> ${prefix}igf *Instagram Image*
> ${prefix}facebook *LinkFb*
> ${prefix}mediafire *LinkMediaFire* 
> ${prefix}tiktok *Link Tiktok*
> ${prefix}tiktokaudio *Link Tiktok*
• NOTE = *Belum Semua fitur aktif*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Random Menu*
> ${prefix}quotes
> ${prefix}gombalan
> ${prefix}katagalau
> ${prefix}cecan
> ${prefix}cogan
> ${prefix}asupan
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Anime Menu*
> ${prefix}loli
> ${prefix}waifu
> ${prefix}husbu
> ${prefix}yaoi
> ${prefix}cosplay
> ${prefix}waifu2
> ${prefix}yotsuba
> ${prefix}shinomiya
> ${prefix}yumeko
> ${prefix}shizuka
> ${prefix}mikasa
> ${prefix}elaina
> ${prefix}onepiece
> ${prefix}megumin
> ${prefix}naruto
> ${prefix}hinata
> ${prefix}minato
> ${prefix}deidara
> ${prefix}itachi
> ${prefix}madara
> ${prefix}boruto
> ${prefix}sakura
> ${prefix}tsunade
> ${prefix}wallpaperanime
> ${prefix}neko
> ${prefix}cosplay
> ${prefix}anime *judul anime*
> ${prefix}character
> ${prefix}animefanart
> ${prefix}blush
> ${prefix}cringe
> ${prefix}dance
> ${prefix}poke
> ${prefix}wink
> ${prefix}happy
> ${prefix}slap
> ${prefix}kill
> ${prefix}glomp
> ${prefix}nom
> ${prefix}handhold
> ${prefix}highfive
> ${prefix}wave
> ${prefix}smile
> ${prefix}yeet
> ${prefix}bonk
> ${prefix}smug
> ${prefix}pat
> ${prefix}lick
> ${prefix}kiss
> ${prefix}awoo
> ${prefix}hug
> ${prefix}cry
> ${prefix}cuddle
> ${prefix}bully
╰────────────────┈ ❁ཻུ۪۪⸙͎  

─────────────────┈ ❁۪۪
❏ *Nsfw Menu*
> ${prefix}ahegao
> ${prefix}bloewjob
> ${prefix}hentai
> ${prefix}masturbation
> ${prefix}pussy
> ${prefix}bdsm
> ${prefix}ass
> ${prefix}cuckold
> ${prefix}cum
> ${prefix}ero
> ${prefix}femdom
> ${prefix}hentaigif
> ${prefix}jahy
> ${prefix}glasses
> ${prefix}gangbang
> ${prefix}lolihentai
> ${prefix}lolihentai2
> ${prefix}milf
> ${prefix}wallanimehentai
> ${prefix}yurihentai
> ${prefix}hololewd
> ${prefix}sideoppai
> ${prefix}animefeets
> ${prefix}animebooty
> ${prefix}animearmpits
> ${prefix}hentaifemdom
> ${prefix}xnxx *link*🗿
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Store Menu*
> ${prefix}kodeotp
> ${prefix}sewabot
> proses *< Reply Chat >*
> done *< Reply Chat>*
> ${prefix}jadibot
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Primbon Menu*
> ${prefix}artimimpi *mimpi*
> ${prefix}artinama *nama*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Stalker Menu (Ig Stalk Eror)*
> ${prefix}igstalk *username*
> ${prefix}ghstalk *username*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Shorlink Menu*
> ${prefix}shortlink *link*
> ${prefix}cuttly *link*
> ${prefix}bitly *link*
> ${prefix}tinyurl *link*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Textpro Menu*
> ${prefix}logo *text*
> ${prefix}logo2 *text*
> ${prefix}logo3 *text*
> ${prefix}logo4 *text*
> ${prefix}logogaming *text*
> ${prefix}logogirl *text*
> ${prefix}glitch *text*
> ${prefix}flaming *text*
> ${prefix}goldenroses *text*
> ${prefix}thunder *text*
> ${prefix}magma *text*
> ${prefix}crackedstone *text*
> ${prefix}freefire *text*
> ${prefix}crossfire *text*
> ${prefix}glass *text*
> ${prefix}neon *text*
> ${prefix}beach *text
> ${prefix}awan *text*
> ${prefix}typography *<text>* *<text>*
> ${prefix}leaves *text*
> ${prefix}3d *text*
> ${prefix}logowolf *text*
> ${prefix}3dchristmas *text*
> ${prefix}3ddeepsea *text*
> ${prefix}americanflag *text*
> ${prefix}3dscifi *text*
> ${prefix}3drainbow *text*
> ${prefix}3dwaterpipe *text*
> ${prefix}halloween *text*
> ${prefix}sketch *text*
> ${prefix}bluecircuit *text*
> ${prefix}space *text*
> ${prefix}metallic *text*
> ${prefix}fiction *text*
> ${prefix}greenhorror *text*
> ${prefix}transformer *text*
> ${prefix}berry *text*
> ${prefix}3dneonlight *text*
> ${prefix}impressiveglitch *text*
> ${prefix}remmaker *text*
> ${prefix}nekomaker *text*
> ${prefix}lolimaker *text*
> ${prefix}kanekimaker *text*
> ${prefix}sadmaker *text* | *text*
> ${prefix}breakwall *text*
> ${prefix}metaldark *text*
> ${prefix}mlmaker *text*
> ${prefix}pubgmaker *text*
> ${prefix}aovmaker *text*
> ${prefix}lolmaker *text*
> ${prefix}lolmaker2 *text*
> ${prefix}dotamaker *text*
> ${prefix}hackmaker *text*
> ${prefix}cartongravity *text*
> ${prefix}matrix *text*
> ${prefix}greenneon *text*
> ${prefix}blackpinkmaker *text*
> ${prefix}futureneon *text*
> ${prefix}sandwriting *text*
> ${prefix}sandsummer *text*
> ${prefix}sandengraved *text*
> ${prefix}neonlight *text*
> ${prefix}text1917 *text*
> ${prefix}minion *text*
> ${prefix}deluxesilver *text*
> ${prefix}bloodfrosted *text*
> ${prefix}halloween2 *text*
> ${prefix}bokeh *text*
> ${prefix}toxic *text*
> ${prefix}box3d *text*
> ${prefix}roadwarning *text*
> ${prefix}luxury *text*
> ${prefix}summersand *text*
> ${prefix}steel3d *text1* text2*
> ${prefix}coolgravity *text*
> ${prefix}wallgravity *text*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Features Menu* 
> ${prefix}sadcat *text*
> ${prefix}trump *text*
> ${prefix}changemymind *text*
> ${prefix}kannagen *text* (nospasi)
> ${prefix}pikachumeme *text*
> ${prefix}mememaker *text*
> ${prefix}mememaker1 *text*
> ${prefix}mememaker2 *2text*
> ${prefix}mememaker3 *3text*
> ${prefix}mememaker4 *text*
> ${prefix}mememaker5 *text*
> ${prefix}mememaker6 *3text*
> ${prefix}mememaker7 *2text*
> ${prefix}mememaker8 *3text*
> ${prefix}ohno *text*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Random Image Menu*
> ${prefix}wallpubg
> ${prefix}walljeniblpk
> ${prefix}walljisokim
> ${prefix}wallcecan
> ${prefix}wallcogan
> ${prefix}wallsatanic
> ${prefix}wallquote
> ${prefix}wallplanet
> ${prefix}wallkartun
> ${prefix}wallcyberspace
> ${prefix}wallgaming
> ${prefix}wallprogram
> ${prefix}wallteknologi
> ${prefix}wallmountain
> ${prefix}walldoraemon
> ${prefix}wallhacker

─────────────────┈ ❁۪۪
❏ *Other Menu*
> ${prefix}ssweb *Link*
> ${prefix}ssdesktop *Link*
> ${prefix}sshpfull *Link*
> ${prefix}kbbi *Kata*
> ${prefix}faktaunik
> ${prefix}ppcp
> ${prefix}darkjokes
> ${prefix}meme
> ${prefix}covid19
> ${prefix}cerpen
> ${prefix}cersex
> ${prefix}wiki *Query*
> ${prefix}say *text*
> ${prefix}qr *text*
> ${prefix}readmore *text|text*
> ${prefix}hitungmundur 12 10 2022
> ${prefix}translate *from to*
> ${prefix}lirik *Judul*
> ${prefix}grupwa *Pencarian*
> ${prefix}wame *Nomor*
> ${prefix}linkig
> ${prefix}github
> ${prefix}ytsearch *Pencarian*
> ${prefix}pinterest *Querry*
> ${prefix}getpp
> ${prefix}kontak
> ${prefix}gimage *Querry*
> ${prefix}stikerpatrick
> ${prefix}stikergura
> ${prefix}stikeramongus
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Islamic Menu*
> ${prefix}quran *nomer*
> ${prefix}quranaudio *surah ayat*
> ${prefix}listquran *nomer*
> ${prefix}kisahnabi *Nama Nabi*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Nulis Menu*
> ${prefix}nuliskanan *text*
> ${prefix}foliokiri *text*
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Vokal Menu*
> ${prefix}halah
> ${prefix}hilih
> ${prefix}heleh
> ${prefix}huluh
> ${prefix}holoh
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Game Menu*
> ${prefix}tictactoe @tag
> ${prefix}delttc
> ${prefix}suit
> ${prefix}slot
> ${prefix}tebakgambar
> ${prefix}kuis
> ${prefix}tebakkimia
> ${prefix}tekateki
> ${prefix}tebakkata
> ${prefix}susunkata
> ${prefix}tebakbendera
> ${prefix}tebaklagu
> ${prefix}siapakahaku
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Fun Menu*
> ${prefix}cekbapak
> ${prefix}apakah *Query*
> ${prefix}kapankah *Query*
> ${prefix}rate *Query*
> ${prefix}gantecek *Nama*
> ${prefix}cantikcek *Nama*
> ${prefix}sangecek *Nama*
> ${prefix}gaycek *Nama*
> ${prefix}lesbicek *Nama*
> ${prefix}gimana *Query*
> ${prefix}bisakah *Query*
> ${prefix}cekme
> ${prefix}dadu
> ${prefix}truth
> ${prefix}dare
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Payment & Bank*
> ${prefix}buylimit *Jumlah*
> ${prefix}buyglimit *Jumlah*
> ${prefix}transfer @tag *jumlah*
> ${prefix}limit
> ${prefix}balance
> ${prefix}topbalance
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Group Menu*
> ${prefix}afk *alasan*
> ${prefix}antibadword
> ${prefix}antilink
> ${prefix}antiwame
> ${prefix}antilinkyt
> ${prefix}antilinktt
> ${prefix}linkgrup
> ${prefix}setppgrup
> ${prefix}setnamegc
> ${prefix}setdesc
> ${prefix}group
> ${prefix}revoke
> ${prefix}hidetag *text*
> ${prefix}kick *@tag*
> ${prefix}add *@tag*
> ${prefix}promote *@tag*
> ${prefix}demote *@tag*
> ${prefix}listadmin
> ${prefix}infogc
> ${prefix}mute
> ${prefix}unmute
╰────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *Owner Menu*
> ${prefix}sendvirtex
> ${prefix}setppbot
> ${prefix}exif
> ${prefix}textchat
> ${prefix}leave
> ${prefix}masuk
> ${prefix}addprem
> ${prefix}delprem
> ${prefix}broadcast
> ${prefix}ban
> ${prefix}unban
> ${prefix}block
> ${prefix}unblock
> ${prefix}setprefix multi/nopref
> ${prefix}addbadword *text*
> ${prefix}delbadword *text*
╰─────────────────┈ ❁ཻུ۪۪⸙͎
\`\`\`${setting.botName} Version 2.0.0\`\`\`


*NOTE* : {BUTTON MENU SEDANG DALAM PERBAIKAN}`
}