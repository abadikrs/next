import React, { useState } from 'react'
import Article from '../../components/articales'
const Index = ({ posts }) => {
    const [color, setColor] = useState(1)


    const colorChange = (e) => {
        const type = e.target.name
        if (type == "inc") {
            setColor(color + 1)
        } else {
            setColor(color - 1)
        }
    }
    return (
        <div>
            <style jsx>
                {`.a{color:red};
            .b{color:blue}`
            }
            </style>

            <div className={`${color >= 5 ? "a" : "b"}`}>Index</div>
            <button onClick={e => colorChange(e)} name="dec">-</button>{color} <button onClick={e => colorChange(e)} name="inc">+</button>

            <hr />
            <h4 className={`${color >= 5 ? "a" : "b"}`}>
                <Article articles={posts} num={color} />
            </h4>
        </div>
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}


export default Index