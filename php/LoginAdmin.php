<?php 
    if(isset($_POST["email"]) && isset($_POST["password1"])){
        $connexion=mysqli_connect("localhost","root","","e_commerce");
        if($connexion){
            $email=mysqli_real_escape_string($connexion,$_POST["email"]);
            $password=mysqli_real_escape_string($connexion,$_POST["password1"]);
            $query="SELECT * FROM admin WHERE email=?;";
            $stmt=mysqli_stmt_init($connexion);
            if(mysqli_stmt_prepare($stmt,$query)){
                mysqli_stmt_bind_param($stmt,"s",$email);
                mysqli_stmt_execute($stmt);
                $result=mysqli_stmt_get_result($stmt);
                while($arr=mysqli_fetch_assoc($result)){
                    if(password_verify($password,$arr["password"])) echo "exist";
                }
            }else echo "stmt prepare function has failed!!";
        }else echo "connection failed!!";
    }
?>