'use strict';

var React = require('react');

function CloudStorage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,13.5H2c-.6,0-1,.4-1,1v6.5c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-6.5c0-.6-.4-1-1-1ZM17.8,19c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2Z"/>   <path d="M2,14.5L4.5,2.5h15l2.5,12"/>   <path d="M9.5,8c-1.1,0-2,.7-2,1.7s1,1.7,2.3,1.7h.6"/>   <path d="M14.5,8c1,0,2,.5,2,1.7s-1.1,1.7-2.4,1.7h-.7"/>   <path d="M14.5,8c0-1.5-1-2.5-2.5-2.5s-2.5,1-2.5,2.5"/>   <path d="M10,11.5h4" stroke-miterlimit="2"/>' : '<path d="M44 29H4V42H44V29Z"/><path d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"/><path d="M19.006 16.0259C16.8635 16.0259 15 17.5124 15 19.5128C15 21.9998 17.0947 22.9998 19.6973 22.9998C20.1437 22.9998 20.5567 22.9998 20.9768 22.9998"/><path d="M29.007 16.0259C31.1039 16.0259 33 16.9994 33 19.5128C33 21.9998 30.8902 22.9998 28.2877 22.9998C27.8412 22.9998 27.4013 22.9998 26.9871 22.9998"/><path d="M29.0069 16.0261C29.0069 13.0423 27.0231 11 23.9998 11C20.9766 11 19.0059 12.9927 19.0059 16.0261"/><path d="M20 23H28"/>';

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

module.exports = CloudStorage;
