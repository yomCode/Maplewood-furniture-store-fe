import { Avatar, Button, message } from "antd";
import {
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import PopupConfirm from "../../../components/PopupNotification/PopupConfirm";
import useProduct from "../../../hooks/useProduct";

const CustomAvatar = ({name, style}) => {
  let trim = name.trim();
  if(trim.length === 0) return <Avatar style={style} icon={<UserOutlined />}/>

  const split = trim.split(" ");
  if(split.length === 1) return <Avatar style={style}>{name.charAt(0).toUpperCase()}</Avatar>

  else if(split.length > 1) return <Avatar style={style}>{`${name.charAt(0)}${name.charAt(name.indexOf(' ') + 1)}`}</Avatar>
}

const HandleColumnEvents = ({ product, setShowDrawer }) => {
  const { getProducts, deleteProduct, setSingleProduct, setHeaderTitle } = useProduct()
  return(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <PopupConfirm 
        description={`Delete ${product.name.toUpperCase()}?`} 
        confirm={() => confirmDelete(product, deleteProduct, getProducts)} 
        cancel={() => cancelDelete(product)}
        component={ <Button type="primary default" 
        danger ghost icon={<DeleteOutlined />}></Button> }/>

      <PopupConfirm description={`Do you want to edit product ${product.name}?`} 
        confirm={() => confirmEdit(product, setShowDrawer, setSingleProduct, setHeaderTitle)}
        cancel={() => cancelEdit(setShowDrawer)}
        component={ <Button type="primary danger" 
        ghost icon={<EditOutlined />}></Button> }/>
    </div>
  );
}

const confirmDelete= (product, deleteProduct) => {
  deleteProduct(product)
};

const cancelDelete = (e) => {
  console.log(e);
  message.error('Click on No');
};


const confirmEdit = (product, setShowDrawer, setSingleProduct, setHeaderTitle) => {
  setHeaderTitle(`Update Product: ${product.name}`)
  setSingleProduct(product)
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
    render: (_, product) => <CustomAvatar  key={product.id}
    style={{ 
      color: '#f56a00', backgroundColor: '#fde3cf' }} 
      name={product.name} />
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
    render: (_, product) => <HandleColumnEvents setShowDrawer={setShowDrawer}/>
  },
];

export { stateColumns, }