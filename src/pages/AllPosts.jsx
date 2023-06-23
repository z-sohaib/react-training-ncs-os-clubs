import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function AllPosts() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <>
      <div className="p-16 flex flex-col gap-y-4">
        {isPending && <div>Loading Posts...</div>}
        {data &&
          data.map((element) => (
            <div
              key={element.id}
              className="bg-green-400 text-white rounded-xl py-4 px-4"
            >
              <p className="mb-4">{element.title}</p>
              <Link
                to={`/posts/${element.id}`}
                className="border-white border-2 rounded-xl px-4 py-2 mt-4"
              >
                Go to Post
              </Link>
            </div>
          ))}
        {error && <div className="text-red-500">{error.message}</div>}
      </div>
    </>
  );
}
