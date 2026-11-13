import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useBlog } from '@/hooks/useDestinations';
import { Button } from '@/components/common/Button';

export const BlogDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlog(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center text-slate-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Article not found</h2>
        <Link to="/blogs" className="mt-4 inline-block text-primary-700 font-semibold underline">
          Back to all articles
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Blogs', href: '/blogs' },
    { label: post.title },
  ];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blogs/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        schema={createBreadcrumbSchema([
          { name: 'Blogs', item: '/blogs' },
          { name: post.title, item: `/blogs/${post.slug}` },
        ])}
      />

      <article className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-content tracking-tight mt-4 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-500">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-10 bg-slate-100">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Body */}
          <div className="bg-white p-6 sm:p-10 rounded-card border border-slate-200 shadow-soft prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary-700">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold mt-6 mb-3 text-slate-900">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="list-disc pl-5 my-3 space-y-1">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n');
                return (
                  <ol key={idx} className="list-decimal pl-5 my-3 space-y-1">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="my-3">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags & Return Button */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link to="/blogs">
              <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Back to all guides
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
