<?php
    $connexion=mysqli_connect("localhost","root","","e_commerce");
    if($connexion){
        $sql="DROP TABLE customer";
        $stmt=mysqli_stmt_init($connexion);
        if(mysqli_stmt_prepare($stmt,$sql)){
            mysqli_stmt_execute($stmt);
        }else echo "there is something wrong with preparing the stat";
    }else echo "Connexion to the Data base has failed";
?>