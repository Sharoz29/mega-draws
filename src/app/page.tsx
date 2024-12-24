import { Button, Flex, Input } from "antd";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Input placeholder="Basic Input" />
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
}
