'use strict';

var React = require('react');

function TajMahal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,14h-4c-.6,0-1,.4-1,1v7"/>   <path d="M16,14h4c.6,0,1,.4,1,1v7"/>   <path d="M10,12h4s2.6-2.8,2-4.5c-.4-1.1-1.2-1.7-2-2.5-.8-.8-2-2-2-2,0,0-1.2,1.2-2,2-.8.8-1.6,1.4-2,2.5-.6,1.7,2,4.5,2,4.5Z"/>   <path d="M2,22h20"/>   <path d="M16,11h-8c-.6,0-1,.4-1,1v10c0,.6.4,1,1,1h4c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1h4c.6,0,1-.4,1-1v-10c0-.6-.4-1-1-1Z"/>   <path d="M12,2v1.5" stroke-miterlimit="2"/>   <path d="M5,12v2" stroke-miterlimit="2"/>   <path d="M19,12v2" stroke-miterlimit="2"/>   <path d="M10,22h4" stroke-miterlimit="2"/>' : '<path d="M16 28H8C6.89543 28 6 28.8954 6 30V44"/><path d="M32 28H40C41.1046 28 42 28.8954 42 30V44"/><path d="M19.9994 24H27.9994C27.9994 24 33.1652 18.3215 31.9994 15C31.2446 12.8494 29.5615 11.6597 27.9994 10C26.4373 8.34027 23.9994 6 23.9994 6C23.9994 6 21.5615 8.34027 19.9994 10C18.4373 11.6597 16.7542 12.8494 15.9994 15C14.8337 18.3215 19.9994 24 19.9994 24Z"/><path d="M4 44H44"/><path d="M16 24H24H32V44H16V24Z"/><path d="M24 34V44"/><path d="M24 4V7"/><path d="M10 24V28"/><path d="M38 24V28"/><path d="M20 44L28 44"/>';

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

module.exports = TajMahal;
