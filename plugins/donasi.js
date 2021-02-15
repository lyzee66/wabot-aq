let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088226330285]
│ • Gopay [088226330285]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
