import React from 'react'
import Link from 'next/link'

export default function Head() {
    return (
        <div style={{padding : "20px",width:"100%",backgroundColor:"black",color:"white"}}>
            <Link href="/"><button>home</button></Link>
            <Link href="/login"><button>Login</button></Link>
            <Link href="/article"><button>Articals</button></Link>
        </div>
    )
}
