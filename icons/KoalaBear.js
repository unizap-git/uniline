'use strict';

var React = require('react');

function KoalaBear(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,3.9c-.7-.7-1.8-1-3.1-.9-1.5.2-3.2,1-4,2-.9-.3-1.9-.5-2.9-.5s-2,.2-2.9.5c-.8-1-2.5-1.8-4-2-1.3-.2-2.3.1-3.1.9-1.1,1-1.5,4,0,7.9.1.3.3.5.6.6,0,0,.2,0,.3,0,.2,0,.4,0,.6-.2h0c0,.2,0,.4,0,.7,0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5,0-.5,0-.8h0c.2.2.4.3.6.3s.2,0,.3,0c.3,0,.5-.3.6-.6,1.4-3.9,1-6.9,0-7.9ZM4.4,9.2l-1,.7c-.7-2.6-.3-4.2,0-4.5,0,0,0,0,0,0,.4-.4,1-.4,1.4-.3.9.1,1.8.6,2.4,1-1.2.8-2.1,1.9-2.8,3.2ZM8.5,12.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,18.5c-1.4,0-2.5-1.2-2.5-2.7s1.1-3.3,1.6-4.2c.3-.7,1.4-.7,1.8,0,.5.9,1.6,3.2,1.6,4.2s-1.1,2.7-2.5,2.7ZM15.5,12.7c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM20.6,9.9l-1-.7c-.6-1.3-1.6-2.4-2.8-3.2.5-.4,1.4-.9,2.4-1,.4,0,1.1,0,1.5.4.3.3.6,1.9,0,4.5Z"/>' : '<circle cx="24" cy="26" r="15"/><path d="M21 31.5625C21 29.664 24 24 24 24C24 24 27 29.664 27 31.5625C27 33.461 25.6569 35 24 35C22.3431 35 21 33.461 21 31.5625Z"/><circle cx="17.0391" cy="23.4932" r="2"/><circle cx="31.0391" cy="23.4932" r="2"/><path d="M17 11.9269C15.6214 9.52446 8.49451 6.09319 5.34959 9.30595C4.01392 10.4178 2.98594 15.4499 5.72704 23L10 19.9798"/><path d="M31 11.9269C32.3786 9.52446 39.5055 6.0932 42.6504 9.30595C43.9861 10.4178 45.0141 15.4499 42.273 23L38 19.9802"/>';

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

module.exports = KoalaBear;
