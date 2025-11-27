'use strict';

var React = require('react');

function RecordDisc(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM7,12c0,.6-.4,1-1,1s-1-.4-1-1c0-3.9,3.1-7,7-7s1,.4,1,1-.4,1-1,1c-2.8,0-5,2.2-5,5ZM9,12c0-1.7,1.3-3,3-3s3,1.3,3,3-1.3,3-3,3-3-1.3-3-3ZM12,19c-.6,0-1-.4-1-1s.4-1,1-1c2.8,0,5-2.2,5-5s.4-1,1-1,1,.4,1,1c0,3.9-3.1,7-7,7Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M24 12C17.3726 12 12 17.3726 12 24"/><path d="M24 36C30.6274 36 36 30.6274 36 24"/><path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"/>';

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

module.exports = RecordDisc;
