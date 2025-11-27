'use strict';

var React = require('react');

function Zip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,12h-.5v.2c0,0,.2.2.5.2s.5-.2.5-.2-.2-.2-.5-.2Z"/>   <path d="M22.1,5.4L12.4,1.6c-.2,0-.5,0-.7,0L1.9,5.4c-.6.2-.9.8-.9,1.4v14.2c0,.8.7,1.5,1.5,1.5h19c.8,0,1.5-.7,1.5-1.5V6.8c0-.6-.4-1.2-.9-1.4ZM9,15c.6,0,1,.4,1,1s-.4,1-1,1h-3c-.4,0-.7-.2-.9-.5-.2-.3-.2-.7,0-1l2.1-3.5h-1.2c-.6,0-1-.4-1-1s.4-1,1-1h3c.4,0,.7.2.9.5.2.3.2.7,0,1l-2.1,3.5h1.2ZM13,16c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5ZM16.5,14.5c-.2,0-.3,0-.5,0v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-4.9h0c0-.7.4-1.1,1-1.1s0,0,0,0c0,0,0,0,0,0h1.3c1.4,0,2.5,1,2.5,2.2s-1.1,2.2-2.5,2.2Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.62861 12.7486L24 5L43.3714 12.7486C43.751 12.9004 44 13.2681 44 13.677V42C44 42.5523 43.5523 43 43 43H5C4.44772 43 4 42.5523 4 42V13.677C4 13.2681 4.24895 12.9004 4.62861 12.7486Z"/><path d="M24 22V32"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33 27C34.6569 27 36 25.8807 36 24.5C36 23.1193 34.6569 22 33 22C32.1 22 31.2 22 30.3 22C30.1343 22 30 22.1343 30 22.3C30 23.0333 30 23.7667 30 24.5C30 25.8807 31.3431 27 33 27Z"/><path d="M30 22V32"/><path d="M12 22H18.0046L12 31.9993H18.0046"/>';

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

module.exports = Zip;
