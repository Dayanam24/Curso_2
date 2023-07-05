// Cambiamos el color del fondo del documento HTML
document.body.style.backgroundColor = "skyblue";


// Seleccionamos algunos elementos html.
// HTMLElement: es la clase base para todos los elementos HTML en el DOM, esto incluye elementos 
// como div, p, span, input, button, entre otros.
let titulo = document.getElementById("titulo") as HTMLElement;

// En este caso indicamos que es un elemento de tipo imagen
let miImagen = document.getElementsByTagName("img")[0] as HTMLImageElement;


// Modificando los elementos previamente seleccionados.
titulo.innerText = "Este titulo cambio usando TypeScript";
miImagen.style.borderRadius = "15px";
miImagen.style.width = "300px";


/*
    HTMLElement: es la clase base para todos los elementos HTML en el DOM, esto incluye elementos 
    como div, p, span, input, button, entre otros.


    Ademas podemos especificar Subclases:
        HTMLAnchorElement: representa un elemento a (enlace).
        HTMLAudioElement: representa un elemento audio.
        HTMLButtonElement: representa un elemento button.
        HTMLDivElement: representa un elemento div.
        HTMLFormElement: representa un elemento form.
        HTMLHeadingElement: representa un elemento h1, h2, h3, h4, h5 o h6.
        HTMLImageElement: representa un elemento img.
        HTMLInputElement: representa un elemento input.
        HTMLLabelElement: representa un elemento label.
        HTMLLIElement: representa un elemento li.
        HTMLLinkElement: representa un elemento link.
        HTMLMapElement: representa un elemento map.
        HTMLMediaElement: representa un elemento audio o video.
        HTMLMenuElement: representa un elemento menu.
        HTMLMetaElement: representa un elemento meta.
        HTMLOListElement: representa un elemento ol (lista ordenada).
        HTMLParagraphElement: representa un elemento p.
        HTMLSelectElement: representa un elemento select.
        HTMLSpanElement: representa un elemento span.
        HTMLStyleElement: representa un elemento style.
        HTMLTextAreaElement: representa un elemento textarea.
        HTMLUListElement: representa un elemento ul (lista no ordenada).
        HTMLVideoElement: representa un elemento video.
*/