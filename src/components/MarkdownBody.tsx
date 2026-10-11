export function MarkdownBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/).filter(Boolean);
  return (
    <div className="post">
      {blocks.map((block, i) => (
        <p key={i}>{block.replace(/\n/g, " ")}</p>
      ))}
    </div>
  );
}
