import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import { Avatar, Card, Skeleton } from "antd";
  
  function Pokecard(values: any) {
    const { data, isLoading } = values;
  
    const { Meta } = Card;
  
    return (
      <>
        <div>
          <Card
            style={{ width: 200 }}
            cover={
              <img
                alt={data.name}
                src={
                  data["sprites"]["other"]["official-artwork"]["front_default"]
                }
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={isLoading} avatar active>
              <Meta
                avatar={
                  <Avatar size={64} src={data["sprites"]["front_default"]} />
                }
                title={data.name}
                description=""
              />
            </Skeleton>
          </Card>
        </div>
      </>
    );
  }
  
  export default Pokecard;