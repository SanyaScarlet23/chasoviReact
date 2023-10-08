import PropTypes from "prop-types";

export const Student = ({students}) => {
    return(
      <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Index</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student,i)=>{
                    return(
                        <tr key={i}>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.index}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     </>  
    );
};

Student.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Student.propTypes = {
    student: [{name: "No Name", surname: "No surname", index:"No index"}],
};