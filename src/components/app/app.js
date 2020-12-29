import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import '../../css/app.css';
import styled from 'styled-components';
// import style from '../../css/App.module.css';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: gray;
`

const App = () => {

    const data = [
        {label:'Learn React', important:true, id:'qwqw'},
        {label:'Learn english', important:false, id:'qwqwqw'},
        {label:'Learn francaise', important:false, id:'wewewe'}
    ];        

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;