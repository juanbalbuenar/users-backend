const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const faker = require('faker');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.render('index', {
        users
    });
});

router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({users});
});

router.get('/api/users/create', async (req,res) => {
    for(let i = 0; i < 5; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber()
        })
    }
    res.redirect('/');
});

router.post('/api/users/crear', async (req, res) => {
    const costumers = new User(req.body);
    await costumers.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await User.remove({ _id: id });
    res.redirect('/');
});

router.get('/edit/:id', async (req,res) => {

    const {id} = req.params;
    const users = await User.findById(id);
    res.render('edit', {
        users
    })
});

router.post('/edit/:id', async (req,res) => {
    const {id} = req.params;
    await User.update({ _id: id}, req.body);
    res.redirect('/');
});

module.exports = router;