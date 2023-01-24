import { Avatar, Button, message } from "antd";
import {
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

import PopupConfirm from "../api/PopupConfirm";
import axios from "axios";


// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

const CustomAvatar = ({name, style}) => {
  let trim = name.trim();
  if(trim.length === 0) return <Avatar style={style} icon={<UserOutlined />}/>

  const split = trim.split(" ");
  if(split.length === 1) return <Avatar style={style}>{name.charAt(0).toUpperCase()}</Avatar>

  return <Avatar style={style}>{`${name.charAt(0)}${name.charAt(name.length - 1)}`}</Avatar>
}


const HandleStudentDetails = ({student, getStudents}) => {
  return(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      
      <PopupConfirm 
        title={`Do you want to delete ${student.name}?`}
        description={`Delete ${student.name.toUpperCase()}?`} 
        confirm={() => confirmDeleteStudent(student, getStudents)} 
        cancel={() => cancelDeleteStudent(student)}
        component={ <Button type="primary" danger ghost icon={<DeleteOutlined />}>Delete</Button> }/>

      <PopupConfirm title={`Do you want to delete student ${student.name}?`} 
      component={ <Button type="primary" ghost icon={<EditOutlined />}>Edit</Button> }/>
    </div>
  );
}

const confirmDeleteStudent = (student, getStudents) => {
  let id = student.id;
  id = 783;
  axios.delete(`api/v1/students/${id}/delete`)
  .then(res => {
    console.log(res.data.debugMessage);
    getStudents();
    message.success(`STUDENT ${student.name} HAS BEEN DELETED`);

  })
  .catch(err => {
    const errorResponse = err.response.data;
    console.log(err);
    message.error(errorResponse.errorMessage);
  })
};

const cancelDeleteStudent = (e) => {
  console.log(e);
  message.error('Click on No');
};

// const confirmEditStudent = (e) => {
//   console.log(e);
//   message.success('Click on Yes');
// };
//
// const cancelEditStudent = (e) => {
//   console.log(e);
//   message.error('Click on No');
// };


const columns = getStudents => [
  {
    title : "Image",
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text, student) => <CustomAvatar  style={{ color: '#f56a00', 
                  backgroundColor: '#fde3cf' }} name={student.name} />
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: "Actions",
    dataIndex: 'actions',
    key: 'actions',
    render: (text, student) => <HandleStudentDetails student={student} getStudents={getStudents} />
  },
];

export {columns};
