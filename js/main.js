// Main JavaScript file for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class on the question
                this.classList.toggle('active');
                
                // Get the answer element (next sibling)
                const answer = this.nextElementSibling;
                
                // Toggle visibility of the answer
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.style.opacity = '0';
                    answer.style.marginTop = '0';
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = '1';
                    answer.style.marginTop = '10px';
                }
                
                // Close other questions if needed
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                        otherQuestion.classList.remove('active');
                        const otherAnswer = otherQuestion.nextElementSibling;
                        otherAnswer.style.maxHeight = null;
                        otherAnswer.style.opacity = '0';
                        otherAnswer.style.marginTop = '0';
                    }
                });
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.querySelector('.contact-form-container');
    const successMessage = document.querySelector('.contact-success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Do not prevent default form submission
            // This allows the form to be submitted to FormSubmit service
            
            // Store form data for display in success message
            const name = document.getElementById('name').value;
            
            // Show success message after a short delay
            setTimeout(function() {
                if (formContainer && successMessage) {
                    formContainer.style.display = 'none';
                    successMessage.style.display = 'block';
                    successMessage.innerHTML = `شكراً ${name}! تم إرسال رسالتك بنجاح وسيتم الرد عليك في أقرب وقت ممكن.`;
                }
            }, 1000);
            
            // No need to prevent default - let the form submit naturally
        });
    }
});
