import React, { useEffect } from 'react';
import classes from './Sidebar.module.css'

import { members as teamMembers } from '../../../utils/data';
import PersonIcon from '@mui/icons-material/Person';

import { useDispatch, useSelector } from 'react-redux'
import { addTeamMember } from '../../../store/features/game';


const Sidebar = () => {

    const dispatch = useDispatch()

    const { members } = useSelector(state => state.game)

    useEffect(() => {
        teamMembers.map((m) => dispatch(addTeamMember(m)))
    }, []);


    return <div className={classes.sidebar}>
        <div className={classes.sidebar__header}>
            <h1 className={`heading--secondary ${classes.sidebar__heading}`}>Air University</h1>
            <div className={classes.sidebar__separator}></div>
            <h3 className={`heading--tertiary ${classes.sidebar__heading_secondary}`}>Team Members</h3>
        </div>
        <div className={classes.sidebar__main}>
            {members.map((m) => <div key={m.id}>
                <PersonIcon style={{ fontSize: '2.8rem', color: "var(--color-secondary)" }} />
                <p>{m.name}</p>
                <div className={m.active ? classes.sidebar__main_active_user:classes.sidebar__main_non_active_user}></div>
                {/* <div className={classes.sidebar__separator}></div> */}
            </div>)}
        </div>
    </div>;
};

export default Sidebar;
