import {useRouter} from "next/router";

export default function EventPage(){
    console.log("Event page loaded");
    const router = useRouter();
    console.log(router.query);
    return (
        <h1>{`Event id ${router.query.id}`}</h1>
    )
}