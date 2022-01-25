import React, {useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useParams ,useNavigate  } from 'react-router-dom'
import {updateTodo} from '../redux/Action-content/actionCreater'
function EditTodo() {
    const [list,setList] = useState();
    const [textValue, setTextValue] = useState();
    const {listId} = useParams();
    const navigate = useNavigate();
    const listItem = useSelector(state => state.allList.taskList);
    const dispatch = useDispatch();
    const [filterList] = listItem.filter(list => (list.id === listId));
    useEffect(() => {
        setList(filterList.label);
        setTextValue(filterList.description)
    },[filterList]);
    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo(list,textValue,listId));
        navigate(-1)
    }
    return (
        <div className="ui grid centered container">
            <div className="eight wide column">
                <div className="ui segment">
                    <h2 className="ui floated header">Update Note</h2>
                    <div className="ui clearing divider"></div>
                    <form onSubmit={updateHandler} className="ui form">
                        <div className="field">
                            <input type="text" 
                                value={list} 
                                placeholder="Add Title" 
                                onChange={(e) => setList(e.target.value)}/>
                        </div>
                        <div className="field">
                            <textarea rows="2" 
                            value={textValue} 
                            onChange={(e) => setTextValue(e.target.value)} 
                            placeholder="Description" />
                        </div>
                        <div className="field">
                            <input type="submit" className="ui primary button" value="Update Task" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditTodo
