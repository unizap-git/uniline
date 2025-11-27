'use strict';

var React = require('react');

function WhiskeyGlass(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M6 6c-.27965 0-.54652.1171-.73588.32289-.18935.20579-.28389.48147-.26066.76016l.84717 10.16605C5.9802 18.804 7.28 20 8.84027 20h6.31943c1.5603 0 2.8601-1.196 2.9897-2.7509l.8471-10.16605c.0233-.27869-.0713-.55437-.2606-.76016C18.5465 6.1171 18.2797 6 18 6H6Zm1.50347 7L7.0868 8h9.8264l-.4167 5H7.50347Z" clip-rule="evenodd"/>' : '<path d="M9,28h30M6,7l2.5,30.5c.3,3.1,2.9,5.5,6,5.5h19c3.1,0,5.7-2.4,6-5.5l2.5-30.5H6Z"/>';

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

module.exports = WhiskeyGlass;
