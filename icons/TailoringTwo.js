'use strict';

var React = require('react');

function TailoringTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 5H37.4142C36.5233 5 36.0771 6.07714 36.7071 6.70711L41.2929 11.2929C41.9229 11.9229 43 11.4767 43 10.5858V6C43 5.44772 42.5523 5 42 5Z"/><path d="M8 43H12.5858C13.4767 43 13.9229 41.9229 13.2929 41.2929L8.70711 36.7071C8.07714 36.0771 7 36.5233 7 37.4142L7 42C7 42.5523 7.44772 43 8 43Z"/><path d="M14 4V32C14 33.1046 14.8954 34 16 34H44"/><path d="M21 13H35V27"/><path d="M14 13H6"/><path d="M36 42V34"/>' : '<path d="M42 5H37.4142C36.5233 5 36.0771 6.07714 36.7071 6.70711L41.2929 11.2929C41.9229 11.9229 43 11.4767 43 10.5858V6C43 5.44772 42.5523 5 42 5Z"/><path d="M8 43H12.5858C13.4767 43 13.9229 41.9229 13.2929 41.2929L8.70711 36.7071C8.07714 36.0771 7 36.5233 7 37.4142L7 42C7 42.5523 7.44772 43 8 43Z"/><path d="M14 4V32C14 33.1046 14.8954 34 16 34H44"/><path d="M21 13H35V27"/><path d="M14 13H6"/><path d="M36 42V34"/>';

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

module.exports = TailoringTwo;
