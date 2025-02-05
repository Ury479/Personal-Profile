document.addEventListener("DOMContentLoaded", function () {
    // ✅ Initialize AOS Animation Library
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
    });

    // ✅ Scroll-triggered animations + Sci-fi glowing effect
    function revealElements() {
        document.querySelectorAll(".reveal").forEach((element) => {
            let windowHeight = window.innerHeight;
            let elementTop = element.getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active", "neon-glow"); // Add Sci-fi glow effect
            }
        });
    }
    window.addEventListener("scroll", revealElements);

    // ✅ Smooth scrolling to anchors
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // ✅ Skill Progress Bar Animation (Sci-fi gradient effect)
    function fillProgressBars() {
        document.querySelectorAll(".progress-bar-fill").forEach((bar) => {
            let targetWidth = bar.getAttribute("data-value") + "%";
            bar.style.width = targetWidth;
            bar.classList.add("neon-glow"); // Add glow effect
        });
    }

    // ✅ Monitor `AOS` triggers, ensure bars fill after animation
    document.querySelectorAll(".progress-bar-fill").forEach((bar) => {
        let progressContainer = bar.closest(".progress");
        if (progressContainer) {
            progressContainer.setAttribute("data-aos", "fade-in");
            progressContainer.setAttribute("data-aos-duration", "1200");
        }

        bar.addEventListener("transitionend", function () {
            bar.style.width = bar.getAttribute("data-value") + "%";
        });
    });

    // ✅ Optimize Carousel: Seamless transitions & Sci-fi filter
    new bootstrap.Carousel("#portfolioCarousel", {
        interval: 3000, // Auto-switch every 3 seconds
        wrap: true, // Enable infinite loop
        ride: "carousel",
    });

    // ✅ Fill progress bars on page load
    fillProgressBars();

    // ✅ Contact Form Submission - Send Email via mailto:
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default page refresh

        // Get form values
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validate fields
        if (!email || !subject || !message) {
            alert("⚠️ Please fill out all fields before sending the email.");
            return;
        }

        // Encode email content to handle special characters properly
        let mailtoLink = `mailto:YIHAO.WANG@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;

        // Open default email app
        window.location.href = mailtoLink;

        // ✅ Close Modal After Sending
        let contactModal = document.getElementById("contactModal");
        let modalInstance = bootstrap.Modal.getInstance(contactModal);
        if (modalInstance) {
            modalInstance.hide();
        }

        // ✅ Remove modal backdrop manually
        setTimeout(() => {
            let backdrop = document.querySelector(".modal-backdrop");
            if (backdrop) {
                backdrop.remove();
            }
        }, 500);
    });
});
