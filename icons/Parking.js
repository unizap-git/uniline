'use strict';

var React = require('react');

function Parking(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.5,8h-2v2h2c.6,0,1-.4,1-1s-.4-1-1-1Z"/>   <path d="M12,1C7,1,3,4.8,3,9.5c0,6.9,8.1,13,8.4,13.3.2.1.4.2.6.2s.4,0,.6-.2c.3-.3,8.4-6.4,8.4-13.3S17,1,12,1ZM13.5,12h-2v3c0,.6-.4,1-1,1s-1-.4-1-1V7c0-.6.4-1,1-1h3c1.7,0,3,1.3,3,3s-1.3,3-3,3Z"/>' : '<path d="M24 44C24 44 40 32 40 19C40 10.7157 32.8366 4 24 4C15.1634 4 8 10.7157 8 19C8 32 24 44 24 44Z"/><path d="M21 14V30"/><path d="M21 14H27C29.2091 14 31 15.7909 31 18C31 20.2091 29.2091 22 27 22H21V14Z"/>';

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

module.exports = Parking;
