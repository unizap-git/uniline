'use strict';

var React = require('react');

function Workbench(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,16.5v3"/>   <path d="M22,2.5H2c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V3.5c0-.6-.4-1-1-1ZM9,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM13,13c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM17,13c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6Z"/>   <path d="M6,20.5h12"/>' : '<path d="M12 33H4V7H44V33H36H12Z"/><path d="M16 22V26"/><path d="M24 33V39"/><path d="M24 18V26"/><path d="M32 14V26"/><path d="M12 41H36"/>';

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

module.exports = Workbench;
