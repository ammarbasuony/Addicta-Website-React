<?php 
header('Access-Control-Allow-Origin: *');  

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include 'auto_load.php';

// Errors Array
$errors = array();

// Fetch Data From Request 
$name          = filter_var($_REQUEST['full-name'], FILTER_SANITIZE_STRING);
$mail          = filter_var($_REQUEST['email'], FILTER_SANITIZE_EMAIL);
$mobile        = filter_var($_REQUEST['mobile'], FILTER_SANITIZE_STRING);
$job           = filter_var($_REQUEST['job-title'], FILTER_SANITIZE_STRING);
$projectType   = filter_var($_REQUEST['project-type'], FILTER_SANITIZE_STRING);
$projectBudget = filter_var($_REQUEST['project-budget'], FILTER_SANITIZE_STRING);
$message       = filter_var($_REQUEST['message'], FILTER_SANITIZE_STRING);

// Message Body (HTML)
$body = '<html><head>
            <style>
                body {
                background-color: #f9f9f9;
                }
                .mail-box {
                border: 1px solid #dddddd;
                background-color: #fff;
                padding: 40px 60px;
                }
                .mail-box img {
                margin-bottom: 20px;
                width: 207px;
                }
                .mail-box h2 {
                color: #454545;
                font-size: 20px;
                margin-top: 15px;
                }
                .mail-box table {
                margin-top: 20px;
                border-collapse: collapse;
                }
                .mail-box table thead th {
                    background-color: #6e18e9;
                    color: #fff;
                    padding: 8px 12px;
                    border: 1px solid transparent;
                }
                .mail-box table td {
                    padding: 8px 12px;
                    border: 1px solid #ccc;
                }
                .mail-box table tr:nth-of-type(odd) {
                    background-color: #f9f9f9;
                }
            </style>
        </head><body>
        <div class="mail-box">
            <img src="https://www.addictaco.com/logo.png" alt="">

            <h2>Mail From Website</h2>
            <table>
            <thead>
                <th style="border-right-color: #fff;">Name</th>
                <th>'.$name.'</th>
            </thead>
            <tbody>';
$body .= "<tr><td>Email</td><td>" . $mail . "</td></tr>"
. "<tr><td>Job Title</td><td>" . $job . "</td></tr>"
. "<tr><td>Mobile</td><td>" . $mobile . "</td></tr>"
. "<tr><td>Project Type</td><td>" . $projectType . "</td></tr>"
. "<tr><td>Project Budget</td><td>" . $projectBudget . "</td></tr>"
. "<tr><td>Message</td><td>" . $message . "</td></tr>";
$body .= '</tbody></table></div></body></html>';

// Message Body (Plain Text)
$altBody = "Name: $name". 
           "\nEmail: $mail".
           "\nJob Title: $job".
           "\nMobile: $mobile".
           "\nProject Type: $projectType".
           "\nProject Budget: $projectBudget".
           "\nMessage: $message";

// Validate
if (empty($name) || empty($mail) || empty($mobile) || empty($message)) {
    $errors[] = '<div class="alert wrong">Please Fill Required Fields</div>';
}

// Send !
if (empty($errors)) {

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'addictaco.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@addictaco.com';
    $mail->Password   = 'addictaco1234';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    
    //Recipients
    $mail->setFrom('contact@addictaco.com', 'Addicta');
    $mail->addAddress('maher@addicta.co');

    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);                                  
    $mail->Subject = 'Message From Addicta Website';
    $mail->Body    = $body;
    $mail->AltBody = $altBody;    

    // Send The Mail
    if ($mail->send()) {
        echo 'Message has been sent successfully';
    } else {
        echo 'Message Not Sent';
    }
}