'use strict';

var React = require('react');

function SwitchButton(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,1H6C3.2,1,1,3.2,1,6s2.2,5,5,5h12c2.8,0,5-2.2,5-5s-2.2-5-5-5ZM18,8c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>   <path d="M18,13H6c-2.8,0-5,2.2-5,5s2.2,5,5,5h12c2.8,0,5-2.2,5-5s-2.2-5-5-5ZM6,20c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>' : '<path d="M36 4H12C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20H36C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4Z"/><path d="M36 28H12C7.58172 28 4 31.5817 4 36C4 40.4183 7.58172 44 12 44H36C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28Z"/><path d="M36 14C37.1046 14 38 13.1046 38 12C38 10.8954 37.1046 10 36 10C34.8954 10 34 10.8954 34 12C34 13.1046 34.8954 14 36 14Z"/><path d="M12 38C13.1046 38 14 37.1046 14 36C14 34.8954 13.1046 34 12 34C10.8954 34 10 34.8954 10 36C10 37.1046 10.8954 38 12 38Z"/>';

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

module.exports = SwitchButton;
