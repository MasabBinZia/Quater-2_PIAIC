Todays notes
Server-side component fetch
Client side component fetch

Server side—————
After fetch cannot print object directly in react html if do there will be error

When mapping data ,  every data item should have a key which is unique and used later for re-rendering parts of the app. When you want to re render just change the key and it will re render the related component.

Build is used to optimise the code, format it, checking bugs , more than 90% bug free have a chance to be successfully deployed to the server.

export const function error while defining functions with export results in error


Static server side rendering
Build:
Page.tsx -> data fetch by api-> static html with dynamic data generated and html rendered but data will nat update later because api request not done in client side
Seo is good performance is good but data update problem 
Where this is used ? Blog, portfolio sites etc
For starting build and site : npm start
Browser get javascript and read and render html after reading the javascript.
After first render browser caches data and don’t hit the server again when refresh 
Upon force cache impose/add

Fetch function is enhanced and one feature cache is added
When cache option used in fetch
It caches data

—————-
Dynamic server side rendering


const getData = async ()=>{
const res=fetch(“. Your url. “, {
method: “GET”
cache:”no-store”, //
});

const res = await res.json();
}
Html pages will not cache and in data-fetching folder do-not make html pages

This is dynamic server side rendering 

ISR - ( incremental static regeneration)

No cache defined instead use revalidate

Revalidation 

const getData = async ()=>{
const res=fetch(“. Your url. “, {
method: “GET”,
next: { 
revalidate:10 // seconds
}
});

If data is cached after 10 seconds it will get fresh data , 10 seconds is set to revalidate( get new data ) in above option

I am user when come to site see data which is old , but it will revalidates the data in the background too and the next user will see the fresh data

On demand revalidation
—————————————

If product updated and published then revalidate calls the function and data will revalidate in the background and new html will be rendered to the next user and if current user refresh 


Example is comment section on the site where data refresh needed from time to time

Right now real-time options are not covered

———————- server side

Client side————//////

Don’t use useEffect() hook it demands cache and error handling from developer 
SWR is a library makes easy loading, 

Create folder client in app folder
create page.tsx and write

“use client”;
import useSWR from “swr”;
const apiURL = “.  From next repo use quote url”;

fetcher=fetch( apiURL).then(res=res.json()

export default  function Client(){
const {data,error,isLoading}= useSWR(url,fetcher);
if(error) return <div>data feting failed</div>

if(isLoading) return <div>Loading…</div>
  return <div>{data.content}</div>
}

isLoading state change then upon data fetching  app will re render the client

In this approach seo is not good.
Class rough transcript
MashaAllah awesome. Thoroughly covered . Good job
