import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app/app.jsx';
import configStore from './app/store/configStore'
import { loadTemplate, loadListData } from './ssr/load.js';

function registerRouter(router) {
	router.get('/',async (ctx,next)=>{
		let cityName = '北京';
		if (ctx.headers.cookie && ctx.headers.cookie.cityName) {
			cityName = ctx.headers.cookie.cityName;
		}
		const initialData = {userinfo:{cityName: cityName}};
		const listRes = await loadListData(0, cityName, ctx.protocol, ctx.headers.host);
		const listData = await listRes.json();
		const htmlTemplate = loadTemplate();
		const store = configStore({userinfo:{cityName}});
		const page = ReactDOMServer.renderToString(<App store={store} />);
		const html = htmlTemplate.replace('<div id="root"></div>',
			`<div id="root">${page}</div>
			<script>
				window.__INITIAL_STATE__=${JSON.stringify(initialData)}
				window.ssr_list_data=${JSON.stringify(listData)}
			</script>`);
		ctx.body = html;
	})

	const homeAdData = require('./mock/home/ad.js')
	router.get('/api/homead', function(ctx, next) {
		console.log('11')
		ctx.body = homeAdData// response body
	});

	// 首页 —— 推荐列表（猜你喜欢）
	const homeListData = require('./mock/home/list.js')
	router.get('/api/homelist/:city/:page', function(ctx, next) {
		// 参数
		const params = ctx.params
		const paramsCity = params.city
		const paramsPage = params.page

		console.log('当前城市：' + paramsCity)
		console.log('首页推荐列表页数：' + paramsPage)
		console.log('-----------')
		ctx.body = homeListData
	});

	//搜索页面 首页输入框搜索 三个参数
	const searchListData = require('./mock/search/list.js')
	router.get('/api/searchlist/:cityName/:page/:category/:keyword', function(ctx, next) {
		let params = ctx.params
		const page = params.page
		const category = params.category
		const keyword = params.keyword
		const city = params.cityName
		console.log('当前城市：' + city)
		console.log('当前页数：'+ page)
		console.log('当前类别：' + category)
	    console.log('关键字：' + keyword)
		console.log('-----------')
		ctx.body = searchListData
	})
	//从轮播图进入 两个参数
	router.get('/api/searchlist/:cityName/:page/:category', function(ctx, next) {
		let params = ctx.params
		const page = params.page
		const category = params.category
		const city = params.cityName
		console.log('当前城市：' + city)
		console.log('当前页数：'+ page)
		console.log('当前类别：' + category)
		console.log('-----------')
		ctx.body = searchListData
	})

	//商户搜索页--详情页
	let detailData = require('./mock/detail/info.js')
	router.get('/api/detail/info/:id', function(ctx, next) {
		console.log('详情页-商户信息')
		let params = ctx.params
		const id = params.id
		console.log('商户id:' + id)
		ctx.body = detailData
	})

	//商户搜索页--评论页
	let commentData = require('./mock/detail/comment.js')
	router.get('/api/detail/comment/:id/:page', function(ctx, next) {
		let page = ctx.params.page
		console.log('商品评论页数：' + page)
		ctx.body = commentData
	})

	//用户中心页---订单数据
	let orderListData = require('./mock/user/order.js')
	router.get('/api/orderlist/:username', function(ctx, next) {
		let username = ctx.params.username
		console.log('用户：' + username)
		ctx.body = orderListData
	})

	//用户中心页---提交评价
	router.post('/api/submit/comment', function(ctx, next) {
		console.log('提交评价')
		ctx.body = {
			noerr: 0,
			msg: 'ok'
		}
	})
}

module.exports = registerRouter;