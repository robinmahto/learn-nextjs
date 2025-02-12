const Comments = async ({ params, searchParams }) => {
  console.log("params: ", await params);
  console.log("searchParams: ", await searchParams);
  return <div>Comments</div>;
};

export default Comments;
