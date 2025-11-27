'use strict';

var React = require('react');

function SwitchOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1.5C6.2,1.5,1.5,6.2,1.5,12s4.7,10.5,10.5,10.5,10.5-4.7,10.5-10.5S17.8,1.5,12,1.5ZM15.4,15.9h-6.7c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6h6.7c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6Z"/>   <path d="M8.6,10.7c-.9,0-1.6.7-1.6,1.6s.7,1.6,1.6,1.6h4.9c-.3-.4-.5-.9-.5-1.5s.3-1.3.7-1.8h-5.1Z"/>' : '<circle cx="24" cy="24" r="19"/><rect x="36.0063" y="19.3335" width="10.5189" height="24.0125" rx="5.25944" transform="rotate(90 36.0063 19.3335)"/><rect x="36.0063" y="29.8525" width="10" height="10" rx="5" transform="rotate(-180 36.0063 29.8525)"/>';

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

module.exports = SwitchOne;
