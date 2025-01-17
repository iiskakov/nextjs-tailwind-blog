export default function Prices() {

    return (
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
                                All Premium Features Plus
                            </li>
                            <li className="flex items-center">
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
    )
}
