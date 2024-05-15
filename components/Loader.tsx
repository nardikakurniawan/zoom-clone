import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading"
        width={50}
        height={50}
        className="size-[50px]"
      />
    </div>
  );
};

export default Loader;
