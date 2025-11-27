'use strict';

var React = require('react');

function PassportOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.5,20h-2c-.6,0-1-.4-1-1V3c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v2" stroke-miterlimit="2"/>   <g>     <path d="M15,16.1c.5-.3.8-.6,1.1-1.1-.2,0-.4.1-.6.2-.3.2-.4.5-.5.9Z"/>     <path d="M19.5,4H7.5c-1.1,0-2,.9-2,2v15c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM13.5,18.5c-2.8,0-5-2.2-5-5s2.2-5,5-5,5,2.2,5,5-2.2,5-5,5Z"/>     <path d="M14,13c-.5,0-1-.4-1-1s.4-1,1-1,.3-.2.4-.5c-.3,0-.6-.2-.9-.2-1.7,0-3,1.3-3,3s0,.5.1.8c.3-.2.5-.5.5-.8,0-.5.4-1,1-1s1,.4,1,1c0,.9-.6,1.8-1.3,2.4.4.3.8.5,1.3.6,0-1,.6-2.1,1.4-2.7.7-.5,1.5-.7,2.1-.7,0-.4-.2-.9-.5-1.2-.4.7-1,1.2-2,1.2Z"/>   </g>' : '<path d="M13 40L9 40C7.89543 40 7 39.1046 7 38L7 6C7 4.89543 7.89543 4 9 4L29 4C30.1046 4 31 4.89543 31 6L31 10"/><rect x="13" y="44" width="34" height="28" rx="2" transform="rotate(-90 13 44)"/><circle cx="27" cy="27" r="8"/><path d="M34.9998 28C34.9998 28 32 27.5 29.9995 29C27.999 30.5 27.401 34.1025 27.9999 35"/><path d="M24 27C24 29 22 31 20 31"/><path d="M31 20C31 20 31 24 28 24"/>';

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

module.exports = PassportOne;
