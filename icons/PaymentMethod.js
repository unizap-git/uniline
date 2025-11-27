'use strict';

var React = require('react');

function PaymentMethod(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,5l-14,14"/>   <path d="M16.4,13h4.6v8h-10v-2.9"/>   <path d="M9.4,3H2.6M9.4,6.4H2.6M6,13.2l-3.4-3.4h1.7c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4"/>' : '<path d="M38 10L10 38"/><path d="M6 6L12 14L18 6"/><path d="M5 14H19"/><path d="M5 20H19"/><path d="M12 14V26"/><path d="M32.8462 26H42V42H22V36.15"/>';

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
