// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from 'openai';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";


const ImageGenerator = () => {
    const [query, setQuery] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
  
    // Function to call the DALL-E API
    const generateImage = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const openai = new OpenAIApi(new Configuration({ apiKey }));
        const response = await openai.createImage({ prompt: query });
        setGeneratedImage(response.data.url); // Assuming the API response includes an image URL
      } catch (error) {
        console.error('Error generating image:', error);
      }
    };
  
    return (
      <div className="image-generator">
        <input
          type="text"
          placeholder="Enter a description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={generateImage}>Generate Image</button>
        {generatedImage && <img src={generatedImage} alt="Generated" />}
      </div>
    );
  };
  
  export default ImageGenerator;