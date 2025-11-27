'use strict';

var React = require('react');

function ShoulderBag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,3l-4.5,7h9l-4.5-7Z"/>   <path d="M22.1,9.9c-.5-.6-1.2-.9-1.9-.9H3.8c-.7,0-1.5.3-1.9.9-.5.6-.7,1.3-.5,2.1h0l1.5,8c.2,1.2,1.3,2,2.5,2h13.3c1.2,0,2.2-.9,2.5-2l1.5-8c.1-.7,0-1.5-.5-2.1ZM12,18c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>' : '<path d="M4.68209 23.5639C4.32813 21.7145 5.74562 20 7.62861 20H40.3714C42.2544 20 43.6719 21.7145 43.3179 23.5639L40.2557 39.5639C39.9851 40.9777 38.7486 42 37.3092 42H10.6908C9.25141 42 8.01487 40.9777 7.74429 39.5639L4.68209 23.5639Z"/><path d="M24 6L15 20H33L24 6Z"/><circle cx="24" cy="31" r="3"/>';

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

module.exports = ShoulderBag;
