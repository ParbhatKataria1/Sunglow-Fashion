import {
  GitlabOutlined,
  QqOutlined,
  ShoppingCartOutlined,
  YuqueOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic,  Typography } from "antd";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TableContainer,Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Image, Heading } from "@chakra-ui/react";
import { getAllProducts, getClothing, getProducts, getShoes } from "./API/data";
import Piechart from "./Chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [allproducts, setAllProducts] = useState(0);
  const [products, setProducts] = useState(0);
  const [shoes, setShoes] = useState(0);
  const [clothing, setClothing] = useState(0);

  useEffect(() => {
    getAllProducts().then((res) => {
      setAllProducts(res.length);
    });
    getProducts().then((res) => {
      setProducts(res.length);
    });
    getClothing().then((res) => {
      setClothing(res.length);
    });
    getShoes().then((res) => {
      setShoes(res.length);
    });
  }, []);

  return (
    <Space size={30} direction="vertical">
      <Heading >Dashboard</Heading>
      <Space direction="horizontal">
      <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"All Products"}
          value={allproducts}
        />
        <DashboardCard
          icon={
            <YuqueOutlined
              style={{
                color: "green",
                backgroundColor: "black",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Shoes"}
          value={shoes}
        />
        <DashboardCard
          icon={
            <GitlabOutlined
              style={{
                color: "green",
                backgroundColor: "orange",

                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Clothing"}
          value={clothing}
        />
        <DashboardCard
          icon={
            <QqOutlined
              style={{
                color: "green",
                backgroundColor: "red",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Dresses"}
          value={products}
        />
      </Space>
      <Piechart/>
        <RecentOrders />
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal" size={50} backgroundColor>
        {icon}
        <Statistic size={50} title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  let data=[];
  useEffect(() => {
    setLoading(true);
    getAllProducts().then((res) => {
       data.push(res);
      // console.log(res)
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  // console.log("data",dataSource)
  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <TableContainer>
      <Table variant='simple'>
      <Thead>
      <Tr>
        <Th>No.</Th>
        <Th>Title</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Image</Th>
      </Tr>
    </Thead>
     {dataSource.map((data)=>(
    
    <Tbody>
      <Tr>
      <Td>{data.id}</Td>
      <Td>{data.title}</Td>
      <Td isNumeric>{data.price}</Td>
      <Td><Image src={data.image.furl} alt="product" width={30} height={30}/></Td>
    </Tr>
    </Tbody>
  
  ))}
  </Table>
</TableContainer>
    </>
  );
}

export default Dashboard;
