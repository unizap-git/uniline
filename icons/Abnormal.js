'use strict';

var React = require('react');

function Abnormal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,8.2V3c0-.6-.4-1-1-1H5c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h5"/>   <path d="M8,7h6.5" stroke-miterlimit="2"/>   <path d="M8,10.5h2.5" stroke-miterlimit="2"/>   <path d="M17,11c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM18,19.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM17,16c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"/><path d="M16 14H29"/><path d="M16 21H21"/><circle cx="34" cy="34" r="10" transform="rotate(90 34 34)"/><path d="M34 36L34 39"/><circle cx="34" cy="30" r="2"/>';

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

module.exports = Abnormal;
