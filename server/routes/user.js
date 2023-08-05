const express = require('express')
const router = express.Router()
const undici = require('undici')
const settings = require('./../../config.json')
const bitwise = require('./../bitwise')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const response = await undici.request(`https://discord.com/api/v10/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${settings.token}`
        }
    })

    let json
    try {
        json = await response.body.json()
    } catch (e) {
        console.log(e)
        res.json({
            success: false,
            message: "Server Error"
        })
    }
    if (json.message) {
        res.json({
            success: false,
            message: json.message
        })
        return
    }


    let flags = [] // set initial

    bitwise.user.forEach((flag) => {
        if (json.public_flags & flag.bitwise) flags.push(flag.flag);
    });

    const data = {
        "success": true,
        "id": json.id,
        "username": json.username,
        "avatar": json.avatar ? `https://cdn.discordapp.com/avatars/${id}/${json.avatar}.png` : null,
        "banner": json.banner ? `https://cdn.discordapp.com/banners/${id}/${json.banner}.png` : null,
        "avatar_decoration": json.avatar_decoration ? `https://cdn.discordapp.com/avatar-decorations/${id}/${json.avatar_decoration}.png` : null,
        "avatar_isanimated": json.avatar.startsWith("a_"),
        "banner_isanimated": json.banner.startsWith("a_"),
        "badges": flags,
        "accent_color": json.accent_color,
        "banner_color": json.banner_color,
        "discriminator": json.discriminator,
    };

    res.json(data)
})

module.exports = router