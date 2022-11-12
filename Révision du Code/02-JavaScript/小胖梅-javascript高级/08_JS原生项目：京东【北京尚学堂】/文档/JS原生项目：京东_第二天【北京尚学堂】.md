![图片](./images/logo.png)

# JS原生项目：京东_第二天

**主要内容**

* 京东详情页
* 放大镜
* 购物车
* 列表
* 选项卡
* 手风琴
* 返回页面顶部

**学习目标**

| 知识点       | 要求 |
| ------------ | ---- |
| 放大镜       | 掌握 |
| 购物车       | 掌握 |
| 列表         | 掌握 |
| 选项卡       | 掌握 |
| 手风琴       | 掌握 |
| 返回页面顶部 | 掌握 |

## 一、京东详情页

### 1.放大镜

![1](images\1.jpg)

```html
<div class="small-box">
    <img src="./images/9.jpg" alt="" class="small-img">
    <!-- 放大镜 -->
    <div class="glass">

    </div>
    <!-- 大盒子 -->
    <div class="big-box">
        <img src="./images/9.jpg" alt="">
    </div>
</div>
```

```javascript
//放大镜
//鼠标移入小盒子，显示放大镜和大盒子
smallBox.onmouseover = function () {
    glass.style.display = 'block';
    bigBox.style.display = 'block';
}

//鼠标移出小盒子，隐藏放大镜和大盒子
smallBox.onmouseout = function () {
    glass.style.display = 'none';
    bigBox.style.display = 'none';
}

//鼠标在小盒子中移动
smallBox.onmousemove = function (e) {
    e = e || window.event;
    //获取放大镜的位置
    //    鼠标距浏览器窗口的距离  放大镜的一半       小盒子距父元素的距离
    let top = e.clientY - glass.offsetHeight / 2 - smallBox.offsetTop;
    let left = e.clientX - glass.offsetWidth / 2 - smallBox.offsetLeft;

    //范围校验
    if (top <= 0) {
        top = 0;
    } else if (top >= smallBox.offsetHeight - glass.offsetHeight) {
        top = smallBox.offsetHeight - glass.offsetHeight;
    }
    if (left <= 0) {
        left = 0;
    } else if (left >= smallBox.offsetWidth - glass.offsetWidth) {
        left = smallBox.offsetWidth - glass.offsetWidth;
    }

    //设置回去
    glass.style.top = top + 'px';
    glass.style.left = left + 'px';

    //设置右侧大图显示的比例
    //获取左侧放大镜移动的比例
    //percentY是求得是放大镜在可移动范围之内移动的百分比
    //                                可以移动的范围
    let percentY = top / (smallBox.offsetHeight - glass.offsetHeight);
    let percentX = left / (smallBox.offsetWidth - glass.offsetWidth);
    //求大图的位置
    let top1 = percentY * (bigImg.offsetHeight - bigBox.offsetHeight);
    let left1 = percentX * (bigImg.offsetWidth - bigBox.offsetWidth);
    //设置大图的位置
    bigImg.style.left = -left1 + 'px';
    bigImg.style.top = -top1 + 'px';

}
```

### 2.购物车

![2](images\2.jpg) 



```javascript
//加
add.onclick = function () {
    buyNum.value++;
    //判断value，当value大于1，减的按钮可以点击
    if (buyNum.value > 1) {
        minus.className = 'minus';
    }
}
//减
minus.onclick = function () {
    buyNum.value--;
    //范围
    if (buyNum.value <= 1) {
        buyNum.value = 1;
        minus.className = 'minus disablede';
    }
}
```

### 3.列表

 ![3](images\3.jpg)

```javascript
down.onclick = function () {
    //设置ul的top
    let top = parseInt(getStyle(asideCon).top);
    //减去564px
    top -= 564;
    //范围
    if (top < -564) {
        top = 0;
    }
    //设置回去
    asideCon.style.top = top + 'px';

}

up.onclick = function () {
    //设置ul的top
    let top = parseInt(getStyle(asideCon).top);
    //加564
    top += 564;
    //范围
    if (top > 0) {
        top = -564;
    }
    //设置回去
    asideCon.style.top = top + 'px';
}

//获取最终样式
function getStyle(ele) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele);
    } else {
        return ele.currentStyle;
    }
}
```

### 4.选项卡

![4](images\4.jpg) 

```javascript
//拿到所有li
for (let i = 0; i < tabMain.length; i++) {
    //绑定点击事件
    tabMain[i].onclick = function () {
        //清空
        for (let j = 0; j < tabMain.length; j++) {
            tabMain[j].className = '';
            tabItems[j].className = 'tab-items';
        }
        //对应的div显示
        tabItems[i].className = 'con-active';
        //对应的li修改样式
        tabMain[i].className = 'tab-active';
    }
}
```

### 5.手风琴

 ![5](images\5.jpg)

```javascript
for (let i = 0; i < spanBtn.length; i++) {
    //绑定点击事件
    spanBtn[i].onclick = function () {
        if (dl[i].className === 'open') {
            //去掉class
            dl[i].className = '';
            //修改span的背景图
            spanBtn[i].style.backgroundPosition = '-20px 0';
        } else {
            //给对应的dl加上open
            dl[i].className = 'open';
            //修改span的背景图
            spanBtn[i].style.backgroundPosition = '-37px 0';
        }
    }
}
```



### 6.返回页面顶部

 ![6](images\6.jpg)

```javascript
backTop.onclick = function () {
    //回到页面顶部
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}
```

