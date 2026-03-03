import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const id = useParams().id;
  return <div>id: {id}</div>;
};

export default BlogDetail;
