## chrome插件-修改网站cookie

目前只支持 修改localhost，方便公司本地开发

基于 [chrome-extension-template](https://github.com/GaoYuancheng/chrome-extension-template) 开发的chrome插件

vite + react

chrome插件开发文档

> https://developer.chrome.com/docs/extensions/reference/

### 开发
1. yarn
2. yarn build:watch 并且把dist文件夹作为一个插件拖入chrome中
3. 根据公司对应域名修改 constant/index.ts 的内容

### 注意  
1. 开发时直接拖入 dist 到chrome插件中
2. 修改之后 manifest.json 之后要在 chrome://extensions/ 刷新插件


### TODO
[ ] eslint

[ ] husky


