import React from "react";
import { gql, useQuery } from "@apollo/client"


const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    if(loading) {
        return "Loading..."
    }
    if (data && data.movies) {
        return data.movies.map(m => <hi>{m.id}<br/></hi>)
    }
return <h1>Home</h1>
};