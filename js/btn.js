//MUST HAVE - CREATE A TEMPLATE TAG
var template_btn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_btn.innerHTML = `
<link rel="stylesheet" href="css/main.css">
<div class="btn">
    <i>home</i>
    <a href="#">Home</a>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheMenu extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_menu.content.cloneNode(true)); //use the template to make a clone
    
        if(this.getAttribute("desc")){
            this.shadowRoot.querySelector(".btn > a").innerText = this.getAttribute("desc");
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("btn", TheMenu)