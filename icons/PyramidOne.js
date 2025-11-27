'use strict';

var React = require('react');

function PyramidOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.4,20.6l-7-14c-.3-.7-1.5-.7-1.8,0L1.6,20.6c-.2.3-.1.7,0,1s.5.5.9.5h5c-.2,0-.3,0-.5-.1-.5-.3-.7-.9-.4-1.4l4.5-8.5c.3-.5.9-.7,1.4-.4.5.3.7.9.4,1.4l-4.5,8.5c-.2.3-.5.5-.9.5h9c.3,0,.7-.2.9-.5s.2-.7,0-1Z"/>   <path d="M16.5,21h5.2l-4.2-7-2.2,4"/>   <path d="M13,13.2c3.1-.8,5-4,4.2-7.1-.8-3.1-4-5-7.1-4.2-3.1.8-5,4-4.2,7.1.2.8.5,1.4,1,2" stroke-miterlimit="2"/>   <path d="M10,21h-5"/>   <path d="M11.2,10.5l2.5,5"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 14L33 42H5L19 14Z"/><path d="M24 25L15 42"/><path d="M33 42H43.5L35 28L30.5 36"/><path d="M25.9836 26.3959C32.2118 24.8136 35.9781 18.482 34.3959 12.2538C32.8136 6.02557 26.482 2.25926 20.2538 3.84151C14.0255 5.42376 10.2592 11.7554 11.8415 17.9836C12.2277 19.5037 12.8968 20.8772 13.7782 22.0621"/><path d="M20 42H10"/><path d="M22.5 21L27.5 31"/>';

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

module.exports = PyramidOne;
