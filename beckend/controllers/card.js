const Card = require('../models/card')

class CardController {
    async add(req, res) {
        try {
            const {cardNumber, cvv, date, amount} = req.body;
            const card = await new Card({cardNumber, cvv, date, amount})
            await card.save();
            return res.json({
                id: card._id,
                amount: card.amount
            })
        } catch (e) {
            res.status(400).json({message: 'Add error'})
        }
    }
}

module.exports = new CardController()