const Koa = require('koa');
const app = new Koa();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
	console.log('11')
    this.body = homeAdData
});


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
console.log('hhh')