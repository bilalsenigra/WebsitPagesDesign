 document.addEventListener('DOMContentLoaded', function() {

     const loginForm = document.querySelector('.login-form');
     const signupForm = document.querySelector('.signup-form');
     const formsWrapper = document.querySelector('.forms-wrapper');
     const navLogin = document.querySelector('.nav-login');
     const navSignup = document.querySelector('.nav-signup');


     const switchLinks = document.querySelectorAll('.switch-form');


     function switchForm(targetForm) {

         document.querySelectorAll('.form-container').forEach(form => {
             form.classList.remove('active');
         });
         document.querySelectorAll('.nav-list a').forEach(link => {
             link.classList.remove('active');
         });


         if (targetForm === 'login') {
             formsWrapper.classList.remove('show-signup');
             formsWrapper.classList.add('show-login');
             loginForm.classList.add('active');
             navLogin.classList.add('active');
         } else {
             formsWrapper.classList.remove('show-login');
             formsWrapper.classList.add('show-signup');
             signupForm.classList.add('active');
             navSignup.classList.add('active');
         }
     }


     navLogin.addEventListener('click', function(e) {
         e.preventDefault();
         switchForm('login');
     });

     navSignup.addEventListener('click', function(e) {
         e.preventDefault();
         switchForm('signup');
     });


     switchLinks.forEach(link => {
         link.addEventListener('click', function(e) {
             e.preventDefault();
             const target = this.getAttribute('data-target');
             switchForm(target);
         });
     });
 });