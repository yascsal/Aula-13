// Grade dos elementos
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element
    throw new Error (`Alguma coisa deu errado ${selector} corrija o seletor`);
};
const scrollHeader = () => {
    const navbarElement = selectElement("#header");
    if (this.scrollY >= 15){
        navbarElement.classList.add("activated");
    }else{
        navbarElement.classList.remove("activated");
    }
}

window.addEventListener ("scroll", scrollHeader);

// abrir menu e busca

const menuToglleicon = selectElement ("menu-toggle-icon");
const formOpenBtn = selectElement ("#search-icon");