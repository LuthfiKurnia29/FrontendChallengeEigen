import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKEY, BaseUrl } from "../services/BaseUrl";
import { allNews } from "../services/Queries";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Detail() {
  const [news, setNews] = useState({});
  const { data, isLoading, isError } = allNews();
  const params = useParams();

  if (isLoading) {
    return <div className="">...Loading</div>;
  }

  const res = data.find((item) => item.title === params.title);

  console.log(res);

  // useEffect(() => {
  //   const getNews = async () => {
  //     const result = await axios.get(`${BaseUrl}/v2/everything?q=${params.title}&apiKey=${APIKEY}`).then((res) => res.data);
  //     console.log(result);

  //     setNews(result);
  //   };
  //   getNews();
  // }, []);

  // console.log(news);

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#000",
    // height: 64,
    // paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "transparent",
  };

  const contentStyle: React.CSSProperties = {
    margin: "10px",
    textAlign: "start",
    color: "#000",
    backgroundColor: "transparent",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    // lineHeight: "120px",
    marginTop: '10px',
    color: "#fff",
    backgroundColor: "transparent",
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    // maxWidth: 'calc(50% - 8px)',
  };

  return (
    <Layout style={layoutStyle}>
      <Sider width="35%" style={siderStyle}>
        <img src={res.urlToImage} width={"100%"} alt="" />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <h2>{res.title}</h2>
        </Header>
        <Content style={contentStyle}>
          {res.description}
          <p>{res.content}</p>
          <p>Author: {res.author ?? "No Author"}</p>
          <p>
            Read More At : <Link to={res.url}>{res.url}</Link>
          </p>
        </Content>
      </Layout>
    </Layout>
  );
}
