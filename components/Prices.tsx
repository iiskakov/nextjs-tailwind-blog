'use client';
export default function Prices() {

    
    const getCookie = (name) => {
    // Check if code is running in the browser environment
    if (typeof window !== "undefined") {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = value;
            return acc;
        }, {});
        return cookies[name] || '';
    }
    // Return a default value (or handle it as needed) when not in the browser environment
    return '';
};

    const cookieValue = getCookie('USER_EXPERIMENT');
    const bucket = cookieValue ? cookieValue.split('.')[0] : '';
    console.log("Bucket is ", bucket);
    console.log('Bucket equals A:', 'A' === bucket);
    console.log('Bucket equals B:', 'B' === bucket);
    console.log('Bucket equals C:', 'C' === bucket);


    const A = (
            <div className="container">
        <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-8">
            <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center">Premium</h3>
                    <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                        <span className="text-4xl font-bold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            Community Forum Access
                        </li>
                        <li className="flex items-center">
                            Exclusive In-Depth Tutorials
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 rounded-md shadow-sm">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
                <div>
                    <h3 className="text-2xl font-bold text-center">Professional</h3>
                    <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                        <span className="text-4xl font-bold">$49</span>/ month
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            All Premium Features Plus
                        </li>
                        <li className="flex items-center">
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:ring-4 focus:ring-indigo-300 rounded-md shadow-sm">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const B = (
            
    <div className="container">
            <div className="grid text-gray-800 grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl dark:bg-gray-700 justify-between border border-gray-300">
                    <div className="px-4 py-2 text-sm bg-gradient-to-r from-pink-600 to-purple-600 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Popular
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-center">Premium</h3>
                        <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
                            <span className="text-5xl font-extrabold">$19</span>/ month
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center">
                                Community Forum Access
                            </li>
                            <li className="flex items-center">
                                Exclusive In-Depth Tutorials
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-3 font-bold">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl dark:bg-gray-700 justify-between border border-purple-600">
                    <div>
                        <h3 className="text-3xl font-semibold text-center">Professional</h3>
                        <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
                            <span className="text-5xl font-extrabold">$49</span>/ month
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center">
                                All Premium Features Plus
                            </li>
                            <li className="flex items-center">
                                One-on-One Mentorship
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-3 text-white font-bold bg-gradient-to-r from-pink-600 to-purple-600">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    );

    const C = (
            <div className="container">
        <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-8">
            <div className="relative flex flex-col p-6 bg-white shadow rounded-lg dark:bg-gray-800 justify-between border border-gray-200">
                <div className="px-3 py-1 text-xs text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-center">Premium</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-3xl font-semibold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            Community Forum Access
                        </li>
                        <li className="flex items-center">
                            Exclusive In-Depth Tutorials
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow rounded-lg dark:bg-gray-800 justify-between border border-indigo-500">
                <div>
                    <h3 className="text-xl font-semibold text-center">Professional</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-3xl font-semibold">$49</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            All Premium Features Plus
                        </li>
                        <li className="flex items-center">
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-l">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    switch (bucket) {
        case 'A':
            return A;
        case 'B':
            return B;
        case 'C':
            return C;
    }
    
}
