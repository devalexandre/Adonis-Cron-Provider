'use strict'
const  CronJob = require('cron').CronJob;
const Redis = require('Redis')
const GE = require('./RuntimeException')
class CronService {

    async static addTask({name,time,task}){
        const job = await Redis.get(name)
        if (job) {
            throw GE.duplicateCronJob(name)
        }
        await Redis.set(name, JSON.stringify({time,task}))
    }

    async static delTask({name}){
        const job = await Redis.get(name)
        if (!job) {
            throw GE.udefinedCronJob(name)
        }
        await Redis.delete(name)
    }

    async static getTask(){
        Redis.on("message", (channel, message) => {
            const _data = JSON.parse(message)
            const job = new CronJob(`${_data.time}`, [_data.task], null, true, 'America/Los_Angeles');
            console.log("Receive message %s from channel %s", message, channel);
        });
    }
}

module.exports = {
    CronService
}
