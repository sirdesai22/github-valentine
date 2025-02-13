"use client";
import { useState } from "react";
import { toast } from "sonner";
function Share({ username }: { username: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/stats/${username}`
      );
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy link to clipboard!");
    }
  };

  return (
    <button
      className="w-full rounded-xl bg-white p-4 text-center text-lg text-black transition duration-150 ease-in-out hover:bg-gray-100 font-semibold"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : "Share My Stats"}
    </button>
  );
}

export default Share;
