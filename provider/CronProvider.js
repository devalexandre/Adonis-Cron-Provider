'use strict'
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

    register () {
          this.app.singleton('Adonis/Addons/Cron', (app) => {
            // const Config = app.use('Adonis/Src/Config')
            const Cron = require('../src/CronService')
            return new Cron()
        })

        this.app.alias('Adonis/Addons/Cron', 'Cron')
    }
}


module.exports = CronProvider
