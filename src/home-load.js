import Tool from "./element-tool"

const createElement = Tool.createElement;

const loadContent = function(content){
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
    return content;
}

export default loadContent;