'use strict';

var React = require('react');

function BellActive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z"/>   <path fill-rule="evenodd" d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z" clip-rule="evenodd"/>   <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z"/>' : '<path d="m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = BellActive;
