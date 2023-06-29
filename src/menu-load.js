import tool from "./element-tool"

const createElement = tool.createElement;

function loadMenu(){
    const content = createElement("div", document.body, "tab");
    content.id = "menu";
    content.textContent = "Menu Stuff";

    
    return content;
}

export default loadMenu;