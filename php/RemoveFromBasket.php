<?php
    if(isset($_POST["id"])){
        $connexion=mysqli_connect("localhost","root","","e_commerce");
        if($connexion){
            $id=mysqli_real_escape_string($connexion,$_POST["id"]);
            $stmt=mysqli_stmt_init($connexion);
            $sql="SELECT * FROM customer where id=?";
            if(mysqli_stmt_prepare($stmt,$sql)){
                mysqli_stmt_bind_param($stmt,"s",$id);
                if(mysqli_stmt_execute($stmt)){
                    $result=mysqli_stmt_get_result($stmt);
                    if($data=mysqli_fetch_assoc($result)){
                        $sql="DELETE FROM customer WHERE id=?;";
                        if(mysqli_stmt_prepare($stmt,$sql)){
                            mysqli_stmt_bind_param($stmt,"s",$id);
                            if(mysqli_stmt_execute($stmt)){
                                echo "success";
                            }else echo "failed";
                        }else echo "stmt_prepare has failed";
                    }else echo "product does not exist";
                }else echo "failed";
            }else echo "stmt_prepare has failed"; 
        }
    }
?>