require.extensions['.less'] = function(){
	return null;
}
require.extensions['.css'] = function(){
	return null;
}
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const render = require('koa-ejs');
const router = require('koa-router')();
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';

const historyFallback = require('koa2-history-api-fallback')
const path = require('path');
const app = new koa();
require('./routes.js')(router);
// Logger
app.use(logger());


if (process.env.NODE_ENV!=='production') {
	const Webpack=require('webpack');
	const config = require('./webpack.config.js');
	const compiler=Webpack(config);
	app.use(devMiddleware(compiler));
	app.use(hotMiddleware(compiler));
}

render(app, {
    root: process.env.NODE_ENV==='production'? path.join(__dirname, './build') :path.join(__dirname, './app'),
    extname: '.html'
});

app.use(serve(path.join(__dirname, 'build'),{
	maxage:100 * 24 * 60 * 60,
	index: false
}));

app.use(router.routes());
app.use(router.allowedMethods());

// router to front-end
app.use(historyFallback())

app.listen(3000);
console.log('start on port: 3000');
