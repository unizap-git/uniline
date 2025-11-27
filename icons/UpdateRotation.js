'use strict';

var React = require('react');

function UpdateRotation(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.7,13.8c-.8,2.5-3.1,4.2-5.7,4.2s-2.7-.5-3.8-1.3c0,.5-.5.8-1,.8s-1-.4-1-1v-3c0-.5.4-.9.8-1,.5,0,1,.2,1.1.7.5,1.7,2.1,2.8,3.8,2.8s3.3-1.1,3.8-2.8c.2-.5.7-.8,1.3-.7.5.2.8.7.7,1.3ZM17.8,10.5c0,.5-.4.9-.8,1-.5,0-1-.2-1.1-.7-.5-1.7-2.1-2.8-3.8-2.8s-3.3,1.1-3.8,2.8c-.1.4-.5.7-1,.7s-.2,0-.3,0c-.5-.2-.8-.7-.7-1.3.8-2.5,3.1-4.2,5.7-4.2s2.7.5,3.8,1.3c0-.5.5-.8,1-.8s1,.4,1,1v3Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M33.5424 27C32.2681 31.0571 28.4778 34 24.0002 34C19.5226 34 15.7323 31.0571 14.458 27V33"/><path d="M33.5424 15V21C32.2681 16.9429 28.4778 14 24.0002 14C19.5226 14 15.7323 16.9429 14.458 21"/>';

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

module.exports = UpdateRotation;
