'use strict';

var React = require('react');

function Lightbulb2(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.1,4.1c2.7-2.7,7.2-2.7,9.9,0,1.3,1.3,2.1,3.1,2.1,5,0,2.4-1.2,3.9-2.2,5.1h0c-1,1.3-1.8,2.3-1.8,3.9s-.4,1-1,1h-4c-.6,0-1-.4-1-1,0-1.6-.8-2.6-1.8-3.9h0c-1-1.3-2.2-2.8-2.2-5.1,0-1.9.7-3.6,2.1-4.9ZM9,21c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1ZM10.6,7.6c.4-.4.9-.6,1.4-.6.6,0,1-.4,1-1s-.4-1-1-1c-2.2,0-4,1.8-4,4s.4,1,1,1,1-.4,1-1c0-.5.2-1,.6-1.4Z" fill-rule="evenodd"/>' : '<path d="M18,18c0-3.3,2.7-6,6-6M20,42.1h8M28,36c0-8.2,8-9.8,8-18.1s-5.4-12-12-12-12,5.4-12,12,8,10,8,18.1h8Z"/>';

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

module.exports = Lightbulb2;
