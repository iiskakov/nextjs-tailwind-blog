import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Prices from '@/components/Prices'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import SEO from '@/components/SEO'

export const metadata = genPageMetadata({ title: 'Subscription', description: 'Things I blog about' })

export default async function Page() {
    const tagCounts = tagData as Record<string, number>
    const tagKeys = Object.keys(tagCounts)
    const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
    return (
        <>
            <SEO />
            <div className="space-x-2 pb-8 pt-6 md:space-y-5">

                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:text-6xl md:leading-14">
                    Subscribtion
                </h1>
                <p>
                    Unlock coding excellence with our developer blog subscriptions. Choose from Basic, Pro, or Enterprise plans to access a wealth of expert articles, tutorials, and tools. Elevate your skills, stay ahead of tech trends, and make your mark in the coding world. Subscribe now – your next breakthrough in development awaits.
                </p>
                <Prices />
            </div>
        </>
    )
};
