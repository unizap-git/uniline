'use strict';

var React = require('react');

function Expenses(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.5,17h6"/>   <path d="M19,19.5l2.5-2.5-2.5-2.5"/>   <path d="M21.5,13V5c0-.8-.7-1.5-1.5-1.5H4c-.8,0-1.5.7-1.5,1.5v14c0,.8.7,1.5,1.5,1.5h10.2"/>   <path d="M13.1,7.4h-6.2M13.1,10.5h-6.2M10,16.6l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M30.7,33.6h11.5"/>   <path d="M37.4,38.4l4.8-4.8-4.8-4.8"/>   <path d="M42.2,25.9v-15.4c0-1.6-1.3-2.9-2.9-2.9H8.6c-1.6,0-2.9,1.3-2.9,2.9v26.9c0,1.6,1.3,2.9,2.9,2.9h19.7"/>   <path d="M25.8,16.5h-11.5M25.8,22.3h-11.5M20.1,33.6l-5.7-5.7h2.8c3.1,0,5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7"/>';

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

module.exports = Expenses;
