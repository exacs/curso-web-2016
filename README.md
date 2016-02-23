# Curso de introducción al desarrollo web
Este repositorio incluye el material necesario para seguir las clases del curso de introducción al desarrollo web

En este curso se va a realizar un [gestor de tareas](http://exacs.github.io/curso-web-2016/final). Se adjuntan dos carpetas:

* La carpeta *boilerplate* incluye unas "plantillas" que se irán completando a lo largo del curso.
* La carpeta *final* incluye el resultado final. Se recomienda no verlas. La solución correcta no es única. Se incluye a modo de referencia

Este documento es solamente un guión de la clase con algunas notas y referencias. No es un libro de texto ni apuntes.

## Índice de contenidos

* HTML5
  * Etiquetas estructurales de HTML5. `header`, `footer`...
  * Etiquetas de texto en línea. `a`, `strong`, `em`...
  * Etiquetas de texto en bloque. `h1-h6`, `p`, `blockquote`...
* CSS3
  * Organización del código.
  * Selectores.
  * Box-model. Propiedades `padding`, `margin`, `border` y `box-sizing`.
  * Propiedad `position`.
  * Otras propiedades.
* JavaScript
  * Introducción. Tipos de variables.
  * Programación funcional. Mutables vs. inmutables.
  * El árbol DOM.
  * Programación orientada a Eventos.
* NPM
  * Instalación de Node.js y NPM.
  * Organización de CSS: SCSS.
  * Organización de JavaScript: Webpack.

## Referencias
### HTML5
* Guía explicando [secciones en HTML5]
* Ejemplo de [página en la que la cabecera está en una posición inusual]
* [Lista de etiquetas (en inglés)](http://www.w3schools.com/tags/default.asp)
* [Lista de etiquetas (en español)](https://developer.mozilla.org/es/docs/HTML/HTML5/HTML5_lista_elementos)

#### Etiquetas utilizadas
* a
* h1
* h2
* blockquote
* p
* ul
* li
* input
* button
* span


### CSS3
* [Selectores CSS]
* Discusión sobre cómo [organizar el fichero CSS]. [Otra](http://learn.shayhowe.com/advanced-html-css/performance-organization/).

#### Propiedades utilizadas
* [Tipografía CSS] font-family, font-weight, font-size
* [Texto CSS] text-decoration, text-align, line-height
* [Color en CSS](http://www.w3schools.com/cssref/pr_text_color.asp), [background](http://www.w3schools.com/css/css_background.asp)
* El [modelo de la caja] padding, margin, border, [box-sizing]
* [Posiciones CSS](http://www.w3schools.com/css/css_positioning.asp): position, width, height, top, left, bottom, right
* [box-shadow](http://www.w3schools.com/css/css3_shadows.asp)

### JavaScript
* ¿Qué es el [árbol DOM]? 
* [El objeto DOM] en JavaScript

#### Funciones utilizadas
* Arrays
  * método [push](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push)
* [Objeto document](http://www.w3schools.com/jsref/dom_obj_document.asp)
  - método [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  - método [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - método [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* Objetos element y node
  - propiedad [appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  - método [getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
  - método [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
  - propiedad [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
  - propiedad [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
  - propiedad [checked](http://www.w3schools.com/jsref/prop_checkbox_checked.asp)
* [Objeto event](http://www.w3schools.com/jsref/dom_obj_event.asp)
  - Propiedad [key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
  - Propiedad [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
  - Propiedad [currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

[secciones en HTML5]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#The_HTML5_Outline_Algorithm
[página en la que la cabecera está en una posición inusual]: http://wp.architecture.com.au/risk/

[Tipografía CSS]: http://www.w3schools.com/css/css_font.asp
[Texto CSS]: http://www.w3schools.com/css/css_text.asp

[modelo de la caja]: http://www.w3schools.com/css/css_boxmodel.asp
[box-sizing]: www.w3schools.com/css/css3_box-sizing.asp
[Selectores CSS]: http://www.w3schools.com/cssref/css_selectors.asp
[organizar el fichero CSS]: https://mattstauffer.co/blog/organizing-css-oocss-smacss-and-bem

[árbol DOM]: http://www.w3schools.com/js/js_htmldom.asp
[El objeto DOM]: http://www.w3schools.com/jsref/dom_obj_all.asp
