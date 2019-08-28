<?php
$num=$_GET["num"];
$num=4-$num;
$conn=mysqli_connect("127.0.0.1","root","","news",3306);
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT * FROM newscenter LIMIT $num,1";
$rs=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($rs);
echo($row);
?>