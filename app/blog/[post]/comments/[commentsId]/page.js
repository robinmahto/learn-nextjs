const Comments1 = async ({ params, searchParams }) => {
  console.log("params: ", await params);
  console.log("searchParams: ", await searchParams);
  return (
    <div>
      Comments1: <input type="text" placeholder="Enter your comment" />
    </div>
  );
};

export default Comments1;
