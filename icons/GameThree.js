'use strict';

var React = require('react');

function GameThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,21c-2.5,0-4.5-2-4.5-4.5v-7c0-.6.4-1,1-1s1,.4,1,1v7c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5c0,2.5-2,4.5-4.5,4.5Z"/>   <path d="M18,21c-2.5,0-4.5-2-4.5-4.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5v-7c0-.6.4-1,1-1s1,.4,1,1v7c0,2.5-2,4.5-4.5,4.5Z"/>   <path d="M16,3h-8c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h8c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5ZM10.5,10.5h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM15,12c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17,9.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M19 30L19 33C19 36.866 15.866 40 12 40V40C8.13401 40 5 36.866 5 33L5 19"/><path d="M29 30L29 33C29 36.866 32.134 40 36 40V40C39.866 40 43 36.866 43 33L43 19"/><rect x="5" y="8" width="38" height="22" rx="11"/><path d="M21 19H13"/><path d="M17 15V23"/><rect x="32" y="15" width="4" height="4" rx="2"/><rect x="28" y="20" width="4" height="4" rx="2"/>';

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

module.exports = GameThree;
