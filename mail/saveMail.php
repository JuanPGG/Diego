<?php
class SaveMail{

	protected $user = 'root';
	protected $pass = '';
	private $pdo;

	public function __construct($nombre, $email, $telefono, $mensaje, $fecha){
		$this->pdo = new PDO('mysql:host=localhost;dbname=energia8_advisorup', "energia8_advisorup", "as#dkaQas");
		$this->saveData($nombre, $email, $telefono, $mensaje, $fecha);
	}


	private function saveData($nombre, $email, $telefono, $mensaje, $fecha){
		$sql = "INSERT INTO mail (nombre, email, telefono, mensaje, fecha) VALUES (?,?,?,?,?)";
		$stmt= $this->pdo->prepare($sql);
		$stmt->execute([$nombre, $email, $telefono, $mensaje, $fecha]);
	}
}
