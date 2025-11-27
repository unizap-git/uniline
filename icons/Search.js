'use strict';

var React = require('react');

function Search(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10.5,1C5.3,1,1,5.3,1,10.5s4.3,9.5,9.5,9.5,9.5-4.3,9.5-9.5S15.7,1,10.5,1ZM14,7.9c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-1.1-1.1-3.1-1.1-4.2,0s-1,.4-1.4,0-.4-1,0-1.4c.9-.9,2.2-1.5,3.5-1.5s2.6.5,3.5,1.5.4,1,0,1.4Z"/>   <path d="M16.6,16.6l4.2,4.2"/>' : '<path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"/><path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"/><path d="M33.2216 33.2217L41.7069 41.707"/>';

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

module.exports = Search;
