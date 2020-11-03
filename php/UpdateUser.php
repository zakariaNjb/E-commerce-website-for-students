<?php
if(isset($_POST["password1"]) && isset($_POST["email"])){
    $connexion=mysqli_connect("localhost","root","","e_commerce");
    if($connexion){
        $email=mysqli_real_escape_string($connexion,$_POST["email"]);
        $password=mysqli_real_escape_string($connexion,$_POST["password1"]);
        $query="UPDATE users SET password=? WHERE email=?";
        $stmt=mysqli_stmt_init($connexion);
        if(mysqli_stmt_prepare($stmt,$query)){
            $pass=password_hash($password,PASSWORD_DEFAULT);
            mysqli_stmt_bind_param($stmt,"ss",$pass,$email);
            if(mysqli_stmt_execute($stmt)){
                echo "updated";
            }else echo "failed";
        }else echo "stmt prepare function has failed!!";
    }else echo "connection failed!!";
}
?>