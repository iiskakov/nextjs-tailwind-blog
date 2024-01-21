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
        <div className="grid text-gray-800 grid-cols-1 gap-6 mt-4 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col p-5 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-200">
                <div className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-center">Premium</h3>
                    <div className="mt-3 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-3xl font-semibold">$19</span>/ month
                    </div>
                    <ul className="mt-3 space-y-3">
                        <li className="flex items-center justify-center">
                            Community Forum Access
                        </li>
                        <li className="flex items-center justify-center">
                            Exclusive In-Depth Tutorials
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <button className="w-full py-3 text-gray-800 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-md shadow-md">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-5 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-blue-500">
                <div>
                    <h3 className="text-xl font-semibold text-center">Professional</h3>
                    <div className="mt-3 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-3xl font-semibold">$49</span>/ month
                    </div>
                    <ul className="mt-3 space-y-3">
                        <li className="flex items-center justify-center">
                            All Premium Features Plus
                        </li>
                        <li className="flex items-center justify-center">
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <button className="w-full py-3 text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md shadow-md">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const B = (
            <div className="container">
        <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 lg:gap-x-10">
            <div className="relative flex flex-col p-6 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-700 justify-between border border-gray-300 dark:border-transparent">
                <div className="px-4 py-1 text-sm bg-blue-600 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                    Popular
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Premium</h3>
                    <div className="mt-4 text-center text-zinc-700 dark:text-zinc-300">
                        <span className="text-4xl font-extrabold">$19</span>/ month
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
                    <button className="w-full px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-700 justify-between border border-gray-300 dark:border-transparent">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Professional</h3>
                    <div className="mt-4 text-center text-zinc-700 dark:text-zinc-300">
                        <span className="text-4xl font-extrabold">$49</span>/ month
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
                    <button className="w-full px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const C = (
            <div className="container">
        <div className="grid text-black grid-cols-1 gap-6 mt-6 md:grid-cols-2 md:gap-8">
            <div className="relative flex flex-col p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-300">
                <div className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full inline-block absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Trending
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Premium</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-semibold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center justify-center">
                            Community Forum Access
                        </li>
                        <li className="flex items-center justify-center">
                            Exclusive In-Depth Tutorials
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-md hover:shadow-md">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-green-500">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Professional</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-semibold">$49</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center justify-center">
                            All Premium Features Plus
                        </li>
                        <li className="flex items-center justify-center">
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-md hover:shadow-md">Subscribe</button>
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
