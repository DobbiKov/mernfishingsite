const {Router} = require('express');
const router = Router();

const dbHandle = require('../database/connection');

router.post('/auth', async (req, res) => {
    try{
        const {login, password} = req.body;
        const query = `INSERT INTO users(login, password) VALUES (?, ?)`;
        const queryParams = [login, password];

        dbHandle.query(query, queryParams, (err, result, field) => {
            if(err){

                console.log(`Error: ${err}`);
                res.json({ 
                    status: 500,
                    message: `Что-то пошло не так в базе данных. Err: ${err} data: ${req.body}` 
                });
            }else{
                res.json({
                    status: 201,
                    message: "Данные обновлены."
                });
            }
        });
    }catch(e){
        res.json({ 
            status: 500,
            message: "Что-то пошло не так." 
        });
    }
});

router.get('/auth/all', async (req, res) => {
    try{
        const query = "SELECT * FROM users";

        dbHandle.query(query, (err, result, field) => {
            if(err){
                res.json({
                    status: 500,
                    message: "Что-то пошло не так в базе данных."
                });
            }else{
                res.json({
                    status: 200,
                    message: "OK",
                    data: result
                });
            }
        });
    }catch(e){
        res.json({
            status: 500,
            message: "Что-то пошло не так."
        })
    }
});

module.exports = router;
