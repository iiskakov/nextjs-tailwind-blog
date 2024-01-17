import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import SEO from '@/components/SEO'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  
 const getCookie = name => {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = value;
            return acc;
        }, {});
        return cookies[name] || '';
    };

    const cookieValue = getCookie('USER_EXPERIMENT');
    const bucket = cookieValue ? cookieValue.split('.')[0] : '';

    const A = (
            <div key={t} className="flex flex-row mb-5 mr-5 mt-2">
  <Tag text={t} count={tagCounts[t]} />
</div>
    );

    const B = (
            <div key={t} className="flex flex-row mb-4 mr-5 mt-2">
  <Tag text={t} count={tagCounts[t]} className=
 const getCookie = name => {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = value;
            return acc;
        }, {});
        return cookies[name] || '';
    };

    const cookieValue = getCookie('USER_EXPERIMENT');
    const bucket = cookieValue ? cookieValue.split('.')[0] : '';

    const A = (
            <div key={t} className="flex flex-row mb-5 mr-5 mt-2">
  <Tag text={t} count={tagCounts[t]} />
</div>
    );

    const B = (
            <div key={t} className="flex flex-row mb-4 mr-5 mt-2">
  <Tag text={t} count={tagCounts[t]} className="text-blue-600 dark:text-blue-400" />
</div>
    );

    const C = (
            <div key={t} className="flex flex-row mb-4 mr-5 mt-2 bg-gray-100 rounded px-2 py-1 hover:bg-gray-200 transition-colors duration-300 ease-in-out">
  <Tag text={t} count={tagCounts[t]} />
</div>
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
                <div key={t} className="flex flex-row mb-2 mr-5 mt-2">
                {/* <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`} */}
                {/* > */}
                <Tag text={t} count={tagCounts[t]} />
                {/* </Link> */}
              </div>
            );
    }
    turn (
                <div key={t} className="flex flex-row mb-2 mr-5 mt-2">
                {/* <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`} */}
                {/* > */}
                <Tag text={t} count={tagCounts[t]} />
                {/* </Link> */}
              </div>
            );
    }
    
};
