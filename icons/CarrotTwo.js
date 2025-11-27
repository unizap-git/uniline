'use strict';

var React = require('react');

function CarrotTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33,14.9c-3.7-3.7-8.9-4.4-13.8.6-4.9,4.9-16.2,22.2-12.5,25.9,3.7,3.7,21-7.5,25.9-12.5,4.8-4.8,4-10.3.3-14ZM33,14.9l7.4-7.2M33,14.9V5.8M33,14.9h9.1M33.5,28.1l-5-5M15.5,19.9l4.7,4.6M17.4,31.8l4.8,4.9"/>' : '<path d="M33,14.9c-3.7-3.7-8.9-4.4-13.8.6-4.9,4.9-16.2,22.2-12.5,25.9,3.7,3.7,21-7.5,25.9-12.5,4.8-4.8,4-10.3.3-14ZM33,14.9l7.4-7.2M33,14.9V5.8M33,14.9h9.1M33.5,28.1l-5-5M15.5,19.9l4.7,4.6M17.4,31.8l4.8,4.9"/>';

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

module.exports = CarrotTwo;
