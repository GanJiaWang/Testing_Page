/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Layout, Row, Col, Card, Input, Button, Divider, Space } from "antd";
import Facebook from "./logo/facebook.svg";
import "antd/dist/antd.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ height: "100vh" }}>
        <Row
          style={{
            padding: 100,
            fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
          }}
        >
          <Col span={12} style={{ paddingTop: 75, paddingLeft: 103 }}>
            <img src={Facebook} width={300} />
            <h1
              style={{
                paddingLeft: "5.5%",
                fontSize: "29px",
                fontWeight: "normal",
                lineHeight: "15px",
              }}
            >
              联系你我，分享生活，尽在 Facebook
            </h1>
          </Col>
          <Col span={12} style={{ textAlign: "center" }}>
            <Space size={20} direction="vertical" style={{ width: "100%" }}>
              <Card
                style={{ borderRadius: 10, margin: "5% 20% 0% 15%" }}
                bodyStyle={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: 10,
                  height: 360,
                  padding: 15,
                }}
              >
                <Space size={15} direction="vertical" style={{ width: "100%" }}>
                  <Input
                    size="large"
                    style={{
                      borderRadius: 5,
                      fontSize: "18px",
                      fontWeight: "bold",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                    }}
                    placeholder="邮箱或手机号"
                  />
                  <Input
                    size="large"
                    style={{
                      borderRadius: 5,
                      fontSize: "18px",
                      fontWeight: "bold",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                    }}
                    placeholder="密码"
                  />
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      width: "100%",
                      borderRadius: 5,
                      fontSize: "21px",
                      fontWeight: "bold",
                      height: "auto",
                    }}
                  >
                    登录
                  </Button>
                  <Button
                    size="large"
                    type="link"
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1877f2",
                    }}
                  >
                    忘记密码？
                  </Button>
                </Space>
                <Divider style={{ borderColor: "#dadde1", marginTop: "3%" }} />
                <Button
                  size="large"
                  type="primary"
                  style={{
                    borderRadius: 5,
                    backgroundColor: "#42b72a",
                    border: 0,
                    fontSize: "18px",
                    height: "auto",
                    lineHeight: "34px",
                    fontWeight: "bold",
                  }}
                >
                  新建帐户
                </Button>
              </Card>
              <div>
                为名人、团体或企业
                <a
                  style={{ fontSize: "15px", fontWeight: 600, color: "black" }}
                >
                  创建公共主页
                </a>
                。
              </div>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
