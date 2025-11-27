'use strict';

var React = require('react');

function TerminationFile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,8.2V3c0-.6-.4-1-1-1H5c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h5"/>   <path d="M8,7h6.5" stroke-miterlimit="2"/>   <path d="M8,10.5h2.5" stroke-miterlimit="2"/>   <path d="M17,11c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM21.2,21.2c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-7-7c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l7,7c.4.4.4,1,0,1.4Z"/>   <path d="M12,17c0-2.8,2.2-5,5-5"/>   <path d="M17,23c-.6,0-1-.4-1-1s.4-1,1-1c2.2,0,4-1.8,4-4s.4-1,1-1,1,.4,1,1c0,3.3-2.7,6-6,6Z"/>' : '<path d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"/><path d="M16 14H29"/><path d="M16 21H21"/><path d="M34 44C28.4772 44 24 39.5228 24 34C24 28.4772 28.4772 24 34 24C39.5228 24 44 28.4772 44 34C44 39.5228 39.5228 44 34 44Z"/><path d="M27 27L41 41"/><path d="M24 34C24 28.4772 28.4772 24 34 24"/><path d="M34 44C39.5228 44 44 39.5228 44 34"/>';

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

module.exports = TerminationFile;
