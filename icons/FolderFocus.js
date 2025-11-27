'use strict';

var React = require('react');

function FolderFocus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5h-8l-2.2-2.6c-.2-.2-.5-.4-.8-.4H3.5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM16.5,13.5l-1.6,1.4.4,2.1c0,.4,0,.8-.4,1-.3.2-.7.3-1.1,0l-1.9-1.1-1.9,1.1c-.2,0-.3.1-.5.1s-.4,0-.6-.2c-.3-.2-.5-.6-.4-1l.4-2.1-1.6-1.4c-.3-.3-.4-.7-.3-1,.1-.4.4-.6.8-.7l2.1-.2.9-1.9c.2-.4.5-.6.9-.6s.7.2.9.6l.9,1.9,2.1.2c.4,0,.7.3.8.7.1.4,0,.8-.3,1Z"/>' : '<path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"/><path d="M24 20L26.243 24.9128L31.6085 25.5279L27.6292 29.1792L28.7023 34.4721L24 31.816L19.2977 34.4721L20.3708 29.1792L16.3915 25.5279L21.757 24.9128L24 20Z"/>';

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

module.exports = FolderFocus;
