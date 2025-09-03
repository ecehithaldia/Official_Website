import { useState } from 'react'
import './App.css'
import { ImagesSlider } from "@/components/ui/images-slider";

export default function App() {
  return (
     <div className="h-screen w-screen">
      <ImagesSlider
        images={[
          "https://picsum.photos/id/1018/1000/600",
          "https://picsum.photos/id/1015/1000/600",
          "https://picsum.photos/id/1019/1000/600",
        ]}
      >
        <h1 className="z-50 text-white text-4xl md:text-5xl font-heading font-bold leading-tight text-center">
          Department <br />
          of <br />
          Electronics & Communication Engineering
        </h1>

      </ImagesSlider>
    </div>
  );
}
