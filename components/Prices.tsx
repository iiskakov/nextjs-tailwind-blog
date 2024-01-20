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
    <div className="container max-w-7xl mx-auto">
        <div className="grid text-black grid-cols-1 gap-6 mt-4 md:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl dark:bg-zinc-900 justify-between border border-gray-200">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Substack</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-extrabold">$9</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-green-100 text-xs bg-green-600 rounded-full mr-3 p-1.5" />
                            Access to Standard Articles
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-green-100 text-xs bg-green-600 rounded-full mr-3 p-1.5" />
                            Monthly Newsletter
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-green-100 text-xs bg-green-600 rounded-full mr-3 p-1.5" />
                            Community Forum Access
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-2 text-black bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">Subscribe</button>
                </div>
            </div>
            <!-- Rest of the code remains the same to keep the mutation moderate -->
        </div>
    </div>
</div>
    );

    const B = (
            <div>
  <div className="container ">
    <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
      <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
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
          <button className="w-full rounded-md transition-colors duration-200 hover:bg-gray-100 focus:ring focus:ring-purple-500 focus:outline-none">Subscribe</button>
        </div>
      </div>
      <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500 hover:shadow-2xl transition-shadow duration-300">
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
              <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
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
          <button className="w-full rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-500 transition-colors duration-200 hover:from-pink-400 hover:to-purple-400">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
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
          <button className="w-full rounded-md transition-colors duration-200 hover:bg-gray-100 focus:ring focus:ring-purple-500 focus:outline-none">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );

    const C = (
            <div>
    <div className="container">
        <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-200">
                <div>
                    <h3 className="text-2xl font-bold text-center">Substack</h3>
                    <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                        <span className="text-4xl font-bold">$9</span>/ month
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            Access to Standard Articles
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            Monthly Newsletter
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            Community Forum Access
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-black bg-gradient-to-r from-blue-500 to-green-400 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring focus:border-blue-300">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
                <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full inline-block absolute top-0 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center">Pro</h3>
                    <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                        <span className="text-4xl font-bold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            All Basic Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            Exclusive In-Depth Tutorials
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            Early Access to New Content
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring focus:border-purple-300">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-200">
                <div>
                    <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                    <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                        <span className="text-4xl font-bold">$49</span>/ month
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            All Pro Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-2 p-1" />
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-black bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring focus:border-green-300">
                        Subscribe
                    </button>
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
