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
            <div className="container mx-auto px-4">
  <div className="text-black mt-2 grid gap-6 md:grid-cols-2 md:gap-8">
    <div className="relative p-6 bg-white shadow-xl rounded-xl border border-gray-300 dark:border-gray-700 flex flex-col justify-between">
      <div className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-br from-red-500 to-yellow-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Popular
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-center">Premium</h3>
        <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
          <span className="text-6xl font-extrabold">$19</span>/ month
        </div>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center text-lg">
            Community Forum Access
          </li>
          <li className="flex items-center text-lg">
            Exclusive In-Depth Tutorials
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="w-full px-4 py-2 text-xl font-semibold text-gray-900 bg-gray-300 rounded-md hover:bg-gray-400">Subscribe</button>
      </div>
    </div>
    <div className="flex p-6 bg-white shadow-xl rounded-xl border border-purple-600 flex-col justify-between">
      <div>
        <h3 className="text-3xl font-extrabold text-center">Professional</h3>
        <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
          <span className="text-6xl font-extrabold">$49</span>/ month
        </div>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center text-lg">
            All Premium Features Plus
          </li>
          <li className="flex items-center text-lg">
            One-on-One Mentorship
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="w-full px-4 py-2 text-xl font-semibold text-white bg-gradient-to-br from-purple-600 to-pink-600 rounded-md">Subscribe</button>
      </div>
    </div>
  </div>
</div>
    );

    const B = (
            <div className="container">
        <div className="grid text-gray-900 grid-cols-1 gap-6 mt-4 md:grid-cols-2 xl:gap-12">
            <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
                <div className="px-4 py-2 text-sm bg-gradient-to-r from-pink-600 to-purple-600 rounded-full inline-block absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Popular
                </div>
                <div>
                    <h3 className="text-3xl font-semibold text-center">Premium</h3>
                    <div className="mt-4 text-center text-gray-700">
                        <span className="text-5xl font-semibold">$19</span>/ month
                    </div>
                    <ul className="my-5 space-y-3">
                        <li className="flex items-center justify-center">
                            Community Forum Access
                        </li>
                        <li className="flex items-center justify-center">
                            Exclusive In-Depth Tutorials
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 rounded-md text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white">Subscribe</button>
                </div>
            </div>
            <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl justify-between border border-purple-600 hover:shadow-2xl transition-shadow duration-300">
                <div>
                    <h3 className="text-3xl font-semibold text-center">Professional</h3>
                    <div className="mt-4 text-center text-gray-700">
                        <span className="text-5xl font-semibold">$49</span>/ month
                    </div>
                    <ul className="my-5 space-y-3">
                        <li className="flex items-center justify-center">
                            All Premium Features Plus
                        </li>
                        <li className="flex items-center justify-center">
                            One-on-One Mentorship
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full py-3 rounded-md text-lg font-medium bg-gradient-to-r from-pink-600 to-purple-600 text-white">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    );

    const C = (
            <div className="container mx-auto px-4">
    <div className="grid text-black grid-cols-1 gap-6 mt-2 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div className="relative flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-gray-200">
            <div className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Popular
            </div>
            <div>
                <h3 className="text-3xl font-bold text-center mb-2">Premium</h3>
                <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                    <span className="text-5xl font-bold">$19</span>/ month
                </div>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-lg">
                        Community Forum Access
                    </li>
                    <li className="flex items-center text-lg">
                        Exclusive In-Depth Tutorials
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 focus:ring-white">Subscribe</button>
            </div>
        </div>
        <div className="flex flex-col p-8 bg-white shadow-xl rounded-xl dark:bg-gray-800 justify-between border border-blue-500">
            <div>
                <h3 className="text-3xl font-bold text-center mb-2">Professional</h3>
                <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
                    <span className="text-5xl font-bold">$49</span>/ month
                </div>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-lg">
                        All Premium Features Plus
                    </li>
                    <li className="flex items-center text-lg">
                        One-on-One Mentorship
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-400 focus:ring-white">Subscribe</button>
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
