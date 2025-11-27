'use strict';

var React = require('react');

function ShoppingBag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,8.5c0-3.3-2.5-6-5.5-6s-5.5,2.7-5.5,6"/>   <path d="M22.3,7.9c-.2-.2-.5-.4-.8-.4H2.5c-.3,0-.6.1-.8.4s-.3.5-.2.8l2.1,13c0,.5.5.8,1,.8h14.8c.5,0,.9-.4,1-.8l2.1-13c0-.3,0-.6-.2-.8ZM7.5,13c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM15.8,17.1c0,0-1.3,1.9-3.8,1.9s-3.8-1.9-3.8-1.9c-.3-.5-.2-1.1.3-1.4.5-.3,1.1-.2,1.4.3,0,0,.8,1.1,2.2,1.1s2.1-1,2.2-1.1c.3-.4.9-.6,1.4-.3.5.3.6.9.3,1.4ZM15.5,14c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M5 17H43L38.8 43H9.2L5 17Z"/><path d="M35 17C35 10.3726 30.0751 5 24 5C17.9249 5 13 10.3726 13 17"/><circle cx="17" cy="26" r="2"/><path d="M18 33C18 33 20 36 24 36C28 36 30 33 30 33"/><circle cx="31" cy="26" r="2"/>';

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

module.exports = ShoppingBag;
