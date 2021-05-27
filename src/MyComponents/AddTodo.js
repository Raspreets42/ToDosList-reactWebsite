import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be black");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : </label>
                    <input type="text" className="form-control" value={title} id="title" aria-describedby="titleHelp" onChange={(e) => { setTitle(e.target.value) }} />
                    <div id="titleHelp" className="form-text">Add a title</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description : </label>
                    <input type="text" className="form-control" value={desc} id="desc"
                        onChange={(e) => { setdesc(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-success ">Add to List</button>
            </form>
        </div>
    )
}
