
import { Avatar, Button, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

import PopupConfirm from "../../../components/PopupNotification/PopupConfirm";

const HandleAddNewProductDetails = () => {
  
  return(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <PopupConfirm 
        description={"description"} 
        confirm={() => confirmDeleteProduct()} 
        cancel={() => cancelDeleteProduct()}
        component={ <Button type="primary default" 
        danger ghost icon={<DeleteOutlined />}></Button> }/>

      <PopupConfirm description={"description"} 
        confirm={() => confirmEditProduct()}
        cancel={() => cancelEditProduct()}
        component={ <Button type="primary danger" 
        ghost icon={<EditOutlined />}></Button> }/>
    </div>
  );
}

const confirmDeleteProduct = () => {
};

const cancelDeleteProduct = (e) => {
  message.error('Click on No');
};


const confirmEditProduct = () => {

};

const cancelEditProduct = () => {
  message.error('Click on No');
};


const productColumns = [
  {
    title : "Mode of Payment",
    children: [
      {
        title: "Name",
        dataIndex: 'name',
        key: 'name'
      }, 
      {
        title: 'Provider',
        dataIndex: 'provider',
        key: 'provider'
      }
    ]
,
  },
  {
    title: 'Delivery Fee',
    dataIndex: 'deliveryFee',
    key: 'deliveryFee',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Mode of Delivery',
      dataIndex: 'modeOfDelivery',
      key: 'modeOfDelivery',
  },
  {
    title: 'Delivery',
    children: [
      {
        dataIndex: 'delivery',
        key: 'delivery',
      }
    ]

  },
  {
    title: 'Grand Total',
    dataIndex: 'grandTotal',
    key: 'grandTotal',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Address',
    children: [
      {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'Email Address',
        dataIndex: 'emailAddres',
        key: 'emailAddress'
      },
       {
        title: 'Street',
        dataInde: 'street',
        key: 'street'
       },
       {
        title: 'State',
        dataInde: 'state',
        key: 'state'
       },
       {
        title: 'Country',
        dataInde: 'country',
        key: 'country'
       },
       {
        title: 'isDefault',
        dataInde: 'isDefault',
        key: 'isDefault'
       },
    ]

  },  
  {
    title: "Actions",
    dataIndex: 'actions',
    key: 'actions',
    render: (_, product) => <HandleAddNewProductDetails />
  },
];

export { productColumns, }