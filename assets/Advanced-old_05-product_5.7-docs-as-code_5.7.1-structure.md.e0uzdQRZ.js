import{_ as a,c as n,o as i,a3 as p}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"5.7.1 文档该放哪里——文档目录结构：与代码结构的对应关系","description":"5.7.1 文档该放哪里——文档目录结构 一句话破题 文档目录应该**与代码结构对应**，让人一看就知道去哪找。 推荐的目录结构 文档与代码的对应关系 | 代码路径 | 文档路径 | 内容 | |----------|----------|------| | | | 认证接口说明 | | | | 文章接口说明 | |","frontmatter":{"title":"5.7.1 文档该放哪里——文档目录结构：与代码结构的对应关系","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.7-docs-as-code/5.7.1-structure.md","filePath":"Advanced-old/05-product/5.7-docs-as-code/5.7.1-structure.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/05-product/5.7-docs-as-code/5.7.1-structure.md"};function t(l,s,d,h,c,o){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_5-7-1-文档该放哪里——文档目录结构" tabindex="-1">5.7.1 文档该放哪里——文档目录结构 <a class="header-anchor" href="#_5-7-1-文档该放哪里——文档目录结构" aria-label="Permalink to &quot;5.7.1 文档该放哪里——文档目录结构&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>文档目录应该<strong>与代码结构对应</strong>，让人一看就知道去哪找。</p><h3 id="推荐的目录结构" tabindex="-1">推荐的目录结构 <a class="header-anchor" href="#推荐的目录结构" aria-label="Permalink to &quot;推荐的目录结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-project/</span></span>
<span class="line"><span>├── docs/                   # 文档目录</span></span>
<span class="line"><span>│   ├── README.md           # 文档首页</span></span>
<span class="line"><span>│   ├── getting-started.md  # 快速开始</span></span>
<span class="line"><span>│   ├── api/                # API 文档</span></span>
<span class="line"><span>│   │   ├── auth.md         # 认证相关</span></span>
<span class="line"><span>│   │   └── posts.md        # 文章相关</span></span>
<span class="line"><span>│   ├── guides/             # 使用指南</span></span>
<span class="line"><span>│   │   ├── deployment.md   # 部署指南</span></span>
<span class="line"><span>│   │   └── development.md  # 开发指南</span></span>
<span class="line"><span>│   └── architecture/       # 架构说明</span></span>
<span class="line"><span>│       └── overview.md     # 架构概览</span></span>
<span class="line"><span>├── src/                    # 源代码</span></span>
<span class="line"><span>│   ├── app/</span></span>
<span class="line"><span>│   │   └── api/</span></span>
<span class="line"><span>│   │       ├── auth/       ← 对应 docs/api/auth.md</span></span>
<span class="line"><span>│   │       └── posts/      ← 对应 docs/api/posts.md</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── README.md               # 项目入口</span></span></code></pre></div><h3 id="文档与代码的对应关系" tabindex="-1">文档与代码的对应关系 <a class="header-anchor" href="#文档与代码的对应关系" aria-label="Permalink to &quot;文档与代码的对应关系&quot;">​</a></h3><table tabindex="0"><thead><tr><th>代码路径</th><th>文档路径</th><th>内容</th></tr></thead><tbody><tr><td><code>src/app/api/auth/</code></td><td><code>docs/api/auth.md</code></td><td>认证接口说明</td></tr><tr><td><code>src/app/api/posts/</code></td><td><code>docs/api/posts.md</code></td><td>文章接口说明</td></tr><tr><td><code>prisma/schema.prisma</code></td><td><code>docs/architecture/database.md</code></td><td>数据库设计</td></tr><tr><td><code>src/lib/</code></td><td><code>docs/architecture/libs.md</code></td><td>工具函数说明</td></tr></tbody></table><h3 id="最小化文档结构" tabindex="-1">最小化文档结构 <a class="header-anchor" href="#最小化文档结构" aria-label="Permalink to &quot;最小化文档结构&quot;">​</a></h3><p>对于个人项目，可以更简化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-project/</span></span>
<span class="line"><span>├── docs/</span></span>
<span class="line"><span>│   ├── README.md      # 项目说明 + 快速开始</span></span>
<span class="line"><span>│   ├── api.md         # API 文档（所有接口）</span></span>
<span class="line"><span>│   └── deployment.md  # 部署说明</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>└── README.md          # 项目入口（指向 docs/）</span></span></code></pre></div><h3 id="文档命名规范" tabindex="-1">文档命名规范 <a class="header-anchor" href="#文档命名规范" aria-label="Permalink to &quot;文档命名规范&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ 好的命名</span></span>
<span class="line"><span>- getting-started.md   # 小写 + 连字符</span></span>
<span class="line"><span>- api-authentication.md</span></span>
<span class="line"><span>- deploy-to-vercel.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ 不好的命名</span></span>
<span class="line"><span>- GettingStarted.md    # 避免驼峰</span></span>
<span class="line"><span>- api authentication.md # 避免空格</span></span>
<span class="line"><span>- 部署说明.md          # 避免中文文件名</span></span></code></pre></div><h3 id="文档入口设计" tabindex="-1">文档入口设计 <a class="header-anchor" href="#文档入口设计" aria-label="Permalink to &quot;文档入口设计&quot;">​</a></h3><p>项目 README.md 应该提供清晰的导航：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># My Blog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一个使用 Next.js 构建的个人博客系统。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 快速开始</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm dev</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">开发指南</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./docs/development.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">API 文档</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./docs/api.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">部署说明</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./docs/deployment.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Next.js 16</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PostgreSQL</span></span></code></pre></div><h3 id="让-ai-帮你设计目录" tabindex="-1">让 AI 帮你设计目录 <a class="header-anchor" href="#让-ai-帮你设计目录" aria-label="Permalink to &quot;让 AI 帮你设计目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：帮我设计博客项目的文档目录结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 推荐文档结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span>docs/</span></span>
<span class="line"><span>├── README.md           # 文档首页和导航</span></span>
<span class="line"><span>├── getting-started.md  # 快速开始</span></span>
<span class="line"><span>├── development.md      # 开发环境搭建</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── README.md       # API 概览</span></span>
<span class="line"><span>│   ├── authentication.md  # 认证接口</span></span>
<span class="line"><span>│   ├── posts.md        # 文章接口</span></span>
<span class="line"><span>│   └── categories.md   # 分类接口</span></span>
<span class="line"><span>├── deployment/</span></span>
<span class="line"><span>│   ├── vercel.md       # Vercel 部署</span></span>
<span class="line"><span>│   └── docker.md       # Docker 部署</span></span>
<span class="line"><span>└── architecture/</span></span>
<span class="line"><span>    ├── overview.md     # 架构概览</span></span>
<span class="line"><span>    └── database.md     # 数据库设计</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根据你的项目规模，可以简化为：</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span>docs/</span></span>
<span class="line"><span>├── README.md           # 所有内容都在这里</span></span>
<span class="line"><span>└── api.md              # API 文档单独一个</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>就近原则</strong>：相关的文档放在一起</li><li><strong>扁平优先</strong>：不要嵌套太深</li><li><strong>命名直观</strong>：看文件名就知道内容</li><li><strong>及时归档</strong>：过时文档移到 archive 目录</li></ol>`,19)])])}const g=a(e,[["render",t]]);export{k as __pageData,g as default};
