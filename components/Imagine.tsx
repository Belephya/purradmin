// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import OpenAI from 'openai';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";


const ImageGenerator = () => {
    const [query, setQuery] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | undefined>(undefined);
    
  
    // Function to call the DALL-E API
    const generateImage = async () => {
        try {
            const apiKey = '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'; // Replace with your actual API key
            const openai = new OpenAI({ apiKey,dangerouslyAllowBrowser: true});
            const response = await openai.images.generate({ 
                    model: "dall-e-3",
                    prompt: query,
                    n:1,
                    size:"512x512",            
            });
            setGeneratedImage(response.data[0].url); // Assuming the API response includes an image URL
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