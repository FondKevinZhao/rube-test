#### BFC

`block formatting context`，块格式化上下文，是web页面的可视化CSS渲染出的一部分。__形成了BFC就形成了一个独立的区域，区域里面的子元素不会影响到外面的元素。__

形成BFC的方法：

* 浮动元素：元素的float不是none的元素。
* 绝对定位的元素：position的值为absolute或fixed。
* 具有overflow并且值不是visible的块元素。
* display为flow-root的值。（CSS3中新增加的。），只是单纯的触发BFC。

上面的1、2、3都可以形成BFC并且加上自己的特性（float形成BFC并且形成了浮动，Position形成BFC并且可以进行定位，overflow形成BFC并且可以隐藏多出来的内容。） 而flow-root只是单纯的触发BFC。

形成BFC之后的应用：

1. 爸爸管儿子，让爸爸能够包裹住儿子。 来爸爸抱抱。

   * 解决float高度塌陷问题。

     ```html
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta charset="utf-8" />
     
         <style>
             #f{
                 width:200px;
                 border:5px solid green;
     
                 /* float:left; */
                 display:flow-root;
             }
             #z{
                 float:left;
                 width:100px;
                 height:100px;
                 border:1px solid blue;
             }
         </style>
     </head>
     
     <body>
         <div id="f">
             <div id="z"></div>
         </div>
     </body>
     
     </html>
     ```

   * 解决父子之间的margin合并问题

     ```html
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta charset="utf-8" />
     
         <style>
             #f{
                 width:200px;
                 margin:10px;
                 border:1px solid green;
                /* display:flow-root; */
                overflow: hidden;
             }
             #z{
                margin:20px;
                 width:100px;
                 height:100px;
                 border:1px solid blue;
             }
         </style>
     </head>
     
     <body>
         <div id="f">
             <div id="z"></div>
         </div>
     </body>
     
     </html>
     ```

2. 解决兄弟之间的float和margin。

   * 兄弟元素之间上下边距折叠问题。

   * > 防止外边距折叠，可以套一个div，然后给新加的div设置 flow-root;
   
     ```html
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta charset="utf-8" />
     
         <style>
             #z1,#z2{
                 margin:20px;
                 width:100px;
                 height:100px;
                 border:1px solid green;
             }
     
             #f > div{
                 display:flow-root;
             }
         </style>
     </head>
     
     <body>
         <div id="f">
             <div>
                 <div id="z1"></div>
             </div>
             <div id="z2"></div>
         </div>
     </body>
     </html>
     ```

  

   * 解决float时块元素重叠，行内元素不重叠。
   
     ```html
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta charset="utf-8" />
     
         <style>
             img{
                 float:left;
             }
             #f > div{
                 border:1px solid green;
                 display:flow-root;
             }
         </style>
     </head>
     
     <body>
         <div id="f">
             <img src="./lipeiqian.jpg" />
             <div>123456789</div>
         </div>
     </body>
       </html>
     ```



​     

#### 水平、垂直居中的总结

1. 内联元素水平居中

   `text-algin:center`只对inline和inline-block有效。对block无效。

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               text-align: center;
           }
       </style>
   </head>
   
   <body>
       <div id="f">
           <img src="./lipeiqian.jpg" />
           <span>华华的baba</span>
           <div style="width:100px;height:100px;border:1px solid green;">hehe</div>
       </div>
   </body>
   
   </html>
   ```

2. 块级元素水平居中。

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
           }
           #f > div{
               margin:0 auto;
           }
       </style>
   </head>
   
   <body>
       <div id="f">
   
           <div style="width:100px;height:100px;border:1px solid green;">hehe</div>
       </div>
   </body>
   
   </html>
   ```

3. `display:flex;justify-content:center`

   块状元素、行内元素、行内块状元素都可以。

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
               display:flex;
               justify-content: center;
           }
           
       </style>
   </head>
   
   <body>
       <div id="f">
           <!-- <img src="./lipeiqian.jpg" /> -->
           <span>小哗哗</span>
           <!-- <div style="width:100px;height:100px;border:1px solid green;">hehe</div> -->
       </div>
   </body>
   
   </html>
   ```

4. 单行内联元素垂直居中

   设置内联元素的高度和行高相等。

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
               height:100px;
               line-height: 100px;
           }
           
       </style>
   </head>
   
   <body>
       <div id="f">
           沛华真丑！（江鉴哲说的！）
       </div>
   </body>
   
   </html>
   ```

5. 多行内联元素垂直居中

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
               width:400px;
               height:500px;
               font-size:0;
               line-height: 500px;
           }
           #f > span{
               border:1px solid green;
               display:inline-block;
               line-height:normal;
               vertical-align: middle;
               font-size:16px;
           }
           
       </style>
   </head>
   
   <body>
       <div id="f">
           <span>沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）</span>
       </div>
   </body>
   
   </html>
   ```

6. `display:table-cell`

   table-cell将元素定义为表格中的一个单元格，对应的HTML元素是th或td。

   在table-cell中使用middle时，单元格中的内容的中线与行的中线对齐。

   > display: table-cell; 会将一个元素显示成单元格，就相当于给加了一个td。
   >
   > ```js
   > <table>
   >  <tr>
   >  	<td></td>
   >  </tr>
   > </table>
   > ```
   >
   >
   > vertical-align: middle 要写在父元素上面。

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
               width:400px;
               height:500px;
               display:table-cell;
               vertical-align: middle;
           }
           #f > span{
               border:1px solid green;
   
           }
           
       </style>
   </head>
   
   <body>
       <div id="f">
           <span>沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）</span>
       </div>
   </body>
   
   </html>
   ```

7. `display:flex;align-items:center`

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
       <meta charset="utf-8" />
   
       <style>
           #f{
               border:1px solid red;
               width:400px;
               height:500px;
               display:flex;
               align-items: center;
           }
           #f > span{
               border:1px solid green;
   
           }
           
       </style>
   </head>
   
   <body>
       <div id="f">
           <span>沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）沛华真丑！（江鉴哲说的！）</span>
       </div>
   
   </body>
   
   </html>
   ```

8. 定位可以实现水平、垂直居中。

   1. 使用margin-left和margin-top来实现。

      ```html
      <!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="utf-8" />
      
          <style>
              #f{
                  border:1px solid red;
                  width:400px;
                  height:500px;
                  position:relative;
              }
              #z{
                  position:absolute;
                  top:50%;
                  left:50%;
                  margin-top:-50px;
                  margin-left:-50px;
                  width:100px;
                  height:100px;
                  border:1px solid green;
              }
          </style>
      </head>
      
      <body>
          <div id="f">
              <div id="z"></div>
          </div>
      </body>
      
      </html>
      ```

   2. 使用`transform:translate(-50%,-50%);`来实现。

      > 当不知道子元素的宽高的时候就用transform。
      
      ```html
      <!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="utf-8" />
      
          <style>
              #f{
                  border:1px solid red;
                  width:400px;
                  height:500px;
                  position:relative;
              }
              #z{
                  position:absolute;
                  top:50%;
                  left:50%;
                  transform:translate(-50%,-50%);
                  width:100px;
                  height:100px;
                  border:1px solid green;
              }
          </style>
      </head>
      
      <body>
          <div id="f">
              <div id="z"></div>
          </div>
      </body>
      
      </html>
      ```

#### 总结

> - 儿子浮动，父亲塌陷，父亲也浮动，高度正常。



