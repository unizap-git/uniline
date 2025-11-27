'use strict';

var React = require('react');

function Bank(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,8.5v13.5h14v-13.5"/>   <path d="M2.5,11l2.5-2.5,7-6.5,7,6.5,2.5,2.5"/>   <path d="M15.3,10h-6.2M15.3,13.1h-6.2M12.2,19.3l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M10 17V44H38V17"/><path d="M5 22L10 17L24 4L38 17L43 22"/><path d="M19 19L24 25L29 19"/><path d="M18 31H30"/><path d="M18 25H30"/><path d="M24 25V37"/>';

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

module.exports = Bank;
