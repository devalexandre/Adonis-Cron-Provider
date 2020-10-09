'use strict'

/*
 * adonis-cron
 *
 * (c) Alexandre E Souza <alexandre@indev.net.br>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const GE = require('@adonisjs/generic-exceptions')

/**
 * Class to throw runtime exceptions
 *
 * @class RuntimeException
 * @constructor
 */
class RuntimeException extends GE.RuntimeException {
    /**
     * This exception is raised when task an undefined schedule
     *
     * @method undefinedTaskSchedule
     *
     * @param  {String}          job
     *
     * @return {Object}
     */
    static duplicateCronJob (job) {
        return new this(`${job} duplicate`, 500, 'E_INVALID_JOB')
    }

    static udefinedCronJob (job) {
        return new this(`${job} not found`, 500, 'E_INVALID_JOB_NAME')
    }


}

module.exports = {
    RuntimeException
}


