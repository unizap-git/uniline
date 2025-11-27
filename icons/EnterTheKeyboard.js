'use strict';

var React = require('react');

function EnterTheKeyboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,2.5H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V4.5c0-1.1-.9-2-2-2ZM10.5,8.5h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM6,8.5h1c.6,0,1,.4,1,1s-.4,1-1,1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM18,15H6c-.6,0-1-.4-1-1s.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1ZM18,10.5h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M42 7H6C4.89543 7 4 7.89543 4 9V37C4 38.1046 4.89543 39 6 39H42C43.1046 39 44 38.1046 44 37V9C44 7.89543 43.1046 7 42 7Z"/><path d="M12 19H14"/><path d="M21 19H23"/><path d="M29 19H36"/><path d="M12 28H36"/>';

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

module.exports = EnterTheKeyboard;
