# 使用React模仿大众点评

## 技术栈：
react + react-router4.1 + redux + less + ES6/7 + webpack + fetch + bundle-loader

## 下载

 	git clone https://github.com/Topthinking/react-webapp-dianping.git

 	cd react-webapp-dianping

 	npm install

 ## 运行（nodejs 6.0+）
```
 npm run dev (正常编译模式)

 访问 http://localhost:8080

 npm run build （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）
```
## 2017年5月8日
```
初次提交
```
## 2017年5月14日
```
1.利用webpack的bundle-loader实现代码分割，最终实现根据路由按需加载，加快用户对首屏的访问速度
2.添加fastclick解决移动端300毫秒延迟
3.实现详情页面，复用之前的列表组件和加载组件，只是样式和数据结构不一样
```
## 2017年5月19日
```
利用CSS Modules进行解决css的命名混乱以及全局污染
```
## 说明

>  本项目主要理解 react 和 redux 的原理，以及 react + redux 之间的配合方式，同时对react-router4进行由浅入深的学习和探究，欢迎大家一起学习新的路由方式

>  如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  我的个站[首页](http://topthinking.github.io/)使用的是angular1.4构建的。[地址在这里](https://github.com/Topthinking/top)

>  这是react的客户端渲染的实现，现在我用react实现了服务端渲染，[地址在这里](https://github.com/Topthinking/react-ssr)

## 演示
[demo](http://topthinking.github.io/dianping/)（请用chrome的手机模式预览）

### 移动端扫描下方二维码
![](https://github.com/Topthinking/react-webapp-dianping/blob/master/doc/images/demo_code.png)
