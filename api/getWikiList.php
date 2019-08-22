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
$wikiList = $db->getAll('SELECT * FROM wiki');

echo json_encode($wikiList);
?>