import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return (
    <>
      <div className="p-16 flex flex-col place-items-start gap-y-4">
        {isPending && <div>Loading Post...</div>}
        {data && (
          <div className="bg-green-400 text-white rounded-xl py-4 px-4">
            <p className="mb-4 font-bold">{data.title}</p>
            <p>{data.body}</p>
          </div>
        )}
        {error && <div className="text-red-500">{error.message}</div>}
        <button
          className="bg-green-500 text-white text-xl rounded-xl py-2 px-4"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
