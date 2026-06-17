import { getCollection, type CollectionEntry } from 'astro:content';
import { excerpt as makeExcerpt } from '../utils';

export type PostEntry = CollectionEntry<'posts'>;

// Flat shape consumed by the feed, archive, cards and RSS.
// The article page re-fetches the entry by `id` to render the Markdown body.
export interface Post {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  excerpt: string;
  audio?: string;
  duration?: string;
  topPost: boolean;
}

function toPost(entry: PostEntry): Post {
  return {
    id: entry.id,
    title: entry.data.title,
    subtitle: entry.data.subtitle ?? '',
    date: entry.data.date,
    excerpt: makeExcerpt(entry.body ?? ''),
    audio: entry.data.audio,
    duration: entry.data.duration,
    topPost: entry.data.topPost ?? false,
  };
}

// Posts authored in TinaCMS land in src/content/posts/*.md.
// Drafts are hidden in production builds but visible while developing.
export async function getPublishedPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true
  );
  return entries.map(toPost);
}

export function sortPostsNewestFirst(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
