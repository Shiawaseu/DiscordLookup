const express = require('express')
const router = express.Router()
const undici = require('undici')
const settings = require('./../../config.json')
const bitwise = require('./../bitwise')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const response = await undici.request(`https://discord.com/api/v10/users/${id}/rpc`, {
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

    bitwise.application.forEach((flag) => {
        if (json.flags & flag.bitwise) flags.push(flag.flag);
    });

    const data = {
        "success": true,
        "id": json.id,
        "username": json.username,
        "description": json.description,
        "avatar": json.avatar ? `https://cdn.discordapp.com/avatars/${id}/${json.icon}.png` : null,
        "badges": flags,
    };

    res.json(data)
})

module.exports = router