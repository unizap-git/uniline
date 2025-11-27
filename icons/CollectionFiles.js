'use strict';

var React = require('react');

function CollectionFiles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,6.6l-4.5-5.2c-.2-.2-.5-.3-.8-.3H4c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V7.2c0-.2,0-.5-.2-.7ZM17.9,12l-2.3,2.1.6,3.1c0,.4,0,.8-.4,1-.2.1-.4.2-.6.2s-.3,0-.5-.1l-2.7-1.5-2.7,1.5c-.3.2-.8.2-1.1,0-.3-.2-.5-.6-.4-1l.6-3.1-2.3-2.1c-.3-.3-.4-.7-.3-1,.1-.4.4-.6.8-.7l3.1-.4,1.3-2.9c.2-.4.5-.6.9-.6s.7.2.9.6l1.3,2.9,3.1.4c.4,0,.7.3.8.7s0,.8-.3,1Z"/>' : '<path d="M8 44V4H31L40 14.5V44H8Z"/><path d="M24 15L27.0841 21.7551L34.4616 22.6008L28.9902 27.6214L30.4656 34.8992L24 31.247L17.5344 34.8992L19.0098 27.6214L13.5384 22.6008L20.9159 21.7551L24 15Z"/>';

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

module.exports = CollectionFiles;
