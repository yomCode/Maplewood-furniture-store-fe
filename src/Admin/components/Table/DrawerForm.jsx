import { useState } from 'react';
import { Drawer, Input, Col, Select, Form, Row, Button, Spin } from 'antd';
import {
    successNotification, errorNotification
} from "../api/Notification";

import axios from 'axios';
import {
  LoadingOutlined,
} from '@ant-design/icons';

const {Option} = Select;

const DrawerForm = ({showDrawer, setShowDrawer, getStudents}) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const spanSize = 20;
    const onCLose = () => setShowDrawer(false);
    const[submitting, setSubmitting] = useState(false);

    const onFinish = student => {
        console.log(JSON.stringify(student, null, 2));
        addNewStudent(student);
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    const addNewStudent = (student) => {
        setSubmitting(true);
        axios.post("api/v1/students/new", student)
        .then((data) => {
            console.log(data);
            onCLose();
            successNotification("Student Successfully Added", `${student.name} was added to the system.`)
            getStudents();
        })
        .catch(err => {
            const errorResponse = err.response.data;
            console.log(errorResponse);
            errorNotification("EMAIL EXISTS", errorResponse.errorMessage, "topLeft");
        })
        .finally(() => setSubmitting(false));
    }
    
    return <Drawer
        title="Create new student"
        width={400}
        onClose={onCLose}
        open={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}>
            <Row gutter={16}>
                <Col span={spanSize}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true, message: 'Please enter student name'}]}
                    >
                        <Input placeholder="Please enter student name"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={spanSize}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{required: true, message: 'Please enter student email'}]}
                    >
                        <Input placeholder="Please enter student email"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={spanSize}>
                    <Form.Item
                        name="gender"
                        label="gender"
                        rules={[{required: true, message: 'Please select a gender'}]}
                    >
                        <Select placeholder="Please select a gender">
                            <Option value="MALE">MALE</Option>
                            <Option value="FEMALE">FEMALE</Option>
                            <Option value="OTHER">OTHER</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={spanSize}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                { submitting && <Spin indicator={antIcon}/> }
            </Row>
        </Form>
    </Drawer>
}

export default DrawerForm;