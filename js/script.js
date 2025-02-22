document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeModalBtn = document.querySelector(".close");

    // Слушаем клики на продукты
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", () => {
            const productType = product.getAttribute("data-product");

            console.log("Product type:", productType);  // Логируем тип продукта

            if (productType === "wine") {
                modalTitle.textContent = "Соковиті настоянки";
                modalDesc.innerHTML = `
                    <ul>
                        <li>вишня</li>
                        <li>журавлина</li>
                        <li>чорноплідна горобина</li>
                        <li>перець з медом</li>
                        <li>трав’яна</li>
                        <li>зубрівка</li>
                    </ul>
                    <p><strong>Вартість замовлення складає 510 грн.</strong></p>
                    <p>(Обробка замовлення та пакування, податки та збори - 510 грн. Подарунковий набір - безкоштовно)</p>`;
                modalImg.src = "./Images/3.jpg";
                console.log("Modal content updated for wine");
            } else if (productType === "whiskey") {
                modalTitle.textContent = "Фруктовий фітокомплекс";
                modalDesc.innerHTML = `
                    <ul>
                        <li>абрикос</li>
                        <li>слива</li>
                        <li>чорна смородина</li>
                        <li>малина</li>
                        <li>диня</li>
                        <li>яблуко</li>
                    </ul>
                    <p><strong>510 грн</strong></p>`;
                modalImg.src = "./Images/2.jpg";
                console.log("Modal content updated for whiskey");
            } else if (productType === "champagne") {
                modalTitle.textContent = "Насіння, коріння та злаки";
                modalDesc.innerHTML = `
                    <ul>
                        <li>димний ячмінь</li>
                        <li>витримана кукурудза</li>
                        <li>цукрова тростина</li>
                        <li>ароматна тростина</li>
                        <li>можевельник та спеції</li>
                        <li>полинь, аніс, фенхель, м’ята</li>
                    </ul>
                    <p><strong>600 грн</strong></p>`;
                modalImg.src = "./Images/1.jpg";
                console.log("Modal content updated for champagne");
            }

            modal.style.display = "block";
        });
    });

    // Закрываем модальное окно при клике на кнопку
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие при клике на область за пределами модального окна
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Закрытие при нажатии клавиши ESC
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryModal = document.getElementById("galleryModal");
    const galleryImage = document.getElementById("galleryImage");
    const closeModal = document.querySelector(".close");
    const prevBtn = document.getElementById("prevImage");
    const nextBtn = document.getElementById("nextImage");
  
    // Массив с изображениями галереи (замени ссылки на свои картинки)
    const galleryImages = [
      "./Images/batkavslape.jpg",
      "./Images/Batya.png",
      "./Images/batyazloy.jpg",
      "./Images/batyavkostume.jpg"
    ];
    
    let currentIndex = 0;
  
    // Функция обновления изображения в галерее
    function updateGallery() {
      galleryImage.src = galleryImages[currentIndex];
    }
  
    // Открытие модального окна при клике на фото
    document.querySelector(".intro-image img").addEventListener("click", function () {
      currentIndex = 0; // Начать с первой картинки
      updateGallery();
      galleryModal.style.display = "flex";
    });
  
    // Закрытие модального окна
    closeModal.addEventListener("click", function () {
      galleryModal.style.display = "none";
    });
  
    // Переключение изображений
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateGallery();
    });
  
    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateGallery();
    });
  
    // Закрытие окна при клике вне изображения
    window.addEventListener("click", function (e) {
      if (e.target === galleryModal) {
        galleryModal.style.display = "none";
      }
    });
  });
  
