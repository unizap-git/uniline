'use strict';

var React = require('react');

function SoybeanMilkMaker(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,5h2.5c.3,0,.5.2.5.5l.4,6.5c0,.3-.2.5-.5.5h-4.5"/>   <path d="M3.5,2.5h14l-2,13H7.5l-1.5-10.5-2.5-2.5Z"/>   <path d="M18.4,21.2l-2-6c-.1-.4-.5-.7-.9-.7H7.5c-.4,0-.8.3-.9.7l-2,6c-.1.3,0,.6.1.9s.5.4.8.4h12c.3,0,.6-.2.8-.4.2-.3.2-.6.1-.9ZM12.5,19.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M35 10H40.0644C40.5909 10 41.0272 10.4082 41.0622 10.9335L41.9289 23.9335C41.9674 24.5107 41.5096 25 40.9311 25H32"/><path d="M7 5H35L31 31H15L12 10L7 5Z"/><path d="M15 31H31L35 43H11L15 31Z"/><path d="M21 37H25"/>';

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

module.exports = SoybeanMilkMaker;
