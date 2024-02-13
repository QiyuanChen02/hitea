import Image from "next/image";
import PageWrapper from "./pagewrapper";

type ErrorIconType = {
  width?: number;
  height?: number;
  text?: string;
};

export const ErrorIcon: React.FC<ErrorIconType> = ({
  width = 32,
  height = 32,
  text = "",
}) => {
  return (
    <>
      <figure className="absolute flex pt-10">
        <Image
          src="/icons/error.svg"
          alt="error icon"
          width={width}
          height={height}
          priority
        />
        {text && <p className="p-3 font-medium text-rose-600">{text}</p>}
      </figure>
    </>
  );
};

export const WrappedErrorIcon: React.FC<ErrorIconType> = (props) => {
  return (
    <PageWrapper>
      <ErrorIcon {...props} />
    </PageWrapper>
  );
};
