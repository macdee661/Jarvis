import React from 'react';
import image from '../assets/2024.jpg';

export default function ProgramCard() {
    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">Current Program</h1>
                <div className="w-full flex justify-center">
                    <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full md:w-2/3 lg:w-1/2">
                        <img src={image} alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">R2R 2024</h3>
                            <p className="text-gray-700">2024 is easily the best year Race to Revenue has ever had lowkey. We had great founders but the interns were awesome.</p>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">Previous Programs</h1>
                <p className="text-lg text-gray-700 text-center max-w-2xl mb-10">Explore our previous programs. Click on each card to learn more about what we offered in the past.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full">
                        <img src="https://via.placeholder.com/300x150" alt="Previous Program Image" className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">R2R 2023</h3>
                            <p className="text-gray-700">Description of the previous program. This could include details about what the program offered or its purpose.</p>
                        </div>
                    </a>
                    
                    <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full">
                        <img src="https://ideacenter.nd.edu/assets/398374/600x338/18.07.31_gb_innovation_park_131.jpg" alt="Previous Program Image" className="w-full h-48 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Previous Program Title</h3>
                            <p className="text-gray-700">Description of the previous program. This could include details about what the program offered or its purpose.</p>
                        </div>
                    </a>
                    
                    {/* Add more previous program cards as needed */}
                </div>
            </div>
        </div>
    );
}
