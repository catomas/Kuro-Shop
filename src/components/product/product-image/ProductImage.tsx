import Image from "next/image";

interface ProductImageProps {
  priority?: boolean;
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>["className"];
  style?: React.StyleHTMLAttributes<HTMLImageElement>["style"];
  width: number;
  height: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ProductImage = ({
  priority = false,
  style,
  src,
  alt,
  className,
  width,
  height,
  onMouseEnter,
  onMouseLeave,
}: ProductImageProps) => {
  const localSrc = src
    ? src.startsWith("http")
      ? src
      : `/anime/${src}`
    : "/imgs/placeholder.jpg";

  return (
    <Image
      style={style}
      priority={priority}
      src={localSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
