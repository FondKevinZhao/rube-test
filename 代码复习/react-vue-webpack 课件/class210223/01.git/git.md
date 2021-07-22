# Git

分布式版本控制工具

要求掌握两个点：

1. 如何进行本地版本控制
2. 如何与远程仓库进行交互

## 1. 本地版本控制

1. git init
   初始化 git 本地仓库（只需要做一次）

2. 基本概念：三个区

- 工作区：刚刚修改、新建、删除文件，会保存在工作区（写代码的区域）
- 暂存区：暂时保存代码的区域
- 版本区：进行本地版本控制代码的区域

3. git add .
   将工作区文件添加到暂存区中

4. git commit -m '注释'
   将暂存区文件添加版本区中

5. git status
   查看代码的位于哪个区（状态）
   红色：位于工作区
   绿色：位于暂存区
   没有：位于版本区

6. 分支管理

- 新建分支 git branch xxx
- 切换分支 git checkout xxx
- 新建并切换分支 git checkout -b xxx
- 查看分支 git branch
- 合并分支 git merge xxx
  - 在当前分支合并 xxx 分支的内容
  - 可能导致冲突
    - 产生的原因：多个分支对同一个文件做了不同的修改，合并时会产生冲突
    - 解决冲突：使用 VSCODE 解决
      - `accept current changes` 保留当前分支代码
      - `accept incoming changes` 保留其他分支代码
      - `accept both changes` 保留双方分支代码

## 2. 远程仓库交互

注意：必须先进行本地版本控制，再进行远程仓库交互
因为推送代码，只能推送本地版本区代码，其他区域推不上远程仓库

1. 本地没有仓库，远程有仓库，怎么交互

- 场景：初次到公司，参与项目开发。负责人先创建好远程仓库，程序员负责拉取远程仓库代码到本地来开发

- 将远程仓库克隆下来
  - git clone repo_url
  - cd xxx
  - 克隆下来的仓库只有 master 分支，没有其他分支
- 开发者需要在 dev 分支上进行开发
  - git fetch origin dev:dev 拉取远程仓库 dev 分支代码到本地仓库 dev 分支上
    - 本地仓库如果没有 dev 分支会自动创建
  - git checkout dev

2. 本地有一个仓库，远程没有仓库，怎么交互

- 新建本地仓库，并做好本地版本控制

  - git init
  - git add .
  - git commit -m 'xxx'

- 新建分支

  - git branch dev

- 先将本地仓库和远程仓库关联上（只需要做一次）

  - git remote add origin repo_url 关联远程仓库

    - git remote remove origin 删除关联远程仓库地址

  - 远程仓库地址有两种
    - https：需要用户名和密码认证
      - 往往第一次需要，后续会自动保存
    - ssh：需要进行 ssh 钥匙验证
      - 首先本地电脑需要生成 ssh 的秘钥和公钥：ssh-keygen -t rsa
        - 按三次回车
        - 地址在 `C:\Users\xxx用户\.ssh`
        - `id_rsa` 秘钥
        - `id_rsa.pub` 公钥
      - 将公钥所有内容复制，添加到个人的 ssh 公钥管理中
      - 当前电脑就拥有操作个人仓库的权限了

- 将本地仓库代码推送到远程仓库去
  - 推送 master 分支代码
    - git push -u origin master
      - 将来推送 master，可以简化指令为 git push
      - 第一次使用 ssh 推送，需要输入 yes 记录 gitee 的地址
  - 推送 dev 分支代码
    - git checkout dev
    - git push origin dev
  - 注意：对应远程仓库（gitee、github）来说，第一次推送的分支默认就是主干

## 3. git 忽略文件

在项目根目录创建文件 `.gitignore`
