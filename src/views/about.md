# 关于

## 如何运行

- 目录backend是爬虫目录,并提供给前端接口
- src/imgs是爬虫下载图片的位置,你也可以添加自己的图片

> 运行命令

- `yarn dev`启动前端服务,默认端口为8750
- `yarn server` 启动后端服务,默认端口为8751
- `yarn start`同时启动前后端服务
- `yarn build`打包,把自己的图片扔进src/imgs文件夹即可
```shell
yarn  start
```
## 后端接口

- `/imgs`获取`src/imgs`文件夹所有的图片
- `/avatar/:id`获取bbs.mihoyo.com中uid为id的画师所有图片
- `/bili` 获取泉酱画的所有头像
- `/delTrash` 删除根目录的trash文件夹
- `/deleteImg/:id`删除src/imgs里面文件名为id的文件
