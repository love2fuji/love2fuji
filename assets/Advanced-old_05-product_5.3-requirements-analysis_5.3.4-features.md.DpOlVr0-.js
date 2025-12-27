import{_ as k,C as d,c as r,o as n,a3 as i,b as l,w as a,a as e,G as t,a4 as h}from"./chunks/framework.CUcrqFol.js";const b=JSON.parse('{"title":"5.3.4 从想法到功能列表——AI 辅助功能梳理：从产品想法到功能需求清单","description":"5.3.4 从想法到功能列表——AI 辅助功能梳理 一句话破题 让 AI 帮你把散乱的想法**整理成结构化、可执行的功能清单**。 从模糊到具体的转化 让 AI 帮你梳理功能 **Prompt 模板**： **示例对话**： 功能的分层结构 将功能按层次组织，便于后续开发： 功能依赖分析 有些功能依赖其他功能，需要理清","frontmatter":{"title":"5.3.4 从想法到功能列表——AI 辅助功能梳理：从产品想法到功能需求清单","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.4-features.md","filePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.4-features.md","lastUpdated":1766168364000}'),o={name:"Advanced-old/05-product/5.3-requirements-analysis/5.3.4-features.md"};function E(c,s,g,A,u,B){const p=d("Mermaid");return n(),r("div",null,[s[2]||(s[2]=i('<h1 id="_5-3-4-从想法到功能列表——ai-辅助功能梳理" tabindex="-1">5.3.4 从想法到功能列表——AI 辅助功能梳理 <a class="header-anchor" href="#_5-3-4-从想法到功能列表——ai-辅助功能梳理" aria-label="Permalink to &quot;5.3.4 从想法到功能列表——AI 辅助功能梳理&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>让 AI 帮你把散乱的想法<strong>整理成结构化、可执行的功能清单</strong>。</p><h3 id="从模糊到具体的转化" tabindex="-1">从模糊到具体的转化 <a class="header-anchor" href="#从模糊到具体的转化" aria-label="Permalink to &quot;从模糊到具体的转化&quot;">​</a></h3>',4)),(n(),l(h,null,{default:a(()=>[t(p,{id:"mermaid-12",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E6%A8%A1%E7%B3%8A%E6%83%B3%E6%B3%95%5Cn%E5%81%9A%E4%B8%AA%E5%8D%9A%E5%AE%A2%22%5D%20--%3E%20B%5B%22%E5%8A%9F%E8%83%BD%E9%A2%86%E5%9F%9F%5Cn%E6%96%87%E7%AB%A0%E3%80%81%E7%94%A8%E6%88%B7%E3%80%81%E8%AF%84%E8%AE%BA%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E5%85%B7%E4%BD%93%E5%8A%9F%E8%83%BD%5Cn%E5%8F%91%E5%B8%83%E3%80%81%E7%BC%96%E8%BE%91%E3%80%81%E5%88%A0%E9%99%A4%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22%E5%8A%9F%E8%83%BD%E8%AF%A6%E6%83%85%5Cn%E6%94%AF%E6%8C%81%20Markdown%22%5D%0A"})]),fallback:a(()=>[...s[0]||(s[0]=[e(" Loading... ",-1)])]),_:1})),s[3]||(s[3]=i(`<h3 id="让-ai-帮你梳理功能" tabindex="-1">让 AI 帮你梳理功能 <a class="header-anchor" href="#让-ai-帮你梳理功能" aria-label="Permalink to &quot;让 AI 帮你梳理功能&quot;">​</a></h3><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要做一个 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">产品描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我梳理功能列表：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 按功能模块分类</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每个功能说明：功能描述、用户价值、实现复杂度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标注哪些是核心功能，哪些是可选功能</span></span></code></pre></div><p><strong>示例对话</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要做一个个人博客系统</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 功能清单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 模块一：文章管理</span></span>
<span class="line"><span>| 功能 | 描述 | 用户价值 | 复杂度 | 优先级 |</span></span>
<span class="line"><span>|------|------|----------|--------|--------|</span></span>
<span class="line"><span>| 创建文章 | 新建文章并保存 | 核心功能 | ⭐ | P0 |</span></span>
<span class="line"><span>| 编辑文章 | 修改已发布的文章 | 核心功能 | ⭐ | P0 |</span></span>
<span class="line"><span>| 删除文章 | 移除不需要的文章 | 核心功能 | ⭐ | P0 |</span></span>
<span class="line"><span>| 草稿保存 | 未发布的文章保存为草稿 | 防止内容丢失 | ⭐ | P1 |</span></span>
<span class="line"><span>| 定时发布 | 设定发布时间 | 内容规划 | ⭐⭐ | P2 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 模块二：内容展示</span></span>
<span class="line"><span>| 功能 | 描述 | 用户价值 | 复杂度 | 优先级 |</span></span>
<span class="line"><span>|------|------|----------|--------|--------|</span></span>
<span class="line"><span>| 文章列表 | 展示所有已发布文章 | 核心功能 | ⭐ | P0 |</span></span>
<span class="line"><span>| 文章详情 | 单篇文章的完整内容 | 核心功能 | ⭐ | P0 |</span></span>
<span class="line"><span>| 分类导航 | 按类别筛选文章 | 内容组织 | ⭐ | P1 |</span></span>
<span class="line"><span>| 标签系统 | 多维度标记文章 | 内容发现 | ⭐ | P1 |</span></span>
<span class="line"><span>| 搜索功能 | 关键词检索文章 | 快速定位 | ⭐⭐ | P1 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 模块三：用户交互</span></span>
<span class="line"><span>| 功能 | 描述 | 用户价值 | 复杂度 | 优先级 |</span></span>
<span class="line"><span>|------|------|----------|--------|--------|</span></span>
<span class="line"><span>| 评论系统 | 读者留言互动 | 社区感 | ⭐⭐ | P2 |</span></span>
<span class="line"><span>| 点赞/收藏 | 标记喜欢的文章 | 用户参与 | ⭐ | P2 |</span></span>
<span class="line"><span>| 分享功能 | 分享到社交平台 | 内容传播 | ⭐ | P2 |</span></span></code></pre></div><h3 id="功能的分层结构" tabindex="-1">功能的分层结构 <a class="header-anchor" href="#功能的分层结构" aria-label="Permalink to &quot;功能的分层结构&quot;">​</a></h3><p>将功能按层次组织，便于后续开发：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>博客系统</span></span>
<span class="line"><span>├── 核心功能（P0 - 必须有）</span></span>
<span class="line"><span>│   ├── 文章 CRUD</span></span>
<span class="line"><span>│   ├── 文章列表/详情页</span></span>
<span class="line"><span>│   └── Markdown 编辑器</span></span>
<span class="line"><span>├── 重要功能（P1 - 应该有）</span></span>
<span class="line"><span>│   ├── 分类和标签</span></span>
<span class="line"><span>│   ├── 搜索</span></span>
<span class="line"><span>│   ├── 草稿保存</span></span>
<span class="line"><span>│   └── SEO 优化</span></span>
<span class="line"><span>├── 增强功能（P2 - 可以有）</span></span>
<span class="line"><span>│   ├── 评论系统</span></span>
<span class="line"><span>│   ├── 阅读统计</span></span>
<span class="line"><span>│   └── RSS 订阅</span></span>
<span class="line"><span>└── 未来功能（P3 - 后续考虑）</span></span>
<span class="line"><span>    ├── 多作者支持</span></span>
<span class="line"><span>    ├── 会员订阅</span></span>
<span class="line"><span>    └── Newsletter</span></span></code></pre></div><h3 id="功能依赖分析" tabindex="-1">功能依赖分析 <a class="header-anchor" href="#功能依赖分析" aria-label="Permalink to &quot;功能依赖分析&quot;">​</a></h3><p>有些功能依赖其他功能，需要理清顺序：</p>`,10)),(n(),l(h,null,{default:a(()=>[t(p,{id:"mermaid-37",class:"mermaid",graph:"graph%20TD%0A%20%20%20%20A%5B%22%E6%96%87%E7%AB%A0%20CRUD%22%5D%20--%3E%20B%5B%22%E6%96%87%E7%AB%A0%E5%88%97%E8%A1%A8%22%5D%0A%20%20%20%20A%20--%3E%20C%5B%22%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%22%5D%0A%20%20%20%20A%20--%3E%20D%5B%22%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE%22%5D%0A%20%20%20%20B%20--%3E%20E%5B%22%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD%22%5D%0A%20%20%20%20C%20--%3E%20F%5B%22%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%22%5D%0A%20%20%20%20D%20--%3E%20G%5B%22%E5%88%86%E7%B1%BB%E5%AF%BC%E8%88%AA%22%5D%0A"})]),fallback:a(()=>[...s[1]||(s[1]=[e(" Loading... ",-1)])]),_:1})),s[4]||(s[4]=i(`<p><strong>让 AI 帮你分析依赖</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：帮我分析这些功能的依赖关系和开发顺序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 依赖分析</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第一阶段（无依赖）</span></span>
<span class="line"><span>- 文章 CRUD：基础功能，其他都依赖它</span></span>
<span class="line"><span>- 用户认证：如果需要后台管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第二阶段（依赖第一阶段）</span></span>
<span class="line"><span>- 文章列表/详情：依赖文章数据</span></span>
<span class="line"><span>- 分类标签：依赖文章模型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第三阶段（依赖第二阶段）</span></span>
<span class="line"><span>- 搜索功能：需要文章数据</span></span>
<span class="line"><span>- 分类导航：需要分类数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第四阶段（独立增强）</span></span>
<span class="line"><span>- 评论系统：可独立开发</span></span>
<span class="line"><span>- RSS 订阅：依赖文章列表</span></span></code></pre></div><h3 id="功能描述的规范" tabindex="-1">功能描述的规范 <a class="header-anchor" href="#功能描述的规范" aria-label="Permalink to &quot;功能描述的规范&quot;">​</a></h3><p>每个功能应包含以下信息：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 功能名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 功能描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一句话说明这个功能做什么</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 用户故事</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作为 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用户类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，我希望 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，以便 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">获得什么价值</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 验收标准</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 条件 1：结果 1</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 条件 2：结果 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 边界情况</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 情况 1：如何处理</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 情况 2：如何处理</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 文章发布</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 功能描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户可以创建并发布博客文章</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 用户故事</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作为博主，我希望能够撰写并发布文章，以便分享我的技术经验</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 验收标准</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以输入标题（必填，1-100 字符）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以输入正文（必填，支持 Markdown）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以选择分类（可选，单选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以添加标签（可选，多选，最多 5 个）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 点击发布后，文章在列表页可见</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 边界情况</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标题为空：提示&quot;请输入标题&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 正文为空：提示&quot;请输入内容&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 网络断开：保存到本地草稿</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>先粗后细</strong>：先列大模块，再拆小功能</li><li><strong>用户视角</strong>：每个功能都要回答&quot;给用户带来什么价值&quot;</li><li><strong>标注优先级</strong>：不是所有功能都一样重要</li><li><strong>保持灵活</strong>：功能列表会随着开发迭代调整</li></ol>`,9))])}const y=k(o,[["render",E]]);export{b as __pageData,y as default};
