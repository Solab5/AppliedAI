import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import firstPost from '../blog/first-post.md?raw';

const posts = [
  {
    slug: 'first-post',
    content: firstPost,
    meta: {
      title: 'The Role of AI in Modern Business',
      date: '2024-07-07',
      author: 'AppliedAI Team',
      summary: 'How artificial intelligence is transforming industries and driving business value.'
    }
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const post = posts.find(p => p.slug === selectedPost);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-brown mb-10 uppercase tracking-wide text-center">
          Blog
        </h2>
        {selectedPost && post ? (
          <article className="prose lg:prose-xl max-w-none mx-auto">
            <button
              className="mb-8 text-brand-blue hover:underline font-semibold"
              onClick={() => setSelectedPost(null)}
            >
              ← Back to all posts
            </button>
            <h1>{post.meta.title}</h1>
            <p className="text-sm text-gray-500 mb-2">{post.meta.date} &middot; {post.meta.author}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        ) : (
          <div className="space-y-8">
            {posts.map((p) => (
              <div
                key={p.slug}
                className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer bg-white"
                onClick={() => setSelectedPost(p.slug)}
              >
                <h3 className="text-2xl font-oswald font-bold text-brand-brown mb-2">{p.meta.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{p.meta.date} &middot; {p.meta.author}</p>
                <p className="text-gray-700 mb-2">{p.meta.summary}</p>
                <span className="text-brand-blue font-semibold hover:underline">Read more →</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 