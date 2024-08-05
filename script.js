document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          "<h1>Bienvenidos a Nuestro Restaurante</h1><p>Disfruten mis comidas deliciosas hechas con mucho amor.</p>";
        break;
      case "about":
        mainContent.innerHTML =
          "<h1>Sobre Nosotros</h1><p>Conoce más sobre mi historia y de como construi la mejor panaderia con productos de mayor calidad.</p>";
        break;
      case "contact":
        mainContent.innerHTML =
          "<h1>Contacto</h1><p>Ponte en contacto con nosotros para darte un saludo especial al : 313-702-38-29</p>";
        break;
      case "formasPago":
        mainContent.innerHTML = `<div class="catalog-container">
        <div class="catalog-item">
            <img src="dinero.jpg" alt="Efectivo">
            <h3>Efectivo</h3>
            <p>Plata papi plata</p>
        </div>
        <div class="catalog-item">
            <img src="tarjeta.jpg" alt="Tarjeta de credito-Debito">
            <h3>Terjeta de credito-Debito</h3>
            
        </div>
        <div class="catalog-item">
            <img src="pobre.webp" alt="Transferencia">
            <h3>Transferencia</h3>
            <p>Ja pobre</p>
        </div>`;
        break;
      case "Menu":
        mainContent.innerHTML = `<div class="menu">
        <div class="menu-item">
            <div class="item-image">
                <img src="encarcelado.jpg" alt="encarcelados">
            </div>
            <div class="item-details">
                <div class="item-name">Encarcelados</div>
                <div class="item-price">$3000</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="empanada.jpg" alt="Empanadas">
            </div>
            <div class="item-details">
                <div class="item-name">Empanadas dulces</div>
                <div class="item-price">$5000</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="pan.jpg" alt="Pan integral">
            </div>
            <div class="item-details">
                <div class="item-name">pan integral</div>
                <div class="item-price">$8000</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="pan crema.jpg" alt="Pan crema">
            </div>
            <div class="item-details">
                <div class="item-name">Pan crema</div>
                <div class="item-price">$2500</div>
            </div>
        </div>
        <div class="menu-item">
            <div class="item-image">
                <img src="pera.jpg" alt="">
            </div>
            <div class="item-details">
                <div class="item-name">Peras</div>
                <div class="item-price">$2500</div>
            </div>
        </div>
    </div>`;
        break;
    }
  }
});
