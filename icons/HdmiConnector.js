'use strict';

var React = require('react');

function HdmiConnector(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,23c-1.6,0-3.2-.3-4.7-1-.5-.2-.7-.8-.5-1.3.2-.5.8-.7,1.3-.5,2.4,1.1,5.2,1.1,7.6,0,.5-.2,1.1,0,1.3.5.2.5,0,1.1-.5,1.3-1.5.7-3,1-4.7,1Z"/>   <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM12,4c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5.7-1.5,1.5-1.5ZM5.5,13c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5,1.5.7,1.5,1.5-.7,1.5-1.5,1.5ZM6,7.5c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5ZM14.5,22.5c-.6,0-1-.4-1-1,0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5,1.5-.4,1-1,1-1-.4-1-1c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5-.4,1-1,1ZM15,7.5c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5ZM18.5,13c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5,1.5.7,1.5,1.5-.7,1.5-1.5,1.5Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43"/><path d="M15.5 42.1091C18.0797 43.3221 20.9607 44 24 44C27.0393 44 29.9203 43.3221 32.5 42.1091"/><circle cx="15" cy="15" r="3"/><circle cx="11" cy="23" r="3"/><circle cx="24" cy="11" r="3"/><circle cx="33" cy="15" r="3"/><circle cx="37" cy="23" r="3"/>';

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

module.exports = HdmiConnector;
