if(Process.env.NODE_ENV != 'Production'){
    require('dontenv').config();
}

module.exports = {
    PORT : Process.env.PORT
}