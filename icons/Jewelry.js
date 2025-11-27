'use strict';

var React = require('react');

function Jewelry(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,12.1c0,1.2-.2,2.1-.4,2.9.4-.2.7-.4,1-.7.7-.7.9-1.7,1-2.3-.8,0-1.3,0-1.5.1Z"/>   <path d="M9,12.1c-.3-.1-1-.2-2.1-.1,0,.7.4,1.5.9,2.1.6.6,1,.9,1.7,1.2-.3-.8-.5-1.8-.5-3.1Z"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17,15.6c-1.7,1.8-4.7,1.9-5,1.9h0c-2.9,0-4.2-.7-5.6-2.1-1.2-1.2-1.7-3.5-1.4-4.7l.2-.7h.7c1.5-.2,2.6-.2,3.3,0,.4-2.2,1.6-3.3,2.6-3.5h.2c0,0,.2,0,.2,0,.9.1,2.2,1,2.7,3.5.7-.1,1.6-.2,2.8,0h.7c0,0,.1.8.1.8.2,1,0,3.2-1.4,4.8Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M20 24C20 17.6364 22.6275 15.3535 24 15C25.22 15.1768 28 17.2121 28 24C28 30.7879 25.22 33 24 33C22.6275 32.8232 20 30.3636 20 24Z"/><path d="M19.9995 22.9999C18.4464 21.4623 13.6179 21.8398 12.0002 21.9999C11.5149 23.7617 12.3521 27.4922 14.2934 29.4142C16.72 31.8166 18.6609 32.9999 23.9995 32.9999"/><path d="M28 22.9999C29.4358 21.4668 33.5044 21.8402 35 21.9999C35.2991 23.5969 35.1402 27.1878 32.6276 29.8707C30.115 32.5536 25.5 32.9999 24 32.9999"/>';

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

module.exports = Jewelry;
