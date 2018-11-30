const Discord = require('discord.js-commando');

class NicknameEditor extends Discord.Command {
    constructor(client) {
        super(client, {
            name: 'iam',
            group: 'nickname',
            memberName: 'nickname_editor',
            description: 'change an user\'s nickname'
        });
    }

    async run(message, args) {
        if (message.channel.type == "dm") return;
        message.guild.members.setNickname(args);
    }
}

module.exports = NicknameEditor;