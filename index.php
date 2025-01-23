<?php
// Configuration
$to = "thomas.desdeserts@gmail.com"; // Your email address
$subject = "Nouveau message de votre portfolio";

// Check form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Tous les champs sont obligatoires']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Adresse email invalide']);
        exit;
    }

    // Prepare email content
    $email_content = "Nouveau message de votre portfolio:\n\n";
    $email_content .= "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Échec de l\'envoi du message']);
    }
    exit;
}
?>