import React from 'react';
import ReactMarkdown from 'react-markdown';
import rangeParser from 'parse-numeric-range'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('js', javascript)
SyntaxHighlighter.registerLanguage('ts', typescript)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('json', json)


const MarkdownComponents = {
	//@ts-ignore
	code({ node, inline, className, ...props }) {
		const match = /language-(\w+)/.exec(className || '')
		const hasMeta = node?.data?.meta


		const applyHighlights: object = (applyHighlights: number) => {
			if (hasMeta) {
				const RE = /{([\d,-]+)}/
				const metadata = node.data.meta?.replace(/\s/g, '')
				const strlineNumbers = RE?.test(metadata)
					? RE?.exec(metadata)![1]!
					: '0'
				const highlightLines = rangeParser(strlineNumbers)
				const data: string | null = highlightLines.includes(applyHighlights)
					? 'highlight'
					: null
				return { data }
			} else {
				return {}
			}
		}

		return match ? (
			//@ts-ignore
			<SyntaxHighlighter
				style={atomDark}
				language={match[1]}
				PreTag="div"
				showLineNumbers
				wrapLines={!!hasMeta}
				useInlineStyles
				lineProps={applyHighlights}
				{...props}
			/>
		) : (
			<code className={className} {...props} />
		)
	}
}

type Props = {
	children: string
}

const Markdown = ({ children }: Props) => {
	return (
		//@ts-ignore
		<ReactMarkdown components={MarkdownComponents}>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
