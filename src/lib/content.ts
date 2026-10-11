import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogAuthor = { slug: string; name: string };
export type BlogCategory = { slug: string; title: string };

export type BlogFrontmatter = {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  thumbnail?: string;
  category: BlogCategory;
  author: BlogAuthor;
};

export type ServiceFrontmatter = {
  title: string;
  description: string;
  thumbnail?: string;
  pubDate: Date;
  updatedDate?: Date;
  featured?: boolean;
};

export type TeamFrontmatter = {
  title: string;
  description: string;
  thumbnail?: string;
  pubDate: Date;
  updatedDate?: Date;
  featured?: boolean;
  rating: number;
};

export type ContentItem<T> = {
  id: string;
  data: T;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function parseDate(value: unknown): Date {
  return new Date(value as string);
}

function readMarkdownDir<T>(collection: string, mapData: (raw: Record<string, unknown>) => T): ContentItem<T>[] {
  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const id = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf8");
      const { data, content } = matter(raw);
      const parsed = { ...data } as Record<string, unknown>;
      if (parsed.pubDate) parsed.pubDate = parseDate(parsed.pubDate);
      if (parsed.updatedDate) parsed.updatedDate = parseDate(parsed.updatedDate);
      return {
        id,
        data: mapData(parsed),
        content,
      };
    });
}

export function getBlogPosts(): ContentItem<BlogFrontmatter>[] {
  return readMarkdownDir("blog", (d) => ({
    title: d.title as string,
    description: d.description as string,
    pubDate: d.pubDate as Date,
    updatedDate: d.updatedDate as Date | undefined,
    thumbnail: d.thumbnail as string | undefined,
    category: d.category as BlogCategory,
    author: d.author as BlogAuthor,
  })).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getBlogPost(id: string): ContentItem<BlogFrontmatter> | undefined {
  return getBlogPosts().find((p) => p.id === id);
}

export function getServices(): ContentItem<ServiceFrontmatter>[] {
  return readMarkdownDir("service", (d) => ({
    title: d.title as string,
    description: d.description as string,
    thumbnail: d.thumbnail as string | undefined,
    pubDate: d.pubDate as Date,
    updatedDate: d.updatedDate as Date | undefined,
    featured: d.featured as boolean | undefined,
  })).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getService(id: string): ContentItem<ServiceFrontmatter> | undefined {
  return getServices().find((p) => p.id === id);
}

export function getTeamMembers(): ContentItem<TeamFrontmatter>[] {
  return readMarkdownDir("team", (d) => ({
    title: d.title as string,
    description: d.description as string,
    thumbnail: d.thumbnail as string | undefined,
    pubDate: d.pubDate as Date,
    updatedDate: d.updatedDate as Date | undefined,
    featured: d.featured as boolean | undefined,
    rating: (d.rating as number) ?? 5,
  })).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getTeamMember(id: string): ContentItem<TeamFrontmatter> | undefined {
  return getTeamMembers().find((p) => p.id === id);
}
