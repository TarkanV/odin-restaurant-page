
function createElement(tag, parent, cls = ""){
    const element = document.createElement(tag);
    cls == "" || element.classList.add(cls);
    parent.appendChild(element);
    return element;
}

const loadPage = function(){
    const body = document.body;
    const content = document.querySelector("#content");

    // Loading header elements
    const header = createElement("div", body, "header");
    body.insertBefore(header, content);
    const nav = createElement("ul", header);
    // Nav Items and Logo
    const navHome = createElement("li", nav);
    navHome.textContent = "Home";
    const navMenu = createElement("li", nav);
    navMenu.textContent = "Menu";
    const navContact = createElement("li", nav);
    navContact.textContent = "Contact";
    const logo = createElement("h3", header, "logo");
    logo.textContent = "LOGO";

    // Content
    const showCase = createElement("div", content, "showcase");
    const showCaseIMG = createElement("img", showCase);
    showCaseIMG.src = "./img/plates.jpg";

    //Main
    const main = createElement("div", content, "main");
    const headline = createElement("h2", main, "headline");
    headline.textContent = 'A Gastronomic Adventure Awaits';
    const subline = createElement("h4", main, "subline");
    subline.textContent = 'Delicious Delights: Indulge in Exquisite Flavors at Divine Palate Bistro!';
    const description = createElement("p", main, "description");
    description.textContent = "Welcome to Divine Palate Bistro, where culinary excellence meets a harmonious dining experience. Nestled in the heart of a vibrant city, our restaurant offers a haven for food enthusiasts seeking unforgettable flavors and a touch of elegance. Immerse yourself in an inviting ambiance that strikes the perfect balance between sophistication and warmth.";
}

export default loadPage;