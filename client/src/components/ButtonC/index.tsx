import { Button } from "flowbite-react";
export interface ButtonCProps {
  content: string;
}

export const ButtonC = (props: ButtonCProps) => {
  const { content } = props;
  return (
    <>
      <Button className="bg-yellow-500 p-2">{content}</Button>
    </>
  );
};
