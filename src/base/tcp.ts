/************** TCP三次握手 *************/
/**
 * 1、客户端发送SYN标识的包给服务端
 * 2、服务端接收到之后，发送一个SYN/ACK的包给客户端
 * 3、客户端接收到之后，再发送一个ACK的包给服务端，完成三次握手
 *
 * 客户端  --- SYN -->  服务端
 * 客户端  <-- SYN/ACK ---  服务端
 * 客户端  --- ACK -->  服务端
 */



/************** TCP四次挥手 *************/
/**
 * 1、主动关闭方发送第一个带FIN标识的包，发送顺序号seq=X
 * 2、被动关闭方收到FIN包后，发送第二个包，发送顺序号seq=Z，接收顺序号ack=X+1
 * 3、被动关闭方再发送第三个带FIN标识的包，发送顺序号seq=Y，接收顺序号ack=X
 * 4、主动关闭放发送第四个包，发送顺序号seq=X，接收顺序号ack=Y，完成挥手
 *
 * 客户端  --- FIN seq=X -->  服务端
 * 客户端  <-- seq=Z ack=X+1 ---  服务端
 * 客户端  <-- FIN seq=Y ack=X ---  服务端
 * 客户端  --- seq=X ack=Y -->  服务端
 */
