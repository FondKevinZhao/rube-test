import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };
  // 发送请求
  componentDidMount() {
    // 在发送请求之前，改为loading状态
    this.setState({
      isLoading: true,
    });

    // axios
    //   .get("https://api.github.com/search/repositories123?q=r&sort=stars")
    //   .then((res) => {
    //     /*
    //       {
    //         config: 请求的配置对象
    //         data: 响应数据
    //         headers: 响应头
    //         request: xhr对象
    //         status: 响应状态码
    //           1xx: 代表请求还未完成，还需要进一步处理
    //           2xx: 代表响应成功 200
    //           3xx: 代表重定向（请求资源这里没有，要去其他地方找）
    //             301 代表永久重定向
    //             302 代表临时重定向
    //             304 代表重定向到浏览器缓存中
    //           4xx: 代表客户端错误
    //             401 未授权
    //             403 禁止访问
    //             404 资源找不到
    //           5xx: 代表服务器错误
    //             500
    //         statusText: 响应文本
    //       }
    //     */
    //     const { name, html_url } = res.data.items[0];

    //     // 更新state
    //     this.setState({
    //       isLoading: false,
    //       repo: {
    //         name,
    //         html_url,
    //       },
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("网络出现故障~");
    //     this.setState({
    //       isLoading: false,
    //     });
    //   });

    axios({
      method: "GET",
      url: "https://api.github.com/search/repositories?q=r&sort=stars",
    })
      .then((res) => {
        /*
          {
            config: 请求的配置对象
            data: 响应数据
            headers: 响应头
            request: xhr对象  
            status: 响应状态码
              1xx: 代表请求还未完成，还需要进一步处理
              2xx: 代表响应成功 200
              3xx: 代表重定向（请求资源这里没有，要去其他地方找）
                301 代表永久重定向
                302 代表临时重定向
                304 代表重定向到浏览器缓存中
              4xx: 代表客户端错误
                401 未授权
                403 禁止访问
                404 资源找不到
              5xx: 代表服务器错误
                500 
            statusText: 响应文本
          }
        */
        const { name, html_url } = res.data.items[0];

        // 更新state
        this.setState({
          isLoading: false,
          repo: {
            name,
            html_url,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        alert("网络出现故障~");
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, repo } = this.state;

    if (isLoading) {
      return <h1>loading...</h1>;
    }

    return (
      <h1>
        most star repo is <a href={repo.html_url}>{repo.name}</a>
      </h1>
    );

    // return (
    //   <div>
    //     <h1 style={{ display: isLoading ? "block" : "none" }}>loading...</h1>
    //     <h1 style={{ display: !isLoading ? "block" : "none" }}>
    //       most star repo is xxx
    //     </h1>
    //   </div>
    // );
  }
}
