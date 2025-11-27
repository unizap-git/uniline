'use strict';

var React = require('react');

function WaterRate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.6,1.2c-.4-.3-.9-.3-1.3,0C5.8,6,3,10.5,3,14.7s4,8.3,9,8.3,9-3.7,9-8.3S18.2,6,12.6,1.2ZM14,12.7h.7c.4,0,.7.3.7.7s-.3.7-.7.7h-.7c-.3,1.4-1.5,2.5-3,2.6l1.5,1.5c.3.3.3.7,0,1-.3.3-.7.3-1,0l-2.7-2.7c-.1-.1-.2-.3-.2-.5,0-.4.3-.7.7-.7h1.3c.8,0,1.6-.5,1.9-1.3h-3.2c-.4,0-.7-.3-.7-.7s.3-.7.7-.7h3.2c-.2-.8-1-1.3-1.9-1.3h-1.3c-.4,0-.7-.3-.7-.7s.3-.6.7-.6h5.3c.4,0,.7.3.7.7s-.3.7-.7.7h-1.3c.3.4.5.9.6,1.3Z"/>' : '<path d="M24 44C32.8366 44 40 37.4876 40 29.4545C40 21.5758 34.6667 13.0909 24 4C13.3333 13.0909 8 21.5758 8 29.4545C8 37.4878 15.1634 44 24 44Z"/><path d="M18.8572 19L24 24.3684L29.1429 19"/><path d="M18 26.158H30"/><path d="M18 31.5264H30"/><path d="M24 26.158V36.0001"/>';

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

module.exports = WaterRate;
