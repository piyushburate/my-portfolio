import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import Image from "next/image";

export default function RichTextRenderer({
  content,
}: {
  content: RichTextContent;
}) {
  return (
    <RichText
      content={content}
      renderers={{
        a(props) {
          return (
            <a
              href={props.href}
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 hover:underline"
            >
              {props.children}
            </a>
          );
        },
        p(props) {
          return <p className="my-4">{props.children}</p>;
        },
        bold(props) {
          return <strong className="font-semibold">{props.children}</strong>;
        },
        italic(props) {
          return <em className="italic">{props.children}</em>;
        },
        underline(props) {
          return (
            <span className="underline decoration-blue-500">
              {props.children}
            </span>
          );
        },
        blockquote(props) {
          return (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
              {props.children}
            </blockquote>
          );
        },
        h1(props) {
          return <h1 className="text-4xl font-bold my-4">{props.children}</h1>;
        },
        h2(props) {
          return (
            <h2 className="text-3xl font-semibold my-3">{props.children}</h2>
          );
        },
        h3(props) {
          return (
            <h3 className="text-2xl font-medium my-2">{props.children}</h3>
          );
        },
        h4(props) {
          return (
            <h4 className="text-xl font-semibold my-2">{props.children}</h4>
          );
        },
        h5(props) {
          return (
            <h5 className="text-lg font-semibold my-2">{props.children}</h5>
          );
        },
        h6(props) {
          return (
            <h6 className="text-base font-semibold my-2">{props.children}</h6>
          );
        },
        ul(props) {
          return <ul className="list-disc pl-5 my-2">{props.children}</ul>;
        },
        ol(props) {
          return <ol className="list-decimal pl-5 my-2">{props.children}</ol>;
        },
        li(props) {
          return <li className="my-1">{props.children}</li>;
        },
        list_item_child(props) {
          return <span className="text-base">{props.children}</span>;
        },
        code(props) {
          return (
            <code className="bg-accent p-1 rounded text-sm font-mono">
              {props.children}
            </code>
          );
        },
        code_block(props) {
          return (
            <pre className="bg-accent p-4 rounded-lg my-4 overflow-auto">
              <code className="text-sm font-mono">{props.children}</code>
            </pre>
          );
        },
        table(props) {
          return (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-300">
                {props.children}
              </table>
            </div>
          );
        },
        table_row(props) {
          return <tr className="border-b border-gray-300">{props.children}</tr>;
        },
        table_cell(props) {
          return (
            <td className="p-2 border border-gray-300">{props.children}</td>
          );
        },
        table_head(props) {
          return (
            <th className="p-2 border border-gray-300 bg-gray-200 font-semibold">
              {props.children}
            </th>
          );
        },
        table_header_cell(props) {
          return (
            <th className="p-2 border border-gray-300 bg-gray-200 font-semibold">
              {props.children}
            </th>
          );
        },
        table_body(props) {
          return <tbody>{props.children}</tbody>;
        },
        Asset: {
          image(props) {
            return (
              <Image
                src={props.src || ""}
                alt={props.altText || ""}
                className="my-4 max-w-full h-auto rounded-lg shadow-sm"
                width={props.width || 600}
                height={props.height || 400}
              />
            );
          },
        },
        img(props) {
          return (
            <Image
              src={props.src || ""}
              alt={props.altText || ""}
              className="my-4 max-w-full h-auto rounded-lg shadow-sm"
              width={props.width || 600}
              height={props.height || 400}
            />
          );
        },
        video(props) {
          return (
            <video
              controls
              className="w-full h-auto my-4 rounded-lg shadow-sm"
              width={props.width || 600}
              height={props.height || 400}
            >
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        },
        iframe(props) {
          return (
            <iframe
              src={props.url}
              className="w-full h-64 my-4 rounded-lg shadow-sm"
            />
          );
        },
      }}
    />
  );
}
