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
        <div className="grid text-gray-800 grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-8">
            <div className="relative flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-slate-700 justify-between border border-gray-200">
                <div className="px-4 py-2 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-center">Premium</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-5xl font-bold">$19</span>/ month
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
                    <button className="w-full py-2 text-white bg-green-500 hover:bg-green-600 transition-colors duration-150">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-slate-700 justify-between border border-purple-600">
                <div>
                    <h3 className="text-3xl font-bold text-center">Professional</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-5xl font-bold">$49</span>/ month
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
                    <button className="w-full py-2 text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-colors duration-150">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const B = (
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
                    <button className="w-full py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md font-bold">Subscribe</button>
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
                    <button className="w-full py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md font-bold shadow-md">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const C = (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-black space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
        <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-zinc-800 justify-between border border-gray-300">
            <div className="px-4 py-1.5 text-xs font-medium uppercase text-white bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 rounded-full inline-block absolute transform -translate-x-1/2 -translate-y-1/2" style={{top: '10%', left: '50%'}}>
                Trending
            </div>
            <div>
                <h3 className="text-xl font-semibold text-center">Premium Plan</h3>
                <div className="mt-2 text-center text-zinc-700 dark:text-zinc-300">
                    <span className="text-3xl font-bold">$19</span>/ month
                </div>
                <ul className="my-4 space-y-3">
                    <li className="flex items-center justify-center">
                        Access to Community Forums
                    </li>
                    <li className="flex items-center justify-center">
                        Exclusive Tutorials & Guides
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <button className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 rounded-lg transition-colors">Get Premium</button>
            </div>
        </div>
        <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-zinc-800 justify-between border border-purple-600">
            <div>
                <h3 className="text-xl font-semibold text-center">Professional Plan</h3>
                <div className="mt-2 text-center text-zinc-700 dark:text-zinc-300">
                    <span className="text-3xl font-bold">$49</span>/ month
                </div>
                <ul className="my-4 space-y-3">
                    <li className="flex items-center justify-center">
                        All Features of Premium
                    </li>
                    <li className="flex items-center justify-center">
                        Personal Mentorship Sessions
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <button className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-lg transition-colors">Go Professional</button>
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
