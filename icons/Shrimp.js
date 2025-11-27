'use strict';

var React = require('react');

function Shrimp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13,11.5l-3-6" stroke-miterlimit="2"/>   <path d="M9,2h7c1.9,0,3.5,1.6,3.5,3.5h0"/>   <path d="M22.9,19.6l-2-5c-.1-.4-.5-.6-.9-.6-.4,0-.8.2-.9.5,0,0-1.4,2.7-3.5,3.5-2.1.8-5.2.2-7-1.3-.6-.5-.9-1-.9-1.5,0-.5.3-1,.9-1.4.9-.7,5.2-1.3,5.9-1.3.8,0,2.5-.6,4.2-2.3,1.8-1.8,1.8-4.6,1.8-4.7,0-.6-.4-1-1-1h-9.2c-.3,0-.5,0-.8,0-1,.1-4.5.8-6.9,3.8C0,12,.4,16.3,3.8,19.7c2.3,2.3,5.1,3.5,8.5,3.5s1.6,0,2.4-.2c3.6-.5,7.5-2,7.7-2.1.3,0,.5-.3.6-.5s.1-.5,0-.8ZM15,7c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1Z"/>' : '<path d="M20.6234 11H38.9996C38.9996 11 38.9996 16 35.9996 19C32.9996 22 30 23 29 23C28 23 18.5 24 16 26C13.5 28 12.0011 31.5 16 35C19.9989 38.5 27 40 32 38C37 36 40.0001 30 40.0001 30L44 40C44 40 36 43 28.9997 44C21.9993 45 15.0001 44 8.99972 38C2.99935 32 1.99903 24.5 6.99932 18C11.1656 12.5842 17.4139 11.3337 19.3823 11.0673C19.7947 11.0114 20.2072 11 20.6234 11Z"/><path d="M26 23L20 11"/><path d="M18 4H32C35.866 4 39 7.13401 39 11V11"/><circle cx="30" cy="16" r="2"/>';

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

module.exports = Shrimp;
