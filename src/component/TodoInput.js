import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/Action-content/actionCreater'
function TodoInput() {

    const dispatch = useDispatch();
    const [list,setList] = useState('');
    const [textValue, setTextValue] = useState('');
    const addHandler = (e) => {
        e.preventDefault();
        if(list != '' && textValue != ''){
            dispatch(addTodo(list,textValue));
            setList('');
            setTextValue('')
        }else{
            alert('Please fill blank filed')
        }
    }
    return (
        <div className="ui grid centered container">
            <div className="eight wide column">
                <div className="ui segment">
                    <h2 className="ui floated header">Add Task</h2>
                    <div className="ui clearing divider"></div>
                    <form onSubmit={addHandler} className="ui form">
                        <div className="field">
                            <input type="text" 
                                value={list} 
                                placeholder="Add Title" 
                                onChange={(e) => setList(e.target.value)}/>
                        </div>
                        <div className="field">
                            <textarea rows="2" 
                            value={textValue} 
                            placeholder="Add Note..."  
                            onChange={(e) => setTextValue(e.target.value)} />
                        </div>
                        <div className="field">
                            <input type="submit" className="ui primary button" value="Add Task" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoInput
