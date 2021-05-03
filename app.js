const express = require('express');
const {mean, median, mode} = require('./helpers')
const ExpressError = require('./expressError');

const app = express();


app.get('/mean', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const notANumber = req.query.nums.find(num=>!(num instanceof Number));
        if (notANumber){
            throw new ExpressError(`${notANumber} is not a number`, 400);
        }
    } catch (e) {
        return next(e);
    }
    const nums = req.query.nums;
    return nums.json({
        operation: "mean",
        value: mean(nums)
    })
})

app.get('/median', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const notANumber = req.query.nums.find(num=>!(num instanceof Number));
        if (notANumber){
            throw new ExpressError(`${notANumber} is not a number`, 400);
        }
    } catch (e) {
        return next(e);
    }
    const nums = req.query.nums;
    return nums.json({
        operation: "median",
        value: median(nums)
    })
})

app.get('/mode', (req, res, next)=>{
    try {
        if (!req.query.nums){
            throw new ExpressError("nums are required", 400);
        }
        const notANumber = req.query.nums.find(num=>!(num instanceof Number));
        if (notANumber){
            throw new ExpressError(`${notANumber} is not a number`, 400);
        }
    } catch (e) {
        return next(e);
    }
    const nums = req.query.nums;
    return nums.json({
        operation: "mode",
        value: mode(nums)
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