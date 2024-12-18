import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500">404</h1>
                <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
                <p className="text-lg mt-2 text-gray-600">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <button
                    onClick={handleGoBack}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
