import Image from "next/image";

type IconButtonType = {
  imageSrc: string;
  altText: string;
  onClick?: () => void;
  onMouseDown?: () => void;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  text?: string | null;
  spacing?: number;
  visibleOnParentHover?: boolean;
  eventPropagation?: boolean;
  extraClasses?: string;
};

const IconButton: React.FC<IconButtonType> = ({
  imageSrc,
  altText,
  onClick,
  onMouseDown,
  width = 24,
  height = 24,
  fill = false,
  sizes = "100vw",
  spacing = 12,
  text = null,
  visibleOnParentHover = false,
  eventPropagation = true,
  extraClasses = "",
}) => {
  const onClickButton = (
    onClick: () => void,
    eventPropagation: boolean,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    onClick();
    if (!eventPropagation) {
      e.stopPropagation();
    }
  };

  const onMouseDownButton = (
    onMouseDown: () => void,
    eventPropagation: boolean,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    onMouseDown();
    if (!eventPropagation) {
      e.stopPropagation();
    }
  };

  return (
    <button
      style={{ padding: `${spacing}px` }}
      className={`relative flex items-center justify-center overflow-hidden ${extraClasses} ${
        visibleOnParentHover ? "invisible group-hover:visible" : ""
      }`}
      onMouseDown={(e) =>
        onMouseDown && onMouseDownButton(onMouseDown, eventPropagation, e)
      }
      onClick={(e) => onClick && onClickButton(onClick, eventPropagation, e)}
    >
      {!fill ? (
        <Image
          src={`/${imageSrc}`}
          alt={altText}
          width={width}
          height={height}
        />
      ) : (
        <Image src={`/${imageSrc}`} alt={altText} fill sizes={sizes} />
      )}
      {text && <p className="ml-1 text-lg">{text}</p>}
    </button>
  );
};

export default IconButton;
