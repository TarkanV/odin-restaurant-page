const tool = (function(){
    const createElement = function(tag, parent, cls = ""){
        const element = document.createElement(tag);
        cls == "" || element.classList.add(cls);
        parent.appendChild(element);
        return element;
    }
    
    return {createElement};
})();

export default tool;