export default function CreateUser() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Create a new user</h2>
                
                <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
                        <input
                            id="last_name"
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last name"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block text-gray-700 mb-2">Confirm Password</label>
                    <input
                        id="confirm_password"
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm your password"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}
