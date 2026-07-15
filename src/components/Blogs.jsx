import './Blogs.css';

const BLOGS = [
  {
    flag: '🇰🇷',
    accent: '#3de1c8',
    name: 'policy.novaric.kr',
    href: 'https://policy.novaric.kr',
    lang: '한국어',
    desc: '정책·혜택 정보를 정리해서 전하는 블로그입니다. 생활에 도움이 되는 지원 제도를 알기 쉽게 소개합니다.',
  },
  {
    flag: '🇺🇸',
    accent: '#7c6fe0',
    name: 'info.novaric.kr',
    href: 'https://info.novaric.kr',
    lang: 'English',
    desc: 'A blog covering practical life and money info for a US audience — benefits, everyday finances, and more.',
  },
];

export default function Blogs() {
  return (
    <section className="blogs section" id="blogs">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Our Blogs</p>
          <h2 className="section__title">Beyond Apps,<br />We Write Too</h2>
        </div>
        <div className="blogs__grid">
          {BLOGS.map((blog) => (
            <a
              className="blog-card"
              key={blog.name}
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--accent': blog.accent }}
            >
              <div className="blog-card__top">
                <span className="blog-card__flag">{blog.flag}</span>
                <span className="tag">{blog.lang}</span>
              </div>
              <h3>{blog.name}</h3>
              <p>{blog.desc}</p>
              <span className="blog-card__link">Visit site →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
