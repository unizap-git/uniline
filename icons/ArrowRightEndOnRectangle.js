'use strict';

var React = require('react');

function ArrowRightEndOnRectangle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,3.8c.8,0,1.5.7,1.5,1.5v13.5c0,.8-.7,1.5-1.5,1.5h-6c-.8,0-1.5-.7-1.5-1.5v-3.8c0-.4-.3-.8-.8-.8s-.8.3-.8.8v3.8c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V5.2c0-1.7-1.3-3-3-3h-6c-1.7,0-3,1.3-3,3v3.8c0,.4.3.8.8.8s.8-.3.8-.8v-3.8c0-.8.7-1.5,1.5-1.5h6ZM11.5,8.5c-.3.3-.3.8,0,1.1l1.7,1.7H2.2c-.4,0-.8.3-.8.8s.3.8.8.8h10.9l-1.7,1.7c-.3.3-.3.8,0,1.1s.8.3,1.1,0c0,0,0,0,0,0l3-3c.3-.3.3-.8,0-1.1l-3-3c-.3-.3-.8-.3-1.1,0Z" fill-rule="evenodd"/>' : '<path d="M17.6,17.4v-8.2c0-2.7,2.2-4.9,4.9-4.9h13.2c2.7,0,4.9,2.2,4.9,4.9v29.6c0,2.7-2.2,4.9-4.9,4.9h-13.2c-2.7,0-4.9-2.2-4.9-4.9v-8.2M25.8,17.4l6.6,6.6M32.4,24l-6.6,6.6M32.4,24H4.4"/>';

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

module.exports = ArrowRightEndOnRectangle;
