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

        if (!args) {
            message.channel.send("Please input your role name");
        }
        else {
            let userId = message.member.id
            console.log(userId);
            message.guild.members.get(userId).setNickname(args, "iam command executed");
        }
    }
}

module.exports = NicknameEditor;