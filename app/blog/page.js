import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div>Blog page</div>
      <Link href={"/"}>Home</Link> <Link href={"/services"}>Services</Link>{" "}
      <Link href={"/blog/post"}>Post</Link>
    </>
  );
};

export default Blog;
