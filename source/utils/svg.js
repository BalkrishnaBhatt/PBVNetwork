import React from 'react';
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Line,
  Text,
  Defs,
  TSpan,
  Image,
  Use,
  Mask,
  Polygon,
  Ellipse,
  LinearGradient,
  Stop,
  Pattern,
  // ClipPath,
} from 'react-native-svg';

export const SplashLogo = props => (
  <Svg viewBox="0 0 200 42" fill="none" {...props}>
    <Path fill="url(#prefix__pattern0)" d="M0 0h200v41.509H0z" />
    <Defs>
      <Pattern
        id="prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#prefix__image0"
          transform="matrix(.00692 0 0 .03333 -.019 0)"
        />
      </Pattern>
      <Image
        id="prefix__image0"
        width={150}
        height={30}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAeCAYAAAG55dfBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjU5RkMyQjI0RTZCNkRGMTFCNDM4QjhFRDFBNDQ4MDMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyNDE4NTEzNjlBMjExRTQ4QUFCRTBBMDUwOEIwNTNDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNDE4NTEyNjlBMjExRTQ4QUFCRTBBMDUwOEIwNTNDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMjY1QTNFQjA4MjA2ODExODlCQjhFNjc2OEQ2NTA5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3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"
      />
    </Defs>
  </Svg>
);

export const LoginTopCurve = props => (
  <Svg
    height={props.height}
    width={props.width}
    viewBox="0 0 414 295"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M309.818 191H95V0h319v116.825C414 159.105 354.994 191 309.818 191z"
      fill="#CBA500"
    />
    <Path
      d="M.04 295a45.153 45.153 0 010-3.77V0H414v63.481c0 51.656-41.833 77.38-67.433 84.641a46048.04 46048.04 0 01-137.362 36.108c-57.432 14.997-114.053 29.631-142.982 36.709C14.662 233.554.856 270.906.04 291.23V295z"
      fill="#000"
    />
  </Svg>
);
export const LoginBottomCurve = props => (
  <Svg
    viewBox="0 0 414 212"
    fill="none"
    {...props}
    height={props.height}
    width={props.width}>
    <Path
      d="M74.386 85.907C31.949 93.254 7.113 73.87 0 63.26V212h414V99.374c0-37.216-48.778-55.09-73.166-59.374C269.7 52.242 116.822 78.562 74.386 85.907z"
      fill="#000"
    />
    {/* <Rect
      x={319}
      y={1}
      width={38}
      height={78}
      rx={19}
      fill="#CBA500"
      stroke="#fff"
      strokeWidth={2}
    /> */}
    {/* <Path
      d="M331.849 55l-.849-.862L338 47l7 7.138-.844.862L338 48.73 331.849 55z"
      fill="#fff"
    />
    <Path
      d="M331.849 60l-.849-.862L338 52l7 7.138-.844.862L338 53.73 331.849 60zM43.8 146h-3.42l-5.72-8.66V146h-3.42v-14.04h3.42l5.72 8.7v-8.7h3.42V146zm13-5.76c0 .32-.02.653-.06 1H49c.052.693.272 1.227.66 1.6.4.36.886.54 1.46.54.852 0 1.446-.36 1.78-1.08h3.64a4.935 4.935 0 01-1.02 1.98 4.958 4.958 0 01-1.82 1.38c-.734.333-1.554.5-2.46.5-1.094 0-2.068-.233-2.92-.7a4.979 4.979 0 01-2-2c-.48-.867-.72-1.88-.72-3.04 0-1.16.232-2.173.7-3.04a4.979 4.979 0 012-2c.852-.467 1.832-.7 2.94-.7 1.08 0 2.04.227 2.88.68.84.453 1.492 1.1 1.96 1.94.48.84.72 1.82.72 2.94zm-3.5-.9c0-.587-.2-1.053-.6-1.4-.4-.347-.9-.52-1.5-.52-.574 0-1.06.167-1.46.5-.388.333-.628.807-.72 1.42h4.28zm21.323-4.5L71.603 146h-3.78l-1.76-7.24-1.82 7.24h-3.76l-3.04-11.16h3.42l1.58 7.98 1.88-7.98h3.62l1.9 7.94 1.56-7.94h3.22zm8.903-2.88v8.4c0 .84.206 1.487.62 1.94.413.453 1.02.68 1.82.68s1.413-.227 1.84-.68c.426-.453.64-1.1.64-1.94v-8.4h3.42v8.38c0 1.253-.267 2.313-.8 3.18a5.108 5.108 0 01-2.16 1.96c-.894.44-1.894.66-3 .66-1.107 0-2.1-.213-2.98-.64a4.938 4.938 0 01-2.06-1.96c-.507-.88-.76-1.947-.76-3.2v-8.38h3.42zm15.281 14.2c-.973 0-1.84-.167-2.6-.5-.76-.333-1.36-.787-1.8-1.36a3.657 3.657 0 01-.74-1.96h3.38c.04.387.22.7.54.94.32.24.714.36 1.18.36.427 0 .754-.08.98-.24.24-.173.36-.393.36-.66 0-.32-.166-.553-.5-.7-.333-.16-.873-.333-1.62-.52-.8-.187-1.466-.38-2-.58a3.588 3.588 0 01-1.38-.98c-.386-.453-.58-1.06-.58-1.82 0-.64.174-1.22.52-1.74.36-.533.88-.953 1.56-1.26.694-.307 1.514-.46 2.46-.46 1.4 0 2.5.347 3.3 1.04.814.693 1.28 1.613 1.4 2.76h-3.16a1.346 1.346 0 00-.52-.92c-.28-.227-.653-.34-1.12-.34-.4 0-.706.08-.92.24a.71.71 0 00-.32.62c0 .32.167.56.5.72.347.16.88.32 1.6.48.827.213 1.5.427 2.02.64.52.2.974.533 1.36 1 .4.453.607 1.067.62 1.84a2.94 2.94 0 01-.56 1.76c-.36.507-.886.907-1.58 1.2-.68.293-1.473.44-2.38.44zm17.133-5.92c0 .32-.02.653-.06 1h-7.74c.053.693.273 1.227.66 1.6.4.36.886.54 1.46.54.853 0 1.446-.36 1.78-1.08h3.64a4.943 4.943 0 01-1.02 1.98 4.96 4.96 0 01-1.82 1.38c-.734.333-1.554.5-2.46.5-1.094 0-2.067-.233-2.92-.7a4.975 4.975 0 01-2-2c-.48-.867-.72-1.88-.72-3.04 0-1.16.233-2.173.7-3.04a4.975 4.975 0 012-2c.853-.467 1.833-.7 2.94-.7 1.08 0 2.04.227 2.88.68.84.453 1.493 1.1 1.96 1.94.48.84.72 1.82.72 2.94zm-3.5-.9c0-.587-.2-1.053-.6-1.4-.4-.347-.9-.52-1.5-.52-.574 0-1.06.167-1.46.5-.387.333-.627.807-.72 1.42h4.28zm8.724-2.64c.4-.613.9-1.093 1.5-1.44.6-.36 1.267-.54 2-.54v3.62h-.94c-.853 0-1.493.187-1.92.56-.427.36-.64 1-.64 1.92V146h-3.42v-11.16h3.42v1.86z"
      fill="#fff"
    />
    <Path
      d="M38.48 168.96c0-4.128-6.016-2.336-6.016-5.216 0-1.2.944-1.824 2.144-1.792 1.36.016 2.064.864 2.16 1.616h1.6c-.176-1.696-1.568-2.864-3.696-2.864-2.208 0-3.696 1.248-3.696 3.088 0 4.144 6.032 2.224 6.032 5.232 0 1.056-.832 1.856-2.24 1.856-1.552 0-2.208-.928-2.304-1.856h-1.552c.032 1.84 1.616 3.088 3.856 3.088 2.416 0 3.712-1.568 3.712-3.152zm3.855 3.04h1.504l2.112-6.96 2.112 6.96h1.504l2.736-8.768h-1.44l-1.984 7.376-2.128-7.376h-1.488l-2.176 7.36-2.016-7.36h-1.488L42.335 172zm11.413 0h1.456v-8.768h-1.456V172zm.752-10.192c.528 0 .96-.432.96-.992s-.432-.992-.96-.992a.977.977 0 00-.992.992c0 .56.432.992.992.992zm4.641 3.04v-1.616h-1.456v12.928h1.456v-5.776c.544.896 1.68 1.76 3.28 1.76 2.352 0 4.16-1.84 4.16-4.56 0-2.736-1.808-4.496-4.16-4.496-1.6 0-2.752.832-3.28 1.76zm5.952 2.736c0 2.064-1.36 3.28-2.976 3.28-1.584 0-2.976-1.2-2.976-3.264 0-2.032 1.392-3.248 2.976-3.248 1.616 0 2.976 1.168 2.976 3.232zm7.133-3.264c1.504 0 2.784.944 2.768 2.656h-5.536c.16-1.712 1.344-2.656 2.768-2.656zm4.096 4.976h-1.568c-.32.944-1.152 1.616-2.464 1.616-1.488 0-2.736-.976-2.848-2.752h7.008c.032-.304.048-.56.048-.88 0-2.4-1.664-4.192-4.208-4.192-2.56 0-4.336 1.744-4.336 4.512 0 2.784 1.84 4.544 4.336 4.544 2.176 0 3.584-1.248 4.032-2.848zm14.14-6.064h-1.457v4.816c0 1.888-1.008 2.816-2.512 2.816-1.472 0-2.448-.912-2.448-2.688v-4.944h-1.44v5.136c0 2.512 1.584 3.76 3.6 3.76 1.168 0 2.24-.512 2.8-1.424V172h1.456v-8.768zm3.913 1.616v-1.616H92.92v12.928h1.457v-5.776c.543.896 1.68 1.76 3.28 1.76 2.352 0 4.16-1.84 4.16-4.56 0-2.736-1.808-4.496-4.16-4.496-1.6 0-2.753.832-3.28 1.76zm5.953 2.736c0 2.064-1.36 3.28-2.977 3.28-1.584 0-2.975-1.2-2.975-3.264 0-2.032 1.391-3.248 2.975-3.248 1.617 0 2.977 1.168 2.977 3.232z"
      fill="#CBA500"
    /> */}
  </Svg>
);
export const NextRoundArrowSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" {...props}>
    <Path
      fill="#CBA500"
      d="M227.5 0C101.855 0 0 101.855 0 227.5S101.855 455 227.5 455 455 353.145 455 227.5 353.145 0 227.5 0zm-28.024 355.589l-21.248-21.178L284.791 227.5 178.228 120.589l21.248-21.178L327.148 227.5 199.476 355.589z"
    />
  </Svg>
);
export const SignUpTopCurve = props => (
  <Svg
    height={props.height}
    width={props.width}
    viewBox="0 0 414 295"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M309.818 191H95V0h319v116.825C414 159.105 354.994 191 309.818 191z"
      fill="#CBA500"
    />
    <Path
      d="M.04 295a45.153 45.153 0 010-3.77V0H414v63.481c0 51.656-41.833 77.38-67.433 84.641a46048.04 46048.04 0 01-137.362 36.108c-57.432 14.997-114.053 29.631-142.982 36.709C14.662 233.554.856 270.906.04 291.23V295z"
      fill="#000"
    />
    {/* <Rect
      x={357}
      y={173}
      width={38}
      height={78}
      rx={19}
      transform="rotate(-180 357 173)"
      fill="#CBA500"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M344.151 119l.849.862-7 7.138-7-7.138.844-.862 6.156 6.271 6.151-6.271z"
      fill="#fff"
    />
    <Path
      d="M344.151 114l.849.862-7 7.138-7-7.138.844-.862 6.156 6.271 6.151-6.271zM40.82 82h3.62l-5.08-14.04H35.4L30.32 82h3.58l.84-2.48h5.24l.84 2.48zm-1.72-5.12h-3.46l1.72-5.14 1.74 5.14zM45.986 82h3.42V67.2h-3.42V82zm9.319-5.18c0-1.92.94-2.48 2.56-2.48h.94v-3.62c-1.5 0-2.72.8-3.5 1.98v-1.86h-3.42V82h3.42v-5.18zm10.054-3.4c1.14 0 2.1.7 2.1 1.92h-4.28c.2-1.24 1.06-1.92 2.18-1.92zm5.34 4.88h-3.64c-.28.6-.82 1.08-1.78 1.08-1.1 0-2-.68-2.12-2.14h7.74c.04-.34.06-.68.06-1 0-3.4-2.3-5.56-5.56-5.56-3.32 0-5.64 2.2-5.64 5.74s2.36 5.74 5.64 5.74c2.78 0 4.76-1.68 5.3-3.86zm1.384-1.9c0 3.52 2.18 5.76 4.9 5.76 1.66 0 2.84-.76 3.46-1.74V82h3.42V70.84h-3.42v1.58c-.6-.98-1.78-1.74-3.44-1.74-2.74 0-4.92 2.2-4.92 5.72zm8.36.02c0 1.78-1.14 2.76-2.44 2.76-1.28 0-2.44-1-2.44-2.78 0-1.78 1.16-2.74 2.44-2.74 1.3 0 2.44.98 2.44 2.76zm5.215-.02c0 3.52 2.18 5.76 4.92 5.76 1.64 0 2.82-.74 3.44-1.76V82h3.42V67.2h-3.42v5.18c-.68-1.02-1.96-1.7-3.44-1.7-2.74 0-4.92 2.2-4.92 5.72zm8.36.02c0 1.78-1.14 2.76-2.44 2.76-1.28 0-2.44-1-2.44-2.78 0-1.78 1.16-2.74 2.44-2.74 1.3 0 2.44.98 2.44 2.76zm11.034 1.4l-2.58-6.98h-3.82l4.54 10.78-2.56 5.68h3.68l7-16.46h-3.7l-2.56 6.98z"
      fill="#fff"
    />
    <Path
      d="M116.787 82h3.42v-8.44l3.16 8.44h2.76l3.14-8.42V82h3.42V67.96h-4.02l-3.9 9.72-3.94-9.72h-4.04V82zm23.279-8.58c1.14 0 2.1.7 2.1 1.92h-4.28c.2-1.24 1.06-1.92 2.18-1.92zm5.34 4.88h-3.64c-.28.6-.82 1.08-1.78 1.08-1.1 0-2-.68-2.12-2.14h7.74c.04-.34.06-.68.06-1 0-3.4-2.3-5.56-5.56-5.56-3.32 0-5.64 2.2-5.64 5.74s2.36 5.74 5.64 5.74c2.78 0 4.76-1.68 5.3-3.86zM162.85 82h3.4v-6.52c0-3-1.78-4.76-4.54-4.76-1.62 0-3.02.9-3.76 2.08-.76-1.34-2.12-2.08-3.8-2.08-1.46 0-2.6.62-3.26 1.52v-1.4h-3.42V82h3.42v-6.06c0-1.46.84-2.26 2.14-2.26 1.3 0 2.14.8 2.14 2.26V82h3.4v-6.06c0-1.46.84-2.26 2.14-2.26 1.3 0 2.14.8 2.14 2.26V82zm9.212-9.58V67.2h-3.42V82h3.42v-1.56c.62.98 1.8 1.72 3.44 1.72 2.74 0 4.92-2.24 4.92-5.76 0-3.52-2.16-5.72-4.92-5.72-1.6 0-2.82.74-3.44 1.74zm4.88 3.98c0 1.78-1.16 2.78-2.46 2.78-1.28 0-2.44-.98-2.44-2.76 0-1.78 1.16-2.76 2.44-2.76 1.3 0 2.46.96 2.46 2.74zm10.195-2.98c1.14 0 2.1.7 2.1 1.92h-4.28c.2-1.24 1.06-1.92 2.18-1.92zm5.34 4.88h-3.64c-.28.6-.82 1.08-1.78 1.08-1.1 0-2-.68-2.12-2.14h7.74c.04-.34.06-.68.06-1 0-3.4-2.3-5.56-5.56-5.56-3.32 0-5.64 2.2-5.64 5.74s2.36 5.74 5.64 5.74c2.78 0 4.76-1.68 5.3-3.86zm5.484-1.48c0-1.92.94-2.48 2.56-2.48h.94v-3.62c-1.5 0-2.72.8-3.5 1.98v-1.86h-3.42V82h3.42v-5.18zm4.454-5.32h3.22c0-.92.54-1.52 1.52-1.52.88 0 1.44.56 1.44 1.46.02 1.46-1.28 1.8-3.16 1.8h-1.2l.1 3.72h3l.1-1.5c2.62-.02 4.48-1.42 4.48-4 0-2.78-1.94-4.28-4.72-4.28-3.16 0-4.84 1.92-4.78 4.32zm5.48 8.82c0-1.06-.82-1.88-2.02-1.88-1.22 0-2.04.82-2.04 1.88 0 1.02.82 1.84 2.04 1.84 1.2 0 2.02-.82 2.02-1.84zM38.48 104.96c0-4.128-6.016-2.336-6.016-5.216 0-1.2.944-1.824 2.144-1.792 1.36.016 2.064.864 2.16 1.616h1.6c-.176-1.696-1.568-2.864-3.696-2.864-2.208 0-3.696 1.248-3.696 3.088 0 4.144 6.032 2.224 6.032 5.232 0 1.056-.832 1.856-2.24 1.856-1.552 0-2.208-.928-2.304-1.856h-1.552c.032 1.84 1.616 3.088 3.856 3.088 2.416 0 3.712-1.568 3.712-3.152zm3.855 3.04h1.504l2.112-6.96 2.112 6.96h1.504l2.736-8.768h-1.44l-1.984 7.376-2.128-7.376h-1.488l-2.176 7.36-2.016-7.36h-1.488L42.335 108zm11.413 0h1.456v-8.768h-1.456V108zm.752-10.192c.528 0 .96-.432.96-.992s-.432-.992-.96-.992a.977.977 0 00-.992.992c0 .56.432.992.992.992zm4.641 3.04v-1.616h-1.456v12.928h1.456v-5.776c.544.896 1.68 1.76 3.28 1.76 2.352 0 4.16-1.84 4.16-4.56 0-2.736-1.808-4.496-4.16-4.496-1.6 0-2.752.832-3.28 1.76zm5.952 2.736c0 2.064-1.36 3.28-2.976 3.28-1.584 0-2.976-1.2-2.976-3.264 0-2.032 1.392-3.248 2.976-3.248 1.616 0 2.976 1.168 2.976 3.232zm7.133-3.264c1.504 0 2.784.944 2.768 2.656h-5.536c.16-1.712 1.344-2.656 2.768-2.656zm4.096 4.976h-1.568c-.32.944-1.152 1.616-2.464 1.616-1.488 0-2.736-.976-2.848-2.752h7.008c.032-.304.048-.56.048-.88 0-2.4-1.664-4.192-4.208-4.192-2.56 0-4.336 1.744-4.336 4.512 0 2.784 1.84 4.544 4.336 4.544 2.176 0 3.584-1.248 4.032-2.848zm5.82-1.712c0 2.72 1.807 4.56 4.16 4.56 1.6 0 2.735-.816 3.263-1.792V108h1.472V96.16h-1.472v4.64c-.608-1.008-1.872-1.712-3.248-1.712-2.368 0-4.176 1.76-4.176 4.496zm7.423.016c0 2.064-1.376 3.264-2.976 3.264s-2.96-1.216-2.96-3.28 1.36-3.232 2.96-3.232c1.6 0 2.976 1.216 2.976 3.248zm12.253 0c0-2.768-1.936-4.512-4.432-4.512-2.48 0-4.432 1.744-4.432 4.512 0 2.784 1.888 4.544 4.368 4.544 2.496 0 4.496-1.76 4.496-4.544zm-7.376 0c0-2.208 1.392-3.248 2.928-3.248 1.504 0 2.96 1.04 2.96 3.248 0 2.224-1.488 3.264-3.008 3.264s-2.88-1.04-2.88-3.264zm11.002 4.4h1.504l2.112-6.96 2.112 6.96h1.504l2.736-8.768h-1.44l-1.984 7.376-2.128-7.376h-1.488l-2.176 7.36-2.016-7.36h-1.488l2.752 8.768zm17.829 0h1.44v-5.168c0-2.512-1.552-3.76-3.584-3.76-1.184 0-2.24.496-2.816 1.408v-1.248h-1.456V108h1.456v-4.848c0-1.888 1.024-2.816 2.512-2.816 1.472 0 2.448.912 2.448 2.704V108z"
      fill="#CBA500"
    /> */}
  </Svg>
);
export const SignUpBottomCurve = props => (
  <Svg
    height={props.height}
    width={props.width}
    viewBox="0 0 414 171"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M74.386 45.407C31.949 52.754 7.113 33.37 0 22.76V171.5h414V58.874C414 21.658 359 0 331.5 0 259.32 0 116.822 38.062 74.386 45.407z"
      fill="#000"
    />
  </Svg>
);
export const ContactTopCurve = props => (
  <Svg
    viewBox="0 0 414 231"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 178.396V0h414v180.279l-100.379-40.48c-41.15-16.569-78.405 18.828-91.889 38.597-75.509 95.271-179.283 39.696-221.732 0z"
      fill="#CBA500"
      fillOpacity={0.2}
    />
    <Path
      d="M0 167.718V0h414.5v169.488L314 131.431c-41.2-15.577-74 11.948-92 36.287-75.6 89.568-179.5 37.32-222 0z"
      fill="#CBA500"
    />
  </Svg>
);
//////////////////////////////////////////////////////////
export const OpenDrawerSymbol = props => (
  <Svg
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path stroke={props.fill} strokeWidth={2} d="M0 1h12M0 11.8h12M0 6.4h20" />
  </Svg>
);

export const CloseSymbol = props => (
  <Svg
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.566 11a.566.566 0 01-.4-.966L10.034.166a.566.566 0 11.8.8L.966 10.834a.567.567 0 01-.4.166z"
      fill="#A5A5A5"
    />
    <Path
      d="M10.434 11a.562.562 0 01-.4-.166L.167.966a.566.566 0 01.8-.8l9.868 9.868a.566.566 0 01-.4.966z"
      fill="#A5A5A5"
    />
  </Svg>
);
//////////////////////////////////////////////////////////
export const DownArrowSymbol = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" {...props}>
    <Path
      fill={props.fill}
      d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
    />
  </Svg>
);
//////////////////////////////////////////////////////////
export const CommentsSymbol = props => (
  <Svg viewBox="0 0 9 8" fill="none" {...props}>
    <Path
      d="M7.61 0H1.253C.666 0 .192.448.192 1v4c0 .552.474 1 1.06 1h1.59l2.12 2V6H7.61c.585 0 1.06-.448 1.06-1V1c0-.552-.475-1-1.06-1zm.53 5c0 .276-.237.5-.53.5H4.432v1.293L3.061 5.5H1.25c-.292 0-.53-.224-.53-.5V1c0-.276.238-.5.53-.5h6.36c.292 0 .53.224.53.5v4z"
      fill="#000"
    />
    <Path
      d="M1.781 2h5.3v-.5h-5.3V2zM1.781 3h5.3v-.5h-5.3V3zM1.781 4h3.18v-.5h-3.18V4z"
      fill="#000"
    />
  </Svg>
);
export const FavouriteSymbol = props => (
  <Svg viewBox="0 0 8 6" fill="none" {...props}>
    <Path
      d="M3.799 6a.79.79 0 01-.533-.208L.69 3.362a2.051 2.051 0 01-.472-.677 1.955 1.955 0 01-.158-.797 1.81 1.81 0 01.16-.728A1.9 1.9 0 01.663.545a2.03 2.03 0 01.659-.407c.246-.094.509-.14.774-.138.27-.002.537.046.787.143.25.097.476.24.666.421l.25.236.205-.194A2.153 2.153 0 015.337.015a2.19 2.19 0 011.417.381c.233.17.424.383.562.627a1.846 1.846 0 01.111 1.6 1.938 1.938 0 01-.47.69L4.33 5.793A.79.79 0 013.798 6zM2.086.47c-.398 0-.78.145-1.066.405-.145.133-.261.291-.34.467-.08.175-.12.364-.12.555-.002.21.04.418.124.612.083.195.207.372.364.52l2.576 2.43a.251.251 0 00.177.07.263.263 0 00.178-.07l2.628-2.481c.154-.149.273-.327.35-.522.076-.195.108-.403.092-.61a1.396 1.396 0 00-.179-.6 1.484 1.484 0 00-.428-.474 1.663 1.663 0 00-2.093.167l-.373.361a.251.251 0 01-.177.07.263.263 0 01-.178-.07L3.196.9a1.62 1.62 0 00-1.1-.43h-.01z"
      fill="#CBA500"
    />
  </Svg>
);

export const DeleteSymbol = props => (
  <Svg viewBox="0 0 6 6" fill="none" {...props}>
    <Path
      d="M1.09 1l4.24 4M1.09 5l4.24-4"
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
//////////////////////////////////////////////////////////
export const SearchSymbol = props => (
  <Svg
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.398 13.333a6.667 6.667 0 115.267-2.578l2.823 2.822a.833.833 0 01-1.179 1.179l-2.823-2.823a6.638 6.638 0 01-4.088 1.4zm0-1.666a5 5 0 100-10 5 5 0 000 10z"
      fill="#A5A5A5"
    />
    <Mask
      id="prefix__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={15}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.398 13.333a6.667 6.667 0 115.267-2.578l2.823 2.822a.833.833 0 01-1.179 1.179l-2.823-2.823a6.638 6.638 0 01-4.088 1.4zm0-1.666a5 5 0 100-10 5 5 0 000 10z"
        fill="#fff"
      />
    </Mask>
  </Svg>
);
export const PowerButtonSymbol = props => (
  <Svg
    viewBox="0 0 23 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M23 13.461a11.26 11.26 0 01-.913 4.478c-.61 1.422-1.428 2.649-2.456 3.68-1.028 1.032-2.251 1.854-3.669 2.465A11.156 11.156 0 0111.5 25c-1.557 0-3.045-.305-4.462-.916-1.418-.611-2.64-1.433-3.669-2.464-1.028-1.032-1.847-2.259-2.456-3.681A11.259 11.259 0 010 13.46c0-1.822.402-3.54 1.205-5.153a11.308 11.308 0 013.392-4.056c.43-.32.906-.446 1.43-.376.524.07.94.32 1.25.751.32.421.442.894.367 1.42a1.872 1.872 0 01-.741 1.27 7.665 7.665 0 00-2.269 2.72 7.577 7.577 0 00-.8 3.424c0 1.042.201 2.036.606 2.983.404.946.95 1.765 1.64 2.456a7.725 7.725 0 002.448 1.645 7.447 7.447 0 002.972.609 7.447 7.447 0 002.972-.609 7.724 7.724 0 002.449-1.645 7.753 7.753 0 001.64-2.456c.404-.947.606-1.94.606-2.982a7.578 7.578 0 00-.801-3.426 7.665 7.665 0 00-2.269-2.72 1.872 1.872 0 01-.741-1.269c-.075-.526.047-.999.367-1.42.31-.43.728-.68 1.257-.75a1.855 1.855 0 011.423.375 11.308 11.308 0 013.392 4.056A11.399 11.399 0 0123 13.461zM13.417 1.923v9.616c0 .52-.19.971-.57 1.352-.379.38-.828.57-1.347.57-.52 0-.968-.19-1.348-.57a1.851 1.851 0 01-.569-1.352V1.923c0-.52.19-.971.57-1.352C10.531.19 10.98 0 11.5 0c.52 0 .968.19 1.348.57.379.382.569.832.569 1.353z"
      fill={props.fill}
    />
  </Svg>
);
export const EditSymbol = props => (
  <Svg viewBox="0 0 11.495 11.496" {...props}>
    <G data-name="Group 6672">
      <G data-name="Group 5286">
        <Path
          data-name="Path 3553"
          d="M0 11.497l.221-.684a11.063 11.063 0 011.42-3.035L8.885.534A1.484 1.484 0 019.943.001a1.92 1.92 0 011.553 1.552 1.469 1.469 0 01-.532 1.059L3.72 9.855a11.06 11.06 0 01-3.036 1.42zM9.924.736c-.155 0-.308.106-.52.317L2.16 8.297a7.671 7.671 0 00-.992 2.031 7.67 7.67 0 002.031-.992l7.243-7.243c.422-.423.422-.617 0-1.039-.21-.212-.364-.318-.518-.318z"
          fill="#ffc629"
        />
      </G>
      <G data-name="Group 5287">
        <Path
          data-name="Rectangle 2015"
          fill="#ffc629"
          d="M7.845 2.092l.52-.52 1.59 1.591-.519.52z"
        />
      </G>
    </G>
  </Svg>
);

//////////////////////////////////////////////////////////
export const RadioSelectedSymbol = props => (
  <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <Path
        d="M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10 4.48 0 10 0zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-3a5 5 0 110-10 5 5 0 010 10z"
        fill="#f5aa42"
      />
    </G>
  </Svg>
);
export const RadioNotSelectedSymbol = props => (
  <Svg viewBox="0 0 20 20" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <Path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        fill="#f5aa42"
      />
    </G>
  </Svg>
);
//////////////////////////////////////////////////////////
export const UncheckedSymbol = props => (
  <Svg {...props} viewBox="0 0 15 15">
    <G
      id="Rectangle_1611"
      data-name="Rectangle 1611"
      fill="#fff"
      stroke="#ffc629"
      stroke-width="1">
      <Rect width="15" height="15" rx="3" stroke="none" />
      <Rect x="0.5" y="0.5" width="14" height="14" rx="2.5" fill="none" />
    </G>
  </Svg>
);
export const CheckedSymbol = props => (
  <Svg viewBox="0 0 15 15" {...props}>
    <G data-name="Rectangle 1991" fill="#ffc629" stroke="#ffc629">
      <Rect width={15} height={15} rx={3} stroke="none" />
      <Rect x={0.5} y={0.5} width={14} height={14} rx={2.5} fill="none" />
    </G>
    <Path
      data-name="Path 3528"
      d="M3.5 7.803l2.58 2.4 5.33-5.705"
      fill="none"
      stroke="#000001"
      strokeWidth={1.5}
    />
  </Svg>
);
//////////////////////////////////////////////////////////

export const HomeTabSymbol = props => (
  <Svg
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.6 11.016L13.747.291a1.13 1.13 0 00-1.513 0L.38 11.016a1.135 1.135 0 101.513 1.694L12.99 2.65l11.098 10.037a1.138 1.138 0 001.518-1.693l-.005.022zM23.15 14.109a1.128 1.128 0 00-1.128 1.129v8.467h-4.516v-6.21a1.13 1.13 0 00-1.13-1.128H9.604a1.129 1.129 0 00-1.13 1.129v6.21H3.959v-8.468a1.129 1.129 0 10-2.258 0v9.596a1.129 1.129 0 001.129 1.13H23.15a1.13 1.13 0 001.128-1.13v-9.596a1.13 1.13 0 00-1.128-1.13zm-12.418 9.596v-5.08h4.516v5.08h-4.516z"
      fill={props.fill}
    />
  </Svg>
);
export const NewsTabSymbol = props => (
  <Svg
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.75 8.313H22.5V6.437H3.75v1.875zm10.313 11.25h6.562v-1.875h-6.563v1.875zm0-3.75H22.5v-1.876h-8.438v1.876zm0-3.75H22.5v-1.876h-8.438v1.876zm-10.313 7.5h8.438v-9.375H3.75v9.374zm22.5-15V.813H0v20.625s0 3.75 3.75 3.75h23.438S30 25.128 30 21.438V4.563h-3.75zm-22.5 18.75c-1.875 0-1.875-1.875-1.875-1.875V2.688h22.5v18.75c0 .863.266 1.46.634 1.875H3.75z"
      fill={props.fill}
    />
  </Svg>
);
export const MemberTabSymbol = props => (
  <Svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.7 11a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-2.2a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm7.7 12.1a1.1 1.1 0 01-2.2 0v-2.2a3.3 3.3 0 00-3.3-3.3H5.5a3.3 3.3 0 00-3.3 3.3v2.2a1.1 1.1 0 01-2.2 0v-2.2a5.5 5.5 0 015.5-5.5h4.4a5.5 5.5 0 015.5 5.5v2.2zm1.1-5.5a1.1 1.1 0 010-2.2 5.5 5.5 0 015.5 5.5v2.2a1.1 1.1 0 01-2.2 0v-2.2a3.3 3.3 0 00-3.3-3.3zM14.3 11a1.1 1.1 0 010-2.2 3.3 3.3 0 000-6.6 1.1 1.1 0 010-2.2 5.5 5.5 0 010 11z"
      fill={props.fill}
    />
  </Svg>
);
export const OpportunityTabSymbol = props => (
  <Svg data-name="Layer 1" viewBox="0 0 128 128" {...props}>
    <Path
      d="M115.542 63.017A32.117 32.117 0 0063.02 73.823l-46.89.24-5.394 5.394 30.578-.429a2.465 2.465 0 01.002 4.93l-35.508.427-2.736 2.736 8.717 8.718 48.6-.187.035.002a2.74 2.74 0 012.518 1.74 32.1 32.1 0 1052.6-34.377zM98.63 92.427a8.497 8.497 0 1112.017.001 8.507 8.507 0 01-12.017-.002z"
      fill={props.fill}
    />
    <Path
      d="M51.461 39.227a19.843 19.843 0 00-4.232-2.834 48.153 48.153 0 00-5.308-2.284q-1.89-.653-3.224-1.208a14.34 14.34 0 01-2.246-1.14 3.899 3.899 0 01-1.335-1.336 3.571 3.571 0 01-.424-1.79 3.277 3.277 0 011.368-2.736 7.531 7.531 0 014.493-1.041 26.569 26.569 0 015.959.65 30.147 30.147 0 014.982 1.564l2.019-7.815a25.804 25.804 0 00-3.875-1.302 36.608 36.608 0 00-5.829-.977v-6.773h-8.205v7.033a16.401 16.401 0 00-4.95 1.661 11.056 11.056 0 00-3.386 2.768 10.94 10.94 0 00-1.92 3.614 13.815 13.815 0 00-.62 4.135 9.97 9.97 0 003.68 8.14 16.92 16.92 0 003.712 2.312q2.052.945 4.2 1.726 2.214.782 3.908 1.465a16.842 16.842 0 012.8 1.4 5.744 5.744 0 011.693 1.596 3.73 3.73 0 01.586 2.116 3.536 3.536 0 01-1.465 3.029q-1.465 1.074-5.438 1.074a23.928 23.928 0 01-6.675-.912 34.225 34.225 0 01-5.437-2.018l-2.8 7.489a44.385 44.385 0 004.395 1.79 30.457 30.457 0 007.717 1.466v7.75h8.205v-7.946a17.195 17.195 0 005.373-1.692 11.958 11.958 0 003.55-2.8 10.03 10.03 0 001.953-3.546 13.194 13.194 0 00.586-3.873 11.682 11.682 0 00-1.01-5.012 11.552 11.552 0 00-2.8-3.743z"
      fill={props.fill}
    />
  </Svg>
);
export const ChartTabSymbol = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.503 0h-.725v2.934C4.325 3.31 0 7.854 0 13.4c0 5.791 4.712 10.503 10.503 10.503 5.546 0 10.09-4.326 10.465-9.778h2.934V13.4c0-7.389-6.011-13.4-13.4-13.4zm0 22.454c-4.993 0-9.054-4.062-9.054-9.054 0-4.749 3.674-8.655 8.329-9.025v9.75h9.75c-.372 4.654-4.277 8.329-9.025 8.329zm10.5-9.778h-9.776V1.47c6.014.362 10.843 5.192 11.204 11.206h-1.427z"
      fill={props.fill}
    />
  </Svg>
);
export const NotificationTabSymbol = props => (
  <Svg
    id="prefix__Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
    fill={'rgba(255,255,255, 0.0)'}>
    <Path
      className="prefix__st0"
      stroke={props.fill}
      strokeWidth={2}
      d="M27.8 23.2l-1.1-1.7c-1.9-2.8-2.9-6.1-2.9-9.5 0-3.6-2.4-6.5-5.6-7.5C17.9 3.6 17 3 16 3s-1.9.6-2.2 1.5c-3.2 1-5.6 3.9-5.6 7.5 0 3.4-1 6.7-2.9 9.5l-1.1 1.7c-.5.8 0 1.8 1 1.8h21.6c1 0 1.5-1 1-1.8zM20 25c0 2.2-1.8 4-4 4s-4-1.8-4-4"
    />
  </Svg>
);

export const ManageTabSymbol = props => (
  <Svg
    viewBox="0 0 20 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.979 10.234a1.106 1.106 0 01-.78-1.886L6.41 6.136A1.106 1.106 0 017.69 5.93l1.565.785 2.766-2.3a1.106 1.106 0 011.366-.045l2.213 1.66A1.106 1.106 0 0114.27 7.8l-1.51-1.134-2.65 2.212a1.106 1.106 0 01-1.2.138L7.412 8.26 5.753 9.919a1.106 1.106 0 01-.774.315zM4.978 14.106a1.106 1.106 0 100-2.212 1.106 1.106 0 000 2.212zM4.978 17.978a1.106 1.106 0 100-2.212 1.106 1.106 0 000 2.212zM4.978 21.85a1.106 1.106 0 100-2.212 1.106 1.106 0 000 2.212zM14.935 14.106H8.85a1.107 1.107 0 010-2.212h6.085a1.106 1.106 0 010 2.212zM14.935 17.978H8.85a1.106 1.106 0 010-2.212h6.085a1.106 1.106 0 010 2.212zM14.935 21.85H8.85a1.106 1.106 0 110-2.212h6.085a1.106 1.106 0 110 2.212z"
      fill={props.fill}
    />
    <Path
      d="M18.807 25.722h-17.7A1.106 1.106 0 010 24.616V1.384A1.106 1.106 0 011.106.278h17.7a1.106 1.106 0 011.107 1.106v23.232a1.106 1.106 0 01-1.106 1.106zM2.213 23.51H17.7V2.49H2.213v21.02z"
      fill={props.fill}
    />
  </Svg>
);
