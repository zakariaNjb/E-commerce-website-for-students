<?php
    if(isset($_POST["id"])){
        $connexion=mysqli_connect("localhost","root","","e_commerce");
        if($connexion){
            $id=mysqli_real_escape_string($connexion,$_POST["id"]);
            $stmt=mysqli_stmt_init($connexion);
            $sql="DELETE FROM products where id=?";
            if(mysqli_stmt_prepare($stmt,$sql)){
                mysqli_stmt_bind_param($stmt,"s",$id);
                if(mysqli_stmt_execute($stmt)){
                    echo "success";
                }else echo "failed";
            }else echo "stmt_prepare has failed"; 
        }
    }
?>