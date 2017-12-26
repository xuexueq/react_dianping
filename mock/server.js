const Koa = require('koa');
const app = new Koa();
const r = require('koa-router');
const router = new r()

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js')
router.get('/api/homead', function(ctx, next) {
	console.log('11')
	ctx.body = homeAdData// response body
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
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

//搜索页面
const searchListData = require('./search/list.js')
router.get('/api/searchlist/:cityName/:page/:category/:keyword', function(ctx, next) {
	let params = ctx.params
	const page = params.page
	const category = params.category
	const keyword = params.keyword
	const city = params.cityName
	console.log('当前城市：' + city)
	console.log('搜索结果页数：'+ page)
	console.log('当前类别：' + category)
    console.log('关键字：' + keyword)
	console.log('-----------')
	ctx.body = searchListData
})

// 开始服务并生成路由
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);
console.log('hhh')