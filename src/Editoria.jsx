const Editoria = () => {
    const editorialTeam = [
        { name: "Prof. I. C. Ogwude", role: "Editor-in-Chief" },
        { name: "Prof. M. S. Stephens (FUTA, Akure)", role: "Associate Editor" },
        { name: "Dr. A. A. Akanmu (Oke-Ogun, Oyo)", role: "Managing Editor" },
        { name: "Prof. Umar Adam (Fed. Uni. Transportation, Daura)", role: "Editor" },
        { name: "Prof. Bamidele A. Badejo (O. O. U, Ago-Iwoye)", role: "Editor" },
        { name: "Prof. Calistus C. Ibe (FUTO)", role: "Editor" },
        { name: "Prof. E. E. Okoko (Uni. Calabar)", role: "Editor" },
    ];

    const boardOfAdvisers = [
        { name: "Dr. Segun Ochuko Obayendo", role: "Chairman" },
        { name: "Prof. Samuel G. Odewumi"},
        { name: "Prof. Osi. I. Akpoghomeh"},
        { name: "Dr. Kayode Opeife  (Managing Director/CEO. NRC)"},
        { name: "Captain Chris Najoma (Director General/CEO. NCAA)"},
        { name: "Dr. Abubakar Dantsho (Managing Director, NPA)"},
        { name: "Mrs. Olubunmi Kuku (Managing Director/CEO. FAAN) "},
        { name: "Dr. Dayo Mobereola (Director General/CEO. NIMASA)" }
    ];

    return (
        <div className="w-full">
            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden md:block max-h-96 overflow-x-auto px-4">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead className="sticky top-0 bg-blue-800">
                        <tr>
                            <th className="px-6 py-4 whitespace-nowrap text-white font-semibold text-center">
                                Editorial Team
                            </th>
                            <th className="px-6 py-4 whitespace-nowrap text-white font-semibold text-center">
                                Board of Advisers
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {Array.from({ length: Math.max(editorialTeam.length, boardOfAdvisers.length) }).map((_, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 text-center">
                                    {editorialTeam[index]?.name || ""}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 text-center">
                                    {boardOfAdvisers[index]?.name || ""}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards (shown on mobile) */}
            <div className="md:hidden space-y-6 px-4">
                {/* Editorial Team Section */}
                <div>
                    <div className="bg-blue-800 text-white py-3 rounded-t-lg">
                        <h3 className="text-center font-semibold text-lg">Editorial Team</h3>
                    </div>
                    {editorialTeam.map((person, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <div className="text-center">
                                <div className="font-medium text-gray-900 text-lg">{person.name}</div>
                                <div className="text-gray-600 mt-1">{person.role}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Board of Advisers Section */}
                <div>
                    <div className="bg-green-800 text-white py-3 rounded-t-lg">
                        <h3 className="text-center font-semibold text-lg">Board of Advisers</h3>
                    </div>
                    {boardOfAdvisers.map((person, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <div className="text-center">
                                <div className="font-medium text-gray-900 text-lg">{person.name}</div>
                                <div className="text-gray-600 mt-1">{person.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Editoria;