'use strict';

var React = require('react');

function InnerShadowRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.8,4.2c-2.1-2.1-4.8-3.2-7.8-3.2s-5.7,1.1-7.8,3.2c-2.1,2.1-3.2,4.8-3.2,7.8s1.1,5.7,3.2,7.8c2.1,2.1,4.8,3.2,7.8,3.2s5.7-1.1,7.8-3.2,3.2-4.8,3.2-7.8-1.1-5.7-3.2-7.8ZM17.7,17.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4,1.1-1.1,1.8-2.6,1.8-4.2s-.6-3.1-1.8-4.2c-.4-.4-.4-1,0-1.4s1-.4,1.4,0c1.5,1.5,2.3,3.5,2.3,5.7s-.8,4.1-2.3,5.7Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z"/><path d="M33.8994 33.8995C36.4328 31.366 37.9999 27.866 37.9999 24C37.9999 20.134 36.4328 16.634 33.8994 14.1005"/>';

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

module.exports = InnerShadowRight;
