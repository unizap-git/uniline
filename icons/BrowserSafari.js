'use strict';

var React = require('react');

function BrowserSafari(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <polygon points="9.1 14.9 13.5 13.5 14.9 9.1 10.5 10.5 9.1 14.9"/>     <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.4,7.8l-2.2,6.8c0,.3-.3.5-.6.6l-6.8,2.2c-.1,0-.2,0-.3,0-.3,0-.5-.1-.7-.3-.3-.3-.4-.7-.2-1l2.2-6.8c0-.3.3-.5.6-.6l6.8-2.2c.4-.1.8,0,1,.2.3.3.4.7.2,1Z"/>   </g>   <path d="M12,13c.6,0,1-.4,1-1s-.4-1-1-1-1,.4-1,1,.4,1,1,1Z" fill-rule="evenodd"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M15 33L19.5 19.5L33 15L28.5 28.5L15 33Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"/>';

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

module.exports = BrowserSafari;
