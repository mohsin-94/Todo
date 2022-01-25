import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteTodo} from '../redux/Action-content/actionCreater'
import {Link} from 'react-router-dom'

function Todo() {
    
    const listItem = useSelector(state => state.allList.taskList)
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        (listItem && listItem.length === 0) ? (
            <div className="ui segment container">
                <p>No List Found</p>
            </div>
        ) : (<div className="ui grid centered container">
                {listItem.map(item => <div className="four wide column" key={item.id}>

                        <div className="ui positive message">
                            <i className="close icon" onClick={() => clickHandler(item.id)}></i>
                            <div className="header">
                                <Link to={`edit/${item.id}`}>
                                    {item.label}
                                </Link>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>)}
            </div>
        )
    )
}

export default Todo
