import Image from "next/image";

type LoadingSpinnerType = {
  width?: number;
  height?: number;
};

// Generates loading spinner when loading
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
