# HTML

## HTML相关
```
1.Html就是超文本标记语言，是最基础的网页语言。
2.Html是通过标签来定义的语言代码都是由标签所组成的。
3.Html代码不区分大小写；
4.Html代码由<html>开始</html>结束。里面由头部分<head></head>,和体部分<body></body>两部分组成。
5.头部分是给HTML页面增加一些辅助或者属性信息的，它里面的内容会最先加载。
6.体部分是真正存放页面数据的地方。
```
- 多数标签都是有开始标签和结束标签的，其中个别标签因为只有单一功能，或者没有要修饰的内容可以在标签内结束。
- 单标签结束的有

`<input />`  //表单元素标签<br />
`<br /> ` //换行<br />
`<hr />`  //水平线<br />
`<img />`  //图片<br />
`<option /> ` //下拉菜单项<br />


`<meta />`  //<br />
`<link />`  //

- 想要对标签中的内容进行更丰富的操作，就用到了标签中的属性，通过对属性值的改变，增加了更多的效果选择。
- 属性与属性值之间用"="连接，属性值可以用单引，双引号或者不用引号，一般都会用双引号，或者公司规定书写规范。
- 格式：<标签名 属性名="属性值">数据内容</标签名>     
<标签名 属性名="属性值"/>
- 操作思想：
为了操作数据都需要对数据进行不同标签的封装，通过标签中的属性对封装的数据进行操作，标签就相当于一个容器，对容器内的数据进行操作，就是在不断的改变容器的属性值。

## 常用的标签使用

#### 字体
```
1.字体标签：<font>
eg:<font size=5 color=red>字体标签示例</font>
注：简单颜色可以直接写对应的英文，复杂的颜色用16进制表示，表示形式为#FF0c00两个数为一组，按红 绿 蓝排列，如:#00FF00表示为绿色，也可以直接吸取颜色，
2.标题标签：<h1><h2>....<h6>
因为标题是文本中常用的内容，为了方便操作而定义的，其实就是某个字号和粗体的组合。
3.特殊字符
如果要在网页上现实一些特殊符号，比如 < > &等，因为这些符号在代码中会被浏览器识别并解释，所以用一些特殊的方式来表示。
```
```
&lt;	<	小于号或显示标记
&gt;	>	大于号或显示标记
&amp;	&	可用于显示其它特殊字符
&quot;	"	引号
&reg;	®	已注册
&copy;	©	版权
&trade;	™	商标
&ensp;	 	半个空白位
&emsp;	 	一个空白位
&nbsp;	 	不断行的空白
```
#### 列表标签
- `<dl>`定义列表的；`<dt>`上层目录；`<dd>`下层目录；
```
<dl>
  <dt>游戏名称</dt>
    <dd>星级争霸</dd>
    <dd>红色警戒</dd>
  <dt>游戏名称</dt>
    <dd>星级争霸</dd>
    <dd>红色警戒</dd>
</dl>
```
- `<ol>`定义有序列表（数字标签）（a A 1 i I）；`<li>`行；（type属性可以改变ol的属性type="i"start="3"从3开始）
```
<ol>
  <li>数学名词吗</li>
  <li>恶魔的科目的</li>
  <li>的成交单价从文登</li>
  <li>传递出</li>
</ol>
```
- `<ul>`定义无序列表（符号标签）(黑心圈 白心圈 方块)；`<li>`行；（type换样式）
定义ul样式
这几种方法都是通过设置list-style:none来设置的，有的是会用list-style-type，下面我们来看一看它的属性.  
none不使用项目符号  
disc实心圆，默认值  
circle空心圆  
square实心方块  
decimal阿拉伯数字  
lower-roman小写罗马数字  
upper-roman大写罗马数字  
lower-alpha小写英文字母  
upper-alpha大写英文字母  
```
<ul>
  <li>ejne</li>
  <li>fvcjid</li>
  <li>ncj</li>
  <li>fjvifj</li>
</ul>
```
#### 图片标签
- `<img />`src="路径" alt="图片说明文字"
#### 表格标签
- `<table>`定义表格；`<tr>`定义行；`<td>``<th>`定义单元格；`<caption>`表格标题；

1.table标记的常用属性


```
- border	表格边框宽度
- width	整个表格的宽度
- height	整个表格的高度(在XHTML里，table标记没有这个属性)
- background	表格背景图象
- align	整个表格的对齐方式，,主要有三个值left center right 分别表示左、中、右三种对齐方式
- bgcolor	整个表格的背景颜色
- bordercolor	表格边框颜色
- **cellspacing	表格格间线宽度**
- rules	表格内部分隔线属性,它有三个值(cols,rows,none)，当rules=cols时，表格会隐藏横向的分隔线，也就是我们只能看到表格的列；当 rules=rows时，就隐藏了纵向的分隔线，也就是我们只能看到表格的行；而当rules=none时，纵向分隔线和横向分隔线将全部隐藏，我们就只能看到一个表格的外框了。
- frame	表格外部分隔线属性,只对表格的外边框起作用，对内部边、线不起作用 只显示上边框 above, 只显示下边框 below, 只显示左、右边框 vsides, 只显示上、下边框 hsides, 只显示左边框 lhs, 只显示右边框 rhs, 不显示任何边框 void
- **cellpadding	表格内容与格线之间的宽度(表格的内边距)**
```
2.tr标记的常用属性

```
- bgcolor	内容行的背景颜色
- border	内容行的边框宽度
- background	内容行的背景图象
- align	整行内容的水平对齐方式,主要有三个值left center right 分别表示左、中、右三种对齐方式
valign	整行内容的垂直对齐方式，主要有三个- 值top middle bottom 分别表示上、中、下三种对齐方式
- bordercolor	内容行的边框颜色
```
3.td标记和th标记的常用属性(th可以作为表头标签)

```
- width	单元格的宽度
- height	单元格的高度(在XHTML里，td标记和th标记没有这个属性)
- bgcolor	单元格的背景颜色
- border	单元格的边框宽度
- background	单元格的背景图象
- align	单元格内容的水平对齐方式，主要有三个值left center right 分别表示左、中、右三种对齐方式
- valign	单元格内容的垂直对齐方式，主要有三个值top middle bottom 分别表示上、中、下三种对齐方式
- valign	单元格内容的垂直对齐方式
- **colspan	单元格横向跨越所占的格数**
- **rowspan	单元格纵向跨越所占的格数数**
```
#### 超链接
两种用法
- 超链接<a href="" ></a>
eg:<a href="http://www.baidu.com" target="`_`blank" >百度</a>
注：href属性值可以是url，也可以是本地文件；target指定在那个窗口或者是帧中打开；
- href的值也可以<a href="mailto:abc@sohn.com?subject=haha&&cc=kk@sina.com">联系我们</a>
<a href="thunder://sjdwjdwqp"></a>
- 定位标记
<a name=""></a>
一般在本页面中使用，当网页页面太长时，定位标记要比拖动滚动条方便，快捷。
注：定位标记要和超链接一起使用才有效；
eg:
<a name="标记">标记位置</a>
<p.......>制作网页过长的效果
<a href="#标记">返回标记位置</a>
注：使用定位标记时，一定在href值的开始加入#标记名

#### 表单
###### 表单的基本语法
- `<form action`="表单提交的地址" method="提交的方法"`></form>`
注：action属性表示向何处发送数据，默认为当前页面；method属性规定了提交的方式（get或者post）
- `<input name="表单元素的名称"type="类型"value="值"size="显示的宽度maxlength="能输入的最大字节数"checked="是否被选中/>"`input元素的属性
- type:text;password;checkbox;radio;submit;reset;
- file:hidden;image;button.默认为text;
- checked只有一个值就是checked；如果不选中就不写该属性。
###### 文本框和按钮
```
<form action=""method="post">
<p>用户名<input type="text" size="21" name="usename"/></p>
<p>密&nbsp&nbsp&nbsp码<input type="password" size="22" name="password"/></p>
<p><input type="reset" value="重置"/><input type="submit" value="同意以下服务条款"/> </p>
<p><input type="button" value="点播音乐"/><input type="reset" value="取消"/> </p>
</form>
```
注：type属性是必选的，name相同表示同一组，size为可选最好写，但按钮的value必选；
-----
###### 表单标签
表单标签是最常用的标签，用于与服务器端的交互，
<input />:输入标签，接收用户输入信息。其中type属性指定输入标签的类型。
1.文本框：text，输入的文本信息直接显示在框中，
2.密码框：password,输入的文本以原点或者星号的形式显示，
3.单选框：radio,如性别选择
4.复选框，checkbox,如兴趣爱好等
5.隐藏字段，hidden,在页面上不显示，但在提交的时候随其它字段一起提交
eg：
```
<input type="hidden"name="id"value="123"/>
```
6.提交按钮：submit,用于提交表单的内容
7.重置按钮：reset,将表单中所填的内容设置为初始值
8.按钮：button,可以为其自定义事件
9.上传文件：file,可以浏览文件所在的位置。
10.图片链接：img src,也有提交的效果，
11.多行文本框：textarea,如个人信息描述；
** name名相同的为同一组<br/>服务器获取前段的值input表单里要有name和value的值(文本框可以不定义value)**

-----
`<select>`:选择标签，提供用户选择内容，如用户所在的省市,`size`属性为显示项目个数.
`<option/>`:子标签，属性selected没有属性值，加在子项上，其中一个子项上，子项就变成默认被选中。
```
<select name="country">
  <option value="none">--选择国家--</option>
  <option value="cn">中国</option>
  <option value="en">英国</option>
<select/>
```

`<textarea/>`:多行文本框，如：个人信息描述，
`cols``rows`两个属性；

----
`<label>`:用于给元素定义快捷键
- `for`属性：指定快捷键作用的表单元素，必须与要作用的表单元素的id值相同，
- `accesskey`属性：指定快捷键，此快捷键需要和alt键组合使用，
```
<label for="user"accesskey="u">用户名</label>
<input type="text"id="user"/>
```
-----
表单提交
- 先定义form表单中的action属性值（网络地址），指定表单数据提交的目的地（服务端）
------
get和post的区别
```
1.get数据显示在地址栏中，敏感信息不安全；post提交不显示在地址栏中，敏感信息相对安全；
2.地址栏中存放的数据是有限的，所以get数据对数据体积有限制，大数据提交只能用post;
3.提交数据的封装方法不同
- get:将提交的数据封装到消息之前，请求行中；
- post:将提交的数据封装到消息头后的空行后，数据体中；
对于服务器而言，表单提交尽量用post，因为涉及到编码问题，因为tomcat服务端默认的解码是ISO 8859-1
对于Post提交的中文在服务端苦役直接使用setCharacterEncoding("gbk")就可以解决；
