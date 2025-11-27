'use strict';

var React = require('react');

function Foursquare(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.8,1.4c-.2-.2-.5-.4-.8-.4H7c-.6,0-1,.4-1,1v20c0,.5.3.9.7,1,0,0,.2,0,.3,0,.4,0,.7-.2.9-.5l4.7-8.5h3.4c.5,0,.8-.3,1-.7l3-11c0-.3,0-.6-.2-.9ZM17.5,8.5h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M16.7,11.5c0,0-.2,0-.3,0-.5-.1-.8-.7-.7-1.2l1.6-6c.1-.5.7-.8,1.2-.7.5.1.8.7.7,1.2l-1.6,6c-.1.4-.5.7-1,.7Z"/>' : '<path d="M38 4H14V44L24 26H32L38 4Z"/><path d="M35 15H25"/><path d="M36.636 9L33.3633 21"/>';

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

module.exports = Foursquare;
