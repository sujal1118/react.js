function customElement(reactElement, container){
    const domElement = document.createElemen
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a', 
    props :
    {
        href: 'https://google.com',
        terget : '_blank',
        children: "click me to visit google"
    }
}

const mainContainer = document.querySelector('#root')
customReact(reactElement, mainContainer)   