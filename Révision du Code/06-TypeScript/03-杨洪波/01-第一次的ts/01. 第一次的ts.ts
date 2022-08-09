(() => {
  // str这个参数是string类型的
  function sayHi(str: string) {
    return '你好啊' + str;
  }
  let text = '小甜甜1';
  console.log(sayHi(text));
})()

/**
 * 总结：
 *  ts的文件要转换成js才能通过html文件中引入并使用
 * 
 *  编译：
 *    1. 在node中运行：ts-node：专门用于ts的执行。有了它，只要内容ts发生变化，就会自动更新数据，也不会产生新的js文件
          安装：npm i ts-node -g
          使用：ts-node Demo1.ts
      2. 在node中运行(推荐的用法)：nodemon 文件名
      3. 会编译成js文件：tsc 加文件名：tsc 文件名
      4. 自动编译：
          1. 添加`tsconfig.json`
            方法一：手动创建一个`tsconfig.json`文件
            方法二(推荐使用)：使用命令：`tsc --init`
          2. 点击vscode最上面那一排上的`终端`。注意：是最上面一排的终端。
          3. 在终端中点击`运行任务`。
          4. 在终端中点击`显示所有任务`。
          5. 点击`tsc: 监视`，找到符合你的当前json文件。

      5. 自动编译(推荐的用法)：带自动创建js文件的方式
          1. 使用命令：`tsc --init`
          2. 找到生成的 tsconfig.json文件，选择里面的outDir这一行，在它下面复制一行。如：\反斜杠是转义字符
            修改前：// "outDir": "./",  \/* Specify an output folder for all emitted files. *\/
            修改后： "outDir": "./js",  \/* 把ts文件最终编译后放在js目录中 *\/
          3. 找到生成的 tsconfig.json文件，选择里面的strict这一行。如：修改前最好是复制一行，原来的注释掉
            修改前："strict": true,     \/* Enable all strict type-checking options. *\/
            修改后："strict": false,     \/* 不使用严格模式 *\/
          4. 点击vscode最上面那一排上的`终端`。注意：是最上面一排的终端。
          5. 在终端中点击`运行任务`。
          6. 在终端中点击`显示所有任务`。
          7. 点击`tsc: 监视`，找到符合你的当前json文件。

      6. 自动编译：
          1. 使用命令：`tsc --init`
          2. tsc -watch
 */