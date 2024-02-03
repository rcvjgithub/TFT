+<?php
require'config.php';
if(isset($_POST["submit"])){
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirmpassword"];
    $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username' OR email = '$email'");
    if(mysqli_num_rows($duplicate) > 0)
    {
        echo
        "<script> alert('Username Has Already Taken'); </script>";
    }
    else
    {
        if($password == $confirmpassword){
            $query = "INSERT INTO tb_user VALUES('','name','$username','$email','$password')";
            mysqli_query($conn,$query);
            echo
            "<script> alert('Registration Successful'); </script>";
        }
        else{
            echo
            "<script> alert('Password Does Not Match'); </script>";
        }
    }
}
?>

<html>
    <head>
        <title>Register page</title>
        <link rel="stylesheet" href="loginregister.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <body>

        <div class="Register">
            <div class="Left-Register">
                <div class="label">
                    <h1>TFT</h1>
                </div>
                <img src="image/logo-.png" >
            </div>

        
            <div class="Right-Register">
                <h1>Register</h1>
                <form  action="" method="post" autocomplete="off">
                    <div class="input-box">
                        <input type="text" placeholder="Username" name="username"  required value="">
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="email" placeholder="Email" name="email" required value="">
                        <i class='bx bxs-envelope'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" name="password"  required value="">
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Confirm password" name="confirmpassword"  required value="">
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    
                    <button type="submit" name="submit" class="btn">Register</button>

                    </form>    

                <div class="register-link">
                    <p>Already have an account? <a href="login_form.php">Login</a></p>
                </div>
            </div>
        </div>

    </body>
</html>