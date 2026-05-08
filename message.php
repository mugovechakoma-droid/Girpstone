<?php
  // Use a generic "from" address to avoid spoofing issues
  $from_email = "noreply@girpstonesecurity.com";
  $receiver = "mugovechakoma@gmail.com";

  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $message = trim($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $subject = "Girpstone Security: Message from $name";
      $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nRegards,\nGirpstone Security Command Center";

      // Use Reply-To so the recipient can easily respond to the user
      $headers = "From: $from_email" . "\r\n" .
                 "Reply-To: $email" . "\r\n" .
                 "X-Mailer: PHP/" . phpversion();

      if(mail($receiver, $subject, $body, $headers)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>
