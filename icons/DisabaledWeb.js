'use strict';

var React = require('react');

function DisabaledWeb(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.5,20H3.5c-.8,0-1.5-.7-1.5-1.5V5.5c0-.8.7-1.5,1.5-1.5h17c.8,0,1.5.7,1.5,1.5v6"/>   <circle cx="19" cy="17.5" r="3" stroke-miterlimit="2"/>   <path d="M17,15.5l4,4"/>   <path d="M20.5,3H3.5c-1.4,0-2.5,1.1-2.5,2.5v5.5h22v-5.5c0-1.4-1.1-2.5-2.5-2.5ZM5,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM8,8c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"/><circle cx="38" cy="35" r="6"/><path d="M34 31L42 39"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"/>';

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

module.exports = DisabaledWeb;
