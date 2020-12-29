import React, {Component} from 'react';
import nextId from "react-id-generator";
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

// const StyledAppBlock = styled(AppBlock)`
//     background-color: gray;
// `

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label:'Learn React', important:true, id:nextId()},
                {label:'Learn english', important:false, id:nextId()},
                {label:'Learn francaise', important:false, id:nextId()}
            ]
        } 
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.maxId = 4;
    } 
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];
            return {
              data: newArr  
            }
        });
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            // id: this.maxId++
            id: nextId()
        }
        console.log(newItem);
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
              data: newArr  
            }
        });
    }
    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                posts={this.state.data}
                onAppDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }   
}
 