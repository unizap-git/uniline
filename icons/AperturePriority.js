'use strict';

var React = require('react');

function AperturePriority(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,6l1.5-3h6l1.5,3H7.5Z"/>   <g>     <polygon points="11.1 14 12.9 14 12 12.2 11.1 14"/>     <path d="M20.5,5H3.5c-1.4,0-2.5,1.1-2.5,2.4v12.2c0,1.3,1.1,2.4,2.5,2.4h17c1.4,0,2.5-1.1,2.5-2.4V7.4c0-1.3-1.1-2.4-2.5-2.4ZM15.9,17.9c-.1,0-.3.1-.4.1-.4,0-.7-.2-.9-.6l-.7-1.4h-3.8l-.7,1.4c-.2.5-.8.7-1.3.4-.5-.2-.7-.8-.4-1.3l3.5-7c.3-.7,1.5-.7,1.8,0l3.5,7c.2.5,0,1.1-.4,1.3Z"/>   </g>' : '<path d="M15 12L18 6H30L33 12H15Z"/><path d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"/><path d="M17 34L24 20L31 34" stroke-miterlimit="10"/><path d="M19 30.0383H29" stroke-miterlimit="10"/>';

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

module.exports = AperturePriority;
