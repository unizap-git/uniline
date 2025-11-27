'use strict';

var React = require('react');

function DocDetail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="9.5" y="7" width="5" height="3"/>   <path d="M19.5,1H5.5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM12,19h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h3.5c.6,0,1,.4,1,1s-.4,1-1,1ZM15.5,16h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,11c0,.6-.4,1-1,1h-7c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h7c.6,0,1,.4,1,1v5Z"/>' : '<path d="M39 4H11C9.89543 4 9 4.89543 9 6V42C9 43.1046 9.89543 44 11 44H39C40.1046 44 41 43.1046 41 42V6C41 4.89543 40.1046 4 39 4Z"/><path d="M17 30L31 30"/><path d="M17 36H24"/><rect x="17" y="12" width="14" height="10"/>';

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

module.exports = DocDetail;
