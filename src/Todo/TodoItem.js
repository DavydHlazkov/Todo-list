import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";

const styles = {
    li:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRight: "none",
        border: "1px solid #435D63",
        borderRadius : "4px 0px 0px 4px",
        marginBottom : "0.5rem",
        width: "100%",
        height: "45px"
    },
    input :{
        marginRight: "1rem",
        marginLeft: "10px"
    }
}

function TodoItem (props) {

    const {removeTodo} = useContext(Context)

    const classes = []
    if(props.todo.completed){
        classes.push('done')
    }


    return(< div style = {{display:"flex"}}>
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                { props.todo.completed ? <span style = {{marginLeft: '10px'}}>&nbsp;  &nbsp; &nbsp; &nbsp;</span>  : <input  className="checked" type= "checkbox" style={styles.input}  onChange = {()=>props.todoDone(props.todo.id)}/>}
                <strong>{props.index +1}</strong>
                &nbsp;
                {props.todo.title}
            </span>
              
        </li>
        <button className="rm" onClick={()=>removeTodo(props.todo.id)}>Delete</button>
        </div>
    )
}

TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    todoDone: PropTypes.func.isRequired
}

export default TodoItem