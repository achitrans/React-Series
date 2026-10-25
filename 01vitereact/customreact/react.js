function customRendor(reactElement, container){
    const domElemet = document.createElement   
    (reactElement.type)
    domElemet.innerHtml = reactElement.children
    domElemet.setAttribute 
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'click me to vist google'
}
const mainContainer = document.querySelector('#root')

customRendor(reactElement, mainContainer)