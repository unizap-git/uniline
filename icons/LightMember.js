'use strict';

var React = require('react');

function LightMember(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,7.5l-8.3-3.7c-.4-.2-.9,0-1.2.3l-2.3,3.3" stroke-miterlimit="2"/>   <path d="M21.5,6.5H2.5c-.8,0-1.5.7-1.5,1.5v12c0,.8.7,1.5,1.5,1.5h19c.8,0,1.5-.7,1.5-1.5v-12c0-.8-.7-1.5-1.5-1.5ZM15.4,11.9l-2.4,5c-.2.3-.5.6-.9.6h0c-.4,0-.7-.2-.9-.5l-2.6-5c-.3-.5,0-1.1.4-1.3s1.1,0,1.3.4l1.6,3.2,1.6-3.2c.2-.5.8-.7,1.3-.5.5.2.7.8.5,1.3Z"/>' : '<path d="M35.0563 15.0002L18.4627 7.66508C17.5887 7.27875 16.5635 7.56461 16.0156 8.34745L11.3589 15.0002"/><path d="M43 15H5C4.44772 15 4 15.4477 4 16V40C4 40.5523 4.44772 41 5 41H43C43.5523 41 44 40.5523 44 40V16C44 15.4477 43.5523 15 43 15Z"/><path d="M19 23L24.1026 33L29 23"/>';

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

module.exports = LightMember;
