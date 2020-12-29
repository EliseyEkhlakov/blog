import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import '../../css/app.css';

const App = () => {

    const data = [
        {label:'Learn React', important:true, id:'qwqw'},
        {label:'Learn english', important:false, id:'qwqwqw'},
        {label:'Learn francaise', important:false, id:'wewewe'}
    ];        

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;