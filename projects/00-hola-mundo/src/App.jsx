import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // const formatUserName = (userName) => `@${userName}`;
    const formattedUserName = <span>@midudev</span>;

    return(
        <section className='App'>
            <TwitterFollowCard formattedUserName={formattedUserName} isFollowing={true} userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard formattedUserName={formattedUserName} isFollowing={true} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard formattedUserName={formattedUserName} isFollowing={false} userName="elonmusk" name="Elon Musk"/>
            <TwitterFollowCard formattedUserName={formattedUserName} isFollowing={false} userName="vxnder" name="Vanderhart"/>
        </section>
    )
}
