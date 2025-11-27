'use strict';

var React = require('react');

function PaymentMethod(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,5l-14,14"/>   <path d="M16.4,13h4.6v8h-10v-2.9"/>   <path d="M9.4,3H2.6M9.4,6.4H2.6M6,13.2l-3.4-3.4h1.7c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4"/>' : '<path d="M38.3,9.9l-28.1,28.1"/>   <path d="M33.1,26h9.2v16.1h-20.1v-5.9"/>   <path d="M19.3,6H5.8M19.3,12.7H5.8M12.5,26l-6.7-6.7h3.2c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7"/>';

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

module.exports = PaymentMethod;
