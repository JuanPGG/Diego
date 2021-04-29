<?php
Class SaveMail{

	protected $user = 'root';
	protected $pass = '';

	public function __construct($nombre, $email, $telefono, $mensaje, $fecha){
		try {
		    $mbd = new PDO('mysql:host=localhost;dbname=advisorup', $user, $pass);
		    saveData($nombre, $email, $telefono, $mensaje, $fecha);
		} catch (PDOException $e) {
		    die();
		}
	}


	public function saveData($nombre, $email, $telefono, $mensaje, $fecha){
		$sql = "INSERT INTO mail (nombre, email, telefono, mensaje, fecha) VALUES (?,?,?,?,?)";
		$stmt= $pdo->prepare($sql);
		$stmt->execute([$nombre, $email, $telefono, $mensaje, $fecha]);
	}
}
?>