'use strict';

var React = require('react');

function CurrencyRupee2(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.4,2.2c-.8,0-1.4.6-1.4,1.4s.6,1.4,1.4,1.4h2.8c1.8,0,3.4,1.2,3.9,2.8h-6.7c-.8,0-1.4.6-1.4,1.4s.6,1.4,1.4,1.4h6.7c-.6,1.7-2.2,2.8-3.9,2.8h-2.8c-.8,0-1.4.6-1.4,1.4,0,.4.1.7.4,1l5.6,5.6c.5.6,1.4.6,2,0,.6-.5.6-1.4,0-2,0,0,0,0,0,0l-3.2-3.2c3.1-.2,5.6-2.5,6.3-5.5h1.5c.8,0,1.4-.6,1.4-1.4s-.6-1.4-1.4-1.4h-1.5c-.2-1-.6-2-1.3-2.8h2.8c.8,0,1.4-.6,1.4-1.4s-.6-1.4-1.4-1.4H6.4Z" fill-rule="evenodd"/>' : '<path d="M18,3H6M18,9H6M12,21l-6-6h3c3.3,0,6-2.7,6-6s-2.7-6-6-6"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = CurrencyRupee2;
