import React from 'react';

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">

           
            <div className="flex items-center justify-center p-10">
                <h1>Race to Revenue</h1>
            </div>
       
          
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <div className="grid grid-cols-2 gap-8">
                    
                    <a href="create-user" className="block text-dark-blue">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg underline font-semibold mb-2">Create New User</h2>
                            <p>Add a new user to the program</p>
                        </div>
                    </a>

                    
                    <a href="programs" className="block text-dark-blue">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg underline font-semibold mb-2">View Programs</h2>
                            <p>Explore the list of previous and current porgrams</p>
                        </div>
                    </a>

                    
                    <a href="https://www.google.com" className="block text-dark-blue">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg underline font-semibold mb-2">View Teams</h2>
                            <p>View teams and their details</p>
                        </div>
                    </a>


                    <a href="https://www.google.com" className="block text-dark-blue">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg underline font-semibold mb-2">View Members</h2>
                            <p>See all members and their profiles</p>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    );
}
