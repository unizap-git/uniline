'use strict';

var React = require('react');

function FolderLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.5,11.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.5h1v-.5Z"/>   <path d="M20.5,5h-8l-2.2-2.6c-.2-.2-.5-.4-.8-.4H3.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM16.5,17c0,.6-.4,1-1,1h-7c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h1v-.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5v.5h1c.6,0,1,.4,1,1v4Z"/>' : '<path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"/><rect x="17" y="26" width="14" height="8"/><path d="M27 26V23C27 21.3431 25.6569 20 24 20C22.3431 20 21 21.3431 21 23V26"/>';

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

module.exports = FolderLock;
