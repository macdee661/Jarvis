// Teams.js
import React from 'react';
import image from '../assets/2024.jpg';

export default function Teams() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-10">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Teams</h1>
                </div>
                <div className="w-full flex flex-col items-center mb-10">
                    <div className="w-full flex justify-end mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-48 p-2 pl-4 border-2 border-gray-300 rounded-full shadow-inner focus:outline-none focus:border-blue-500"
                                placeholder="Search Teams..."
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <a href="programs/2024"  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src="https://media.licdn.com/dms/image/D560BAQGduWVumMms2w/company-logo_200_200/0/1693524837640/edvancify_logo?e=1729728000&v=beta&t=Ba8CVDw_wtqPY3LVFWwegud2WZZqpdIkcGMwjUbVAhk" alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desync</h3>
                                <p className="text-gray-700 mb-2">Getting rid of VC Analysts one at a time</p>
                                <div className="text-gray-700 mb-2">
                                    <strong>Team Members:</strong>
                                    <ul>
                                        <li><a href="https://example.com/member1" className="text-blue-500 hover:underline">Mark Evgenev ❌😴</a></li>
                                        <li><a href="https://example.com/member2" className="text-blue-500 hover:underline">Maks Kubicki🔫</a></li>
                                    </ul>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Website:</strong> <a href="https://www.desync.ai/" target="_blank" className="text-blue-500 hover:underline">desync.ai</a>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Earned:</strong> $50,000
                                </div>
                                <div className="text-gray-700">
                                    <strong>Raised:</strong> $200,000
                                </div>
                            </div>
                        </a>
                        <a href="programs/2025" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src="https://media.licdn.com/dms/image/D4D0BAQF4HZcu2Xamkg/company-logo_200_200/0/1709052656802?e=1729728000&v=beta&t=q2Njuq1ht7ZHpBxqUitl1JNQxhFoOBz-_O6SykaDQYs" alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tauro</h3>
                                <p className="text-gray-700 mb-2">Beef {">"} Chicken</p>
                                <div className="text-gray-700 mb-2">
                                    <strong>Team Members:</strong>
                                    <ul>
                                        <li><a href="https://example.com/member3" className="text-blue-500 hover:underline">Joe Hunt</a></li>
                                    </ul>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Website:</strong> <a href="https://example.com" className="text-blue-500 hover:underline">https://example.com</a>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Earned:</strong> $60,000
                                </div>
                                <div className="text-gray-700">
                                    <strong>Raised:</strong> $250,000
                                </div>
                            </div>
                        </a>
                        <a href="programs/2026" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src="https://media.licdn.com/dms/image/D560BAQFUhAkwMWfh8g/company-logo_200_200/0/1718835071404/joinrostr_logo?e=1729728000&v=beta&t=dNV_Djl3mD2DxM9XsZluAj3XQZKnqgYVfeN5UQAjmPU" alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">R2R 2026</h3>
                                <p className="text-gray-700 mb-2">2026 promises to bring innovative changes and even more engagement from our community.</p>
                                <div className="text-gray-700 mb-2">
                                    <strong>Team Members:</strong>
                                    <ul>
                                        <li><a href="https://example.com/member5" className="text-blue-500 hover:underline">Member 5</a></li>
                                        <li><a href="https://example.com/member6" className="text-blue-500 hover:underline">Member 6</a></li>
                                    </ul>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Website:</strong> <a href="https://example.com" className="text-blue-500 hover:underline">https://example.com</a>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Earned:</strong> $70,000
                                </div>
                                <div className="text-gray-700">
                                    <strong>Raised:</strong> $300,000
                                </div>
                            </div>
                        </a>
                        <a href="programs/2027" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src="https://media.licdn.com/dms/image/C560BAQH0zDQAcOUdfQ/company-logo_200_200/0/1677395073171/mili_llama_logo?e=1729728000&v=beta&t=PVMr-g6diuadECMIMVrUWBFLawQbwvUJ7zSyRgZi_AY" alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">R2R 2027</h3>
                                <p className="text-gray-700 mb-2">2027 will focus on sustainability and long-term growth, making it an exciting year ahead.</p>
                                <div className="text-gray-700 mb-2">
                                    <strong>Team Members:</strong>
                                    <ul>
                                        <li><a href="https://example.com/member7" className="text-blue-500 hover:underline">Member 7</a></li>
                                        <li><a href="https://example.com/member8" className="text-blue-500 hover:underline">Member 8</a></li>
                                    </ul>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Website:</strong> <a href="https://example.com" className="text-blue-500 hover:underline">https://example.com</a>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Earned:</strong> $80,000
                                </div>
                                <div className="text-gray-700">
                                    <strong>Raised:</strong> $350,000
                                </div>
                            </div>
                        </a>
                        <a href="programs/2024" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src="https://media.licdn.com/dms/image/D560BAQGduWVumMms2w/company-logo_200_200/0/1693524837640/edvancify_logo?e=1729728000&v=beta&t=Ba8CVDw_wtqPY3LVFWwegud2WZZqpdIkcGMwjUbVAhk" alt="Current Program Image" className="w-full h-62 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desync</h3>
                                <p className="text-gray-700 mb-2">Getting rid of VC Analysts one at a time</p>
                                <div className="text-gray-700 mb-2">
                                    <strong>Team Members:</strong>
                                    <ul>
                                        <li><a href="https://example.com/member1" className="text-blue-500 hover:underline">Mark Evgenev ❌😴</a></li>
                                        <li><a href="https://example.com/member2" className="text-blue-500 hover:underline">Maks Kubicki🔫</a></li>
                                    </ul>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Website:</strong> <a href="https://www.desync.ai/" className="text-blue-500 hover:underline">desync.ai</a>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <strong>Earned:</strong> $50,000
                                </div>
                                <div className="text-gray-700">
                                    <strong>Raised:</strong> $200,000
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
