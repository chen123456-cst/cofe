<?php
// 连接数据库
$conn=mysqli_connect("127.0.0.1","root","","news",3306);
// 字符编码
mysqli_query($conn,"SET NAMES UTF8");
// 查询数据
$sql="SELECT COUNT(*) FROM cofe";
$rs=mysqli_query($conn,$sql);
$count=null;
//  记录有多少条
 while($row=mysqli_fetch_row($rs)){
  $count=$row[0];
 }
  $count-=3;
// 获取倒数5条记录
$sql="SELECT * FROM cofe LIMIT $count,3";
$rs=mysqli_query($conn,$sql);
$arr=[];
while($row=mysqli_fetch_row($rs)){
  array_push($arr,$row);
 }
 echo json_encode($arr);
?>