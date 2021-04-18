import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Article = ({artInfo}) => {


    return (
        <div style={{margin: "50px",paddingBottom:"100px",paddingTop:"100px",textAlign:"center"}}>
            id : {artInfo.id} <br/>
            title : {artInfo.title}<br/>
            completed : {artInfo.completed? "true" : "false"}<br/>
            <Link to="/article"> <button>Back</button> </Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`)
    const artInfo = await res.json()

    return {
        props: {
            artInfo,
        },
    }
}

export default Article
