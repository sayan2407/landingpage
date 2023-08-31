import { Avatar } from "@mui/material";

import "./Team.css";


const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Daniel Def",
            cases: 301
        },
        {
            id: 2,
            name: "Daniel Def",
            cases: 301
        },
        {
            id: 3,
            name: "Daniel Def",
            cases: 301
        },
        {
            id: 4,
            name: "Daniel Def",
            cases: 301
        },
        {
            id: 5,
            name: "Daniel Def",
            cases: 301
        },
        {
            id: 6,
            name: "Daniel Def",
            cases: 301
        },
    ]
    return <div className="container team_container">

        {
            teamMembers.map(item=>{
                return <div className="member">
                    <div>
                    <Avatar alt="Remy Sharp" src="../../assets/images/avatar.png" />

                    </div>
                    <div className="member_detail">
                        <h3>{item.name}</h3>
                        <p>{item.cases} Cases</p>
                    </div>

                </div>
            })
        }

    </div>
}

export default Team;