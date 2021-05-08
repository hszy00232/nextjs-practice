# 基于NextJS的应用实践

项目代码可以结合《[学习Next.js](https://segmentfault.com/a/1190000009604556)》来阅读会更清晰。

## 项目运行

* npm run dev 运行开发环境
* npm run dev:node 运行自定义服务端的开发环境
* npm run build 打包编译
* npm run start 运行打包编译后的结果，但是自定义服务端不会运行

部署后的运行，采用pm2
* npm install -g pm2 全局安装pm2
* NODE_ENV=production pm2 start ./server.js --name nextjs-practice 
