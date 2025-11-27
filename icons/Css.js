'use strict';

var React = require('react');

function Css(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.4,2.2c-.4-.4-.9-.7-1.5-.7H5.1c-.6,0-1.1.2-1.5.7-.4.4-.6,1-.5,1.5l1.3,14.3c0,.7.5,1.3,1.2,1.6l5.6,2.6c.3,0,.6.2.8.2s.6,0,.8-.2l5.6-2.6c.6-.3,1.1-.9,1.2-1.6l1.3-14.3c0-.6-.1-1.1-.5-1.5ZM16.3,16.7l-4.3,1.2h0l-4.3-1.2-.3-3.2h2.1l.2,1.5,2.3.6,2.3-.6.2-3h-7.3l-.2-2h7.6l.2-2H6.9l-.2-2h10.5l-1,10.7Z"/>' : '<path d="M15.7,13.9h16.7l-15.7,8.3h14.7l-1,9.3-6.4,1.9-6.4-1.9-.4-3.7"/>   <path d="M37.4,5.7H10.6c-1.1,0-2,1-1.9,2.1l2.6,27.8c0,.7.5,1.3,1.1,1.6l10.8,5c.5.2,1.1.2,1.6,0l10.8-5c.6-.3,1.1-.9,1.1-1.6l2.6-27.8c.1-1.1-.8-2.1-1.9-2.1Z" stroke-miterlimit="2"/>';

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

module.exports = Css;
