'use strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src' , 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: 'bundle.js'        
    }
}