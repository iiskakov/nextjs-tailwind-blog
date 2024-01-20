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
    <div className="container mx-auto">
        <div className="grid text-black grid-cols-1 gap-6 my-8 sm:grid-cols-2 xl:gap-12">
            <div className="relative flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-zinc-800 justify-between border border-gray-200">
                <div className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-3xl font-extrabold text-center">Premium</h3>
                    <div className="mt-5 text-center text-zinc-700 dark:text-zinc-300">
                        <span className="text-5xl font-extrabold">$19</span>/ month
                    </div>
                    <ul className="mt-5 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-sm bg-green-600 rounded-full mr-3 p-2" />
                            Access to Standard Articles
                        </li>
                        <!-- Other list items omitted for brevity -->
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full px-4 py-2 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">Subscribe</button>
                </div>
            </div>
            <!-- Other pricing card omitted for brevity -->
        </div>
    </div>
</div>
    );

    const B = (
            <div>
  <div className="container">
    <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 lg:gap-12">
      <div className="relative flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-200">
        <div className="px-4 py-2 text-sm bg-blue-500 rounded-full inline-block absolute top-1 right-1 transform translate-x-2 translate-y-2">
          Popular
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center">Premium</h3>
          <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
            <span className="text-5xl font-bold">$19</span>/ month
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
              Access to Standard Articles
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
              Monthly Newsletter
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
              Community Forum Access
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
        <div className="mt-8">
          <button className="w-full py-3 text-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg hover:shadow-md transition-shadow">Subscribe</button>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-purple-600">
        <div>
          <h3 className="text-3xl font-semibold text-center">Professional</h3>
          <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
            <span className="text-5xl font-bold">$49</span>/ month
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
              All Premium Features Plus
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-white text-base bg-green-600 rounded-full mr-3 p-2" />
              One-on-One Mentorship
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="w-full py-3 text-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg hover:shadow-md transition-shadow">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );

    const C = (
            <div>
        <div className="container mx-auto">
            <div className="grid text-gray-800 grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:gap-12">
                <div className="flex flex-col p-4 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-200">
                    <div className="px-2 py-1 text-xs font-medium text-gray-800 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full inline-block absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Popular
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-center">Premium</h3>
                        <div className="mt-3 text-center text-gray-700 dark:text-gray-300">
                            <span className="text-3xl font-semibold">$19</span>/ month
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center">
                                <CheckIcon className="text-gray-100 text-xs bg-green-600 rounded-full mr-3 p-1.5" />
                                Access to Standard Articles
                            </li>
                            <!-- The rest of the list items have similar structure -->
                        </ul>
                    </div>
                    <div className="mt-4">
                        <button className="w-full py-2 text-gray-800 bg-blue-400 hover:bg-blue-500 transition-colors rounded-md font-semibold">Subscribe</button>
                    </div>
                </div>
                <!-- The second card has similar structure -->
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
                            <button className="w-full">Subscribe</button>
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
                                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                    All Premium Features Plus
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                    One-on-One Mentorship
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <button className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
