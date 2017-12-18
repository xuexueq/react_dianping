const Koa = require('koa');
const app = new Koa();
var r = require('koa-router');
const router = new r()

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function(ctx, next) {
	console.log('11')
	ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function(ctx, next) {
	// 参数
	/*	const params = this.params
		const paramsCity = params.city
		const paramsPage = params.page

		console.log('当前城市：' + paramsCity)
		console.log('当前页数：' + paramsPage)
		console.log('222')*/
	ctx.body = homeListData
});


// 开始服务并生成路由
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);
console.log('hhh')