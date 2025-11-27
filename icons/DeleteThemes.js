'use strict';

var React = require('react');

function DeleteThemes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.7,6.8c-.2-.2-.5-.3-.7-.3H4c-.3,0-.6.1-.7.3-.2.2-.3.5-.3.8l1.5,14.5c0,.5.5.9,1,.9h13c.5,0,.9-.4,1-.9l1.5-14.5c0-.3,0-.6-.3-.8ZM11,17.5c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5ZM15,17.5c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5Z"/>   <path d="M6,7.5L14.2,1.5l3.8,6"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15H40L37 44H11L8 15Z"/><path d="M20.002 25.0024V35.0026"/><path d="M28.0024 24.9995V34.9972"/><path d="M12 14.9999L28.3242 3L36 15"/>';

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

module.exports = DeleteThemes;
