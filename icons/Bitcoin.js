'use strict';

var React = require('react');

function Bitcoin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1.3C6.1,1.3,1.3,6.1,1.3,12s4.8,10.8,10.7,10.8,10.8-4.8,10.8-10.8S17.9,1.3,12,1.3M12.7,6.5c0-.4-.4-.7-.8-.7-.4,0-.7.3-.7.7v.8h-2.3c-.4,0-.7.4-.7.8,0,.4.3.7.7.7h.3v6.5h-.3c-.4,0-.7.4-.7.8,0,.4.3.7.7.7h2.3v.8c0,.4.4.7.8.7.4,0,.7-.3.7-.7v-.8h.3c1.5,0,2.8-1.2,2.7-2.8,0-.8-.3-1.5-.9-2,1.1-1,1.1-2.8,0-3.9-.5-.5-1.2-.9-2-.9h-.3v-.8ZM10.7,11.3v-2.5h2.3c.7,0,1.3.6,1.3,1.3s-.6,1.3-1.3,1.3h-2.3ZM10.7,12.7h2.3c.7,0,1.3.6,1.3,1.3s-.6,1.3-1.3,1.3h-2.3v-2.5Z" fill-rule="evenodd"/>' : '<path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10,10-4.5,10-10S17.5,2,12,2"/>   <path d="M13,12h-3M13,12c1.1,0,2-.9,2-2s-.9-2-2-2h-1M13,12c1.1,0,2,.9,2,2s-.9,2-2,2h-1M10,12v-4M10,12v4M9,8h1M9,16h1M10,8h2M10,16h2M12,8v-1.5M12,16v1.5"/>';

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

module.exports = Bitcoin;
