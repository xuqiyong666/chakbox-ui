import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('bash', bash)

type CodeBlockProps = {
  language: 'tsx' | 'bash'
  children: string
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      customStyle={{
        margin: 0,
        borderRadius: 6,
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  )
}
