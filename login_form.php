<?php
require'config.php';
if(isset($_POST["submit"])){
    $usernameemail = $_POST["usernameemail"];
    $password = $_POST["password"];
    $result = mysqli_query($conn, "SELECT * FROM tb_user WHERE username ='$usernameemail' OR email = '$usernameemail'");
    $row = mysqli_fetch_assoc($result);
    if(mysqli_num_rows($result) > 0)
    {
        if($password == $row["password"])
        {
            $_SESSION["login"] = true;
            $_SESSION["id"] = $row["id"];
            header("Location: home.php");
        }
        else
        {
            "<script> alert('Wrong Password'); </script>";
        }
    }
    else{
        echo
        "<script> alert('User not Registered'); </script>";
    }
}
?>



<html>
    <head>
        <title>Login Page</title>
        <link rel="stylesheet" href="loginregister.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </head>
    <body>

        <div class="Login">
            <div class="Left-login">
                <div class="label">
                    <h1>TFT</h1>
                </div>
                <img src="image/logo-.png" >
            </div>

        
            <div class="Right-login">
               
            <h1>login</h1>
                <form method="post">
                    <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
                    
                    <div class="input-box">
                        <input type="text" placeholder="Username or email" id="usernameemail" name="usernameemail" require value="">
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" id="password" name="password" required value="">
                        <i class='bx bxs-lock-alt' ></i>
                    </div>

                    <div class="remember-forgot">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" class="btn" name="submit">Login</button>

                    <div class="register-link">
                        <p>Don't have an account? <a href="register_form.php">Register</a></p>
                    </div>
                </form>

            </div>
           
        </div>

    </body>
</html>