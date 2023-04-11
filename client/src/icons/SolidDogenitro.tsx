import * as React from "react";

function SvgSolidDogenitro(
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
      <path d="M15.132 4.977A4.868 4.868 0 0012.9 2.744C12.03 2.248 10.79 2 9.55 2H8.063v2.977h1.24c.621 0 1.241.124 1.737.248.496.248.869.62 1.117 1.116.248.496.372 1.24.372 2.109 0 .868-.124 1.612-.373 2.108-.247.496-.62.868-1.116.992-.372.248-.992.372-1.612.372H8.063V14.9H9.55c1.364 0 2.48-.248 3.349-.744a4.868 4.868 0 002.232-2.232c.496-.993.745-2.109.745-3.473.123-1.365-.125-2.481-.745-3.473z" />
      <path d="M8.31 6.713H5.085c-.372 0-.62-.248-.62-.62s.248-.62.62-.62h3.1c.373 0 .62.248.62.62s-.247.62-.495.62zM8.31 11.302H5.085c-.248 0-.62-.248-.62-.62s.248-.62.62-.62h3.1c.373 0 .62.248.62.62s-.247.62-.495.62zM8.31 9.07H.62c-.372 0-.62-.248-.62-.62 0-.373.248-.62.62-.62h7.69c.372 0 .62.247.62.62 0 .372-.372.62-.62.62z" />
    </svg>
  );
}

export default SvgSolidDogenitro;
