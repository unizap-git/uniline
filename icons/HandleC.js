'use strict';

var React = require('react');

function HandleC(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM12,16.5c2.1,0,3.1-1.7,3.2-1.7.3-.5.9-.6,1.4-.3.5.3.6.9.3,1.4,0,.1-1.7,2.7-4.9,2.7s-5.7-2.2-5.9-6c-.3-3.7,2.1-6.7,5.4-7,2.9-.2,4.7,1.3,5.5,2.8.2.5,0,1.1-.5,1.3-.5.2-1.1,0-1.3-.5-.2-.3-1.1-1.9-3.5-1.7-2.2.2-3.8,2.3-3.6,4.9.2,2.7,2.2,4.1,3.9,4.1Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M32 17.6183C31.1017 15.7887 28.4068 12.5867 23.0171 13.0442C17.6273 13.5017 13.5842 18.5332 14.0342 24.937C14.4842 31.3407 19.4239 35 23.9154 35C29.3051 35 32 30.6089 32 30.6089"/>';

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

module.exports = HandleC;
