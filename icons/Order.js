'use strict';

var React = require('react');

function Order(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="8.5" y="2" width="7" height="3"/>   <path d="M19,2.5h-3.5c-.6,0-1,.4-1,1v.5h-5v-.5c0-.6-.4-1-1-1h-3.5c-1.1,0-2,.9-2,2v16.5c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V4.5c0-1.1-.9-2-2-2ZM15.2,14.2l-4,4c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l2.3-2.3h-2.6c-.4,0-.8-.2-.9-.6s0-.8.2-1.1l4-4c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4l-2.3,2.3h2.6c.4,0,.8.2.9.6.2.4,0,.8-.2,1.1Z"/>' : '<path d="M33.0499 7H38C39.1046 7 40 7.89543 40 9V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42L8 9C8 7.89543 8.89543 7 10 7H16H17V10H31V7H33.0499Z"/><rect x="17" y="4" width="14" height="6"/><path d="M26.9996 19L19 27.0012H29.004L21.0003 35.0018"/>';

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

module.exports = Order;
