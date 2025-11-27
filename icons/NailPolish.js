'use strict';

var React = require('react');

function NailPolish(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.9,12h-3.9c-.5,0-1.1-.2-1.5-.6-.4-.4-.6-.9-.5-1.5l.4-7c0-1.1.9-1.9,2-1.9h3.1c1.1,0,1.9.8,2,1.9l.4,7c0,.5-.2,1.1-.5,1.5s-.9.6-1.5.6ZM10.4,3l-.4,7h3.9l-.4-7h-3.1Z"/>   <path d="M15.5,10h-7c-2.2,0-4,1.8-4,4v6.5c0,1.4,1.1,2.5,2.5,2.5h10c1.4,0,2.5-1.1,2.5-2.5v-6.5c0-2.2-1.8-4-4-4ZM12,18c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5,1.5.7,1.5,1.5-.7,1.5-1.5,1.5Z"/>' : '<path d="M18.8951 5.88906C18.9539 4.82923 19.8305 4 20.892 4H27.108C28.1695 4 29.0461 4.82923 29.1049 5.88906L29.8827 19.8891C29.9464 21.0355 29.034 22 27.8858 22H20.1142C18.966 22 18.0536 21.0355 18.1173 19.8891L18.8951 5.88906Z"/><path d="M11 28C11 24.6863 13.6863 22 17 22H31C34.3137 22 37 24.6863 37 28V41C37 42.6569 35.6569 44 34 44H14C12.3431 44 11 42.6569 11 41V28Z"/><circle cx="24" cy="33" r="3"/>';

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

module.exports = NailPolish;
