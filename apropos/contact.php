<?php

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  $nom = $request->nom;
  $prenom = $request->prenom;
  $email = $request->email;
  $message = $request->message;

  $erreurs = array();

  if (empty(trim($nom))) {
    $erreurs=array(
        'message' => 'Votre nom ne doit pas être vide'
    );
  }
  if (empty(trim($prenom))) {
      $erreurs = array(
          'message' => 'Votre prenom ne doit pas être vide'
      );
  }
  if (empty(trim($email)) ) {
        $erreurs = array(
            'message' => 'Votre adresse email ne doit pas être vide'
        );
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL) ) {
      $erreurs = array(
       'message' => 'Votre adresse email n\'est pas valide'
   );
  }

$response = array();
  if (count($erreurs) === 0) {
      $to = $email;
      $subject = "Contact albasoft par $prenom $nom";
      $body = "Mr $prenom $nom vous a contacté depuis votre site web albasoft.fr : \n Nom: $nom \n Prenom : $prenom \n Email : $email \n Message : $message";
      $headers = "From: gsuite-noreply@google.com\r\n";
      try {
          mail($to,$subject, $body, $headers);
      }catch (Exception $ex) {
            $response = array("status" => "errors", "message" => array($ex->getMessage()));
      }
      print_r( json_encode($response));
  }
   else {
       $response =  json_encode($erreurs);
       print_r($response) ;
   }
