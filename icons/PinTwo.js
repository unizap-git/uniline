'use strict';

var React = require('react');

function PinTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M24.9,11.8h0s11.3,11.3,11.3,11.3h0c.8.8,2.1.7,2.9,0l1-1c.8-.8.8-2.2,0-3l-11.1-11.1c-.8-.8-2.2-.8-3,0l-1,1c-.8.8-.8,2.1,0,2.9Z"/>     <path d="M34.8,24.5l-11.3-11.3-6.2,6.2-4.6,1.8c-.7.3-.9,1.2-.3,1.7l12.7,12.7c.5.5,1.4.3,1.7-.3l1.8-4.6,6.2-6.2Z"/>   </g>   <path d="M16.6,30l-9.1,9.1c-.4.4-.4,1,0,1.4s1,.4,1.4,0l9.1-9.1-1.4-1.4Z"/>' : '<rect x="23.6" y="13.6" width="18" height="3.7" rx="1.1" ry="1.1" transform="translate(20.5 -18.5) rotate(45)" stroke-miterlimit="10"/>   <polygon points="25.8 34.9 13.1 22.2 17.9 20.2 27.8 30.1 25.8 34.9"/>   <rect x="20.1" y="15" width="14" height="11.9" transform="translate(22.7 -13) rotate(45)" stroke-miterlimit="10"/>   <line x1="19.5" y1="28.5" x2="8.2" y2="39.8" stroke-miterlimit="10"/>';

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

module.exports = PinTwo;
