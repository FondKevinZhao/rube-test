1. 整体引入 lodash：`import _ from 'lodash'`

   按需引入 lodash 中的 throttle：`import throttle from 'lodash/throttle'`

2. 事件控制 2、3 级分类的显示和隐藏：

   原来的是使用 css 去做的，改为一个类：

   1. 首先把原来的 hover 去掉，改为一个类。
   2. 在 item 身上动态的强制绑定 class，[item_on: 布尔值]，布尔值为 true，那么当前的这个 item 的类就生效。
   3. 移入哪一个 item，就让当前这个 item 的类为 true。
   4. 设计一个数据，`currentIndex = -1`。
   5. 移入 item 的时候，让 `currentIndex = index`。
   6. 移出不能再 item 身上去加，因为最后 item 和 h2 移出他们整体会把 2 级分类隐藏，所以需要用 div 把 item 和 h2 包裹，给 div 添加。

3. 把所有的 a 标签换成 router-link 会卡，因为组件标签太多了，导致内存当中组件对象太多，容易造成鼠标移动到列表中的时候，一卡一卡的。(来自于111集 - 20: 00 - 点击分裂跳转到搜索页面，携带 query 参数 )

   解决办法：

   1. 把 **声明式导航 router-link **改为 **编程式导航 `$router.push({})`**。
   2. 把声明式导航改为编程式导航，click 事件在点击之后，是需要调用函数的，同样每个 a 标签都添加了点击事件，那么内容中就会定义很多个函数，内存占用也是比较大的，效率虽然比声明式导航强，但是还是不够好。再用事件委托来把函数定义在父元素上来解决。

4. 事件委派(事件委托)：在共同的父级/祖辈元素身上添加事件监听。

   问题：怎么知道点击的是不是 a 标签？  

   问题：假如你知道你点击的是 a 标签，怎么知道点击的是一级还是二级还是三级？

   问题：参数怎么携带，要携带哪些个的参数？

   这三个问题可以使用自定义属性`data-`来解决。如：

   ```js
   <a href="javascript:;" :data-category1Id="c1.categoryId" :data-categoryName="c1.categoryName"> {{c1.categoryName}}
   </a>
   
   <a href="javascript:;" :data-category2Id="c2.categoryId" :data-categoryName="c2.categoryName"> {{c2.categoryName}}
   </a>
   
   <a href="javascript:;" :data-category3Id="c3.categoryId" :data-categoryName="c3.categoryName"> {{c3.categoryName}}
   </a>
   ```

   

5. js 原生中的 event 是什么？

   ```js
   box.onclick = function (event) {
       var targetNode = event.target
   }
   // box 事件源。
   // event.target 目标元素(你当前点击的那个元素)
   // 这个 回调函数，最终是浏览器调用的。
   ```

   - event 是事件对象。
   - 每一次触发事件的时候，系统(浏览器内核)都会把这一次触发事件相关的所有信息，封装为一个对象。
   - 在浏览器调用回调函数的时候，自动传递给回调函数的第一个形参。

6. js 原生的 event 和 Vue 的 $event 的区别：

   原生的 event 形参是写在第一位的。

   Vue 的 $event 形参可以放在第一位，也可以放在后面：

   ```js
   @click = "toSearch('zhaoliying', $event)"
   @click = "toSearch($event, 'zhaoliying')"
   ```

   $event 只能在 Vue 的模板中出现。

7. 主页的侧边导航栏一上来是显示的，详情页的侧边导航栏一开始是隐藏的，鼠标放上去才出来。(P115开始就介绍了)

   ![image-20210826210734003](北京PC项目笔记.assets/image-20210826210734003.png)

   

   ![按钮](北京PC项目笔记.assets/按钮.gif)

   **可以用 v-show 来做。**

   ```js
   // 不是主页，一开始不出来
   mounted(){
       if(this.$route.path !== '/home') {
           this.isShow = false;
       }
   }
   ```

   鼠标**移入**全部商品分类**显示列表**：`@mouseenter="isShow = true"`

   鼠标**移出**全部商品分类**隐藏列表**：`@mouseleaver="moveOutDiv"`

8. 







































































































































































































