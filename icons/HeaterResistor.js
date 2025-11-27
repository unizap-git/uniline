'use strict';

var React = require('react');

function HeaterResistor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.5,20.5l3.5-3.5"/>   <path d="M17,7.1l3.5-3.5"/>   <path d="M19.1,7.8l-2.8-2.8c-.8-.8-2.1-.8-2.8,0l-1.8,1.8c.4-.4,1-.4,1.4,0l4.2,4.2c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-4.2-4.2c-.4-.4-.4-1,0-1.4l-2.5,2.5c.4-.4,1-.4,1.4,0l4.2,4.2c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-4.2-4.2c-.4-.4-.4-1,0-1.4l-2.5,2.5c.4-.4,1-.4,1.4,0l4.2,4.2c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-4.2-4.2c-.4-.4-.4-1,0-1.4l-1.8,1.8c-.8.8-.8,2,0,2.8l2.8,2.8c.4.4.9.6,1.4.6s1-.2,1.4-.6l8.5-8.5c.4-.4.6-.9.6-1.4s-.2-1-.6-1.4Z"/>   <path d="M6.3,13.4l7.1-7.1"/>   <path d="M10.6,18.7c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l7.1-7.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-7.1,7.1c-.2.2-.5.3-.7.3Z"/>' : '<rect x="9.8584" y="29.6567" width="28" height="12" rx="2" transform="rotate(-45 9.8584 29.6567)"/><path d="M7.0293 40.9707L14.1004 33.8996"/><path d="M33.9014 14.1006L40.9724 7.02952"/><path d="M14.8076 24.707L23.2929 33.1923"/><path d="M19.7578 19.7573L28.2431 28.2426"/><path d="M24.707 14.8076L33.1923 23.2929"/><path d="M12.6865 26.8286L26.8287 12.6865"/><path d="M21.1719 35.314L35.314 21.1718"/>';

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

module.exports = HeaterResistor;
