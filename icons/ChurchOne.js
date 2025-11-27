'use strict';

var React = require('react');

function ChurchOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,2v6" stroke-miterlimit="2"/>   <path d="M10,4h4" stroke-miterlimit="2"/>   <path d="M7.5,14h-3c-.6,0-1,.4-1,1v7"/>   <path d="M16.5,14h3c.6,0,1,.4,1,1v7"/>   <path d="M2,22h20" stroke-miterlimit="2"/>   <path d="M17.2,10.8l-4.5-4c-.4-.3-1-.3-1.3,0l-4.5,4c-.2.2-.3.5-.3.7v10.5c0,.6.4,1,1,1h4.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1h4.5c.6,0,1-.4,1-1v-10.5c0-.3-.1-.6-.3-.7Z"/>   <path d="M10,22h4" stroke-miterlimit="2"/>' : '<path d="M24 4V16"/><path d="M20 8L28 8"/><path d="M15 28H9C7.89543 28 7 28.8954 7 30V44"/><path d="M33 28H39C40.1046 28 41 28.8954 41 30V44"/><path d="M4 44L44 44"/><path d="M15 23L24 15L33 23V44H15V23Z"/><path d="M24 34V44"/><path d="M20 44L28 44"/>';

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

module.exports = ChurchOne;
