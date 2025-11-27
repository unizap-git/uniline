'use strict';

var React = require('react');

function WineBottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.00004 4c0-1.10457.89543-2 1.99996-2h2c1.1046 0 2 .89543 2 2v3H9.00004V4Zm0 5v.41924c-.87786.56584-1.41239 1.28066-1.69868 2.13956-.30199.9059-.30165 1.9228-.30134 2.8523L7.00004 20c0 1.1047.89549 2 2 2H15c1.1046 0 2-.8954 2-2v-1h-4.9999c-.5523 0-1-.4477-1-1v-5c0-.5523.4477-1 1-1h4.8213c-.034-.1494-.0745-.2967-.1227-.4412-.2863-.8589-.8208-1.57372-1.6987-2.13956V9H9.00004Z"/>   <path d="M17 14h-3.9999v3H17v-3Z"/>' : '<path d="M20,15.9h8.1M22,5.9c-1.1,0-2,.9-2,2v12.1c-4,2-4,5-4,9.1v11.1c0,1.1.9,2,2,2h12.1c1.1,0,2-.9,2-2v-11.1c0-4,0-7.1-4-9.1V7.9c0-1.1-.9-2-2-2h-4ZM32.1,26h-8.1v10.1h8.1v-10.1Z"/>';

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

module.exports = WineBottle;
