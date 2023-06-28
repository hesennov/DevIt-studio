import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[300px] pt-24">
      <div className="max-w-md px-8 py-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mx-auto mt-8 px-6 py-2 rounded text-white text-xs font-light bg-indigo-400 hover:bg-indigo-500"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
