import {JSONContent} from "@tiptap/react";

export function getTextFromJSONContent(content: JSONContent | undefined): string {
    if (!content) return "";
    if (content.type === "text") return content.text || "";
    if (!content.content) return "";
    return content.content.map(getTextFromJSONContent).join(" ");
}