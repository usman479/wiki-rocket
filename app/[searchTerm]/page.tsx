import React from 'react'
import Item from './components/Item'
import getWikiResults from '@/lib/getWikiResults'

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({params:{searchTerm}}:Props){
    const wikiData: any =  await getWikiResults(searchTerm);
    const displayTerm = searchTerm.replaceAll('%20',' ');
    if(!wikiData?.query?.pages){
        return {
            title:`${displayTerm} Not Found`
        }
    }
    return {
        title:displayTerm,
        description:`Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: any =  await getWikiResults(searchTerm);
    // const data = await wikiData.json();
    // console.log(wikiData)
    // const data = await wikiData
    const results: Result[] | undefined = wikiData?.query?.pages

    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            
            {results
                ? Object.values(results).map((result:any) => {
                    return <Item key={result.pageId} result={result}/> 
                })
                : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            }
        </main>
    )
    return content;
}

