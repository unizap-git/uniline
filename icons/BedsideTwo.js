'use strict';

var React = require('react');

function BedsideTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M22,16H2c-.6,0-1-.4-1-1v6c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-6c0,.6-.4,1-1,1ZM13,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M22,8H2c-.6,0-1,.4-1,1v6c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-6c0-.6-.4-1-1-1ZM13,13h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   </g>   <path d="M4,21v2"/>   <path d="M20,21v2"/>   <path d="M12,9v-4"/>   <path d="M16,5c0-2.2-1.8-4-4-4s-4,1.8-4,4h8Z" fill-rule="evenodd"/>   <path d="M22,18c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M2,13v4"/>' : '<path d="M4 18H44V42H4V18Z"/><path d="M22 24H26"/><path d="M4 30H44"/><path d="M22 36H26"/><path d="M8 42V46"/><path d="M40 42V46"/><path d="M24 18V10"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32 10C32 5.58172 28.4183 2 24 2C19.5817 2 16 5.58172 16 10H32Z"/><path d="M44 26V34"/><path d="M4 26V34"/>';

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

module.exports = BedsideTwo;
