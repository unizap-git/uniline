'use strict';

var React = require('react');

function Mastercard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2H4ZM9.2,16.1c-2.3,0-4.1-1.9-4.1-4.1,0-2.3,1.9-4.1,4.1-4.1.3,0,.7,0,1,.1-1,1.1-1.5,2.5-1.5,4,0,1.5.6,2.9,1.5,4-.3,0-.7.1-1,.1ZM10.7,12c0-1.2.5-2.3,1.3-3,.8.8,1.3,1.9,1.3,3,0,1.1-.5,2.2-1.3,3-.8-.8-1.3-1.9-1.3-3ZM15.3,12c0,1.5-.5,2.9-1.5,4,2.2.6,4.5-.8,5-3s-.8-4.5-3-5c-.7-.2-1.4-.2-2.1,0,1,1.1,1.5,2.5,1.5,4h0Z" fill-rule="evenodd"/>' : '<path d="M42.2,13.1v21.8c0,2-1.6,3.6-3.6,3.6H9.4c-2,0-3.6-1.6-3.6-3.6V13.1c0-2,1.6-3.6,3.6-3.6h29.1c2,0,3.6,1.6,3.6,3.6Z"/>   <path d="M25.8,24c0,3.1-2.2,5.6-5.3,5.6s-5.6-2.2-5.6-5.3v-.5c0-3.1,2.7-5.3,5.6-5.3s5.1,2.4,5.3,5.3v.2Z"/>   <path d="M24,20c2.2-2,5.6-1.8,7.6.4s1.8,5.6-.4,7.6c-2,1.8-5.3,1.8-7.3,0"/>';

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

module.exports = Mastercard;
