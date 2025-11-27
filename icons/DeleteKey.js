'use strict';

var React = require('react');

function DeleteKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,4h-11.1c-.5,0-1,.2-1.4.5L1.3,11.3c-.2.2-.3.5-.3.7s.1.5.3.7l7.2,6.7c.4.3.9.5,1.4.5h11.1c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM18.7,13.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.8-1.8-1.8,1.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.8,1.8,1.8-1.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.8,1.8,1.8,1.8Z"/>' : '<path d="M18.4237 10.5379C18.794 10.1922 19.2817 10 19.7883 10H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H19.7883C19.2817 38 18.794 37.8078 18.4237 37.4621L4 24L18.4237 10.5379Z"/><path d="M36 19L26 29"/><path d="M26 19L36 29"/>';

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

module.exports = DeleteKey;
