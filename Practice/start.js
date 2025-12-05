// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
   e.preventDefault();
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (username && password) {
       alert('Registration successful!');
       // Implement actual registration logic here
   } else {
       alert('Please fill in all fields');
   }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
   e.preventDefault();
   const username = document.getElementById('loginUsername').value;
   const password = document.getElementById('loginPassword').value;

   if (username && password) {
       alert('Login successful!');
       // Implement actual login logic here
   } else {
       alert('Please fill in all fields');
   }
});

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
   e.preventDefault();
   const sessionFeedback = document.getElementById('sessionFeedback').value;
   const networkingFeedback = document.getElementById('networkingFeedback').value;
   const decorationsFeedback = document.getElementById('decorationsFeedback').value;

   if (sessionFeedback && networkingFeedback && decorationsFeedback) {
       alert('Feedback submitted successfully!');
       // Implement actual feedback submission logic here
   } else {
       alert('Please provide feedback for all sections');
   }
});
