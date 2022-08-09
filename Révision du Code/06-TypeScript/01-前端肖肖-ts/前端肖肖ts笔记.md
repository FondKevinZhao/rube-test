### TypeScript安装

js可以直接在`index.html`文件上使用，ts跟js在这点上不一样，ts需要安装才能使用。

安装(安装在全局的)：`npm install -g typescript`

查看本机TS版本：`npm view typescript version`

查看本机是否安装TS：`npm ls typescript`

卸载TS：`npm uninstall typescript`

**只有编译好的ts才能在浏览器中运行的。**

- 编译：`npm install -g typescript`
- 我的ts文件的名字叫`index.ts`，代码写完后执行：`tsc index.ts`
- 编译好后，会在ts的同目录下多出一个`index.js`文件。

### 生成ts配置文件 - 自动编译

1. 添加`tsconfig.json`

   方法一：手动创建一个`tsconfig.json`文件

   方法二(推荐使用)：使用命令：`tsc --init`

2. 点击vscode最上面那一排上的`终端`。注意：是最上面一排的终端。

3. 在终端中点击`运行任务`。

4. 点击`配置任务`。

5. 点击`tsc: 监视`。





