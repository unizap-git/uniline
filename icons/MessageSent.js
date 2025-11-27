'use strict';

var React = require('react');

function MessageSent(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12v10c0,.6.4,1,1,1h10c6.1,0,11-4.9,11-11S18.1,1,12,1ZM17.2,10.2l-6.5,6.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-3-3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3,5.8-5.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>' : '<path d="M44 24C44 35.0457 35.0457 44 24 44C18.0265 44 4 44 4 44C4 44 4 29.0722 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"/><path d="M13.9999 26L20 32L33 19"/>';

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

module.exports = MessageSent;
