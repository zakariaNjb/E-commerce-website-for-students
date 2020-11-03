<?php
    $connexion=mysqli_connect("localhost","root","","e_commerce");
    if($connexion){
        $id=mysqli_real_escape_string($connexion,$_POST["id"]);
        $sql="SELECT * FROM products WHERE id=?;";
        $stmt=mysqli_stmt_init($connexion);
        if(mysqli_stmt_prepare($stmt,$sql)){
            mysqli_stmt_bind_param($stmt,"s",$id);
            mysqli_stmt_execute($stmt);
            $result=mysqli_stmt_get_result($stmt);
            $data=array();
            while($arr=mysqli_fetch_assoc($result)){
                $data[]=$arr;
            }
            echo json_encode($data);
        }else echo "there is something wrong with preparing the stat";
    }else echo "Connexion to the Data base has failed";
?>