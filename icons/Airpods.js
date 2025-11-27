'use strict';

var React = require('react');

function Airpods(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,1c-2.1,0-3.9,1.1-4.9,3,0,.1-.1.3-.1.5v4.1c0,.2,0,.3.1.5,1,2,3.2,3.2,5.4,3v10c0,.6.4,1,1,1h3c.6,0,1-.4,1-1V6.5c0-3-2.5-5.5-5.5-5.5ZM7.5,7.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M22.9,4c-.9-1.8-2.8-3-4.9-3-3,0-5.5,2.5-5.5,5.5v15.5c0,.6.4,1,1,1h3c.6,0,1-.4,1-1v-10c2.2.2,4.4-1,5.4-3,0-.1.1-.3.1-.5v-4.1c0-.2,0-.3-.1-.5ZM17,7.5h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M36 4C31.0294 4 27 8.02944 27 13V44H33V21.4879C33.9383 21.8195 34.9481 22 36 22C39.4829 22 42.5038 20.0216 44 17.1272V8.8728C42.5038 5.97844 39.4829 4 36 4Z"/><path d="M12 4C16.9706 4 21 8.02944 21 13V44H15V21.4879C14.0617 21.8195 13.0519 22 12 22C8.51707 22 5.49623 20.0216 4 17.1272V8.8728C5.49623 5.97844 8.51707 4 12 4Z"/><path d="M15 13H14"/><path d="M33 13H34"/>';

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

module.exports = Airpods;
