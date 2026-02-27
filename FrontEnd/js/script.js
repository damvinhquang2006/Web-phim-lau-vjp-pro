function loadComponent(id, file) {
    // 1. Gửi request lấy file
    fetch(file)
        // 2. Chuyển response thành text
        .then(response => response.text())
        // 3. Khi có text thì truyền vào HTML
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("error to load file !:", error));
}

loadComponent("header", "components/header.html");
loadComponent("banner", "components/banner.html");
loadComponent("recommend_film", "components/recommendFilm.html");
loadComponent("footer", "components/footer.html");

// ========== JAVASCRIPT ĐƠN GIẢN ==========
// Thêm tương tác cơ bản cho các nút trên trang

// Lắng nghe sự kiện khi trang đã tải xong
document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các nút "Xem chi tiết"
    const detailButtons = document.querySelectorAll('.details-btn');

    // Thêm sự kiện click cho từng nút "Xem chi tiết"
    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Lấy tên phim từ thẻ h3 trong cùng thẻ phim
            const movieTitle = this.closest('.movie-info').querySelector('.movie-title').textContent;
            alert(`Bạn đã chọn xem chi tiết phim: "${movieTitle}"`);
        });
    });

    // Thêm sự kiện cho nút "Xem ngay" trong phần hero
    const watchButton = document.querySelector('.watch-btn');
    watchButton.addEventListener('click', function () {
        alert('Bắt đầu phát "Avatar: Dòng chảy của nước"!');
    });

    // Thêm sự kiện cho nút đăng nhập
    const loginButton = document.querySelector('.login-btn');
    loginButton.addEventListener('click', function () {
        alert('Chức năng đăng nhập sẽ được triển khai sau!');
    });

    // Thêm hiệu ứng cuộn mượt mà cho các liên kết menu
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            // Chỉ xử lý các liên kết không có href="#"
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                // Lấy phần tử đích từ thuộc tính href
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Cuộn mượt đến phần tử đích
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});