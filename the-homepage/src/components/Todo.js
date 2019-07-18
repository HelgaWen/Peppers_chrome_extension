/* global chrome*/
import React, { Component } from "react";
import { ContentCard } from "../styles/general";
import { TodoInput, TodoSubmit, TodoItemsContainer } from '../styles/todoStyles';
import Item from './Item'

class Todo extends Component {
    title = React.createRef();
    description = React.createRef();
    allItems = [];
    state = { render: false };

    componentDidMount() { this.getItemsFromStorage() }

    onSubmit = event => {
        event.preventDefault()
        this.allItems.push({ title: this.title.current.value, desc: this.description.current.value });
        this.setItemInStorage();
        event.target.reset();
        this.setState({ render: true });
    }

    setItemInStorage = () => {
        let obj = [...this.allItems]
        chrome.storage.sync.set({ items: { obj } }, () => {
            console.log('Sent ', obj, ' to storage');
        });
    }

    getItemsFromStorage = () => {
        chrome.storage.sync.get(['items'], result => {
            if (result.items) {
                this.allItems = result.items.obj;
                console.log(result.items.obj);
                this.setState({ render: true });
            }
        })
    }

    render() {
        let display = [];
        this.allItems.forEach(item => display.push(<Item item={item} />))
        return (
            <ContentCard>
                <form onSubmit={this.onSubmit}>
                    <TodoInput placeholder="Title" type="text" ref={this.title} />
                    <TodoInput placeholder="Description" type="text" ref={this.description} />
                    <TodoSubmit>Add</TodoSubmit>
                </form>
                <TodoItemsContainer>
                    {display}
                </TodoItemsContainer>
            </ContentCard>
        );
    }
}

export default Todo;
