import React from 'react';

const Form = (props) => {
    // Place to Write Javascript Code
    const inputHandler = (e) => {
        props.setInputText(e.target.value)

        if (e.target.value.length === 25){
            alert('25 Characters is the limit')
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(props.inputText !== ""){
            props.setTodos([
                ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 100}
            ]);
            props.setInputText("");
        } else {
            window.alert("Write Something first, Friend! 😑😑");
        }
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <input 
                value={props.inputText} 
                onChange={inputHandler} 
                type="text"
                placeholder="Add Tasks Here"
                maxLength = {25}
            />

            <button onClick={submitHandler} type="submit"> <i className="fa fa-plus"></i> </button>

            <div className="filters">
                <div class="select">
                    <select onChange={statusHandler} name="todos" id="slct">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incompleted">Incomplete</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Form;