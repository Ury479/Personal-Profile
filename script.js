document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ 初始化 AOS 动画库
    AOS.init();

    // 2️⃣ 滚动触发元素显现动画
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

    // 3️⃣ 平滑滚动至锚点
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

    // 4️⃣ 技能进度条填充动画
    function fillProgressBars() {
        let progressBars = document.querySelectorAll(".progress-bar-fill");
        progressBars.forEach((bar) => {
            let targetWidth = bar.getAttribute("data-value") + "%";
            bar.style.width = targetWidth;
        });
    }

    // 监听 AOS 触发时填充进度条
    document.querySelectorAll('.progress-bar-fill').forEach(bar => {
        bar.closest('.progress').setAttribute('data-aos', 'fade-in');
        bar.closest('.progress').setAttribute('data-aos-duration', '1000');

        bar.addEventListener('transitionend', function () {
            let value = bar.getAttribute('data-value');
            bar.style.width = value + "%"; // 确保过渡动画顺利执行
        });
    });

    // 5️⃣ 轮播图自动播放优化
    let portfolioCarousel = new bootstrap.Carousel("#portfolioCarousel", {
        interval: 3000, // 每3秒自动切换
        wrap: true, // 循环播放
    });

    // 6️⃣ 触发进度条填充动画
    fillProgressBars();
});
