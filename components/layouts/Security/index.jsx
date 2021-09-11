import Image from "next/image";

const Security = ({ ...props }) => {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">{props.children}</div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/wallpaperLogin.jpg"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Security;
