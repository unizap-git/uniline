'use strict';

var React = require('react');

function Mastercard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm5.178 12.137a4.137 4.137 0 1 1 1.036-8.144A6.113 6.113 0 0 0 8.726 12c0 1.531.56 2.931 1.488 4.006a4.114 4.114 0 0 1-1.036.131ZM10.726 12c0-1.183.496-2.252 1.294-3.006A4.125 4.125 0 0 1 13.315 12a4.126 4.126 0 0 1-1.294 3.006A4.126 4.126 0 0 1 10.726 12Zm4.59 0a6.11 6.11 0 0 1-1.489 4.006 4.137 4.137 0 1 0 0-8.013A6.113 6.113 0 0 1 15.315 12Z" clip-rule="evenodd"/>' : '<path d="M22,6v12c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V6c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2Z"/>   <path d="M13,12c0,1.7-1.2,3.1-2.9,3.1s-3.1-1.2-3.1-2.9c0,0,0-.2,0-.3,0-1.7,1.5-2.9,3.1-2.9,1.6,0,2.8,1.3,2.9,2.9Z"/>   <path d="M12,9.8c1.2-1.1,3.1-1,4.2.2,1.1,1.2,1,3.1-.2,4.2-1.1,1-2.9,1-4,0"/>';

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

module.exports = Mastercard;
