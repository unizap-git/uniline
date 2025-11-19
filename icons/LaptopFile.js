'use strict';

var React = require('react');

function LaptopFile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571v1.34031C19.6804 7.04375 19.3453 7 19 7h-3.566c-1.1074 0-2.1653.45912-2.9217 1.26802l-2.434 2.60308C9.38544 11.612 9 12.5886 9 13.603V19c0 .3453.04375.6804.12602 1H4c-1.10457 0-2-.8954-2-2v-1c0-1.1046.89543-2 2-2V5.78571Z"/>   <path d="M15 9.04765V13h-3.9069c.0892-.282.2406-.5432.4461-.763l2.434-2.60299c.2776-.29692.6365-.49959 1.0268-.58636Z"/>   <path d="M17 9v4c0 1.1046-.8954 2-2 2h-4v4c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2h-2Z"/>' : '<path d="M19.2857 7V5.78571c0-.43393-.3482-.78571-.7778-.78571H6.06345c-.42955 0-.77777.35178-.77777.78571V16m0 0h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1h5m-4-3h4m7.00002-6v3c0 .5523-.4477 1-1 1h-3m8-3v8c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1v-5.397c0-.2536.0963-.4977.2696-.683l2.434-2.603c.189-.2022.4535-.317.7304-.317h3.566c.5523 0 1 .4477 1 1Z"/>';

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

module.exports = LaptopFile;
