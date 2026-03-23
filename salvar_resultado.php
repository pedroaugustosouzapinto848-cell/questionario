<?php
include_once("conexao.php");


$nome_do_cara = $_POST['nome_usuario']; 
$valor_pedro = $_POST['valor_pedro']; 


$sql = "INSERT INTO ranking (nome, porcentagem) VALUES ('$nome_do_cara', '$valor_pedro')";

if ($conn->query($sql) === TRUE) {
    echo "Registro do Pedro salvo com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>