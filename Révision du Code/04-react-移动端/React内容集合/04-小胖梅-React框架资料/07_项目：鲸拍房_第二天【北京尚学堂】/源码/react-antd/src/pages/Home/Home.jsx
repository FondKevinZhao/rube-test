import React, { Component } from "react";
import Banner from "../../components/banner/Banner";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";
import three from "../../assets/images/3.jpg";
import left from "../../assets/images/left.jpg";
import right from "../../assets/images/right.jpg";
import SearchIndex from "./search/SearchIndex";
import home from "./index.module.css";
import Item from "./item/Item";
import api from '../../api/index'
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [], //存储轮播接口返回的数据
      item:[],//今日推荐
    };
  }
  componentDidMount() {
    //1. 获取轮播接口数据
    this.setState({
      banner: [
        { id: 1, img: one },
        { id: 2, img: two },
        { id: 3, img: three },
      ],
    });
    //2. 获取今日推荐接口
    api.getTody()
    .then(res=>{
      console.log('获取今日推荐接口',res.data);
      this.setState({
        item:res.data.data
      })
    })
  }
  render() {
    return (
      <>
        {/* 轮播区域------------------------- */}
        <div className={home.banner}>
          {/* 轮播图组件 */}
          <Banner arr={this.state.banner} />
          {/* 搜索框 */}
          <div className={home.search}>
            <SearchIndex />
          </div>
        </div>
        {/* 图片区域------------------------ */}
        <div className={home.bg}>
          <div className={home.container}>
            <div className={home.left}>
              <img src={left} alt="" />
            </div>
            <div className={home.right}>
              {" "}
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        {/* ----今日推荐---------------------- */}
        <div className={`${home.tody} ${home.container}`}>
          <h3>今日推荐</h3>
          <div className={home.content}>
             {
              this.state.item.map((ele,index)=>{
                return  <Item key={index}  obj={ele} />
              })
             }
          </div>
        </div>
      </>
    );
  }
}
