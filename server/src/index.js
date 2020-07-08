import 'babel-polyfill';
import express from 'express';
const app = express();
import rendering from './helpers/rendering';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routers from './client/router';
import proxy from 'express-http-proxy';

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(options) {
        options.headers['x-forwarded-host'] = 'localhost:3000';
        return options;
    }
}))

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routers, req.url).map(({ route }) => {
        console.log(route);
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        const content = rendering(req, store);
        res.send(content);
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});