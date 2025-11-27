'use strict';

var React = require('react');

function Chimney(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,22h20"/>   <path d="M6.5,7h11"/>   <g>     <path d="M6.5,16h11c.3,0,.6.1.8.4l-1.3-9.5c0-.5-.5-.9-1-.9h-8c-.5,0-.9.4-1,.9l-1.3,9.5c.2-.2.4-.4.8-.4ZM7.5,11h9c.6,0,1,.4,1,1s-.4,1-1,1H7.5c-.6,0-1-.4-1-1s.4-1,1-1Z"/>     <path d="M18.4,17.4c-.2.3-.5.6-.9.6H6.5c-.4,0-.7-.2-.9-.6l-.6,4.4c0,.3,0,.6.2.8.2.2.5.3.8.3h12c.3,0,.6-.1.8-.3.2-.2.3-.5.2-.8l-.6-4.4Z"/>   </g>   <path d="M16,7l2,15"/>   <path d="M8,7l-2,15"/>   <path d="M12,4l.4-.4c.4-.4.9-.6,1.4-.6h.3c.5,0,1-.2,1.4-.6l.4-.4"/>' : '<path d="M4 44H44"/><path d="M13 14H35"/><path d="M16 14H24H32L36 44H12L16 14Z"/><path d="M15 24H33"/><path d="M13 34L35 34"/><path d="M32 14L36 44"/><path d="M16 14L12 44"/><path d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"/>';

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

module.exports = Chimney;
