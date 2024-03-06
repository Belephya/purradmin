// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();
export default function Imagine() {
return (
    <div>
        <input type="text" placeholder="What ever you can imagine" />
        <button>Go!</button> 
    </div>
    );
}