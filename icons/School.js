'use strict';

var React = require('react');

function School(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,10.5l-2.3.6c-.4.1-.7.5-.7,1v7.9c0,.6.4,1,1,1h2v-10.5ZM18,10.5l2.3.6c.4.1.7.5.7,1v7.9c0,.6-.4,1-1,1h-2v-10.5Z"/>   <path d="M12.6,3.2c-.3-.2-.8-.2-1.1,0l-6,4c-.5.3-.6.9-.3,1.4.3.5.9.6,1.4.3l1.4-1v13.1h8V7.9l1.4,1s0,0,0,0c.2,0,.3.1.5.1.3,0,.6-.2.8-.4.3-.5.2-1.1-.3-1.4,0,0-6-4-6-4ZM10,12c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1ZM11,8c-.6,0-1,.4-1,1s.4,1,1,1h2c.6,0,1-.4,1-1s-.4-1-1-1h-2Z" fill-rule="evenodd"/>' : '<path d="M4 33C4 31.8954 4.89543 31 6 31H12V24L24 16L36 24V31H42C43.1046 31 44 31.8954 44 33V42C44 43.1046 43.1046 44 42 44H4V33Z"/><path d="M24 6V16"/><path d="M36 11.9998V5.99984C36 5.99984 34.5 8.99984 30 5.99984C25.5 2.99984 24 5.99984 24 5.99984V11.9998C24 11.9998 25.5 8.99984 30 11.9998C34.5 14.9998 36 11.9998 36 11.9998Z"/><path d="M28 44V31H20L20 44"/><path d="M18 44L30 44"/>';

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

module.exports = School;
