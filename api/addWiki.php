<?
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('safemysql/mysql.class.php');

$return = [];

$connect = [
	'host'      => 'localhost',				// хост
	'user'      => 'root',				// пользователь
	'pass'      => '',			// пароль
	'db'      	=> 'wiki',			// база данных
	'pconnect'  => FALSE,				//
	'errmode'   => 'exception',			// режим вывода ошибок
	'exception' => 'Exception',			// количество выводимых ошибок (режим)
];


$db = new SafeMySQL($connect);

$arrWiki = json_decode(file_get_contents('php://input'), true);

$db->query("insert into wiki set ?u", $arrWiki);
$id = $db->insertId();

if($id){
    $return['success'] = true;
    $return['response'] = $id;
}

echo json_encode($return);

file_put_contents("log_wf.txt", '<pre>'.$arrWiki.'</pre>', FILE_APPEND);                                                              
?>