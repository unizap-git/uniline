'use strict';

var React = require('react');

function HealthProducts(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,6v-2.5c0-.8-.7-1.5-1.5-1.5h-6c-.8,0-1.5.7-1.5,1.5v2.5"/>   <g>     <circle cx="12" cy="16" r="1.5"/>     <path d="M19.8,8.3l-2.5-2.9c-.2-.2-.5-.3-.8-.3H7.5c-.3,0-.6.1-.8.3l-2.5,2.9c-.2.2-.2.4-.2.7v10.1c0,.2,0,.5.2.6l2.5,3c.2.2.5.4.8.4h9c.3,0,.6-.1.8-.4l2.5-3c.2-.2.2-.4.2-.6v-10.1c0-.2,0-.5-.2-.7ZM12,19.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5,3.5,1.6,3.5,3.5-1.6,3.5-3.5,3.5ZM14.5,11h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   </g>' : '<path d="M33 12H15L10 17.8428V38.0919L15 44H33L38 38.0919V17.8428L33 12Z"/><path d="M19 20H23.5455H29"/><path d="M33 12V7C33 5.34315 31.6569 4 30 4H18C16.3431 4 15 5.34315 15 7V12"/><circle cx="24" cy="32" r="5"/>';

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

module.exports = HealthProducts;
