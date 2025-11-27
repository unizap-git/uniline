'use strict';

var React = require('react');

function Consignment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M7,16V6c0-.6.4-1,1-1h-3c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h3c-.6,0-1-.4-1-1Z"/>     <path d="M19,5h-3c.6,0,1,.4,1,1v10c0,.6-.4,1-1,1h3c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2Z"/>     <path d="M15,16V6c0-.6.4-1,1-1h-8c.6,0,1,.4,1,1v10c0,.6-.4,1-1,1h8c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M14,6h4"/>   <path d="M6,6h4"/>   <path d="M6,16h4"/>   <path d="M14,16h4"/>   <path d="M2,19h20"/>   <path d="M9,19v1" stroke-miterlimit="2"/>   <path d="M6,19v1" stroke-miterlimit="2"/>   <path d="M3,19v1" stroke-miterlimit="2"/>   <path d="M12,19v1" stroke-miterlimit="2"/>   <path d="M15,19v1" stroke-miterlimit="2"/>   <path d="M18,19v1" stroke-miterlimit="2"/>   <path d="M21,19v1" stroke-miterlimit="2"/>   <path d="M15,6v-3h-6v3"/>' : '<path d="M8 14C8 12.8954 8.89543 12 10 12H38C39.1046 12 40 12.8954 40 14V30C40 31.1046 39.1046 32 38 32H10C8.89543 32 8 31.1046 8 30V14Z"/><path d="M16 12V32"/><path d="M32 12V32"/><path d="M28 12L36 12"/><path d="M12 12L20 12"/><path d="M12 32L20 32"/><path d="M28 32L36 32"/><path d="M4 38L44 38"/><path d="M18 38V40"/><path d="M12 38V40"/><path d="M6 38V40"/><path d="M24 38V40"/><path d="M30 38V40"/><path d="M36 38V40"/><path d="M42 38V40"/><path d="M30 12V6H18V12"/>';

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

module.exports = Consignment;
