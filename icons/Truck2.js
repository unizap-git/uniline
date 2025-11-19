'use strict';

var React = require('react');

function Truck2(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clip-rule="evenodd"/>' : '<path d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>';

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

module.exports = Truck2;
