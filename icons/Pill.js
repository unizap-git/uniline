'use strict';

var React = require('react');

function Pill(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.9,12L12,2.1c-1-1-2.6-1-3.5,0l-6.4,6.4c-.5.5-.7,1.1-.7,1.8s.3,1.3.7,1.8l9.9,9.9c.5.5,1.1.7,1.8.7s1.3-.3,1.8-.7l6.4-6.4c.5-.5.7-1.1.7-1.8s-.3-1.3-.7-1.8ZM8.1,10.9c-.4.4-1,.4-1.4,0s-.4-1,0-1.4c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM11.6,8.8c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4ZM9.5,6.7c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4s-1,.4-1.4,0c-.4-.4-.4-1,0-1.4ZM10.2,13.1c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4s1-.4,1.4,0,.4,1,0,1.4ZM12.4,15.2c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4s1-.4,1.4,0,.4,1,0,1.4ZM14.5,17.3c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4s1-.4,1.4,0c.4.4.4,1,0,1.4ZM15.2,12.4c-.4.4-1,.4-1.4,0s-.4-1,0-1.4c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4ZM17.3,14.5c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4Z"/>' : '<path d="M5.61497 22.5852C4.4434 21.4136 4.4434 19.5141 5.61497 18.3425L18.3429 5.61463C19.5145 4.44305 21.414 4.44305 22.5855 5.61462L42.3845 25.4136C43.5561 26.5852 43.5561 28.4847 42.3845 29.6563L29.6566 42.3842C28.485 43.5557 26.5855 43.5557 25.414 42.3842L5.61497 22.5852Z"/><circle cx="14.8079" cy="20.4648" r="2" transform="rotate(-45 14.8079 20.4648)"/><circle cx="23.2928" cy="28.9492" r="2" transform="rotate(-45 23.2928 28.9492)"/><circle cx="19.0501" cy="24.707" r="2" transform="rotate(-45 19.0501 24.707)"/><circle cx="27.5364" cy="33.1934" r="2" transform="rotate(-45 27.5364 33.1934)"/><circle cx="20.4642" cy="14.8066" r="2" transform="rotate(-45 20.4642 14.8066)"/><circle cx="28.95" cy="23.293" r="2" transform="rotate(-45 28.95 23.293)"/><circle cx="24.7073" cy="19.0508" r="2" transform="rotate(-45 24.7073 19.0508)"/><circle cx="33.1927" cy="27.5352" r="2" transform="rotate(-45 33.1927 27.5352)"/>';

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

module.exports = Pill;
