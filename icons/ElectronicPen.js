'use strict';

var React = require('react');

function ElectronicPen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,11.5l4,4"/>   <path d="M3,21.5l3-3"/>   <path d="M20.4,4.1c-1.6-1.6-4.1-1.6-5.7,0L5.6,13.3c-1.6,1.6-1.6,4.1,0,5.7.8.8,1.8,1.2,2.8,1.2s2-.4,2.8-1.2l9.2-9.2c.8-.8,1.2-1.8,1.2-2.8s-.4-2.1-1.2-2.8ZM17.9,8c-.3.5-.9.6-1.4.4-.5-.3-.6-.9-.4-1.4.3-.5.9-.6,1.4-.4.5.3.6.9.4,1.4Z"/>' : '<g clip-path="url(#icon-e8d39cb07eac28b)"><rect x="35.1926" y="5.32227" width="12" height="38" rx="6" transform="rotate(45 35.1926 5.32227)"/><path d="M18 23L26 31"/><path d="M6 43L12 37"/><rect x="33.2681" y="12.3396" width="4" height="4" rx="2" transform="rotate(30 33.2681 12.3396)"/></g><defs><clipPath id="icon-e8d39cb07eac28b"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = ElectronicPen;
