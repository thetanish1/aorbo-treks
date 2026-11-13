import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BlogCard } from '@/components/cards/BlogCard';
import { Chip } from '@/components/common/Chip';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';
import { useBlogs } from '@/hooks/useDestinations';

export const Blogs: React.FC = () => {
  const { data: blogs = [] } = useBlogs();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Guides & Preparation', 'Weekend Escapes', 'Sustainability'];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory);

  const breadcrumbs = [{ label: 'Blogs & Guides' }];

  return (
    <>
      <SEO
        title="Trek Guides, Mountain Tips & Stories"
        description="Comprehensive guides on winter packing, high-altitude acclimatisation, weekend getaways from Hyderabad & Bengaluru, and responsible trekking."
        canonical="/blogs"
        schema={createBreadcrumbSchema([{ name: 'Blogs', item: '/blogs' }])}
      />

      <div className="bg-surface-alt min-h-screen py-10 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Header */}
          <div className="max-w-3xl mb-8">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
              TrekNest Journal
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-content tracking-tight">
              Trek guides & outdoor stories
            </h1>
            <p className="mt-3 text-base sm:text-lg text-content-muted leading-relaxed">
              Expert advice from certified mountaineers, layering breakdowns, trail gear checklists, and sustainable mountain travel tips.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {categories.map((cat) => (
              <Chip
                key={cat}
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                variant="outline"
                className="cursor-pointer"
              >
                {cat}
              </Chip>
            ))}
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

