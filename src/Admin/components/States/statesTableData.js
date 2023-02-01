import { Avatar, Button, message } from "antd";
import {
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import PopupConfirm from "../../../components/PopupNotification/PopupConfirm";
import useCategory from "../../../hooks/useCategory";
import useProduct from "../../../hooks/useProduct";

const CustomAvatar = ({name, style}) => {
  let trim = name.trim();
  if(trim.length === 0) return <Avatar style={style} icon={<UserOutlined />}/>

  const split = trim.split(" ");
  if(split.length === 1) return <Avatar style={style}>{name.charAt(0).toUpperCase()}</Avatar>

  else if(split.length > 1) return <Avatar style={style}>{`${name.charAt(0)}${name.charAt(name.indexOf(' ') + 1)}`}</Avatar>
}

const HandleColumnEvents = ({ state, setShowDrawer }) => {
  const { setSingleState, deleteState } = useCategory()
  const { setHeaderTitle } = useProduct()
  return(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <PopupConfirm 
        description={`Delete ${state.name.toUpperCase()}?`} 
        confirm={() => confirmDelete(state, deleteState)} 
        cancel={() => cancelDelete(state)}
        component={ <Button type="primary default" 
        danger ghost icon={<DeleteOutlined />}></Button> }/>

      <PopupConfirm description={`Do you want to edit product ${ state.name }?`} 
        confirm={() => confirmEdit(state, setShowDrawer, setSingleState, setHeaderTitle)}
        cancel={() => cancelEdit(setShowDrawer)}
        component={ <Button type="primary danger" 
        ghost icon={<EditOutlined />}></Button> }/>
    </div>
  );
}

const confirmDelete= (state, deleteState) => {
  deleteState(state.id)
};

const cancelDelete = (e) => {
  console.log(e);
  message.error('Click on No');
};


const confirmEdit = (state, setShowDrawer, setSingleState, setHeaderTitle) => {
  setHeaderTitle(`Update State: ${state.name}`)
  setSingleState(state)
  setShowDrawer(true)
  message.success('Click on Yes');
};

const cancelEdit = (setShowDrawer) => {
  setShowDrawer(false)
  message.error('Click on No');
};


const stateColumns = (setShowDrawer) => [
  {
    title : "Image",
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    width: '100px',
    render: (_, state) => <CustomAvatar  key={state.id}
    style={{ 
      color: '#f56a00', backgroundColor: '#fde3cf' }} 
      name={state.name} />
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
    title: "Actions",
    dataIndex: 'actions',
    key: 'actions',
    render: (_, state) => <HandleColumnEvents setShowDrawer={setShowDrawer} state={state}/>
  },
];

export { stateColumns, }