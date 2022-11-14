let express = require('express');
const { Users } = require('../model/db');
const users = require('../model/users');
let route = express.Router();
const { addUser, getUser, updateUser, deletedUser } = require('../utility/users');

// post user
route.post('/adduser', async (req, res) => {
    try {
        const crtUser = await addUser(req.body);
        res.status(crtUser?.statusCode).json(crtUser);
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error", error: error.message });
    }

});

//get user
route.get('/getuser', async (req, res) => {
    try {
        const userInf = await getUser();
        res.status(userInf?.statusCode).json(userInf)
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error", error: error.message });
    }
});

//get user by id
route.get('/getbyid/:id', async (req, res) => {
    try {
        let userDetail = await getUser(req?.params?.id)
        res.status(userDetail?.statusCode).json(userDetail)
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error", error: error.message });
    }
});

//update user by id
route.put('/updateuser/:id', async (req, res) => {
    try {
        let userDispaly = await updateUser(req?.params?.id, req?.body)
        res.status(userDispaly?.statusCode).json(userDispaly)
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error", error: error.message });
    }
});

//delete by id
route.delete('/delete/:id', async (req, res) => {
    try {
        let userDelete = await deletedUser(req?.params?.id)
        res.status(userDelete?.statusCode).json(userDelete)
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error", error: error.message });
    }
})

module.exports = route;
