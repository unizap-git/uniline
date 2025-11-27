'use strict';

var React = require('react');

function Dog(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,8.9c.4-4-2.2-6.8-3.6-7.3-.5-.2-1.1,0-1.3.6l-.7,1.9c-.9-.3-1.8-.5-2.8-.5s-1.9.2-2.8.5l-.7-1.9c-.2-.5-.8-.8-1.3-.6-1.4.5-4,3.3-3.6,7.3-.9,1.7-1.5,3.5-1.5,5.3,0,5,3.9,8.2,10,8.2s10-3.2,10-8.2-.5-3.7-1.5-5.3ZM5.9,6c.3-.8.8-1.5,1.2-1.9l.3.8c-.5.3-1,.7-1.5,1.1ZM14,7.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM10,7.5c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM13.5,16.8c-.7,0-1.2-.2-1.5-.5-.3.2-.8.5-1.5.5-1.4,0-2.5-1.1-2.5-2.5s.4-1,1-1,1,.4,1,1,.2.5.5.5.3,0,.3,0c0,0,.1-.2.1-.4-1-.7-1-1.2-1-1.4,0-.7.5-1.6,2-1.6s2,.9,2,1.6,0,.7-1,1.4c0,.2,0,.3.1.4,0,0,.2,0,.3,0,.3,0,.5-.2.5-.5,0-.6.4-1,1-1s1,.4,1,1c0,1.4-1.1,2.5-2.5,2.5ZM16.6,4.8l.3-.8c.4.4.9,1.1,1.2,1.9-.5-.4-1-.8-1.5-1.1Z"/>' : '<path d="M17.0001 10L14.9999 5C12.8332 5.83333 8.2 10.8 9 18"/><path d="M30.9999 10L33.0001 5C35.1668 5.83333 39.8 10.8 39 18"/><path d="M42 28.5C42 38.165 33.9411 43 24 43C14.0589 43 6 38.165 6 28.5C6 18.835 14.0589 9 24 9C33.9411 9 42 18.835 42 28.5Z"/><circle cx="20" cy="17" r="2"/><circle cx="28" cy="17" r="2"/><path d="M24 26C24 27.6569 24.5 31.5 21 31.5C19.3431 31.5 18 30.1569 18 28.5"/><path d="M24.0249 26C24.0249 27.6569 23.5249 31.5 27.0249 31.5C28.6818 31.5 30.0249 30.1569 30.0249 28.5"/><path d="M26 25.75C26 26.4404 24 27.5 24 27.5C24 27.5 22 26.4404 22 25.75C22 25.0596 22.5 24.5 24 24.5C25.5 24.5 26 25.0596 26 25.75Z"/>';

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

module.exports = Dog;
