'use strict';

var React = require('react');

function FlipCamera(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,4.5h-1.9l-.7-1.4c-.2-.3-.5-.6-.9-.6h-5c-.4,0-.7.2-.9.6l-.7,1.4h-1.9c-.6,0-1,.4-1,1v8c0,.6.4,1,1,1h12c.6,0,1-.4,1-1V5.5c0-.6-.4-1-1-1ZM12,12c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   <path d="M12,19c-5.5,0-10-2.2-10-5s.3-1.4.8-2M12,19l-2-2M12,19l-2,2"/>   <path d="M16,18.6c3.5-.8,6-2.5,6-4.6s-.3-1.4-.8-2"/>' : '<path d="M12 11H17L19 7H29L31 11H36V27H12V11Z"/><circle cx="24" cy="18" r="4"/><path d="M24 38C12.9543 38 4 33.5228 4 28C4 26.5778 4.59379 25.2249 5.66417 24M24 38L20 34M24 38L20 42"/><path d="M32 37.1679C39.0636 35.6248 44 32.1006 44 28C44 26.5778 43.4062 25.2249 42.3358 24"/>';

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

module.exports = FlipCamera;
