'use strict';

var React = require('react');

function RightBar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M15,21V3c0-.6.4-1,1-1H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h11.5c-.6,0-1-.4-1-1Z"/>     <path d="M19.5,2h-3.5c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h3.5c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M14.5,21h3"/>   <path d="M14.5,3h3"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M32 6V42"/><path d="M29 42H35"/><path d="M29 6H35"/>';

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

module.exports = RightBar;
