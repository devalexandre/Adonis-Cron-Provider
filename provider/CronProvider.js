'use strict'
const  CronJob = require('cron').CronJob;
const Redis = require('Redis')
const { ServiceProvider } = require('@adonisjs/fold')

class CronProvider extends ServiceProvider{
    /**
     * Register the scheduler to the IoC container
     * with `Adonis/Addons/Cron` namespace.
     *
     * @method _registerScheduler
     *
     * @return {void}
     *
     * @private
     */
    _registerScheduler () {
        this.app.singleton('Adonis/Addons/Cron', () => make(require('../src/CronService')))
    }
}
