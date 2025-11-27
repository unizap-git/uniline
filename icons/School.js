'use strict';

var React = require('react');

function School(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,3v5" stroke-miterlimit="2"/>   <path d="M18,6v-3s-.8,1.5-3,0c-2.2-1.5-3,0-3,0v3s.8-1.5,3,0c2.2,1.5,3,0,3,0Z"/>   <g>     <path d="M13,22v-5.5h-2v5.5c0,.6-.4,1-1,1h4c-.6,0-1-.4-1-1Z"/>     <path d="M21,14.5h-2v-2.5c0-.3-.2-.6-.4-.8l-6-4c-.3-.2-.8-.2-1.1,0l-6,4c-.3.2-.4.5-.4.8v2.5h-2c-1.1,0-2,.9-2,2v5.5c0,.6.4,1,1,1h8c-.6,0-1-.4-1-1v-6.5c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v6.5c0,.6-.4,1-1,1h7c1.1,0,2-.9,2-2v-4.5c0-1.1-.9-2-2-2Z"/>   </g>   <path d="M9,22h6"/>' : '<path d="M4 33C4 31.8954 4.89543 31 6 31H12V24L24 16L36 24V31H42C43.1046 31 44 31.8954 44 33V42C44 43.1046 43.1046 44 42 44H4V33Z"/><path d="M24 6V16"/><path d="M36 11.9998V5.99984C36 5.99984 34.5 8.99984 30 5.99984C25.5 2.99984 24 5.99984 24 5.99984V11.9998C24 11.9998 25.5 8.99984 30 11.9998C34.5 14.9998 36 11.9998 36 11.9998Z"/><path d="M28 44V31H20L20 44"/><path d="M18 44L30 44"/>';

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
