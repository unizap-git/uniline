'use strict';

var React = require('react');

function ViciaFaba(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.5,6.7c-.5-1.8-1.7-3.4-3.3-4.2-1.7-.9-3.7-1.1-5.5-.5-2.3.8-3.2,2.6-3.8,4-.3.7-.6,1.3-1,1.8-1,1-1.7,1.2-2.7,1.5-.3,0-.6.2-.9.3-2.7.9-4.2,3-4.2,5.9s.7,3,2.1,4.2c1.7,1.5,4,2.3,6.4,2.3s.7,0,1.1,0c3.4-.4,6.3-2,8.7-4.9,1.3-1.5,4.3-6.3,3.2-10.4ZM11.6,12.6c-.6.5-1.5.8-2.4.8-1.3,0-2.7-.6-4-2.2-.3-.4-.3-1.1.2-1.4.4-.3,1.1-.3,1.4.2,1.4,1.8,2.8,1.7,3.6,1.1,1-.8,1.3-2.5-.1-4.4-.3-.4-.3-1.1.2-1.4.4-.3,1.1-.3,1.4.2,2.2,2.8,1.5,5.8-.2,7.2Z"/>   <path d="M5.5,10.5c1.5-.5,2.5-.5,4-2,1.5-1.5,1.5-4.5,4.5-5.5"/>' : '<g clip-path="url(#icon-56d0008049ae3244)"><path d="M3.99989 31.0001C4.00014 24.5001 8.0004 22.0374 11.0001 21.0187C13.9997 20.0001 16.0003 20.0001 18.9999 17.0001C21.9995 14.0001 22.0004 8.00008 28 6.00008C33.9995 4.00007 41.091 7.00011 42.9997 14.0001C44.9084 21.0001 39.5006 30.0001 37.0006 33.0001C34.5006 36.0001 29.4987 41.0001 20.9996 42.0001C12.5006 43.0001 3.99963 37.5001 3.99989 31.0001Z"/><path d="M12 21.0435C19 30 29 21.0435 22 12"/><path d="M11.0005 21.0187C14.0002 20.0001 16.0008 20.0001 19.0004 17.0001C22 14.0001 22.0009 8.00007 28.0004 6.00007"/></g><defs><clipPath id="icon-56d0008049ae3244"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = ViciaFaba;
