##本地跑起来##
`npm run start`or`npm start`


###  问题记录

1. 首页SSR，localhost:3000/， 默认就会加载index.html，  使用webpack devserver总会生成index.html及其他资源在内存中，这样访问首页时就会跳过node router的控制，而直接渲染。 所以此时调试SSR时需要使用npm run serve（但每次修改后要npm run build才行。。。），此时不使用webpack dev server。

2. container/app.js 中获取城市信息，然后各个子container 再以此去获取数据，如果首页SSR， 那就是首页URL需要被后端拦截以完成渲染， 但是必要的城市信息又无法从localStorage中获取，所以此时首页SSR无法实现。

	修改： 将城市信息存储到cookie中，每次从url去解析。

3. node-fetch 时需要fetched URL为absolute,