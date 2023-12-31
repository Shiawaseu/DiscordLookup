const express = require('express')
const router = express.Router()
const undici = require('undici')
const settings = require('./../../config.json')
const bitwise = require('./../bitwise')

const resolveurl = (type,id,hash) => {
    if (!hash) {
        return 
    }
    if (hash.startsWith("a_")) {
        return `https://cdn.discordapp.com/${type}/${id}/${hash}.gif`
    } else {
        return `https://cdn.discordapp.com/${type}/${id}/${hash}.png`
    }
}


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
        "avatar": {
            "url": json.avatar ? resolveurl("avatars", id, json.avatar) : null,
            "decoration": json.avatar_decoration ? `https://cdn.discordapp.com/avatar-decorations/${id}/${json.avatar_decoration}.png` : null,
            "animated": json.avatar ? json.avatar.startsWith("a_") : false,
        },
        "banner": {
            "url": json.banner ? resolveurl("banners", id, json.banner) : null,
            "animated": json.banner ? json.banner.startsWith("a_") : false,
            "color": json.banner_color
        },
        "badges": flags,
        "accent_color": json.accent_color,
        "discriminator": json.discriminator,
    };

    res.json(data)
})

module.exports = router
