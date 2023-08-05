const express = require('express')
const router = express.Router()
const undici = require('undici')
const settings = require('./../../config.json')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const response = await undici.request(`https://discord.com/api/v10/guilds/${id}/widget.json`, {
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

    const data = {
        "success": true,
        "id": json.id,
        "name": json.name,
        "instant_invite": json.instant_invite,
        "owner_id": json['owner_id'],
        "presence_count": json.presence_count
    };

    res.json(data)
})

module.exports = router