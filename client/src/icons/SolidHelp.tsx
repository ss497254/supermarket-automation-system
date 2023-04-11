import * as React from "react";

function SvgSolidHelp(
  props: React.SVGProps<SVGSVGElement> & { size?: number },
) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-.165 11.692c-.454 0-.823-.346-.823-.792 0-.442.369-.792.823-.792.457 0 .827.346.827.792 0 .446-.366.792-.827.792zM9.38 7.965c-.67.389-.896.673-.896 1.166v.304H7.15l-.012-.331c-.065-.792.212-1.285.908-1.692.65-.389.923-.635.923-1.112 0-.477-.461-.827-1.034-.827-.581 0-1 .377-1.031.946H5.538c.027-1.238.943-2.115 2.489-2.115 1.442 0 2.434.8 2.434 1.95 0 .765-.369 1.292-1.08 1.711z" />
    </svg>
  );
}

export default SvgSolidHelp;
