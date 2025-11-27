'use strict';

var React = require('react');

function Sunshade(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40.1032 25.8171C39.2068 28.0998 30.4308 28.8255 21.3618 26.3955C12.2929 23.9655 6.5828 19.5523 7.2617 17.0172C8.79543 11.2933 16.9744 2.46226 28.6712 6.68869C40.368 10.9151 41.6369 20.0931 40.1032 25.8171Z"/><path d="M27.9995 7.00001C27.9995 7.00001 23.9993 13.5 20.9995 24C17.9997 34.5 17.9997 42 17.9997 42"/><path d="M28.0003 6.99998C28.0003 6.99998 17.7941 8.84351 15 17"/><path d="M28.0003 7.00001C28.0003 7.00001 34 13 30.9998 22"/><path d="M10 43C10 43 19 41.5 26 41.5C33 41.5 39 42 39 42"/><path d="M27.9999 6.99988C29 6.99988 31 5.99988 31.8145 4.41966"/><path d="M34 41C34 39.3431 33 37 30 37C27 37 26 39.3431 26 41"/>' : '<path d="M40.1032 25.8171C39.2068 28.0998 30.4308 28.8255 21.3618 26.3955C12.2929 23.9655 6.5828 19.5523 7.2617 17.0172C8.79543 11.2933 16.9744 2.46226 28.6712 6.68869C40.368 10.9151 41.6369 20.0931 40.1032 25.8171Z"/><path d="M27.9995 7.00001C27.9995 7.00001 23.9993 13.5 20.9995 24C17.9997 34.5 17.9997 42 17.9997 42"/><path d="M28.0003 6.99998C28.0003 6.99998 17.7941 8.84351 15 17"/><path d="M28.0003 7.00001C28.0003 7.00001 34 13 30.9998 22"/><path d="M10 43C10 43 19 41.5 26 41.5C33 41.5 39 42 39 42"/><path d="M27.9999 6.99988C29 6.99988 31 5.99988 31.8145 4.41966"/><path d="M34 41C34 39.3431 33 37 30 37C27 37 26 39.3431 26 41"/>';

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

module.exports = Sunshade;
