'use strict';

var React = require('react');

function NewPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM21.8,12.6c-.2.3-.5.4-.8.4s-.4,0-.6-.2l-3.3-2.5-2,2,1.6,1.4c.4.4.5,1,.1,1.4-.2.2-.5.3-.8.3s-.5,0-.7-.2l-6.3-5.4-5.3,4.9c-.4.4-1,.3-1.4,0-.4-.4-.3-1,0-1.4l5.3-4.9c.7-.7,1.9-.7,2.7,0l3.2,2.7,2.2-2.2c.7-.7,1.8-.8,2.6-.2l3.3,2.5c.4.3.5,1,.2,1.4Z"/>   <path d="M3,10v5"/>   <path d="M21,10v5"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 28L16.6931 18.198C17.4389 17.5143 18.5779 17.4953 19.3461 18.1538L32 29"/><path d="M28 24L32.7735 19.2265C33.4772 18.5228 34.5914 18.4436 35.3877 19.0408L42 24"/><path d="M6 20L6 30"/><path d="M42 20V30"/>';

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

module.exports = NewPicture;
