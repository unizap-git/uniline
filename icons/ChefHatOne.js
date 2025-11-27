'use strict';

var React = require('react');

function ChefHatOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17.5,16.5H6.5c-.6,0-1-.4-1-1v4.5c0,1.1.9,2,2,2h9c1.1,0,2-.9,2-2v-4.5c0,.6-.4,1-1,1Z"/>     <path d="M16.7,2.5c-.4,0-.7,0-1.1.1-1-1-2.4-1.6-3.8-1.6s-2.8.6-3.8,1.6c-.2,0-.5,0-.7,0-2.9,0-5.3,2.4-5.3,5.3s1.4,4.2,3.5,5v2.7c0-.6.4-1,1-1h2.5v-2c0-.6.4-1,1-1s1,.4,1,1v2h6.5c.6,0,1,.4,1,1v-2.7c2.1-.8,3.5-2.7,3.5-5s-2.4-5.3-5.3-5.3Z"/>   </g>   <path d="M17.5,18c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M6.5,18c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>' : '<path d="M13 24.1246C9.01253 23.3584 6 19.851 6 15.64C6 10.8683 9.86826 7 14.64 7C15.4066 7 16.1498 7.09983 16.8574 7.2872C18.4398 5.28493 20.8898 4 23.64 4C26.4704 4 28.9829 5.36098 30.5588 7.46422C31.4372 7.16331 32.3795 7 33.36 7C38.1317 7 42 10.8683 42 15.64C42 19.851 38.9875 23.3584 35 24.1246V40C35 41.1046 34.1046 42 33 42H15C13.8954 42 13 41.1046 13 40V24.1246Z"/><path d="M13 31L35 31"/><path d="M20 25V31"/><path d="M35 28V34"/><path d="M13 28V34"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = ChefHatOne;
