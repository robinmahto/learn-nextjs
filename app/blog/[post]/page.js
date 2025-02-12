const Post = async ({ params, searchParams }) => {
  console.log("params: ", await params);
  console.log("searchParams: ", await searchParams);
  return <div>This is the blog post</div>;
};

export default Post;
