import React from 'react'

const TeamMembers = ({employees, femaleProfile, maleProfile, handleEmployeeCardClick, selectedTeam}) => {
  return (
    <>
        {
            employees.map((employee) => (
            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2 ')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                {(employee.gender ==='female') ? <img src={femaleProfile} alt='female' className="card-img-top"/> : <img src={maleProfile} alt='male' className="card-img-top"/>}
                <div className="card-body">
                    <h5 className="card-title">
                        Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                        <b>Designation:</b> {employee.designation}<br/>
                        <b>Team:</b> {employee.teamName}
                    </p> 
                </div>
            </div>
            ))
        }
    </>
  )
}

export default TeamMembers