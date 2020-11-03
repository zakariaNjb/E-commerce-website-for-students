<!Doctype html>
<html>
<head>
    <title>Your school baG</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../Css/MainPage.css" />
    <link rel="stylesheet" type="text/css" href="../Css/Dashboard.css" />
    <link rel="stylesheet" type="text/css" href="../Css/Store.css" />
    <link rel="stylesheet" type="text/css" href="../Css/Basket.css" />
    <link rel="stylesheet" type="text/css" href="../Css/Admin.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/62e9ec17ac.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
</head>
<?php include_once("../php/DeleteCustomerTable.php");?><!----Deleting the customer old table---->
<body>
    <div id="main">
        <form method="post" action="" id="loginForm">
            <h2>Login</h2>
            <input type="email" name="email" id="loginEmail" placeholder=" Email@gmail.com">
            <input type="password" name="password" id="loginPassword" placeholder=" Password">
            <input type="submit" value="submit" id="submitLogin">
            <h2></h2>
        </form>
        <form method="post" action="" id="signupForm">
            <h2>Sign up</h2>
            <input type="email" name="email" id="signupEmail" placeholder=" Email@gmail.com">
            <input type="password" name="password1" id="signupPassword1" placeholder=" Password">
            <input type="password" name="password2" id="signupPassword2" placeholder=" Rewrite your Password">
            <input type="submit" value="Submit" id="submitSignup">
            <button id="updateUser">Update</button>
            <h2></h2>
        </form>
        <form method="post" action="" id="adminForm">
            <h2>Admin</h2>
            <input type="email" name="email" id="adminEmail" placeholder=" Email@gmail.com">
            <input type="password" name="password1" id="adminPassword1" placeholder=" Password">
            <input type="password" name="password2" id="adminPassword2" placeholder=" Rewrite your Password">
            <input type="submit" value="submit" id="submitAdmin">
            <button id="UpdateAdmin">Update</button>
            <h2></h2>
        </form>
        <!----------------Payment form -------------------->
        <form method="post" action="" id="PAYMENTFORM">
            <h2>Card Details</h2>
            <input type="text" name="cardNumber" placeholder=" Insert your Card number">
            <input type="text" name="cardExperation" placeholder=" Day/Month/Year ( Expary Date )">
            <input type="text" name="adress" placeholder=" Write your adress">
            <button id="PAYNOW">Checkout</button>
            <h2></h2>
        </form>
        <form method="post" action="" id="InsertProduct" enctype='multipart/form-data'>
            <h2>New Product</h2>
            <input type="text" name="productType" id="productType" placeholder=" Product type">
            <input type="text" name="quantity" id="quantity" placeholder=" Quantity">
            <input type="text" name="id" id="id" placeholder=" ID">
            <input type="text" name="price" id="price" placeholder=" Price">
            <textarea placeholder="Product's description" name="desc"></textarea>
            <input type="file" name="pict[]" id="file" style="color: snow;" accept="image/*">
            <input type="submit" value="Upload" id="InsertPictSubmit">
            <span><div id="progressBar">0%</div></span>
            <h2></h2>
        </form>
        <?php
            include_once("Dashboard.php");
            include_once("Store.php");
            include_once("Admin.php");
            include_once("Basket.php");
        ?>
    </div>
    <script src="../Js/MainPage.js" type="module"></script>
    <script src="../Js/Admin.js" type="module"></script>
    <script src="../Js/Store.js" type="module"></script>
    <script src="../Js/Basket.js" type="module"></script>
</body>
</html>
