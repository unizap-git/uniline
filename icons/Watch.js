'use strict';

var React = require('react');

function Watch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,15.5l-2,6.5h-7l-2-6.5"/>   <path d="M6.5,8.5l2-6.5h7l2,6.5"/>   <path d="M18.3,8c-1.4-2.2-3.8-3.5-6.3-3.5s-4.9,1.3-6.3,3.5c-.8,1.2-1.2,2.6-1.2,4s.4,2.8,1.2,4c1.4,2.2,3.8,3.5,6.3,3.5s4.9-1.3,6.3-3.5c.8-1.2,1.2-2.6,1.2-4s-.4-2.8-1.2-4ZM14.7,14.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2-2c-.2-.2-.3-.4-.3-.7v-3.5c0-.6.4-1,1-1s1,.4,1,1v3.1l1.7,1.7c.4.4.4,1,0,1.4Z"/>' : '<path d="M34.9562 31L30.9998 44H16.9998L13.0435 31"/><path d="M13.0435 17L16.9998 4H30.9998L34.9562 17"/><path d="M37 24C37 26.5773 36.25 28.9794 34.9564 31C32.6462 34.6083 28.6024 37 24 37C19.3976 37 15.3538 34.6083 13.0436 31C11.75 28.9794 11 26.5773 11 24C11 21.4227 11.75 19.0206 13.0436 17C15.3538 13.3917 19.3976 11 24 11C28.6024 11 32.6462 13.3917 34.9564 17C36.25 19.0206 37 21.4227 37 24Z"/><path d="M24 17V24L28 28"/>';

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

module.exports = Watch;
