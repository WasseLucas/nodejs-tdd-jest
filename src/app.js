const express = require('express');

class AppController{
    constructor(){
        this.app = express();        
    }

    middleware(){
        this.express.use(express.json());
    }

    router(){
        this.express.use(require(""));
    }

}

module.exports = new AppController().express;