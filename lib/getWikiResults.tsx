import React from 'react'
import axios from 'axios'

export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    const {data,status} = await axios.get<SearchResult>(`https://en.wikipedia.org/w/api.php?${searchParams}`)
    
    return data;

}
