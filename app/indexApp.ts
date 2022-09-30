import "./components/indexComp.ts";
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    connectedCallback(){
        this.render();
    }
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" type="text/css" href="../app/components/rickmorty/rickmorty.css">
                <my-page></my-page>
                 `;
            }
        }
}
customElements.define("app-container",AppContainer);