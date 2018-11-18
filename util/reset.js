import React from 'react';

const Reset = () => (
  <style>
    {`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.loading {
  background: linear-gradient(134deg, #000000, #ffffff);
	background-size: 400% 400%;
	transform: translateZ(0);
  
  -webkit-animation: loading-gradient 17s ease infinite;
  -moz-animation: loading-gradient 17s ease infinite;
  animation: loading-gradient 17s ease infinite;
}

@-webkit-keyframes loading-gradient {
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}
@-moz-keyframes loading-gradient {
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}
@keyframes loading-gradient { 
    0%{background-position:0% 22%}
    50%{background-position:100% 79%}
    100%{background-position:0% 22%}
}

@keyframes fade-in {
	from {opacity: 0}
	to {opacity: 1}
}

html { font-size: calc(.7em + .5vw); background-color: black}

@media only screen and (max-width: 480px) {
	html { font-size: calc(1em + .5vw); }
}

@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 840px) {
}
@media only screen and (min-width: 960px) {
@media only screen and (min-width: 1280px) {
}

	`}
  </style>
);

export default Reset;
