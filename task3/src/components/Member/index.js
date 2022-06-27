import React, { useCallback, useEffect, useRef, useState } from 'react'
import { memberService } from '../../service/MemberService';
import "./index.scss";

const Member = () => {

    const [member, setMember] = useState()
    const [showAddForm, setShowAddForm] = useState(false)
    const [newClient, setNewClient] = useState({
        member_name: ""
        });
    const [error, setError] = useState()
    const refPopup = useRef()

    const onLoad = useCallback(() => {
    
        memberService.getMember().then(({data})=>{
            newClient.member_id = data.length + 1;
            data = data.reverse()
            setMember(data)
        })
    }, [newClient]),
    onInputChange = useCallback((e) => {
        setNewClient((newClient) => {
            return { ...newClient, [e.target.name]: e.target.value };
        });
        setError("")
    }, []),
    addMemberSubmit = useCallback((e) => {
        e.preventDefault() 
        let isValid = true;

        if(!newClient.member_name){
            setError((prevState)=>({
                ...prevState,
                "member_name": "Is required"
            }))
            isValid= false
        }
        if(isValid) memberService.addMember(newClient).then((res)=>{
            setShowAddForm(false)
            onLoad()
        }) 
    },[newClient, onLoad]),
    clickOutside = (e) => {
        if (refPopup.current && !refPopup.current.contains(e.target)) {
            setShowAddForm(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, []);

    useEffect(() => {
        onLoad()
    }, [onLoad])
    
    return (
        <section className='members'>
            <section className='wrapper'>
                <section className='member-bar'>
                    <section className='bar-title'>
                        <span className='title'>
                            Task Management
                        </span>
                        <a className="nav-link log-out" href="/login" onClick={() => {localStorage.removeItem("token");sessionStorage.removeItem("user")}} data-tabindex="-1" aria-disabled="true">Log Out</a>
                    </section>
                    {sessionStorage.getItem("user") ? 
                    <section className='member-block'>
                        {member ? 
                            <section className='member-images all-member-images'>
                                {member.reverse().map((item, idx)=>{
                                    if(idx < 5){
                                        return <section className='member-image' style={{"zIndex":5-idx}} key={idx}>
                                                <p className="all_members"> {item.member_name.slice(0,1)} </p>
                                        </section>
                                    }else if(member.length === idx +1){
                                        return <section className='member-count' key={idx}>
                                            <span>+{idx - 3}</span>
                                        </section>
                                    }
                                    return true
                                })}
                            </section>
                        : null}
                        <section className='add-member' onClick={()=>setShowAddForm(!showAddForm)}>
                            <span className='add-btn'>+ New Member</span>

                        </section>
                    </section> : null}
                    { showAddForm ?
                        <section ref={refPopup} className='add-popup'>
                            <h2>New Member</h2>
                            <form>
                                <section>
                                    <section>
                                        <input type="text" 
                                            className='member-name' 
                                            name="member_name" 
                                            placeholder='Name'
                                            value={newClient.member_name}
                                            onChange={onInputChange}/>
                                        { error && error.member_name ? <span className='error'>{error.member_name}</span> : null}
                                    </section>
                                 
                                </section>
                                <section className='form-btn'>
                                    <button type='button' onClick={()=>setShowAddForm(false)} className='cancel'>Cancel</button>
                                    <button type='button' onClick={addMemberSubmit} className='save'>Save</button>
                                </section>
                            </form>
                        </section>
                    :null}
                </section>
            </section>
        </section>
    )
}

export default Member
