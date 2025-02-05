document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ 滚动触发动画
    function revealElements() {
        let reveals = document.querySelectorAll(".reveal");

        reveals.forEach((element) => {
            let windowHeight = window.innerHeight;
            let elementTop = element.getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    
    window.addEventListener("scroll", revealElements);

    // 2️⃣ 平滑滚动
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // 3️⃣ 技能进度条动画
    function fillProgressBars() {
        let progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar) => {
            let targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth;
        });
    }

    fillProgressBars(); // 页面加载时填充进度条

    // 4️⃣ 轮播图自动播放优化
    let portfolioCarousel = new bootstrap.Carousel("#portfolioCarousel", {
        interval: 3000, // 每3秒自动切换
        wrap: true, // 循环播放
    });
});
