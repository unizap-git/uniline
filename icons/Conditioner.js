'use strict';

var React = require('react');

function Conditioner(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,12v-3.5H5.5v3.5"/>   <path d="M8.5,8.5c1-1.1,1.5-3.2,1.5-6.5,1.5,0,5,2.7,5,6.4"/>   <g>     <path d="M20,11H4c-.6,0-1,.4-1,1v10c0,.6.4,1,1,1h16c.6,0,1-.4,1-1v-10c0-.6-.4-1-1-1ZM17,18.5c0,.6-.4,1-1,1h-8c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1h8c.6,0,1,.4,1,1v3Z"/>     <rect x="9" y="16.5" width="6" height="1"/>   </g>' : '<rect x="8" y="24" width="32" height="20"/><path d="M37 24V17H11V24"/><path d="M17 17C19 14.8333 20 10.5 20 4C23 4 30 9.41667 30 16.7327"/><rect x="16" y="31" width="16" height="6"/>';

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

module.exports = Conditioner;
