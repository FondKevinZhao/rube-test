import React, { Component } from "react";
import { Input ,Tabs,DatePicker, Space} from "antd";
import search from './search.module.less'
//网络请求
import api from '../../../api/index'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
const { RangePicker } = DatePicker;

export default class SearchIndex extends Component {
  constructor(){
    super()
    this.state={
      isShow:false,//下拉搜索区域
      list:[],//存储搜索的数据
    }
  }
  //过期日期
  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };
  //搜索
  onSearch = (value) => {
    console.log(value);
  };
  //搜索事件
  changeInp=(e)=>{
    console.log(e.target.value);
    if(e.target.value==''){
      this.setState({
        isShow:false,
        list:[]
       })
       return;
    }
    //获取数据后---请求后端接口---查询操作 
    api.getSearch({keyword:e.target.value})
    .then(res=>{
      console.log(res.data.data);
      //获取的结果 res.data.data.list数组里面 么有数据显示list=[]   有数据list=[{},{}]
      if(res.data.data.list.length>0){
         this.setState({
          isShow:true,
          list:res.data.data.list
         })
      }else{
        this.setState({
          isShow:false,
          list:[]
         })
      }
    })

  /*   
  axios.get(`/api/qcross/place/public.php?action=placesearch&keyword=${e.target.value}&client=web`)
    .then(res=>{
      console.log(res.data.data);
      //获取的结果 res.data.data.list数组里面 么有数据显示list=[]   有数据list=[{},{}]
      if(res.data.data.list.length>0){
         this.setState({
          isShow:true,
          list:res.data.data.list
         })
      }else{
        this.setState({
          isShow:false,
          list:[]
         })
      }
    }) 
    
    */
  }
  //选择时间
  changeTime=(date, dateString)=>{
    console.log(date,dateString);
  } 
  render() {
    return (
      <>
        <div className={`${search.main} ${search.wrapper}`} >
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="看攻略" key="1">
              <Input placeholder="搜索" onChange={this.changeInp} />
              {/* 下拉搜索区域  */}
              {
                this.state.isShow? <ul className={search.list}>
                  {
                    this.state.list.map(ele=>{
                      return <li key={ele.id}>{ele.name}</li>
                    })
                  }
              </ul>:''
              }
             
            </Tabs.TabPane>
            <Tabs.TabPane tab="特价酒店" key="2">
              <Space direction="vertical" size={16}>
                <RangePicker disabledDate={this.disabledDate}  locale={locale} onChange={this.changeTime} />
              </Space>
            </Tabs.TabPane>
          </Tabs>
         
        </div>
      </>
    );
  }
}
