/**
 * Utils
 * 
 * @author TayLQ
 */

const dotenv = require('dotenv');
dotenv.config();

class Utils {

    async getHome(path='') {
        let URL = `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}${path}`;
        // let URL = `${process.env.PROTOCOL}://${process.env.HOSTNAME}${path}`;
        return URL;
    }
}

module.exports = Utils;

