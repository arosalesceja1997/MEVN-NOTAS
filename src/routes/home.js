const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();

// Models
const Telcel = require('../models/Telcel');
const Notas = require('../models/Nota');
const { request, response } = require('express');

// For POST-Support
// const multer = require('multer');
// const upload = multer();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// upload.array(),

router.get('/getRegion', async (req, res) => {
    const data = await Telcel.find();
    res.json(data);
});

router.post('/newRegion', async (req, res) => {
    const data = new Telcel(req.body);
    // data.save();
    // console.log(data);
    res.json(data);
});

router.get('/getNota', async (request, response) => {
    const data =  await Notas.find();
    response.json(data);
});

router.post('/newNota', async (request, response) => {
    const data = new Notas(request.body);
    data.save();
    response.json(data);
});

router.put('/putNota/:id', async (request, response) => {
    // console.log(request.params);
    await Notas.findByIdAndUpdate(request.params.id, request.body);
    response.json({
        status: 'Nota actualizada',
    });
});

router.delete('/deleteNota/:id', async (request, response) => {
    await Notas.findByIdAndRemove(request.params.id);
    response.json({
        status: 'Nota eliminada',
    });
});

module.exports = router;