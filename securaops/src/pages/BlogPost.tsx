import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { sub } from 'date-fns';
import { table } from 'console';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Sample blog post data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      content: t('blog.post1.content'),
      introduction: t('blog.post1.intro'),
      definition: {
        title: t('blog.post1.definition.title'),
        content: t('blog.post1.definition.content')
      },
      implementation: {
        excerpt: t('blog.post1.implementation.excerpt'),
        steps: [
          t('blog.post1.implementation.steps.1'),
          t('blog.post1.implementation.steps.2'),
          t('blog.post1.implementation.steps.3'),
          t('blog.post1.implementation.steps.4'),
          t('blog.post1.implementation.steps.5')
        ]
      },
      benefits: [
        t('blog.post1.benefits.1'),
        t('blog.post1.benefits.2'),
        t('blog.post1.benefits.3'),
        t('blog.post1.benefits.4')
      ],
      cta: {
        excerpt: t('blog.post1.cta.excerpt'),
        conclusion: t('blog.post1.cta.conclusion'),
      },
      team: {
        expertise: [
          t('blog.post1.team.expertise.1'),
          t('blog.post1.team.expertise.2'),
          t('blog.post1.team.expertise.3'),
          t('blog.post1.team.expertise.4')
        ]
      },
      category: 'devops',
      readTime: 8,
      publishDate: '2025-01-15',
      author: 'Alexandre Martin',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['kubernetes', 'deployment', 'devops']
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      content: t('blog.post2.content'),
      introduction: t('blog.post2.intro'),
      definition: {
        title: t('blog.post2.definition.title'),
        content: t('blog.post2.definition.content.header') || t('blog.post2.definition.content'),
        list: [
          t('blog.post2.definition.content.list.1'),
          t('blog.post2.definition.content.list.2'),
          t('blog.post2.definition.content.list.3')
        ],
        conclusion: t('blog.post2.definition.content.conclusion')
      },
      implementation: {
        excerpt: t('blog.post2.implementation.excerpt'),
        steps: [
          t('blog.post2.implementation.steps.1'),
          t('blog.post2.implementation.steps.2'),
          t('blog.post2.implementation.steps.3'),
          t('blog.post2.implementation.steps.4')
        ]
      },
      benefits: [
        t('blog.post2.benefits.1'),
        t('blog.post2.benefits.2'),
        t('blog.post2.benefits.3'),
        t('blog.post2.benefits.4')
      ],
      cta: {
        excerpt: t('blog.post2.cta.excerpt'),
        conclusion: t('blog.post2.cta.conclusion'),
      },
      team: {
        expertise: [
          t('blog.post2.team.expertise.1'),
          t('blog.post2.team.expertise.2'),
          t('blog.post2.team.expertise.3')
        ]
      },
      category: 'security',
      readTime: 12,
      publishDate: '2025-01-10',
      author: 'Sarah Dubois',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      tags: ['security', 'multi-cloud', 'compliance']
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      content: t('blog.post3.content'),
      introduction: t('blog.post3.intro'),
      definition: {
        title: t('blog.post3.definition.title'),
        content: {
          header: t('blog.post3.definition.content.header'),
          description: t('blog.post3.definition.content.description'),
          strengths: {
            header: t('blog.post3.definition.content.strength.title'),
            items: [
              t('blog.post3.definition.content.strength.list.1'),
              t('blog.post3.definition.content.strength.list.2'),
              t('blog.post3.definition.content.strength.list.3'),
            ]
          },
          challenges: {
            header: t('blog.post3.definition.content.challenge.title'),
            items: [
              t('blog.post3.definition.content.challenge.list.1'),
              t('blog.post3.definition.content.challenge.list.2'),
              t('blog.post3.definition.content.challenge.list.3'),
            ]
          },
          conclusion: t('blog.post3.definition.content.conclusion')
        },
        subcontent: {
          header: t('blog.post3.definition.subcontent.header'),
          description: t('blog.post3.definition.subcontent.description'),
          strengths: {
            header: t('blog.post3.definition.subcontent.strength.title'),
            items: [
              t('blog.post3.definition.subcontent.strength.list.1'),
              t('blog.post3.definition.subcontent.strength.list.2'),
              t('blog.post3.definition.subcontent.strength.list.3'),
            ]
          },
          challenges: {
            header: t('blog.post3.definition.subcontent.challenge.title'),
            items: [
              t('blog.post3.definition.subcontent.challenge.list.1'),
              t('blog.post3.definition.subcontent.challenge.list.2'),
            ]
          }
        }
      },
      implementation: {
        excerpt: t('blog.post3.implementation.excerpt'),
        gitops: {
          title: t('blog.post3.implementation.gitops.title'),
          steps: [
            t('blog.post3.implementation.gitops.steps.1'),
            t('blog.post3.implementation.gitops.steps.2'),
            t('blog.post3.implementation.gitops.steps.3'),
            t('blog.post3.implementation.gitops.steps.4')
          ]
        },
        cicd: {
          title: t('blog.post3.implementation.cicd.title'),
          steps: [
            t('blog.post3.implementation.cicd.steps.1'),
            t('blog.post3.implementation.cicd.steps.2'),
            t('blog.post3.implementation.cicd.steps.3')
          ]
        },
        conclusion: t('blog.post3.implementation.conclusion')
      },
      benefits: [
        t('blog.post3.benefits.1'),
        t('blog.post3.benefits.2'),
        t('blog.post3.benefits.3'),
        t('blog.post3.benefits.4')
      ],
      resume: {
        title: t('blog.post3.resume.title'),
        table: {
          headers: [
            t('blog.post3.resume.table.header.1'),
            t('blog.post3.resume.table.header.2'),
            t('blog.post3.resume.table.header.3')
          ],
          rows: [
            {
              title: t('blog.post3.resume.table.row.1.title'),
              description: t('blog.post3.resume.table.row.1.gitops'),
              link: t('blog.post3.resume.table.row.1.cicd')
            },
            {
              title: t('blog.post3.resume.table.row.2.title'),
              description: t('blog.post3.resume.table.row.2.gitops'),
              link: t('blog.post3.resume.table.row.2.cicd')
            },
            {
              title: t('blog.post3.resume.table.row.3.title'),
              description: t('blog.post3.resume.table.row.3.gitops'),
              link: t('blog.post3.resume.table.row.3.cicd')
            },
            {
              title: t('blog.post3.resume.table.row.4.title'),
              description: t('blog.post3.resume.table.row.4.gitops'),
              link: t('blog.post3.resume.table.row.4.cicd')
            },
            {
              title: t('blog.post3.resume.table.row.5.title'),
              description: t('blog.post3.resume.table.row.5.gitops'),
              link: t('blog.post3.resume.table.row.5.cicd')
            }
          ]
        }
      },
      cta: {
        excerpt: t('blog.post3.cta.excerpt'),
        conclusion: t('blog.post3.cta.conclusion'),
      },
      team: {
        expertise: [
          t('blog.post3.team.expertise.1'),
          t('blog.post3.team.expertise.2'),
          t('blog.post3.team.expertise.3')
        ]
      },
      category: 'automation',
      readTime: 10,
      publishDate: '2025-01-05',
      author: 'Thomas Weber',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['gitops', 'ci-cd', 'automation']
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:text-primary/80">
              {t('blog.backToBlog')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <article className="py-12">
          <div className="container-custom max-w-4xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('blog.backToBlog')}
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {t(`blog.categories.${post.category}`)}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>{t('blog.author')}: {post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>{t('blog.publishedOn')} {new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>{post.readTime} {t('blog.readTime')}</span>
                </div>
              </div>

              <div className="h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.introduction ? post.introduction : post.content}
              </p>

              {post.definition && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {post.definition.title}
                  </h2>
                  {typeof post.definition.content === 'string' ? (
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {post.definition.content}
                    </p>
                  ) : (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.definition.content.header}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        {post.definition.content.description}
                      </p>
                      <div className="mb-2">
                        <h4 className="font-semibold text-gray-800">{post.definition.content.strengths.header}</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                          {post.definition.content.strengths.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{post.definition.content.challenges.header}</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                          {post.definition.content.challenges.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {post.definition.subcontent && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {post.definition.subcontent.header}
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            {post.definition.subcontent.description}
                          </p>
                          <div className="mb-2">
                            <h4 className="font-semibold text-gray-800">{post.definition.subcontent.strengths.header}</h4>
                            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                              {post.definition.subcontent.strengths.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{post.definition.subcontent.challenges.header}</h4>
                            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                              {post.definition.subcontent.challenges.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {post.definition.list && post.definition.list.length > 0 && (
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      {post.definition.list.map((item, index) => (
                        <li key={index}>
                          <span className="font-bold">{item.split(':')[0]}:</span>
                          {item.includes(':') ? item.substring(item.indexOf(':') + 1) : ''}
                        </li>
                      ))}
                    </ul>
                  )}
                  {post.definition.conclusion && (
                    <p className="text-gray-700 leading-relaxed mt-4">
                      {post.definition.conclusion}
                    </p>
                  )}
                </>
              )}

              {/* Sample additional content sections */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('blog.implementation.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('blog.implementation.advice')}
              </p>
              {post.implementation && (
                <>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.implementation.excerpt}
                  </p>
                  {/* Handle steps array (posts 1 & 2) */}
                  {Array.isArray(post.implementation.steps) && (
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      {post.implementation.steps.map((step, index) => (
                        <li key={index}>
                          <span className="font-bold">{step.split(':')[0]}:</span>
                          {step.includes(':') ? step.substring(step.indexOf(':') + 1) : ''}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Handle gitops/cicd (post 3) */}
                  {post.implementation.gitops && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">{post.implementation.gitops.title}</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        {post.implementation.gitops.steps.map((step, idx) => (
                          <li key={idx}>
                            <span className="font-bold">{step.split(':')[0]}</span>
                            {step.includes(':') ? step.substring(step.indexOf(':') + 1) : ''}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {post.implementation.cicd && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">{post.implementation.cicd.title}</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        {post.implementation.cicd.steps.map((step, idx) => (
                          <li key={idx}>
                            <span className="font-bold">{step.split(':')[0]}</span>
                            {step.includes(':') ? step.substring(step.indexOf(':') + 1) : ''}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {post.implementation.conclusion && (
                    <p className="text-gray-700 leading-relaxed mt-4">
                      {post.implementation.conclusion}
                    </p>
                  )}
                </>
              )}

              {post.benefits ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('blog.benefits.title')}</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {post.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span className="font-bold">{benefit.split(':')[0]}:</span>
                        {benefit.includes(':') ? benefit.substring(benefit.indexOf(':') + 1) : ''}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('blog.benefits.title')}</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t('blog.benefits.1')}</li>
                    <li>{t('blog.benefits.2')}</li>
                    <li>{t('blog.benefits.3')}</li>
                    <li>{t('blog.benefits.4')}</li>
                  </ul>
                </>
              )}

              {post.resume && (
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{post.resume.title}</h3>
                  {post.resume.table && (
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-100">
                            {post.resume.table.headers.map((header, idx) => (
                              <th key={idx} className="px-4 py-2 text-left font-semibold text-gray-800">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {post.resume.table.rows.map((row, idx) => (
                            <tr key={idx} className="border-t border-gray-200">
                              <td className="px-4 py-2">{row.title}</td>
                              <td className="px-4 py-2">{row.description}</td>
                              <td className="px-4 py-2">{row.link}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              )}

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('blog.cta.title')}</h3>
              {post.cta ? (
                <>
                  <p className="text-gray-700 leading-relaxed">{post.cta.excerpt}</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {post.team.expertise.map((expertise, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        {expertise}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    <strong>{post.cta.conclusion}</strong>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    {t('blog.cta.description')}
                  </p>
                </>
              )}
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Tag size={20} className="mr-2" />
                {t('blog.tags')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blog.relatedPosts')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <div className="h-32 bg-gray-200">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>{relatedPost.readTime} {t('blog.readTime')}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
