document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="nav-links">
                <div class="hamburger" id="hamburger">&#9776;</div>
                <ul id="menu" class="menu">
                    <li><a href="#inv">Invitation</a></li>
                    <li><a href="#mes">Message</a></li>
                    <li><a href="#info">Information</a></li>
                    <li><a href="#loc">Location</a></li>
                    <li><a href="#host">Host</a></li>
                    <li><a href="#form">Form</a></li>
                    <li><a href="https://www.instagram.com/marie_no_daibouken/profilecard/?igsh=aThlNmpqemYxanU3" target="_blank" rel="noopener noreferrer">Marie's Photo</a></li>
                </ul>
            </div>
        </nav>
    `;

    // ヘッダーを挿入
    const container = document.querySelector(".header-container");
    container.innerHTML = headerHTML;

    // 挿入後に要素を取得
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const links = menu.querySelectorAll("a");

    // ハンバーガー開閉
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // メニューのリンクを押すと閉じる
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
});