'use strict';

var React = require('react');

function City(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,21h20"/>   <path d="M19,1h-10c-1.1,0-2,.9-2,2v9h-2c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h2c.4,0,.7-.1,1-.3.3.2.6.3,1,.3h10c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM6.5,18h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM13,10.5h-2v-2h2v2ZM13,7h-2v-2h2v2ZM17,17.5h-2v-2h2v2ZM17,14h-2v-2h2v2ZM17,10.5h-2v-2h2v2ZM17,7h-2v-2h2v2Z"/>' : '<path d="M4 42H44"/><rect x="8" y="26" width="8" height="16" rx="2"/><path d="M12 34H13"/><rect x="16" y="4" width="24" height="38" rx="2"/><rect x="22" y="10" width="4" height="4"/><rect x="30" y="10" width="4" height="4"/><rect x="22" y="17" width="4" height="4"/><rect x="30" y="17" width="4" height="4"/><rect x="30" y="24" width="4" height="4"/><rect x="30" y="31" width="4" height="4"/>';

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

module.exports = City;
