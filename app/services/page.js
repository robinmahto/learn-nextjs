import Link from "next/link";

const Services = () => {
  return (
    <>
      <div>Services pages</div>
      <Link href={"/"}>Home</Link> {" "}
      <Link href='/blog'>Blog</Link> {" "}
      <Link href='/about'>about</Link>
    </>
  );
};

export default Services;
