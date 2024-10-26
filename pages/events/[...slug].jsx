import {useRouter} from "next/router";

export default function FilteredEventsPage({params}) {
    console.log("Filtered Events page loaded");
    console.log(params);
    const router = useRouter()
    const {slug} = params
    console.log(slug)
    console.log(slug.length)
    if (slug.length != 2){
        return (<h2>Not enough parameters to resolve month/year</h2>)
    } else {
        return (
            <div>
                <h1>Year {slug[1]}</h1>
                <h1>Month {slug[0]}</h1>
            </div>
        )
    }
    // Statically optimized pages are hydrated without the route parameters, so the query is an empty object ({})
    //console.log(router.pathname)
    //console.log(router.query)
    //console.log(router.query.slug.length)
    //console.log(router.query.slug.length)
console.log(router.asPath)
    return (
        <div>
            <h1>Event Page</h1>
            <h2>pathname:- {JSON.stringify(router.pathname)}</h2>
            <h2>query:- {JSON.stringify(router.query)}</h2>
            <h2>query.slug:- {JSON.stringify(router.query.slug)}</h2>
            <h2>asPath:- {JSON.stringify(router.asPath)}</h2>
        </div>
    )
}

export function getServerSideProps(context) {
    return {
        props: {params: context.params}
    };
}