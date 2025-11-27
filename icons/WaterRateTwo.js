'use strict';

var React = require('react');

function WaterRateTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.6,1.2c-.3-.2-.8-.2-1.1,0-.3.2-8.4,5.9-8.4,12.8s4,9,9,9,9-4,9-9S12.9,1.4,12.6,1.2ZM14.9,14.4l-2,4c-.2.4-.5.6-.9.6s-.3,0-.4-.1c-.5-.2-.7-.8-.4-1.3l1.3-2.6h-2.4c-.3,0-.7-.2-.9-.5s-.2-.7,0-1l2-4c.2-.5.8-.7,1.3-.4.5.2.7.8.4,1.3l-1.3,2.6h2.4c.3,0,.7.2.9.5s.2.7,0,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C32.8366 44 40 36.8363 40 28C40 15 24 4 24 4C24 4 8 15 8 28C8 36.8366 15.1634 44 24 44Z"/><path d="M24 20L20 28H28L24 36"/>';

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

module.exports = WaterRateTwo;
