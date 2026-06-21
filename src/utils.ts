// Format a date like "Jun 1 2026" (no comma), matching the minimal feed style.
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
    .format(date)
    .replace(',', '');
}

// Plain text with markdown syntax stripped — shared by the excerpt and
// reading-time estimates below.
function stripMarkdown(body: string): string {
  return (body || '')
    .replace(/^---[\s\S]*?---/, '') // strip frontmatter if present
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/[#>*_`~]/g, ' ') // markdown symbols
    .replace(/\s+/g, ' ')
    .trim();
}

// Build a short plain-text excerpt from raw markdown for the homepage feed.
export function excerpt(body: string, len = 260): string {
  const text = stripMarkdown(body);
  if (text.length <= len) return text;
  return text.slice(0, len).replace(/\s+\S*$/, '') + '…';
}

// Estimate reading time at 225 words/minute, rounded up to whole minutes.
export function readingTime(body: string, wpm = 225): number {
  const words = stripMarkdown(body).split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}
