import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Home</div>
      <Link href={"/profile"}>Profile</Link>
      <Link href="/blog">Blog</Link>
    </>
  );
};

export default page;
