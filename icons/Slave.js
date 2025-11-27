'use strict';

var React = require('react');

function Slave(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,19v-3.8M5,19V3c0-.6.4-1,1-1h12c.6,0,1,.4,1,1v.5"/>   <path d="M12.5,6.5h-.5c-1.7,0-3,1.3-3,3h0c0,1.7,1.3,3,3,3h.5"/>   <path d="M16.5,6.5h.5c1.7,0,3,1.3,3,3h0c0,1.7-1.3,3-3,3h-.5"/>   <path d="M12.5,9.5h4"/>   <path d="M16,15h-8c-2.2,0-4,1.8-4,4s1.8,4,4,4h8c2.2,0,4-1.8,4-4s-1.8-4-4-4ZM16,20c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M38 38V30.5M10 38V6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V7"/><path d="M25 13H24C20.6863 13 18 15.6863 18 19V19C18 22.3137 20.6863 25 24 25H25"/><path d="M33 13H34C37.3137 13 40 15.6863 40 19V19C40 22.3137 37.3137 25 34 25H33"/><path d="M25 19H33"/><path d="M10 38C10 34.6863 12.6863 32 16 32H32C35.3137 32 38 34.6863 38 38C38 41.3137 35.3137 44 32 44H16C12.6863 44 10 41.3137 10 38Z"/><circle cx="32" cy="38" r="2"/>';

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

module.exports = Slave;
