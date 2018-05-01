MyTodoist  ----- 管理代办事项 V0
=
    一、使用技术：
①前端：
<br>React实现前端基本构架
<br>+ Bootstrap + jquery 实现前端样式 
<br>+ axios 实现前后端交互（http交互）
<br><br><br>
②后端：
<br>
Django作为基本框架
<br>+Django Restframework生成Restful风格的API接口
<br><br><br>
③数据库：
<br>使用Django自带数据库sqlite
<br><br><br>

    二、实现功能列表：
 ①增加代办事项
<br> ②删除待办事项
<br> ③修改代办事项
<br> ④展示全部待办事项
<br> ⑤展示当天待办事项
<br> ⑥标记代办事项已完成
<br> ⑦待办事项可设置到期时间
<br> ⑧待办事项可设置优先级(A、S、SSS）
<br> ⑨分类过期代办事项和未过期代办事项

<br>

    三、功能实现截图：
<br>①展示当天待办事项：
<br>
![](https://github.com/mmlinhang/MyTodoist/raw/results/results/1.png)
<br> 其中：左侧为导航栏，可分别查看今日、七天内（未实现）、全部的代办事项；<br>
右侧展示代办事项和一些对代办事项的操作。<br>
<br><br>
②展示全部代办事项：
<br>
!(E:/jiuzhang/2.png)<br>
<br>

③增加一个待办事项：
<br>
![](E:/jiuzhang/3.png)<br>
点击增加按钮后：
<br>
![](E:/jiuzhang/4.png)<br>
<br><br>
④编辑一个待办事项：<br>
![](E:/jiuzhang/5.png)<br>
![](E:/jiuzhang/6.png)<br>
![](E:/jiuzhang/7.png)<br>
编辑成功<br>
<br>
⑤删除一个代表事项：<br>
<br>
![](E:/jiuzhang/8.png)<br>
![](E:/jiuzhang/9.png)<br>
<br>
⑥标记代办事项已完成：<br>
![](E:/jiuzhang/10.png)<br>
![](E:/jiuzhang/11.png)<br>
<br>
⑦设置优先级和到期时间：<br>
![](E:/jiuzhang/12.png)<br>
![](E:/jiuzhang/13.png)<br>
⑧将过期代办事项单独成一项：<br>
![](E:/jiuzhang/14.png)<br>
<br><br><br>
    三、待改进的地方：
<br>
<br>
①在后端写了用户登录注册的API，但是由于axios好像不能存储从后端传来的cookie，导致无法认证，有时间要取解决一些。
②后面有时间可以实现以下展示未来7天的功能。
③排序功能
