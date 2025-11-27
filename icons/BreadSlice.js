'use strict';

var React = require('react');

function BreadSlice(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.9925 3.01102c-1.9214.01439-3.85188.37019-6.25505 1.0241-.01805.00491-.03595.01032-.05369.01624-.91244.30416-1.60323.7905-2.06 1.42998C3.16866 6.1185 3 6.83191 3 7.50006c0 .63697.15395 1.45811.5895 2.15498.31425.50276.78203.94286 1.4105 1.17356V19c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-8.1714c.6285-.2307 1.0962-.6708 1.4105-1.17356C20.846 8.95817 21 8.13703 21 7.50006c0-.66815-.1687-1.38156-.6238-2.01872-.4567-.63948-1.1475-1.12582-2.06-1.42998-.0177-.00592-.0356-.01133-.0536-.01624-2.4032-.65391-4.3337-1.00971-6.2551-1.0241h-.015Z"/>' : '<path d="M10.5,39.7v-20.2c-3.4,0-4.5-3.4-4.5-5.6s1.1-4.5,4.5-5.6c5.3-1.4,9.5-2.2,13.5-2.2,4,0,8.2.8,13.5,2.2,3.4,1.1,4.5,3.4,4.5,5.6s-1.1,5.6-4.5,5.6v20.2c0,1.2-1,2.2-2.2,2.2H12.8c-1.2,0-2.2-1-2.2-2.2Z"/>';

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

module.exports = BreadSlice;
