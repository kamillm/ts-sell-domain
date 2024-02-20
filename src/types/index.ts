import { CSSProperties, MouseEventHandler, PropsWithChildren, TouchEventHandler } from "react";
import { ImageLoader, StaticImageData } from "next/image";

import { UrlObject } from "url";

export interface ExtraTWClassProps {
  className?: string;
}

export type ComponentProps = PropsWithChildren<ExtraTWClassProps>;

export interface LinkProps extends ComponentProps {
  external?: boolean;
  href: string;
  as?: string | UrlObject;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onTouchStart?: TouchEventHandler<HTMLAnchorElement>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface ImageProps extends ExtraTWClassProps {
  src: StaticImageData | string;
  alt: string;
  width?: number; // | `${number}`
  height?: number;
  fill?: boolean | undefined;
  loader?: ImageLoader | undefined;
  quality?: number | undefined;
  priority?: boolean | undefined;
  loading?: "lazy" | "eager" | undefined;
  placeholder?: "blur" | "empty" | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  sizes?: string;
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
