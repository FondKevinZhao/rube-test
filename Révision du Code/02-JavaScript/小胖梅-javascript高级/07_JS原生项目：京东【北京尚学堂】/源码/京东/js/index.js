//封装获取元素
function $(ele) {
  return document.querySelector(ele);
}

//功能1：关闭广告条
// let close = document.querySelector('.close');
// let close = $('.close');
// let jdTop =document.querySelector('.top');
$(".close").onclick = function () {
  $(".top").style.display = "none";
};

//功能2：搜索框里面动态内容
//思路：1.准备容器存储显示的内容 数组存  2. 数据动态改变 计时器  3. 设置input内容
let input = document.querySelector("#input");
(function () {
  let searchArr = [
    "电脑主机",
    "海尔冰箱",
    "iphone14",
    "平板2022",
    "华为手机",
    "手机",
    "服饰",
  ];
  let i = -1;
  setInterval(function () {
    i++;
    if (i === searchArr.length) {
      i = 0;
    }
    //设置input
    input.placeholder = searchArr[i];
  }, 1000);
})();

//功能3：模糊查询
//思路：1. 准备容器假定被搜索的内容 2.获取输入框里面的值  3.获取的输入的值 和 准备的数组里面的每一项内容比较 查看是否存在
let list = [
  "手机",
  "华为手机",
  "苹果手机",
  "电脑",
  "平板电脑",
  "联想电脑",
  "华为电脑",
  "小米手机",
  "三星手机",
  "手提袋",
];

let ulList = document.querySelector(".list");
//oninput事件 获取输入的内容
input.oninput = function () {
  //获取输入的值
  let val = input.value; //trim()
  //判断：输入的值为空
  if (val == "" || val == " ") {
    //先清空数据
    ulList.innerHTML = "";
    //显示下拉层
    ulList.style.display = "none";
    return;
  }
  //先清空数据
  ulList.innerHTML = "";
  //显示下拉层
  ulList.style.display = "block";
  //遍历数组、
  for (let i = 0; i < list.length; i++) {
    //获取数组的每一项 查看是否有字段val
    if (list[i].indexOf(val) !== -1) {
      ulList.innerHTML = ulList.innerHTML + `<li>${list[i]}</li>`;
    } else {
      ulList.innerHTML = `<li>查无数据</li>`;
    }
  }
};
//失去焦点
input.onblur = function () {
  //显示下拉层
  ulList.style.display = "none";
};
input.onfocus = function () {
  if (input.value == "") {
    ulList.style.display = "none";
    return;
  }
  //显示下拉层
  ulList.style.display = "block";
};

//功能4：轮播图
/* 
    1. 创建容器 存储img路径 let imgArr=['./images/1.jpg','','']
    2. 计时器 
    3. 控制下标 i++ 获取不同的img路径 赋值给img标签 --轮播图修改了  控制轮播点高亮
    4. 左右按钮控制轮播
    5. 轮播点控制轮播
*/
let imgArr = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];
let i = 0;
let img = document.querySelector("#img");
let lis = document.querySelectorAll(".banner-dian>li");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let banner = document.querySelector(".banner");
function bannerPlay() {
  i++;
  if (i === imgArr.length) {
    i = 0;
  }
  console.log("---下标---", i); //0--5
  //显示图片
  img.src = imgArr[i];
  //清空其他轮播点高亮
  lis.forEach((ele) => {
    ele.className = "";
  });
  //给当前的轮播点高亮
  lis[i].className = "active";
}
let timer = setInterval(bannerPlay, 3000);
//鼠标移动到轮播上 计时器停止
banner.onmouseover = function () {
  clearInterval(timer);
};
//鼠标离开 计时器开始
banner.onmouseout = function () {
  timer = setInterval(bannerPlay, 3000);
};
//下一页
next.onclick = function () {
  bannerPlay();
};
//上一页
prev.onclick = function () {
  i -= 2;
  if (i == -2) {
    i = imgArr.length - 2;
  }
  bannerPlay();
};

//点击轮播点---切换轮播图
for (let j = 0; j < lis.length; j++) {
  lis[j].onclick = function () {
    console.log('------点击li----');
    //清空其他轮播点高亮
    lis.forEach((ele) => {
      ele.className = "";
    });
    //高亮
    lis[j].className = "active";
    img.src = imgArr[j];
    //存储下标j 
    i=j;
  };
}
