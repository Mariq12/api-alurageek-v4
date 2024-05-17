const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

server.delete('/api/:resource/:id', (req, res, next) => {
    const resource = req.params.resource;
    const id = parseInt(req.params.id);
    const data = router.db.get(resource).value();

    if (!data) {
        return res.status(404).json({ message: 'Resource not found' });
    }

    const item = data.find(item => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    router.db.get(resource).remove({ id }).write();
    res.status(200).json({ message: 'Item deleted successfully' });
});

server.post('/api/:resource', (req, res, next) => {
    const resource = req.params.resource;
    const newItem = req.body;

    const data = router.db.get(resource).value();
    if (!data) {
        return res.status(404).json({ message: 'Resource not found' });
    }

    newItem.id = Date.now(); 
    router.db.get(resource).push(newItem).write();
    res.status(201).json(newItem);
});

server.get('/api/:resource', (req, res, next) => {
    const resource = req.params.resource;
    const data = router.db.get(resource).value();
    if (!data) {
        return res.status(404).json({ message: 'Resource not found' });
    }

    res.status(200).json(data);
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});

module.exports = server;
