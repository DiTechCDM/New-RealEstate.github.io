<?php
$Alert="";
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['mobile']) && isset($_POST['message'])) {
    $name=($_POST['name']);
    $email=($_POST['email']);
    $mobile=($_POST['mobile']);
    $message=($_POST['message']);
    
    $Alert="Message Sent Successfully..";
    
    $html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email-Id</td><td>$email</td></tr><tr><td>Contact-Number</td><td>$mobile</td></tr><tr><td>Message</td><td>$message</td></tr></table>";
    
    include('./smtp/PHPMailerAutoload.php');
    // include_once "./PHPMailer/PHPMailer.php";
    // include_once "./PHPMailer/Exception.php";
    $mail=new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host="smtp.gmail.com";
    $mail->Port=587;
    $mail->SMTPSecure="tls";
    $mail->SMTPAuth=true;
    $mail->Username="ashish.y@ditechcdm.com";
    $mail->Password="DITECHcdm@123";
    $mail->SetFrom("ashish.y@ditechcdm.com");
    $mail->addAddress("ashish.y@ditechcdm.com");
    $mail->IsHTML(true);
    $mail->Subject="CONTACT US FORM";
    $mail->Body=$html;
    $mail->SMTPOptions=array('ssl'=>array(
        'verify_peer'=>false,
        'verify_peer_name'=>false,
        'allow_self_signed'=>false
    ));
    if ($mail->send()) {
        // window.location("https://www.amardeepsteel.com/steel-pipe-manufacturer/Thank-you.html");
        // alert("Hello");
    } else {
        //echo "Error occur";
    }
    echo $Alert;
}
?>

