'use client';
export default function Prices() {
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
            <div>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid text-gray-900 grid-cols-1 gap-6 mt-4 md:grid-cols-3 lg:gap-10 xl:gap-14">
            <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between border border-gray-200">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Substack</h3>
                    <div className="mt-6 text-center text-zinc-700 dark:text-zinc-200">
                        <span className="text-5xl font-extrabold">$9</span>/ month
                    </div>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            Access to Standard Articles
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            Monthly Newsletter
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            Community Forum Access
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 text-lg font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">Subscribe</button>
                </div>
            </div>
            <div className="relative flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between border border-purple-600">
                <div className="px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                    Popular
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Pro</h3>
                    <div className="mt-6 text-center text-zinc-700 dark:text-zinc-200">
                        <span className="text-5xl font-extrabold">$19</span>/ month
                    </div>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-2 p-2" />
                            All Basic Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            Exclusive In-Depth Tutorials
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            Early Access to New Content
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-md hover:bg-opacity-90">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between border border-gray-200">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Enterprise</h3>
                    <div className="mt-6 text-center text-zinc-700 dark:text-zinc-200">
                        <span className="text-5xl font-extrabold">$49</span>/ month
                    </div>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            All Pro Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-2 p-1.5" />
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 text-lg font-medium text-gray-900 bg-transparent border border-gray-400 rounded-md hover:bg-gray-200">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</div>

    );

    const B = (
            <div>
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-12">

      <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between border border-gray-400">
        <div>
          <h3 className="text-2xl font-semibold text-center">Substack</h3>
          <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
            <span className="text-5xl font-semibold">$9</span>/ month
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center text-sm">
              <CheckIcon className="text-emerald-500 rounded-full mr-2 p-1" />
              Access to Standard Articles
            </li>
            <li className="flex items-center text-sm">
              <CheckIcon className="text-emerald-500 rounded-full mr-2 p-1" />
              Monthly Newsletter
            </li>
            <li className="flex items-center text-sm">
              <CheckIcon className="text-emerald-500 rounded-full mr-2 p-1" />
              Community Forum Access
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="w-full py-2 text-lg font-medium text-indigo-600 bg-indigo-100 rounded-md">Subscribe</button>
        </div>
      </div>

      <!-- ... other pricing cards with similar changes ... -->

    </div>
  </div>
</div>
    );

    const C = (
            <div>
        <div className="container mx-auto px-4">
            <div className="grid text-gray-800 grid-cols-1 gap-6 mt-8 md:grid-cols-3 lg:gap-12">
                <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-300">
                    <div>
                        <h3 className="text-2xl font-semibold text-center">Substack</h3>
                        <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
                            <span className="text-5xl font-bold">$9</span>/ month
                        </div>
                        <ul className="my-6 space-y-3">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                                Access to Standard Articles
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                                Monthly Newsletter
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                                Community Forum Access
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-3 text-lg text-gray-100 bg-gradient-to-r from-green-500 to-green-700 rounded-md hover:from-green-600 hover:to-green-800">Subscribe</button>
                    </div>
                </div>
                <div className="relative flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-purple-600">
                    <div className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-pink-600 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2">
                        Popular
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center">Pro</h3>
                        <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
                            <span className="text-5xl font-bold">$19</span>/ month
                        </div>
                        <ul className="my-6 space-y-3">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
                                All Basic Features Plus
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
                                Exclusive In-Depth Tutorials
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
                                Early Access to New Content
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-3 text-lg text-gray-100 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-300">
                    <div>
                        <h3 className="text-2xl font-semibold text-center">Enterprise</h3>
                        <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
                            <span className="text-5xl font-bold">$49</span>/ month
                        </div>
                        <ul className="my-6 space-y-3">
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                                All Pro Features Plus
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                                One-on-One Mentorship
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-3 text-lg text-gray-100 bg-gradient-to-r from-gray-500 to-gray-700 rounded-md hover:from-gray-600 hover:to-gray-800">Subscribe</button>
                    </div>
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

    return (
        <div>
            <div className="container ">
                <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
                    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                        <div>
                            <h3 className="text-2xl font-bold text-center">Substack</h3>
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
                            </ul>
                        </div>
                        <div className="mt-6">
                            <button className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500">Subscribe</button>
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
                                    One-on-One Mentorship
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <button className="w-full">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
