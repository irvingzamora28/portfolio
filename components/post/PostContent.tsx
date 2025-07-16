import React, { ReactNode, useState } from "react";
import Markdown, { type MarkdownToJSX } from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostTableOfContents, { type TableOfContentsItem } from "./PostTableOfContents";
import PostListItem from "./PostListItem";
import { FiCopy, FiCheck } from 'react-icons/fi';

interface PostContentProps {
    content: string;
    toc?: TableOfContentsItem[];
}

interface CodeBlockProps {
    className?: string;
    children?: ReactNode;
    [key: string]: any;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className = '', children, ...props }) => {
    const [copied, setCopied] = useState(false);
    
    // Extract language from className (e.g., 'lang-javascript' -> 'javascript')
    const languageMatch = className.match(/lang-([\w-]+)/);
    const language = languageMatch ? languageMatch[1] : 'text';
    const codeContent = String(children).replace(/\n$/, '');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // For inline code
    if (language === 'text') {
        return (
            <code className="bg-rose-100 dark:bg-rose-900 rounded-sm px-1.5 py-0.5 text-rose-700 dark:text-rose-300">
                {children}
            </code>
        );
    }

    // For code blocks with language
    return (
        <div className="my-2 rounded-lg overflow-hidden relative group">
            <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-4 py-2 font-mono">
                <span>{language}</span>
                <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                        copied 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-300/50 dark:hover:bg-gray-700/50'
                    }`}
                    title={copied ? 'Copied!' : 'Copy to clipboard'}
                >
                    {copied ? (
                        <>
                            <FiCheck className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <FiCopy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    backgroundColor: '#1e1e1e',
                }}
                codeTagProps={{
                    className: 'font-mono',
                }}
                showLineNumbers={true}
                wrapLines={true}
                {...props}
            >
                {codeContent}
            </SyntaxHighlighter>
        </div>
    );
};

const PreBlock: React.FC<{ children?: ReactNode }> = ({ children, ...props }) => {
    console.log('PreBlock children:', children);
    
    // If children is a code element, render it with CodeBlock
    if (React.isValidElement(children) && children.type === 'code') {
        const { className, ...rest } = children.props;
        console.log('Rendering code block with className:', className);
        
        return (
            <div className="code-block-wrapper">
                <CodeBlock className={className || ''} {...rest}>
                    {children.props?.children}
                </CodeBlock>
            </div>
        );
    }
    
    console.log('Rendering non-code pre block');
    // For any other content, render it in a pre tag
    return (
        <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
            {children}
        </pre>
    );
};

type MarkdownOptions = MarkdownToJSX.Options;

const getMarkdownOptions = (toc: TableOfContentsItem[] = []): MarkdownOptions => ({
    forceBlock: true,
    wrapper: React.Fragment,
    overrides: {
        pre: {
            component: (props: any) => {
                console.log('Rendering pre with props:', props);
                return <PreBlock {...props} />;
            },
        },
        code: {
            component: (props: any) => {
                console.log('Rendering code with props:', { 
                    className: props.className,
                    children: String(props.children).substring(0, 50) + (String(props.children).length > 50 ? '...' : '')
                });
                return <CodeBlock {...props} />;
            },
        },
        h1: {
            component: (props: any) => (
                <h1 
                    className="text-4xl font-bold mt-12 mb-6"
                    id={props.children?.toString().toLowerCase().replace(/[^\w]+/g, '-')}
                >
                    {props.children}
                </h1>
            ),
        },
        h2: {
            component: (props: any) => (
                <h2 
                    className="text-3xl font-bold mt-10 mb-4"
                    id={props.children?.toString().toLowerCase().replace(/[^\w]+/g, '-')}
                >
                    {props.children}
                </h2>
            ),
        },
        h3: {
            component: (props: any) => <h3 className="text-2xl font-bold mt-8 mb-3">{props.children}</h3>,
        },
        p: {
            component: (props: any) => <p className="my-4 leading-relaxed">{props.children}</p>,
        },
        ul: {
            component: (props: any) => <ul className="list-disc pl-6 my-4 space-y-2">{props.children}</ul>,
        },
        ol: {
            component: (props: any) => <ol className="list-decimal pl-6 my-4 space-y-2">{props.children}</ol>,
        },
        li: {
            component: (props: any) => <li className="pl-2 py-1">{props.children}</li>,
        },
        a: {
            component: (props: any) => (
                <a
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                />
            ),
        },
        blockquote: {
            component: (props: any) => (
                <blockquote
                    className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1 my-4 text-gray-700 dark:text-gray-300"
                    {...props}
                />
            ),
        },
        table: {
            component: (props: any) => (
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
                </div>
            ),
        },
        thead: {
            component: (props: any) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
        },
        tbody: {
            component: (props: any) => (
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700" {...props} />
            ),
        },
        th: {
            component: (props: any) => (
                <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    {...props}
                />
            ),
        },
        td: {
            component: (props: any) => <td className="px-6 py-4 whitespace-nowrap text-sm" {...props} />,
        },
        PostTableOfContents: {
            component: () => <PostTableOfContents toc={toc} />,
        },
        PostListItem: {
            component: PostListItem,
        },
    },
});

const PostContent: React.FC<PostContentProps> = ({ content, toc = [] }) => {
    const options = getMarkdownOptions(toc);
    return <Markdown options={options}>{content}</Markdown>;
};

export default PostContent;
