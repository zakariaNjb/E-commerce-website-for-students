<?php
    $connexion=mysqli_connect("localhost","root","","e_commerce");
    if($connexion){
        $stmt=mysqli_stmt_init($connexion);
        $sql="SELECT * FROM products ORDER BY type ASC";
        if(mysqli_stmt_prepare($stmt,$sql)){
            mysqli_stmt_execute($stmt);
            $result=mysqli_stmt_get_result($stmt);
            $data=array();
            while($rows=mysqli_fetch_assoc($result)){
                $data[]=$rows;
            }
            echo json_encode($data);
        }else echo "preparing the stmt has failed";
    }else echo "Connection has failed";
?>