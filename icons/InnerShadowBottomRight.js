'use strict';

var React = require('react');

function InnerShadowBottomRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.8,4.2c-2.1-2.1-4.8-3.2-7.8-3.2s-5.7,1.1-7.8,3.2c-2.1,2.1-3.2,4.8-3.2,7.8s1.1,5.7,3.2,7.8c2.1,2.1,4.8,3.2,7.8,3.2s5.7-1.1,7.8-3.2,3.2-4.8,3.2-7.8-1.1-5.7-3.2-7.8ZM17.7,17.7c-1.5,1.5-3.5,2.3-5.7,2.3s-1-.4-1-1,.4-1,1-1c1.6,0,3.1-.6,4.2-1.8,1.1-1.1,1.8-2.6,1.8-4.2s.4-1,1-1,1,.4,1,1c0,2.1-.8,4.1-2.3,5.7Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z"/><path d="M24 38C27.866 38 31.366 36.4329 33.8996 33.8996C36.4329 31.366 38 27.866 38 24"/>';

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

module.exports = InnerShadowBottomRight;
