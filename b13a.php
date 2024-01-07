<?php 
	header('Content-type:text/html; charset=utf-8');
	if (isset($_POST['final'])) {
		$name = $_POST['name'];
		$tel = $_POST['telephone'];
		$cell = $_POST['cellphone'];
		$addr = $_POST['address'];
		$p_no = $_POST['p_no'];
	}

	$timestamp = time();
	$datetime = date('Y-m-d H:i:s', $timestamp);
	$p_detail = array('雞肉凍 NT$150元','香煎鮭魚 NT$200元');

	$order_data = array(array());
	$count=0;
	for ($i=0; $i<2; $i++){
		if( $p_no[$i] > 0 ){
			$order_data[$count][0] = $datetime;
			$order_data[$count][1] = $name.'/'.$tel.'/'.$cell.'/'.$addr;
			$order_data[$count][2] = $p_detail[$i].'x'.$p_no[$i];
			insert_order_data_into_db($order_data[$count]);
			$count++;
		}
	}

	function insert_order_data_into_db($d){
		$link = @mysql_connect("localhost", "root", "mysql") or die(mysql_error());
		mysql_select_db("posdb");
		$sql="insert into order_data(datetime,customer,detail,state) value('$d[0]','$d[1]','$d[2]','訂單處理中')";
		$result = mysql_query($sql) or die(mysql_error());
		if( $result == TRUE ){
			echo "成功寫入一筆訂單資料進資料庫<br>";
		}
		mysql_close($link);
	}
?>

