export function TwitterFollowCard({ formattedUserName, userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`}/>

                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-userName'>{name}</strong>
                    <span className='tw-followCard-userID'>{formattedUserName}</span>
                </div>
            </header>

            <aside className='tw-followCard-aside'>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}