import {useCallback, useEffect, useRef, useState} from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { memberService } from '../../service/MemberService';
import { taskService } from '../../service/TaskService';
import { useDispatch } from 'react-redux';
import {addTasks, deleteTasks} from '../../redux/taskActions';
import "./index.scss";
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.css';

  let columnsDataType = {
    "toDo": {
      name: "To do",
      items: []
    },
    "inProgress": {
      name: "In Progress",
      items: []
    },
    "inReview": {
      name: "In Review",
      items: []
    },
    "done": {
      name: "Done",
      items: []
    }
  };

const Task = () => {
    const [data, setData] = useState([])
    const [columns, setColumns] = useState(columnsDataType);
    const [member, setMember] = useState([])
    const [deletedTaskCount,setDeleteTaskCount] = useState(0)
    const [addedTaskCount,setAddedTaskCount] = useState(0)
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState({
        task_name: "",
        description: "",
        assign_member_id: "",
        date: "",
        status: "To do"
    });
    const [error, setError] = useState({})
    const [showAddForm, setShowAddForm] = useState(false)
    const refPopup = useRef()
    const onLoad = useCallback(() => {
        taskService.getTask().then(({data})=>{
            setData(data)
        })
        memberService.getMember().then(({data})=>setMember(data))
    },[]),
    onUpdate = useCallback((id,data) => {
        let newData = data.find(x=>x.id === id)
        taskService.updateTask(newData, id)
    },[]),
    clickOutside = useCallback((e) => {
            if (refPopup.current && !refPopup.current.contains(e.target)) {
                setShowAddForm(false)
            }
    },[]),
    onInputChange = useCallback((e) => {
        setNewTask((newTask) => {
            return { ...newTask, [e.target.name]: e.target.value };
        });
        setError("")
    }, []),
    addTaskSubmit = useCallback((e) => {
        let isValid = true;
        if(!newTask.task_name){
            setError((prevState)=>({
                ...prevState,
                "task_name": "Is required"
            }))
            isValid= false
        }
        if(!newTask.description){
            setError((prevState)=>({
                ...prevState,
                "description": "Is required"
            }))
            isValid= false
        }
        if(!newTask.assign_member_id){
            setError((prevState)=>({
                ...prevState,
                "assign_member_id": "Is required"
            }))
            isValid= false
        }
        if(!newTask.date){
            setError((prevState)=>({
                ...prevState,
                "date": "Is required"
            }))
            isValid= false
        }
        
        if(isValid) {
          addTasks({
            task_name: newTask.task_name,
            description: newTask.description,
            assign_member_id: newTask.assign_member_id,
            date: newTask.date,
            status : newTask.status
          }, 1)(dispatch)
            setShowAddForm(false)
            onLoad()
        }
    },[newTask, onLoad]);
    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [clickOutside]);
    useEffect(() => {
      setColumns(columnsDataType)
      data.forEach(elem=>{
        if(elem.status=== "To do"){
          setColumns((prevState=>(
            {
              ...prevState,
              toDo:{
                ...prevState.toDo,
                items:[
                  ...prevState.toDo.items,
                  elem
                ]
              }
            }
          )))
        }
        if(elem.status=== "In Progress"){
          setColumns((prevState=>(
            {
              ...prevState,
              inProgress:{
                ...prevState.inProgress,
                items:[
                  ...prevState.inProgress.items,
                  elem
                ]
              }
            }
          )))
        }
        if(elem.status=== "In Review"){
          setColumns((prevState=>(
            {
              ...prevState,
              inReview:{
                ...prevState.inReview,
                items:[
                  ...prevState.inReview.items,
                  elem
                ]
              }
            }
          )))
        }
        if(elem.status=== "Done"){
          setColumns((prevState=>(
            {
              ...prevState,
              done:{
                ...prevState.done,
                items:[
                  ...prevState.done.items,
                  elem
                ]
              }
            }
          )))
        }
      })
    }, [data])

    useEffect(() => {
        onLoad()
    }, [onLoad])

    useEffect(() => {
      if(showAddForm){
        memberService.getMember().then(({data})=>setMember(data))
      }
    }, [showAddForm])


    useEffect(() => {
      setShowAddForm(false)
      onLoad()
    },[deletedTaskCount, onLoad])

    useEffect(() => {
      setShowAddForm(false)
      onLoad()
    },[addedTaskCount, onLoad])

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          let id = (destItems[destination.index].id);
          let newData = [...data]
          newData = newData.map(elem=>{
            if(elem.id === id) elem.status = columns[destination.droppableId].name
            return elem
          })
          onUpdate(id, newData)

          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...column,
                items: copiedItems
              }
            });
          }
    };

    return (
        <section className='wrapper'>
            <section className='task'> 
                <section className='task-header'>
                       <section className='add-task'>
                       <button onClick={()=>setShowAddForm(!showAddForm)}> 
                           New Task
                       </button>
                   </section>
                 {showAddForm ?
                    <section className='add-task-popup'>
                        <section ref={refPopup}  className='popup-block'> 
                            <h2>New Task</h2>
                            <form >
                                <section>
                                    <section>
                                        <input type="text" 
                                            className='task-name' 
                                            name="task_name" 
                                            placeholder='Name'
                                            onChange={onInputChange}/>
                                        { error && error.task_name ? <span className='error'>{error.task_name}</span> : null}
                                    </section>
                                    <section>
                                        <textarea 
                                            className='description' 
                                            name="description" 
                                            placeholder='Description'
                                            onChange={onInputChange}/>
                                        { error && error.description ? <span className='error'>{error.description}</span> : null}
                                    </section>
                                    <section>
                                        <input type="date"
                                            className='date-block' 
                                            name="date" 
                                            placeholder='Date'
                                            onChange={onInputChange}/>
                                        { error && error.assign_member_id ? <span className='error'>{error.assign_member_id}</span> : null}
                                    </section>
                                    <section className='select'>
                                        <select className='assign_member' onChange={onInputChange} name="assign_member_id">
                                            <option value="">Assigne</option>
                                            {member ?
                                                member.map((item,idx)=>(
                                                    <option key={idx} value={item.member_id}>{item.member_name}</option>
                                                ))
                                            :null}
                                        </select>
                                        <svg>
                                            <use xlinkHref="icons.svg#arrow-down"/>
                                        </svg>
                                        { error && error.date ? <span className='error'>{error.date}</span> : null}
                                    </section>
                                </section>
                                <section className='form-btn'>
                                    <button type='button' onClick={()=>setShowAddForm(false)} className='cancel'>Cancel</button>
                                    <button type='button' onClick={()=>{addTaskSubmit();setAddedTaskCount(addedTaskCount+1)}}  className='save'>Save</button>
                                </section>
                            </form>
                        </section>
                    </section>
                    : null}
                </section>
                <div className='task-area'>
                    <DragDropContext
                    onDragEnd={result => onDragEnd(result)}
                    >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                        <div className='task-drop'
                            key={columnId}
                        >
                            <h2>{column.name } <span>{column.items.length}</span></h2>
                            <div>
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided, snapshot) => {
                                let c1 = ["drop-area"]
                                if (snapshot.isDraggingOver) c1.push("over")
                                return (
                                    <div
                                    className={c1.join(" ")}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}>
                                    {column.items.map((item, index) => {
                                        let id = parseInt(item.assign_member_id)
                                        let memberData = member.find(x=> parseInt(x.member_id) === id)
                                        return (
                                        <Draggable
                                            key={item.id.toString()}
                                            draggableId={item.id.toString()}
                                            index={index}>
                                            {(provided, snapshot) => {
                                            let c2 = ["drag-item"]
                                            if (snapshot.isDragging) c2.push("drag")
                                            return (
                                                <div
                                                className={c2.join(" ")}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                    <div className='task-item'>
                                                        <div className='content'>
                                                            <h3 className='title'>
                                                                {item.task_name}
                                                            </h3>
                                                            <p className='desc'>{item.description}</p>
                                                            <span className='fullname'>
                                                               { memberData ? memberData.member_name : ""}
                                                            </span>
                                                        </div>
                                                        <div className='task-footer'>
                                                            <div className='time'>
                                                           
                                                                <span>{moment(item.date).format('MMM DD')}</span>
                                                            </div>
                                                            <div className='member-image'>
                                                            </div>
                                                            <button className="deleteTask" type="button" onClick={() =>{deleteTasks(1, item.id)(dispatch);setDeleteTaskCount(deletedTaskCount+1); setShowAddForm(false);onLoad()}} >Delete</button>
                                                        </div>
                                                    </div>            
                                                </div>
                                            );
                                            }}
                                        </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                    </div>
                                );
                                }}
                            </Droppable>
                            </div>
                        </div>
                        );
                    })}
                    </DragDropContext>
                </div>
            </section>
        </section>
    )
}

export default Task
