document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="nav-links">
                <div class="hamburger" id="hamburger">&#9776;</div> <!-- ハンバーガーアイコン -->
                <ul id="menu">
                    <li><a href="index.html">Profile</a></li>
                    <li><a href="https://www.instagram.com/marie_no_daibouken/profilecard/?igsh=aThlNmpqemYxanU3" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="form.html">フォーム</a></li>
                    <li><a href="#yuu1">見出し１</a></li>
                    <li><a href="#yuu2">見出し２</a></li>
                </ul>
            </div>
        </nav>
    `;

    // ヘッダー部分を.header-containerに挿入
    document.querySelector(".header-container").innerHTML = headerHTML;
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            if (menu) {
                menu.classList.toggle('show'); // メニューの表示・非表示を切り替え
            }
        });
    }

    if (hamburger) {
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('menu');
            if (menu && !hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show'); 
            }
        });
    }
});
