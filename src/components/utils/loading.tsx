import Image from "next/image";
import PageWrapper from "./pagewrapper";

type LoadingSpinnerType = {
  width?: number;
  height?: number;
};

export const LoadingSpinner: React.FC<LoadingSpinnerType> = ({
  width = 32,
  height = 32,
}) => {
  return (
    <figure className="absolute pt-10">
      <Image
        src="/icons/tail-spin-loader.svg"
        alt="loading"
        width={width}
        height={height}
        priority
      />
    </figure>
  );
};

export const WrappedLoadingSpinner: React.FC<LoadingSpinnerType> = (props) => {
  return (
    <PageWrapper>
      <LoadingSpinner {...props} />
    </PageWrapper>
  );
};
