(function winLoad() {
    if (document.readyState === 'complete') {
        console.log('complete')
        addContactForm();
    } else {
        window.addEventListener('load', (event) => {
            console.log('load')
            addContactForm();
        });
    }
})();
  
function addContactForm(){
    const target = document.getElementById('contact-form-container');
    console.log(target)
    if(target) {
        target.appendChild(createIframe());
    } else {
        setTimeout(() => addContactForm(), 50)
    }
}


function createIframe() {
    const el = document.createElement('iframe');
    el.id ="JotFormIFrame-220572143589358";
    el.src = "https://form.jotform.com/220572143589358";
    el.title="Runakuna formulario contacto" ;
    el.onLoad= window.parent.scrollTo(0,0);
    el.allowFullScreen=true;
    el.style.minWidth='100%';
    el.style.height= '800px';
    el.style.border='none';
    el.allowFullscreen= true;
    el.scrolling = 'no';

    return el;
}
