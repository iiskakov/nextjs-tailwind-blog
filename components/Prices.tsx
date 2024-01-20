'use client';
export default function Prices() {
    return (
        <>
            <section className="min-h-screen w-full py-2 from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
                <div className="container ">
                    <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">

                        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Basic</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$9</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Access to Standard Articles
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Monthly Newsletter
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Community Forum Access
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <button className="w-full">Subscribe</button>
                            </div>
                        </div>

                        <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
                            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                Popular
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-center">Pro</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$19</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                                        All Basic Features Plus
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Exclusive In-Depth Tutorials
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Early Access to New Content
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Ad-Free Experience
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Subscribe</button>
                            </div>
                        </div>
                        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                                    <span className="text-4xl font-bold">$49</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        All Pro Features Plus
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        One-on-One Mentorship Sessions
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Access to Exclusive Webinars
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Customizable Learning Paths
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Corporate License for Teams
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <button className="w-full">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

function CheckIcon(props) {
    
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
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out transform hover:scale-110">
    <polyline points="20 6 9 17 4 12" />
</svg>
    );

    const B = (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
  <polyline points="20 6 9 17 4 12" />
</svg>
    );

    const C = (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2.5" strokeLinecap="butt" strokeLinejoin="arcs" class="hover:stroke-blue-500 transition-colors duration-300 ease-in-out">
    <polyline points="20 6 9 17 4 12" />
</svg>
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
