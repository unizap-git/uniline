'use strict';

var React = require('react');

function Modify(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,4.8l-2.1-2.1c-.4-.4-1-.4-1.4,0l-2.8,2.8c-.4.4-.4,1,0,1.4l2.1,2.1"/>   <path d="M14.5,18.7l2.1,2.1c.4.4,1,.4,1.4,0l2.8-2.8c.4-.4.4-1,0-1.4l-2.1-2.1"/>   <path d="M21.5,5.3l-2.8-2.8c-.8-.8-2.1-.8-2.8,0L2.5,15.9c-.4.4-.6.9-.6,1.4,0,.5.2,1,.6,1.4l2.8,2.8c.4.4.9.6,1.4.6s1-.2,1.4-.6l13.4-13.4c.8-.8.8-2,0-2.8ZM10,15c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,13c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM14,11c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M20.0708 9.58588L15.8282 5.34324C15.0472 4.56219 13.7808 4.56219 12.9998 5.34324L7.34292 11.0001C6.56188 11.7811 6.56188 13.0475 7.34292 13.8285L11.5856 18.0712"/><path d="M28.9287 37.4143L33.1714 41.6569C33.9524 42.438 35.2187 42.438 35.9998 41.6569L41.6566 36.0001C42.4377 35.219 42.4377 33.9527 41.6566 33.1717L37.414 28.929"/><rect x="34.6064" y="4.9082" width="12" height="42" rx="2" transform="rotate(45 34.6064 4.9082)"/><circle cx="24" cy="24" r="2"/><circle cx="20" cy="28" r="2"/><circle cx="28" cy="20" r="2"/>';

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

module.exports = Modify;
