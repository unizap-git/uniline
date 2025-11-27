'use strict';

var React = require('react');

function Folder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,1H4.5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h15c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM13,18.5h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1ZM7,14.5c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1ZM21,2.8c-.6,2-2.5,5.4-6,6.7-.2,1.4-1.5,2.5-3,2.5s-2.7-1.1-3-2.5c-3.5-1.3-5.4-4.7-6-6.7-.2-.5.2-1.1.7-1.2.5-.2,1.1.2,1.2.7,0,.2,1.2,3.9,4.5,5.3.5-.9,1.5-1.5,2.6-1.5s2.1.6,2.6,1.5c3.3-1.4,4.4-5.1,4.5-5.3.2-.5.7-.8,1.2-.7.5.2.8.7.7,1.2Z"/>   <path d="M7.5,2h-3c-.6,0-1,.4-1,1v3"/>   <path d="M16.5,2h3c.6,0,1,.4,1,1v3"/>' : '<path d="M7 6C7 4.89543 7.89543 4 9 4H39C40.1046 4 41 4.89543 41 6V42C41 43.1046 40.1046 44 39 44H9C7.89543 44 7 43.1046 7 42V6Z"/><path d="M16 29H20"/><path d="M16 35H26"/><path d="M8 5C8 5 11.7647 18 24 18C36.2353 18 40 5 40 5"/><circle cx="24" cy="18" r="4"/><path d="M15 4H9C7.89543 4 7 4.89543 7 6V12"/><path d="M33 4H39C40.1046 4 41 4.89543 41 6V12"/>';

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

module.exports = Folder;
