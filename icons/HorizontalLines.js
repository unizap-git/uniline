'use strict';

var React = require('react');

function HorizontalLines(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,13H5c-.6,0-1-.4-1-1s.4-1,1-1h14c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M18,19H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5ZM18,17H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5ZM18,15H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5ZM18,10H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5ZM18,8H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5ZM18,6H6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h12c.3,0,.5.2.5.5s-.2.5-.5.5Z"/>' : '<path d="M5 12h14"/>   <path d="M6 9.5h12m-12-2h12m-12-2h12m-12 13h12m-12-2h12m-12-2h12"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = HorizontalLines;
