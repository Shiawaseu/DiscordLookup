<div align="center" id="top"> 
  <img src="https://cdn.discordapp.com/attachments/1047881750342291566/1137409085935997089/sasa.png" alt="DiscordLookup" style="width:20%" />

  &#xa0;

</div>

<h1 align="center">DiscordLookup</h1>



<br>

## About ##

API for retrieving data about users, servers, applications. Made simplified for external use.

## Requirements to host ##

- A GitHub account to place your files in

- A [Cyclic](https://cyclic.sh) account

- [A Discord bot token](https://discord.com/developers/applications)

## Host your own for free ##

1 - Clone this repo to a **private** repository

2 - Edit your `config.json` file to the required data (in this case your bot token)

 ![image](https://github.com/MEMEZNUT999/DiscordLookup/assets/73775954/01769592-ceef-46d0-a943-4a25f72e0f6f)


3 - Visit [this](https://app.cyclic.sh/#/deploy) page and click this button

 ![image](https://github.com/MEMEZNUT999/DiscordLookup/assets/73775954/53f7629c-3d87-48f5-889a-c6ab11f5d1b6)


4 - Allow Cyclic to view your private repositories by going here

![image](https://github.com/MEMEZNUT999/DiscordLookup/assets/73775954/839a2731-dc4b-4a2a-ad84-c100578a5a75)

5 - Import the GitHub repo you just created, and it will do the rest for you

![image](https://github.com/MEMEZNUT999/DiscordLookup/assets/73775954/326bd6bb-7962-4325-bcea-3f2689f9bbf5)

### Result ###
![image](https://github.com/MEMEZNUT999/DiscordLookup/assets/73775954/0e24c750-51e2-4017-bfb4-4980a0140f7a)

And now you can call the endpoints like so
 - `my-website.cyclic.app/user/1115643711666278521`
   - Example response:
```
{"success":true,"id":"1115643711666278521","username":"shiawaseu","avatar":{"url":"https://cdn.discordapp.com/avatars/1115643711666278521/cb8ddb72da41691f971a5302a2450c1a.png","decoration":null,"animated":false},"banner":{"url":"https://cdn.discordapp.com/banners/1115643711666278521/a_97da1fb1a9c325b3641e3068b124fd61.png","animated":true,"color":null},"badges":["HOUSE_BRILLIANCE"],"accent_color":null,"discriminator":"0"}
```
## Host your own locally ##

```bash
$ git clone https://github.com/MEMEZNUT999/DiscordLookup.git
```
- and then setup `config.json`
```bash
$ npm install
```
```bash
$ node .

```

&#xa0;

