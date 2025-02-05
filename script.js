document.addEventListener("DOMContentLoaded", function () {
    // ✅ 1️⃣ 初始化 AOS 动画库
    AOS.init({
        duration: 1000, // 过渡时长
        easing: "ease-in-out",
        once: true, // 触发一次
    });

    // ✅ 2️⃣ 滚动触发动画 + 科幻发光
    function revealElements() {
        let reveals = document.querySelectorAll(".reveal");
        reveals.forEach((element) => {
            let windowHeight = window.innerHeight;
            let elementTop = element.getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
                element.classList.add("neon-glow"); // 添加科幻霓虹光效
            }
        });
    }
    window.addEventListener("scroll", revealElements);

    // ✅ 3️⃣ 平滑滚动至锚点
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

    // ✅ 4️⃣ 技能进度条填充动画（科幻条形渐变）
    function fillProgressBars() {
        document.querySelectorAll(".progress-bar-fill").forEach((bar) => {
            let targetWidth = bar.getAttribute("data-value") + "%";
            bar.style.width = targetWidth;
            bar.classList.add("neon-glow"); // 添加光效
        });
    }

    // ✅ 监听 `AOS` 触发，确保动画完成后填充进度条
    document.querySelectorAll(".progress-bar-fill").forEach((bar) => {
        bar.closest(".progress").setAttribute("data-aos", "fade-in");
        bar.closest(".progress").setAttribute("data-aos-duration", "1200");

        bar.addEventListener("transitionend", function () {
            let value = bar.getAttribute("data-value");
            bar.style.width = value + "%";
        });
    });

    // ✅ 5️⃣ 轮播图优化：增加无缝切换 & 科幻滤镜
    let portfolioCarousel = new bootstrap.Carousel("#portfolioCarousel", {
        interval: 3000, // 每 3 秒自动切换
        wrap: true, // 允许循环播放
        ride: "carousel",
    });

    // ✅ 6️⃣ 页面加载时填充进度条
    fillProgressBars();
});
