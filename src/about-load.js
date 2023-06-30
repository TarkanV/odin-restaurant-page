import tool from "./element-tool"

const createElement = tool.createElement;

function loadAbout(){
    const content = createElement("div", document.body, "tab");
    content.id = "about";
    const aboutUs = createElement("h3", content, "about-us");
    aboutUs.textContent = "About Us";
    const description = createElement("p", content, "description");
    description.innerText =  `Established with love in [year], Divine Palate Bistro is the result of a shared culinary dream. What started as a small kitchen experiment quickly flourished into a beloved dining destination.

Driven by our founders' passion for flavors and a commitment to excellence, Divine Palate Bistro has become a haven for food enthusiasts seeking remarkable taste experiences.
    
Contact Information:
    
        Address: [Restaurant Address]
        Phone: [Restaurant Phone Number]
        Email: [Restaurant Email Address]
        Website: [Restaurant Website]
    
Join us at Divine Palate Bistro and immerse yourself in the art of exquisite cuisine. We invite you to discover the culinary wonders that have captured the hearts of our guests for years.`

    
    return content;
}

export default loadAbout;