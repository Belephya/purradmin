// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import ImageGenerator from "@/components/Imagine";


function App() {
  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <ImageGenerator />
    </>
  );
}

export default withAuthenticator(App);