exports.info = (id, AINE, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${AINE}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${AINE}*
╠════════════════════
║├≽️⚜ *AUTOR* : Muhammad Ridwan Reynaldy
║├≽️⚜ *DESIGNER* : Muhammad Ridwan Reynaldy
║├≽️⚜ *OWNER* : Muhammad Ridwan Reynaldy
╠════════════════════
║  *${AINE}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${AINE}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *POWORED BY AINEBOT*
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
