'use strict';

var React = require('react');

function Dropbox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"/>   <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"/>' : '<path d="M12,6.5l5.5,3-5.5,3-5.5-3,5.5-3Z"/>   <path d="M6,15v1.8c0,1,.2,1.4,1.1,1.8l4,2c.9.4.9.4,1.8,0l4-2c.9-.5,1.1-.8,1.1-1.8v-1.8"/>   <path d="M14.3,4.2l-2.3,2.1-2.3-2.1c-.8-.7-1.2-1.1-1.7-1.2-.5,0-1,.3-1.9.9l-1.7,1.1c-.9.6-1.3.9-1.4,1.3s.4.8,1.3,1.4l2.2,1.7-2.2,1.7c-.8.7-1.3,1-1.3,1.4s.5.7,1.4,1.3l2.6,1.7c.5.3.7.5,1,.5.3,0,.5-.2.9-.6l3.1-2.8,2.3,2.1c.8.7,1.2,1.1,1.7,1.2.5,0,1-.3,1.9-.9h0l1.7-1.1c.9-.6,1.3-.9,1.4-1.3s-.4-.8-1.3-1.4l-2.2-1.7,2.2-1.7c.8-.7,1.3-1,1.3-1.4,0-.4-.5-.7-1.4-1.3l-1.7-1.1c-.9-.6-1.4-.9-1.9-.9s-.9.4-1.7,1.2"/>';

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

module.exports = Dropbox;
