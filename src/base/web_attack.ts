/************** XSS攻击 *************/
/**
 * 代码注入
 * 1、客户端获取页面中或者url里的值，作为参数传给服务端
 * 2、此时，攻击者在值里填写攻击代码，从而完成攻击
 *
 * 如何防范？
 * 1、转义掉特殊符号<>
 * 2、http header中开启content-security-policy: default-src=self，只允许执行本站资源
 */


/************** CSRF攻击 *************/
/**
 * 跨站点请求伪造
 * 如果是get请求，可以通过图片来攻击
 * 1、攻击者制造了一个钓鱼网站
 * 2、钓鱼网站中，有一个图片，图片地址是真实网站的接口
 * 3、当用户进入该钓鱼网站，图片被加载时，就会发起真实网址的接口，从而完成攻击
 *
 * 如果是post请求，可以通过表单提交来攻击
 * 1、钓鱼网站中有一个跟真实网站一样的post表单提交
 * 2、但是钓鱼网站中有一些隐藏的input，里面带了攻击需要的value
 * 3、当用户提交该钓鱼表单后，就会发起真实的post请求，但是附带了攻击信息，从而完成攻击
 *
 * 如何防范？
 * 1、Get请求不对数据进行修改
 * 2、设置same-site，禁止cookie随跨域请求发送
 * 3、验证refer，阻止第三方网站请求接口
 * 4、登录时，服务端返回一个随机生成的token，后续需要附带token，如果token验证不通过，则让用户重新登录。这样尽管攻击者可以伪造请求，但是没有token。
 */
