"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

function DetailedPage() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-10">
      <h3 className="text-[#000000] font-bold text-3xl">Nebula</h3>
      <ReactMarkdown className="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
        accusantium cupiditate iusto? Voluptates iure cum odio ducimus facere
        totam ea incidunt commodi dolorem est, voluptatum animi iusto dolor
        maxime et corporis, id pariatur tempora reiciendis eum quod. Labore
        sapiente quos cum autem, enim minima et deserunt nostrum cupiditate
        consectetur fugiat?
      </ReactMarkdown>
      <div className="w-full flex justify-start items-center gap-2">
        <button className="bg-gray-300 text-black px-4 py-2 font-semibold rounded-md">
          Visit
        </button>
        <button className="bg-[#7C00FE] text-white px-4 py-2 font-semibold rounded-md">
          Buy now for 29$
        </button>
      </div>

      <iframe
        src="https://nebulatemplate.framer.website/"
        frameborder="0"
        className="w-full h-96"
      ></iframe>
    </div>
  );
}

export default DetailedPage;
