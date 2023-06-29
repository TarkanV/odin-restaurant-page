/* eslint-disable linebreak-style */
import loadHome from './home-load';
import loadMenu from './menu-load';
import loadContact from './contact-load';
import tool from "./element-tool"

const createElement = tool.createElement;

console.log('This Webpack stuff is working :v');


const content = document.querySelector("#home");


function loadHeader(){
    // Loading header elements
    const header = createElement("div", document.body, "header");
    document.body.insertBefore(header, content);
    const nav = createElement("ul", header);
    // Nav Items and Logo
    const navHome = createElement("li", nav);
    navHome.id = "home-nav";
    navHome.classList.add("active");
    navHome.textContent = "Home";
    const navMenu = createElement("li", nav);
    navMenu.id = "menu-nav";
    navMenu.textContent = "Menu";
    const navContact = createElement("li", nav);
    navContact.id = "contact-nav";
    navContact.textContent = "Contact";
    const logo = createElement("h3", header, "logo");
    logo.textContent = "LOGO";
    return header;
}



function loadFooter(){
    const footer = createElement("div", document.body, "footer");
    footer.textContent = "No Copyright";
}

const header = loadHeader();
const home = loadHome(content);
const menu = loadMenu();
const contact = loadContact();
let currTab = home;
let currNav = header.querySelector("#home-nav");



function switchTab(...tabs){
    console.log("This function exists");
    tabs.forEach((clickedTab) => {
        const clickedNav = header.querySelector(`#${clickedTab.id}-nav`);
        console.log(`#${clickedTab.id}-nav`);
        clickedNav.addEventListener("click", (e) => {
            console.log("Click!");
            if(clickedTab !== currTab){
                console.log("click tab!");
                currNav.classList.remove("active");
                clickedNav.classList.add("active");
                currNav = clickedNav;

                currTab.classList.remove("active");
                clickedTab.classList.add("active");
                currTab = clickedTab;
            }
        })
    }
    );
}
switchTab(home, menu, contact);
loadFooter();










// Attribution : 
// <a href="https://www.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_7535867.htm#query=restaurant%20header%20image&position=15&from_view=search&track=ais">Image by timolina</a> on Freepik