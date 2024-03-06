// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Imagine from "@/components/Imagine";


function App() {
  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <Imagine />
    </>
  );
}

export default withAuthenticator(App);