'use strict';

var React = require('react');

function NotebookAndPen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M5,21V3c0-.6.4-1,1-1H2c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h4c-.6,0-1-.4-1-1Z"/>     <path d="M15,2H6c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h9c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1Z"/>   </g>   <g>     <path d="M22,7h-4c-.6,0-1-.4-1-1v13c0,.3.1.5.3.7l2,2c.2.2.5.3.7.3s.5,0,.7-.3l2-2c.2-.2.3-.4.3-.7V6c0,.6-.4,1-1,1Z"/>     <path d="M22,2h-4c-.6,0-1,.4-1,1v3c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v-3c0-.6-.4-1-1-1Z"/>   </g>   <path d="M15,3H2"/>   <path d="M15,21H2"/>   <path d="M18,3v8"/>   <path d="M22,3v8"/>' : '<path d="M4 6V42H30V6H4Z"/><path d="M12 42V6"/><path d="M44 6H36V38L40 42L44 38V6Z"/><path d="M36 12H44"/><path d="M30 6H4"/><path d="M30 42H4"/><path d="M36 6V22"/><path d="M44 6V22"/>';

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

module.exports = NotebookAndPen;
