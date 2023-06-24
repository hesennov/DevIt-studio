import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[750px] bg-gray-100 ">
      <div className="max-w-md px-8 py-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
