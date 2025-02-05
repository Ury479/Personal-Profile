document.addEventListener("DOMContentLoaded", function () {
    // ✅ 初始化 AOS 动画
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
    });

    // ✅ 监听表单提交，发送邮件
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // 阻止默认刷新

        // 获取输入值
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        // 检查是否为空
        if (!email || !subject || !message) {
            alert("⚠️ Please fill in all fields before sending.");
            return;
        }

        // 构造 mailto 链接
        let mailtoLink = `mailto:YIHAO.WANG@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;

        // 调试信息
        console.log("Mailto Link:", mailtoLink);

        // 关闭 Modal
        let modalElement = document.getElementById("contactModal");
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }

        // **确保 Modal 关闭后移除 backdrop**
        setTimeout(() => {
            document.body.classList.remove("modal-open");
            document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
        }, 500);

        // 打开邮件客户端
        window.location.href = mailtoLink;
    });


});

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
