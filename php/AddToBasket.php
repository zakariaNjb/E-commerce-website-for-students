<?php
    if(isset($_POST["id"]) && isset($_POST["stock"]) && isset($_POST["price"]) && isset($_POST["src"]) && isset($_POST["description"])){
        $connexion=mysqli_connect("localhost","root","","e_commerce");
        if($connexion){
            $quantiti=mysqli_real_escape_string($connexion,$_POST["stock"]);
            $id=mysqli_real_escape_string($connexion,$_POST["id"]);
            $desc=mysqli_real_escape_string($connexion,$_POST["description"]);
            $price=mysqli_real_escape_string($connexion,$_POST["price"]);
            $dir=mysqli_real_escape_string($connexion,$_POST["src"]);
            $stmt=mysqli_stmt_init($connexion);
            $sql="INSERT INTO customer(id,quantity,description,dirImg,price) value(?,?,?,?,?);";
            if(mysqli_stmt_prepare($stmt,$sql)){
                mysqli_stmt_bind_param($stmt,"sissi",$id,$quantiti,$desc,$dir,$price);
                if(mysqli_stmt_execute($stmt)){
                    echo "success";
                }else echo "failed";
            }else echo "stmt_prepare has failed";
        }
    }
?>