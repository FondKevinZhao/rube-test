1. **题目1：**

   以下能正确获取到dom元素的选择器是（）？

   &lt;div class=’box’ id=’box’&gt;hello atguigu&lt;/div&gt;

   - A、document.getElementById(‘box’)
   - B、document.getElementsByClassName(‘.box’)
   - C、document.getElementsByName(‘div’)
   - D、document.querySelector(‘box’)

   【参考答案】: A

   【您的答案】: A

   

2. **题目2：**

   给目标元素原有基础上增加一个类名acitve，正确的是（）？

   `< div id='box' >hello atguigu</div >`

   `var box = document.getElementById('box')`

   - A、 box.className = ‘.active’
   - B、box.classList.remove(‘active’)
   - C、 box.classList = ‘active’
   - D、box.classList.add('active')

   【参考答案】: D

   【您的答案】: D

3. **题目3：**

   以下说法正确的是（）？
   - **A、 document.createElement(tagName) 能创建一个元素节点**
   - B、parentElement.removeChild(node) 能删除一个文本节点
   - C、 parentElement.replaceChild(oldNode, newNode) 能替换oldNode。**(解释：oldNode 和 newNode 位置要调换就正确了)**
   - D、parentElement.appendChild(node) 能把要添加的节点添加到指定子级里面的最前面

   【参考答案】: A

   【您的答案】: C

4. **题目4：**

   关于鼠标事件对象event, 以下说法正确的是（）?

   - A、event.clientX/event.clientY 获取的是鼠标在页面上的位置
- B、**event.clientX/event.clientY 获取的是鼠标在视口上的位置**
   - C、event.screenX/event.screenY 获取的是鼠标在视口上的位置
   - D、event.pageX/event.pageY 获取的是鼠标在元素上的位置
   
   【参考答案】: B

   【您的答案】: C

5. **题目5：**

   事件传播的三个阶段是什么（）？

   

   - A、目标 > 捕获 > 冒泡
   - B、冒泡 > 目标 > 捕获
   - C、目标 > 冒泡 > 捕获
   - **D、捕获 > 目标 > 冒泡**

   【参考答案】: D

   【您的答案】: D

6. **题目7：**

   window.onload 事件，说法正确的是（）?

   

   - A、等当前页面元素加载完毕执行
   - **B、等当前页面所有的资源加载完毕执行**
   - C、等当前页面所有图片加载完毕执行
   - D、等当前页面部分图片加载完毕执行

   【参考答案】: B

   【您的答案】: B

7. **题目8：**

    window.onresize 事件，说法正确的是（）?

   

   - A、内容发生滚动触发的事件
   - **B、视口大小发生变化触发的事件**
   - C、视口内元素发生改变触发的事件
   - D、页面内元素发生改变触发的事件

   【参考答案】: B

   【您的答案】: B

8. **题目9：**

   阻止冒泡，以下代码正确的是（）?

   

   - A、event.preventDefault()
   - **B、event.stopPropagation()**
   - C、event.target
   - D、event.type

   【参考答案】: B

   【您的答案】: B

9. **题目10：**

   阻止默认行为，以下代码正确的是（）?

   

   - **A、event.preventDefault()**
   - B、event.stopPropagation()
   - C、event.target
   - D、event.type

   【参考答案】: A

   【您的答案】: A

10. **题目11：**

关于鼠标事件，正确的是（）?



- A、contextmenu 代表鼠标双击触发的事件 **(解释：这其实是一个鼠标右键单击事件)**
- B、mouseenter 代表鼠标离开元素触发的事件
- C、mouseover 代表鼠标离开元素触发的事件
- **D、mouseout 代表鼠标离开元素触发的事件**

【参考答案】: D

【您的答案】: A



12. **题目12：**

    关于键盘事件，正确的是（）?

    

    - A、keydown 代表键盘按键抬起触发的事件
    - **B、keydown 代表键盘按键按下触发的事件**
    - C、keyup 代表键盘按键按下触发的事件
    - D、keypress 代表键盘方向键按下触发的事件

    【参考答案】: B

    【您的答案】: B

13. **题目13：**

    以下哪种方法能正确的获取到视口宽度（）?

    

    - A、**document.documentElement.clientWidth**
    - B、document.documentElement.innerWidth
    - C、document.width
    - D、window.offsetWidth

    【参考答案】: A

    【您的答案】: D

14. **题目14：**

    setInterval方法的返回值是什么（）?

    

    - **A、一个唯一的id**
    - B、指定的毫秒数
    - C、传递的函数
    - D、undefined

    【参考答案】: A

    【您的答案】: A

15. **题目15：**

    以下说法正确的是

    

    - A、**offsetWidth 获取的content + padding + border 的宽度**
    - B、clientWidth 获取的content + padding + border 的宽度
    - C、offsetLeft 获取的是元素距离视口左上角的位置
    - D、clientLeft 获取的是元素距离视口左上角的位置

    【参考答案】: A

    【您的答案】: A

16. **题目16：**

    以下说法正确的是

    

    - **A、offsetWidth / offsetHeight 获取的是 内容宽高+内边距宽高+边框**
    - **B、clientWidth / clientHeihgt 获取的是 内容宽高+内边距宽高**
    - **C、getBoundingClientRect() 返回一个对象，对象中包含元素距离视口的距离信息**
    - **D、clientLeft / clientTop 获取的是元素边框的宽高**

    【参考答案】: ABCD

    【您的答案】: ABC

17. **题目17：**

    下列选项中不能获取DOM元素的方法是

    

    - **A、getNodeById()**
    - B、getElementsByTagName()
    - C、getElementsByClassName()
    - D、getElementsByName()

    【参考答案】: A

    【您的答案】: A

18. **题目18：**

    以下说法正确的是

    

    - **A、event.clientX获取的是鼠标距离视口上的位置**
    - B、event.offsetX 获取的是鼠标距离页面上的位置
    - C、event.pageX 获取的是鼠标距离屏幕上的位置
    - D、 event.screenX 获取的是鼠标距离根元素上的位置

    【参考答案】: A

    【您的答案】: A

19. **题目19：**

    DOM中为元素绑定事件描述错误的是

    

    - A、addEventListener方法IE8浏览器不支持
    - B、attachEvent方法谷歌不支持
    - C、attachEvent方法IE11不支持
    - D、addEventListener方法谷歌浏览器不支持

    【参考答案】: D

    【您的答案】: D

20. **题目20：**

    

    下列哪些选项属于DOM对象

    

    

    - A、Object
    - B、window
    - C、$
    - **D、document**

    【参考答案】: D

    【您的答案】: D

