import {JSONContent} from "@tiptap/react";
import {generateHTML} from "@tiptap/html"
import StarterKit from "@tiptap/starter-kit"

export function getTextFromJSONContent(content: JSONContent | undefined): string {
    if (!content) return "";
    if (content.type === "text") return content.text || "";
    if (!content.content) return "";
    return content.content.map(getTextFromJSONContent).join(" ");
}


export function getHTMLFromJSONContent(content: JSONContent) {
    return generateHTML(content, [StarterKit])
}