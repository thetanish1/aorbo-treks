import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/trek';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col bg-white rounded-card overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-lift transition-all duration-200">
      <Link to={`/blogs/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-slate-100 relative">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-semibold bg-white/90 backdrop-blur-md text-primary-800 px-2.5 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary-700 transition-colors leading-snug mb-2 line-clamp-2">
            <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Link */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs font-medium text-slate-700 truncate max-w-[130px]">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blogs/${post.slug}`}
            className="text-xs font-semibold text-primary-700 hover:text-primary-800 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

