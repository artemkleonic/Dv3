document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeModalBtn = document.querySelector(".close");

    // Слухаємо кліки на продукти
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", () => {
            const productType = product.getAttribute("data-product");

            if (productType === "wine") {
                modalTitle.textContent = "Вінтажне вино";
                modalDesc.textContent = "Витримане червоне вино 1975 року, що має складний аромат і багатий смак.";
                modalImg.src = "./Images/2.jpg";
            } else if (productType === "whiskey") {
                modalTitle.textContent = "Рідкісний віскі";
                modalDesc.textContent = "Шотландський віскі 25 років витримки з нотами карамелі, дуба та легкої димки.";
                modalImg.src = "./Images/2.jpg";
            } else if (productType === "champagne") {
                modalTitle.textContent = "Ігристе шампанське";
                modalDesc.textContent = "Французьке шампанське преміум-класу, ідеальне для урочистих моментів.";
                modalImg.src = "./Images/2.jpg";
            }

            modal.style.display = "block";
        });
    });

    // Закриваємо модальне вікно
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закриваємо при кліку поза модалкою
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Закриваємо при натисканні клавіші ESC
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
