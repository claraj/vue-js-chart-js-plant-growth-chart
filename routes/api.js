let express = require('express')
let db = require('../models')  // imports index.js from models directory, which imports record model
let PlantRecord = db.PlantRecord

let router = express.Router()

router.get('/plant_records', function(req, res, next){
    PlantRecord.findAll({order: ['date']}).then( plantRecords => {
        return res.json(plantRecords)
    }).catch( err => next(err) )
})

router.post('/plant_records', function(req, res, next) {
    console.log(req.body)
    PlantRecord.create(req.body).then( () => {
        res.status(201).send('ok')
    }).catch( err => next(err) )  // todo send more specific error message
})

module.exports = router