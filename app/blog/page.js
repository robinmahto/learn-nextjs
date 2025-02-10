import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Blog page</div>
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
    </>
  );
};

export default page;
