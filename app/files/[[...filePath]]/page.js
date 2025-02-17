import React from "react";

const Files = async ({ params }) => {
  const filepath = await params;
  console.log(filepath);
  return <div>FilePath</div>;
};

export default Files;
