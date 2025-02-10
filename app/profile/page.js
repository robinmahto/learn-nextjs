import Link from "next/link";

const page = () => {
  return (
    <>
      <div>profile pages</div>
      <Link href={"/"}>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/profile/about'>about</Link>
    </>
  );
};

export default page;
