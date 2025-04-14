import { Form } from "react-router";

export function action() {
  return { status: "success" };
}

export default function Home() {
  return (
    <Form method="post">
      <button type="submit">Click Here</button>
    </Form>
  );
}
