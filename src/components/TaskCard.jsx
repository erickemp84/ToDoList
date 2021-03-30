
const TaskCard = props => {

    /*Deconstructed props...*/
    const{tasks, handleToggleCheck, handleDeleteTask, idx} = props;

    return(
        <div className="col-3 card-body">
            <h2 className="card-title" style={tasks.isCompleted ? {textDecoration: "line-through"} : {} }>{tasks.title}</h2>
            <div className="form-control">
                <input type="checkbox" className="form-control" checked={tasks.isCompleted} onChange={(e) => handleToggleCheck(e,idx)}/>
                {
                    tasks.isCompleted ? <button className="btn btn-danger" onClick={(e) => handleDeleteTask(e, idx)}>Delete</button> : null
                }
            </div>
        </div>
    )

}

export default TaskCard;