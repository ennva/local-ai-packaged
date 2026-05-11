import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      category: 'devops',
      readTime: 8,
      publishDate: '2024-01-15',
      author: 'Nephthali Djabon',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['kubernetes', 'deployment', 'devops']
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      category: 'security',
      readTime: 12,
      publishDate: '2024-01-10',
      author: 'Nephthali Djabon',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      tags: ['security', 'multi-cloud', 'compliance']
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      category: 'automation',
      readTime: 10,
      publishDate: '2024-01-05',
      author: 'Nephthali Djabon',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['gitops', 'ci-cd', 'automation']
    }
  ];

  return (
    <section id="blog" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-roboto font-semibold text-sm">{t('blog.title')}</span>
          </div>
          <h2 className="mb-4 text-primary">{t('blog.title2')}</h2>
          <p className="text-xl text-neutral-600 font-roboto max-w-3xl mx-auto leading-relaxed">{t('blog.subtitle2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border border-neutral-200">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-accent px-3 py-1.5 rounded-lg text-xs font-bold text-primary shadow-lg">
                  {t(`blog.categories.${post.category}`)}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3 font-roboto">
                  <Clock size={14} className="mr-1 text-secondary" />
                  <span>{post.readTime} {t('blog.readTime')}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 font-roboto mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4 pt-4 border-t border-neutral-100 font-roboto">
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-secondary" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-secondary" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-secondary hover:text-accent font-roboto font-semibold transition-colors"
                >
                  {t('blog.readMore')}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center bg-accent text-primary px-8 py-3 rounded-lg hover:bg-accent-light transition-all transform hover:scale-105 hover:shadow-lg font-roboto font-semibold"
          >
            {t('blog.articles.title')}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
