import Link from "next/link";

const Home = async () => {
  return (
    <>
      <div>Home</div>
      <Link href={"/services"}>Services</Link> <Link href="/blog">Blog</Link>{" "}
      <Link href="/about">About</Link>
    </>
  );
};

export default Home;
