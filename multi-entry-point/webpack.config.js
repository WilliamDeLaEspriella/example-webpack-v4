const path = require('path')

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        precios: path.resolve(__dirname,'src/js/precios.js'),
        contactos: path.resolve(__dirname,'src/js/contactos.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js',
    }
}