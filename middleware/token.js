function getToken(req, res, next){
    const token = req.headers.token;
    console.log(token);

    if(token === '555555'){
        next();
    }else{
        res.send('Not Authorised');
    }
};

function infoPass(req, res, next){
    const pass = req.headers.pass;
    if(pass === "infinity"){
        next();
    }else{
        res.send(`Pass not identified. Response denied`);
    }
}

module.exports = {
    getToken,
    infoPass
};