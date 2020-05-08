const discord = require('discord.js');
const client = new discord.Client();


const token = require('./config.json').token;
client.login(token);
client.on('ready', ()=>{
  let myGuild = client.guilds.cache.get('Server ıd');
  let memberCount = myGuild.memberCount;
  console.log(memberCount);
  let memberCountChannel  = myGuild.channels.cache.get('Channel_ıd');
  memberCountChannel.setName('Members:'  +  memberCount )
  .then(result => console.log (result))
  .catch(error => console.log(error));
});
