import { useState } from "react"
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const TodoNew = (props) => {
    const { addNewTodo, incrementCount, count } = props
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        addNewTodo(text)
        setText("")
    }

    const work = () => {
        handleClick()
        incrementCount()
    }

    const notifiError = () => {
        alert('Empty Input')
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                value={text}
                onChange={(e) => handleTextChange(e)}
            />
            {
                text.trim() ?
                    <button
                        style={{ cursor: "pointer" }}
                        onClick={work}
                    >Add</button>

                    :

                    <button
                        style={{ cursor: "pointer" }}
                        onClick={notifiError}
                    >Add</button>
            }
        </div>
    )
}

export default TodoNew