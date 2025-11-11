"use client";

import { useState } from "react";
import { Paperclip, X } from "lucide-react";

export default function ChatPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-1 flex-col h-full p-4">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {/* Chat bubbles here */}
      </div>

      {/* File Previews */}
      {files.length > 0 && (
        <div className="flex gap-3 mt-3 overflow-x-auto pb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative w-20 h-20 rounded-lg border bg-muted overflow-hidden"
            >
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm p-2 text-center">
                  {file.name}
                </div>
              )}

              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 rounded-full bg-black/60 p-1 text-white"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Bar */}
      <div className="sticky bottom-0 left-0 right-0 pt-3 bg-background">
        <form className="flex items-center gap-2 border rounded-xl p-2">
          <label className="cursor-pointer p-2 rounded-lg hover:bg-muted">
            <Paperclip size={20} />
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFiles}
            />
          </label>

          <input
            type="text"
            name="chatBox"
            placeholder="Ask something..."
            className="flex-1 bg-transparent outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-primary text-primary-foreground px-4 py-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
