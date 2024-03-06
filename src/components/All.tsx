import { useState } from "react";
import { Card, MenuProps, Menu, Row, Col, Button } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { allNews } from "../services/Queries";
import { Link } from "react-router-dom";
const { Meta } = Card;

// const items: MenuProps["items"] = [
//   {
//     label: "Navigation One",
//     key: "mail",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Navigation Two",
//     key: "app",
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: "Navigation Three - Submenu",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           {
//             label: "Option 3",
//             key: "setting:3",
//           },
//           {
//             label: "Option 4",
//             key: "setting:4",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//     key: "alipay",
//   },
// ];

export default function All() {
  const { data, isLoading, isError } = allNews();
  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>Error :(</p>;
  }
  console.log(data);

  return (
    <>
      <div className="" style={{ padding: 8 }}>
        <Row style={{ padding: 8 }}>
          {data.map((article, index) => (
            <Col span={6} style={{ justifyContent: "center", padding: 8 }}>
              <Link to={`/article/${article.title}`}>
                <Card hoverable key={index} cover={<img alt="example" src={article.urlToImage} style={{ width: "100%", height: "40vh" }} />}>
                  <Meta title={article.title} />
                  <p>Author : {article.author ?? "No Author"}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
  //   const [current, setCurrent] = useState("mail");

  //   const onClick: MenuProps["onClick"] = (e) => {
  //     console.log("click ", e);
  //     setCurrent(e.key);
  //   };

  //   return (
  //     <div className="justify-center">
  //       <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  //     </div>
  //   );
}
