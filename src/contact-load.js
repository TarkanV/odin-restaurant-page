import tool from "./element-tool"

const createElement = tool.createElement;

function loadContact(){
    const content = createElement("div", document.body, "tab");
    content.id = "contact";
    content.textContent = "Contact Stuff";

    
    return content;
}

export default loadContact;