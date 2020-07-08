import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routers from '../client/router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(Routers)}
            </StaticRouter>
        </Provider>
    );

    return `<html>
            <head></head>
            <body>
                <div id='root'>${content}</div>
                <script src="bundle.js"></script>
            </body>
            </html>`;
}