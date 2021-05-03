const express = require('express');
const {mean, median, mode} = require('./helpers')
const ExpressError = require('./expressError');

const app = express();

app.use(express.json());

app.get('/', (req, res, next)=>{
    res.send("WELCOME");
})

app.get('/mean', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const query = req.query.nums.split(',');
        for (let element of query){
            if (isNaN(element)){
                throw new ExpressError(`${element} is not a number`, 400);
            }
        }
    } catch (e) {
        return next(e);
    }
    //errors free zone
    const nums = req.query.nums.split(',').map(e=>parseInt(e));
    const m = mean(nums);
    
    return res.json({
        operation: "mean",
        value: m
    })
})

app.get('/median', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const query = req.query.nums.split(',');
        for (let element of query){
            if (isNaN(element)){
                throw new ExpressError(`${element} is not a number`, 400);
            }
        }
    } catch (e) {
        return next(e);
    }
    //errors free
    const nums = req.query.nums.split(',').map(e=>parseInt(e));
    const m = median(nums);
    console.log(m);
    return res.json({
        operation: "median",
        value: m
    })
})

app.get('/mode', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const query = req.query.nums.split(',');
        for (let element of query){
            if (isNaN(element)){
                throw new ExpressError(`${element} is not a number`, 400);
            }
        }
    } catch (e) {
        return next(e);
    }
    //errors free
    const nums = req.query.nums.split(',').map(e=>parseInt(e));
    const m = mode(nums);
    return res.json({
        operation: "mode",
        value: m
    })
})

app.use((err, req, res, next)=>{
    let status = err.status || 500;
    let msg = err.msg || "This is an error!";

    return res.status(status).json({
        error:{
            msg: msg,
            status: status
        }
    })
})

app.listen('3000', ()=>{
    console.log("Running on port 3000");
})