'use strict';

var React = require('react');

function Avocado(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.6,11.3c-.4-.6-.8-1.3-1.1-2.2-.2-.6-.3-1.4-.5-2.2-.3-2.3-.8-5.9-5-5.9s-4.6,3.4-5,5.6c0,.8-.2,1.5-.4,1.9-.2.5-.5.9-.8,1.4-.9,1.4-1.8,3.1-1.8,5.6,0,4.9,4,7.5,8,7.5s8-2.6,8-7.5c-.4-3.2-.7-3.1-1.4-4.2ZM12,19c-2.2,0-4-1.8-4-4s1.7-4.8,4-4.8,4,2.6,4,4.8-1.8,4-4,4Z"/>' : '<path d="M33 19C31 14 33 4 24 4C15 4 17 14 15 18C13 22 10 25 10 31C10 40 17.5 44 24 44C30.5 44 38 40 38 31C38 26 35 24 33 19Z"/><path d="M30 30C30 33.3137 27.3137 36 24 36C20.6863 36 18 33.3137 18 30C18 26.6863 20.6863 22.5 24 22.5C27.3137 22.5 30 26.6863 30 30Z"/>';

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

module.exports = Avocado;
