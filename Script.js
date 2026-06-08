document.addEventListener('DOMContentLoaded', () => {

    
    const formButton = document.querySelector('.contact button');

    if (formButton) {
        formButton.addEventListener('click', function(e) {
            e.preventDefault(); 

            const name = document.querySelector('.contact input[type="text"]').value;
            const email = document.querySelector('.contact input[type="email"]').value;
            const message = document.querySelector('.contact textarea').value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields!");
            } else {
                alert("Thank you, " + name + "! Your message has been sent successfully.");
                document.querySelector('.contact input[type="text"]').value = "";
                document.querySelector('.contact input[type="email"]').value = "";
                document.querySelector('.contact textarea').value = "";
            }
        });
    }

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.box, .course');
    hiddenElements.forEach((el) => observer.observe(el));

    
    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑";
    topBtn.id = "topBtn";
    document.body.appendChild(topBtn);

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };

    topBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

});

