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
  <div className="container ">
      <div className="grid text-gray-900 grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between">
              <div>
                  <h3 className="text-2xl font-semibold text-center">Substack</h3>
                  <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                      <span className="text-4xl font-semibold">$9</span>/ month
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
                  <button className="w-full py-2 text-gray-900 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 transition-colors duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-md">Subscribe</button>
              </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between">
              <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
              </div>
              <div>
                  <h3 className="text-2xl font-semibold text-center">Pro</h3>
                  <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                      <span className="text-4xl font-semibold">$19</span>/ month
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
                  <button className="w-full py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-600 transition-colors duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 rounded-md">Subscribe</button>
              </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-xl rounded-lg dark:bg-zinc-800 justify-between">
              <div>
                  <h3 className="text-2xl font-semibold text-center">Enterprise</h3>
                  <div className="mt-4 text-center text-zinc-700 dark:text-zinc-400">
                      <span className="text-4xl font-semibold">$49</span>/ month
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
                  <button className="w-full py-2 text-gray-900 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 transition-colors duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-md">Subscribe</button>
              </div>
          </div>
      </div>
  </div>
</div>
    );

    const B = (
            <div>
    <div className="container mx-auto px-4">
        <div className="grid text-gray-800 grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col p-6 bg-white dark:bg-zinc-850 justify-between border border-gray-200 rounded-xl shadow-md">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Substack</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-extrabold">$9</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            Access to Standard Articles
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            Monthly Newsletter
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            Community Forum Access
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-lg font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">Subscribe</button>
                </div>
            </div>
            
            <div className="relative flex flex-col p-6 bg-white dark:bg-zinc-850 justify-between border border-purple-600 rounded-xl shadow-md">
                <div className="px-3 py-1 text-xs font-medium text-white uppercase bg-gradient-to-r from-purple-500 to-pink-600 rounded-full inline-block absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Pro</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-extrabold">$19</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            All Basic Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            Exclusive In-Depth Tutorials
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            Early Access to New Content
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded hover:opacity-90">Subscribe</button>
                </div>
            </div>
            
            <div className="flex flex-col p-6 bg-white dark:bg-zinc-850 justify-between border border-gray-200 rounded-xl shadow-md">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Enterprise</h3>
                    <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                        <span className="text-4xl font-extrabold">$49</span>/ month
                    </div>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            All Pro Features Plus
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-white text-xs bg-green-600 rounded-full mr-3 p-2" />
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <button className="w-full py-2 text-lg font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</div>
    );

    const C = (
            <div>
  <div className="container mx-auto px-4">
    <div className="grid text-gray-800 grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
      <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200 dark:border-gray-700">
        <div>
          <h3 className="text-2xl font-bold text-center">Substack</h3>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            <span className="text-4xl font-bold">$9</span>/ month
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              Access to Standard Articles
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              Monthly Newsletter
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              Community Forum Access
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">Subscribe</button>
        </div>
      </div>
      <div className="relative flex flex-col p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-indigo-500 dark:border-indigo-400">
        <div className="px-3 py-1 text-xs text-indigo-500 bg-transparent rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center">Pro</h3>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            <span className="text-4xl font-bold">$19</span>/ month
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              All Basic Features Plus
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              Exclusive In-Depth Tutorials
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              Early Access to New Content
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600">Subscribe</button>
        </div>
      </div>
      <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200 dark:border-gray-700">
        <div>
          <h3 className="text-2xl font-bold text-center">Enterprise</h3>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            <span className="text-4xl font-bold">$49</span>/ month
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              All Pro Features Plus
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-600 text-sm bg-white rounded-full mr-3 p-1.5" />
              One-on-One Mentorship
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">Subscribe</button>
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
