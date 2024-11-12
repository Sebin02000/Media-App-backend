const jsonServer = require('json-server');

const mediaAppServer = jsonServer.create();

const middleware = jsonServer.defaults();

const router = jsonServer.router('db.json');

mediaAppServer.use(middleware);

mediaAppServer.use(router);

const PORT = 3000;

mediaAppServer.listen(PORT,()=>{
    console.log("Media App Server started at server PORT:"+PORT);
})
