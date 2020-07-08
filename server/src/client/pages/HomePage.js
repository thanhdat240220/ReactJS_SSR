import React from 'react';

const Home = () => {
    return (<div>
        <div>home</div>
        <div>
            <button onClick={(e) => { console.log('press me'); }}>Press Me</button>
        </div>
    </div>);
}

export default Home;