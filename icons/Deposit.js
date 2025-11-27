'use strict';

var React = require('react');

function Deposit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,8v14h12v-14"/>   <path d="M7,5h10"/>   <path d="M18,9h3V2H3v7h3"/>   <path d="M15.4,9.5h-6.2M15.4,12.6h-6.2M12.3,18.8l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M13.1,16.8v25.3h21.7v-25.3"/>   <path d="M15,11.3h18.1"/>   <path d="M34.9,18.6h5.4V5.9H7.7v12.7h5.4"/>   <path d="M29.5,20.7h-10.1M29.5,25.7h-10.1M24.5,35.7l-5-5h2.4c2.8,0,5-2.3,5-5s-2.3-5-5-5"/>';

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
