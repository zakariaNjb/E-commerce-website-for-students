<?php
    if(isset($_POST["productType"]) && isset($_POST["quantity"]) && isset($_POST["id"]) && isset($_POST["desc"]) && isset($_POST["price"])){
        $connexion=mysqli_connect("localhost","root","","e_commerce");
        if($connexion){
            $type=mysqli_real_escape_string($connexion,$_POST["productType"]);
            $quantiti=mysqli_real_escape_string($connexion,$_POST["quantity"]);
            $id=mysqli_real_escape_string($connexion,$_POST["id"]);
            $desc=mysqli_real_escape_string($connexion,$_POST["desc"]);
            $price=mysqli_real_escape_string($connexion,$_POST["price"]);
            $name=$_FILES["pict"]["name"][0];
            $dir="../web/$name";
            if(move_uploaded_file($_FILES["pict"]["tmp_name"][0],$dir)){
                $stmt=mysqli_stmt_init($connexion);
                $sql="INSERT INTO products(id,type,quantity,description,dirImg,price) value(?,?,?,?,?,?);";
                if(mysqli_stmt_prepare($stmt,$sql)){
                    mysqli_stmt_bind_param($stmt,"ssissi",$id,$type,$quantiti,$desc,$dir,$price);
                    if(mysqli_stmt_execute($stmt)){
                        echo "success";
                    }else echo "failed";
                }else echo "stmt_prepare has failed";
            }else echo "moving uploaded file has failed";
        }
    }
?>