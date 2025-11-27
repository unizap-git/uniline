'use strict';

var React = require('react');

function Deposit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,8v14h12v-14"/>   <path d="M7,5h10"/>   <path d="M18,9h3V2H3v7h3"/>   <path d="M15.4,9.5h-6.2M15.4,12.6h-6.2M12.3,18.8l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M12 16V44H36V16"/><path d="M19 20L24 26L29 20"/><path d="M18 32H30"/><path d="M18 26H30"/><path d="M24 26V38"/><path d="M14 10L23.6154 10L34 10"/><path d="M36 18H42V4H6V18H12"/>';

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

module.exports = Deposit;
