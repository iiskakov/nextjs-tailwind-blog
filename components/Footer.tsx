'use client';
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  
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

    const A = (
            
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
           <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
         </div> */}
      </div>
    </footer>

    );

    const B = (
            <footer>
  <div className="mt-20 flex flex-col items-center">
    <div className="mb-5 flex space-x-4">
      <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
      <SocialIcon kind="github" href={siteMetadata.github} size={6} />
      {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
       <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
    </div>
    <div className="mb-4 flex space-x-2 text-sm text-gray-600 dark:text-gray-300">
      <div>{siteMetadata.author}</div>
      <div>{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
      <div>{` • `}</div>
      <Link href="/">{siteMetadata.title}</Link>
    </div>
    {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
      <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
        Tailwind Nextjs Theme
      </Link>
     </div> */}
  </div>
</footer>

    );

    const C = (
            <footer>
  <div className="mt-20 flex flex-col items-center">
    <div className="mb-4 flex space-x-5">
      <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
      <SocialIcon kind="github" href={siteMetadata.github} size={7} />
      {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={7} />
       <SocialIcon kind="youtube" href={siteMetadata.youtube} size={7} /> */}
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} size={7} />
    </div>
    <div className="mb-3 flex space-x-2 text-base text-gray-600 dark:text-gray-300">
      <div>{siteMetadata.author}</div>
      <div>{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
      <div>{` • `}</div>
      <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
        {siteMetadata.title}
      </Link>
    </div>
    {/* <div className="mb-10 text-base text-gray-600 dark:text-gray-300">
      <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog" className="hover:text-blue-600 dark:hover:text-blue-400">
        Tailwind Nextjs Theme
      </Link>
     </div> */}
  </div>
</footer>

    );

    switch (bucket) {
        case 'A':
            return A;
        case 'B':
            return B;
        case 'C':
            return C;
        default:
            return (
                <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
           <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
         </div> */}
      </div>
    </footer>
            );
    }
    
}
