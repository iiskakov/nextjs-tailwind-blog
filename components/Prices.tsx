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
    <div className="container mx-auto max-w-7xl">
        <div className="grid text-black grid-cols-1 gap-8 px-6 py-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-xl dark:bg-zinc-800 justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <div className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full inline-block absolute top-4 -translate-y-full">
                    Popular
                </div>
                <div>
                    <h3 className="text-3xl font-semibold mb-4 text-center">Premium</h3>
                    <div className="text-center text-zinc-700 dark:text-zinc-300">
                        <span className="text-5xl font-extrabold">
                            $19
                        </span>
                        / month
                    </div>
                    <ul className="my-6 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-xs bg-green-600 rounded-full p-1.5 mr-3" />
                            Access to Standard Articles
                        </li>
                        <!-- ... more list items ... -->
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg">Subscribe</button>
                </div>
            </div>
            <!-- ... other card ... -->
        </div>
    </div>
</div>
    );

    const B = (
            <div>
    <div className="container mx-auto px-4">
        <div className="grid text-gray-800 grid-cols-1 gap-6 my-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="relative flex flex-col p-4 bg-white shadow-xl rounded-xl dark:bg-gray-700 justify-between border border-gray-200 dark:border-gray-600">
                <div className="px-3 py-1 text-xs font-semibold text-gray-800 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center">Premium</h3>
                    <div className="mt-2 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-3xl font-bold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        {/* List items remain the same */}
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500 font-semibold">Subscribe</button>
                </div>
            </div>
            {/* Second plan remains the same */}
        </div>
    </div>
</div>
    );

    const C = (
            <div>
  <div className="container">
      <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-8">
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-300">
              <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
              </div>
              <div>
                  <h3 className="text-2xl font-semibold text-center">Premium</h3>
                  <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                      <span className="text-5xl font-black">$19</span><span className="text-xl font-medium">/ mo</span>
                  </div>
                  <ul className="mt-4 space-y-3">
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          Access to Standard Articles
                      </li>
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          Monthly Newsletter
                      </li>
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          Community Forum Access
                      </li>
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          Exclusive In-Depth Tutorials
                      </li>
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          Early Access to New Content
                      </li>
                  </ul>
              </div>
              <div className="mt-6">
                  <button className="w-full py-2 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all">Subscribe Now</button>
              </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-indigo-500">
              <div>
                  <h3 className="text-2xl font-semibold text-center">Professional</h3>
                  <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                      <span className="text-5xl font-black">$49</span><span className="text-xl font-medium">/ mo</span>
                  </div>
                  <ul className="mt-4 space-y-3">
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          All Premium Features Plus
                      </li>
                      <li className="flex items-center">
                          <CheckIcon className="text-green-600 text-sm bg-transparent rounded-full mr-2 p-1" />
                          One-on-One Mentorship
                      </li>
                  </ul>
              </div>
              <div className="mt-6">
                  <button className="w-full py-2 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all hover:bg-gradient-to-l">Subscribe Now</button>
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
