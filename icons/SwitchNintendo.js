'use strict';

var React = require('react');

function SwitchNintendo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,1h-2.5c-2.8,0-5,2.2-5,5v11c0,2.8,2.2,5,5,5h2.5c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM6.8,17.5c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2ZM7.5,9.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M17,2h-3c-1.1,0-2,.9-2,2v17c0,1.1.9,2,2,2h3c2.8,0,5-2.2,5-5V7c0-2.8-2.2-5-5-5ZM17,7c.7,0,1.2.6,1.2,1.2s-.6,1.2-1.2,1.2-1.2-.6-1.2-1.2.6-1.2,1.2-1.2ZM18.5,16.5h-.5v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5v-.5c0-.6.4-1,1-1s1,.4,1,1v.5h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 12C6 7.58172 9.58172 4 14 4H19C20.1046 4 21 4.89543 21 6V40C21 41.1046 20.1046 42 19 42H14C9.58172 42 6 38.4183 6 34V12Z"/><path d="M42 14C42 9.58172 38.4183 6 34 6H28C26.8954 6 26 6.89543 26 8V42C26 43.1046 26.8954 44 28 44H34C38.4183 44 42 40.4183 42 36V14Z"/><rect x="11" y="30" width="5" height="5" rx="2.5"/><rect x="31.5" y="14" width="5" height="5" rx="2.5"/><path d="M15 17H12"/><path d="M34 28V34"/><path d="M31 31L37 31"/>';

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

module.exports = SwitchNintendo;
