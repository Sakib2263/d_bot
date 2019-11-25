const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "NjQ4NTg2NzQ1MDAwMDk5ODUz.XdwZjg.q5Fe8zIfdmBClO54IivGlp6OiQQ";

const PREFIX = '!';


var version ='1.0.1';

bot.on('ready', () =>{
    console.log('This bot is born today!');
});

bot.on('message', message=>{

    if(message.content === "Hello" || message.content === "hello"|| message.content === "HELLO"|| message.content === "hola"|| message.content === "hello." ){
        message.reply('Hello I am Classified006 from area 51!');
    }
    else if(message.content==="moshi moshi" || message.content === "moshi mosh"){
        message.reply('Watashi ga Kitaaa!');
    }

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'youtube':
            message.channel.sendMessage('youtube.com')
            break;
        case 'info':
            if(args[1]=== 'version'){
                message.channel.sendMessage('Version '+ version);
            }else{
                message.channel.sendMessage('Command not taught!!');
            }break;
        case 'clear':
            if(!args[1]) return message.reply('Define second argument - number of msgs to remove!')
            message.channel.bulkDelete(args[1]);
            break;        

    }
});



bot.login(token);
