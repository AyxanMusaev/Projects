document.addEventListener("DOMContentLoaded", function() {
    const slideSection = document.querySelector('.slide-section');
    const boxWidth = slideSection.querySelector('.box').offsetWidth; // Bir kutunun genişliği
    const leftBtn = document.querySelector('.left.btn');
    const rightBtn = document.querySelector('.right.btn');
    
    // Sol butona tıklandığında
    leftBtn.addEventListener('click', function() {
        // slideSection'ın scroll pozisyonunu bir kutu kadar sola kaydır
        slideSection.scrollLeft -= boxWidth;
        
        // Eğer scroll pozisyonu negatif ise (ilk kutuda iseniz), son kutuya geç
        if (slideSection.scrollLeft <= 0) {
            slideSection.scrollLeft = slideSection.scrollWidth - slideSection.clientWidth;
        }
    });
    
    // Sağ butona tıklandığında
    rightBtn.addEventListener('click', function() {
        // slideSection'ın scroll pozisyonunu bir kutu kadar sağa kaydır
        slideSection.scrollLeft += boxWidth;
        
        // Eğer scroll pozisyonu sona ulaştıysa, başa dön
        if (slideSection.scrollLeft >= slideSection.scrollWidth - slideSection.clientWidth) {
            slideSection.scrollLeft = 0;
        }
    });
});
