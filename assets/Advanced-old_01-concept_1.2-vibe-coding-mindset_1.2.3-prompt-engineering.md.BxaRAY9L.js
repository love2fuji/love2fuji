import{_ as t,C as l,c as i,o as s,a3 as n,b as o,w as p,a as c,G as d,a4 as r}from"./chunks/framework.CUcrqFol.js";const C=JSON.parse('{"title":"1.2.3 如何向 AI 下达指令——提示工程基础：如何与 AI 有效沟通","description":"1.2.3 如何向 AI 下达指令——提示工程基础：如何与 AI 有效沟通 一句话破题 提示工程的本质是**用结构化的语言表达清晰的意图**。好的提示词不是华丽的修辞，而是精准的需求定义。 核心原则：清晰、具体、结构化 原则 1：清晰 AI 无法读心，它只能理解你表达出来的内容。 原则 2：具体 提供足够的上下文，让","frontmatter":{"title":"1.2.3 如何向 AI 下达指令——提示工程基础：如何与 AI 有效沟通","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/01-concept/1.2-vibe-coding-mindset/1.2.3-prompt-engineering.md","filePath":"Advanced-old/01-concept/1.2-vibe-coding-mindset/1.2.3-prompt-engineering.md","lastUpdated":1766168364000}'),h={name:"Advanced-old/01-concept/1.2-vibe-coding-mindset/1.2.3-prompt-engineering.md"};function g(u,a,A,b,m,v){const e=l("Mermaid");return s(),i("div",null,[a[1]||(a[1]=n(`<h1 id="_1-2-3-如何向-ai-下达指令——提示工程基础-如何与-ai-有效沟通" tabindex="-1">1.2.3 如何向 AI 下达指令——提示工程基础：如何与 AI 有效沟通 <a class="header-anchor" href="#_1-2-3-如何向-ai-下达指令——提示工程基础-如何与-ai-有效沟通" aria-label="Permalink to &quot;1.2.3 如何向 AI 下达指令——提示工程基础：如何与 AI 有效沟通&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>提示工程的本质是<strong>用结构化的语言表达清晰的意图</strong>。好的提示词不是华丽的修辞，而是精准的需求定义。</p><h3 id="核心原则-清晰、具体、结构化" tabindex="-1">核心原则：清晰、具体、结构化 <a class="header-anchor" href="#核心原则-清晰、具体、结构化" aria-label="Permalink to &quot;核心原则：清晰、具体、结构化&quot;">​</a></h3><h4 id="原则-1-清晰" tabindex="-1">原则 1：清晰 <a class="header-anchor" href="#原则-1-清晰" aria-label="Permalink to &quot;原则 1：清晰&quot;">​</a></h4><p>AI 无法读心，它只能理解你表达出来的内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 模糊：帮我优化一下这个代码</span></span>
<span class="line"><span>✅ 清晰：帮我优化这个函数的性能，目前它处理 10000 条数据需要 5 秒，目标是降到 1 秒以内</span></span></code></pre></div><h4 id="原则-2-具体" tabindex="-1">原则 2：具体 <a class="header-anchor" href="#原则-2-具体" aria-label="Permalink to &quot;原则 2：具体&quot;">​</a></h4><p>提供足够的上下文，让 AI 知道你在什么场景下需要什么。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 泛泛：写一个登录功能</span></span>
<span class="line"><span>✅ 具体：用 Next.js 16 App Router 写一个登录页面，使用 Server Actions 处理表单提交，</span></span>
<span class="line"><span>        支持邮箱+密码登录，使用 Tailwind CSS 做样式</span></span></code></pre></div><h4 id="原则-3-结构化" tabindex="-1">原则 3：结构化 <a class="header-anchor" href="#原则-3-结构化" aria-label="Permalink to &quot;原则 3：结构化&quot;">​</a></h4><p>用清晰的结构组织你的需求，让 AI 更容易理解和执行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 需求描述</span></span>
<span class="line"><span>实现一个用户评论组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术要求</span></span>
<span class="line"><span>- 框架：Next.js 16</span></span>
<span class="line"><span>- 样式：Tailwind CSS</span></span>
<span class="line"><span>- 数据：从 API 获取评论列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 功能要点</span></span>
<span class="line"><span>1. 显示评论列表（头像、用户名、内容、时间）</span></span>
<span class="line"><span>2. 支持点赞</span></span>
<span class="line"><span>3. 支持回复</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 约束条件</span></span>
<span class="line"><span>- 需要处理加载状态和空状态</span></span>
<span class="line"><span>- 需要处理错误情况</span></span></code></pre></div><h3 id="提示词模板-功能描述-交互方式-预期效果" tabindex="-1">提示词模板：功能描述 + 交互方式 + 预期效果 <a class="header-anchor" href="#提示词模板-功能描述-交互方式-预期效果" aria-label="Permalink to &quot;提示词模板：功能描述 + 交互方式 + 预期效果&quot;">​</a></h3><p>这是一个万能的需求定义公式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[功能描述]：我想要实现什么功能</span></span>
<span class="line"><span>[交互方式]：用户如何与这个功能交互</span></span>
<span class="line"><span>[预期效果]：成功后应该看到什么结果</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>功能描述：实现一个搜索框组件</span></span>
<span class="line"><span>交互方式：用户输入关键词，按回车或点击搜索按钮触发搜索</span></span>
<span class="line"><span>预期效果：搜索时显示加载动画，结果返回后展示搜索结果列表，无结果时显示&quot;未找到相关内容&quot;</span></span></code></pre></div><h3 id="分步对话策略" tabindex="-1">分步对话策略 <a class="header-anchor" href="#分步对话策略" aria-label="Permalink to &quot;分步对话策略&quot;">​</a></h3><p>不要试图一次让 AI 生成所有代码。分步走，每一步都确认无误后再进行下一步：</p>`,20)),(s(),o(r,null,{default:p(()=>[d(e,{id:"mermaid-50",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E7%AC%AC%E4%B8%80%E6%AD%A5%EF%BC%9A%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%22%5D%20--%3E%20B%5B%22%E7%A1%AE%E8%AE%A4%20OK%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E6%A0%B8%E5%BF%83%E9%80%BB%E8%BE%91%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22%E7%A1%AE%E8%AE%A4%20OK%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22%E7%AC%AC%E4%B8%89%E6%AD%A5%EF%BC%9AUI%20%E6%A0%B7%E5%BC%8F%22%5D%0A%20%20%20%20E%20--%3E%20F%5B%22%E7%A1%AE%E8%AE%A4%20OK%22%5D%0A%20%20%20%20F%20--%3E%20G%5B%22%E7%AC%AC%E5%9B%9B%E6%AD%A5%EF%BC%9A%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%22%5D%0A"})]),fallback:p(()=>[...a[0]||(a[0]=[c(" Loading... ",-1)])]),_:1})),a[2]||(a[2]=n(`<p><strong>对话示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：帮我设计一个博客文章的数据结构，需要包含标题、内容、作者、发布时间、标签</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[生成数据结构]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：很好，现在基于这个数据结构，帮我写一个获取文章列表的 API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[生成 API 代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：API 没问题，现在帮我写一个展示文章列表的组件，使用刚才的 API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[生成组件代码]</span></span></code></pre></div><h3 id="关键术语清单" tabindex="-1">关键术语清单 <a class="header-anchor" href="#关键术语清单" aria-label="Permalink to &quot;关键术语清单&quot;">​</a></h3><p>在与 AI 讨论代码时，使用准确的技术术语可以大幅提高沟通效率：</p><table tabindex="0"><thead><tr><th>场景</th><th>关键术语</th></tr></thead><tbody><tr><td><strong>Next.js</strong></td><td>App Router, Server Component, Client Component, Server Actions, Middleware</td></tr><tr><td><strong>React</strong></td><td>useState, useEffect, props, children, 条件渲染, 列表渲染</td></tr><tr><td><strong>TypeScript</strong></td><td>interface, type, 泛型, 联合类型, 类型守卫</td></tr><tr><td><strong>Tailwind</strong></td><td>flex, grid, responsive, dark mode, 自定义主题</td></tr><tr><td><strong>数据库</strong></td><td>CRUD, 关联查询, 事务, 索引, 迁移</td></tr></tbody></table><h3 id="常见问题的提示词模板" tabindex="-1">常见问题的提示词模板 <a class="header-anchor" href="#常见问题的提示词模板" aria-label="Permalink to &quot;常见问题的提示词模板&quot;">​</a></h3><h4 id="需求开发" tabindex="-1">需求开发 <a class="header-anchor" href="#需求开发" aria-label="Permalink to &quot;需求开发&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请帮我实现 [功能名称]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>技术栈：[Next.js/React/TypeScript 等]</span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. [具体要求 1]</span></span>
<span class="line"><span>2. [具体要求 2]</span></span>
<span class="line"><span>3. [具体要求 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参考：[如果有类似功能的参考，贴上来]</span></span></code></pre></div><h4 id="bug-修复" tabindex="-1">Bug 修复 <a class="header-anchor" href="#bug-修复" aria-label="Permalink to &quot;Bug 修复&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我遇到了一个问题：[描述问题现象]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>相关代码：</span></span>
<span class="line"><span>[粘贴相关代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误信息：</span></span>
<span class="line"><span>[粘贴完整错误信息]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我已经尝试过：</span></span>
<span class="line"><span>1. [尝试过的方法 1]</span></span>
<span class="line"><span>2. [尝试过的方法 2]</span></span></code></pre></div><h4 id="代码优化" tabindex="-1">代码优化 <a class="header-anchor" href="#代码优化" aria-label="Permalink to &quot;代码优化&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请帮我优化以下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[粘贴代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优化目标：</span></span>
<span class="line"><span>- [性能优化 / 可读性优化 / 安全性优化]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>约束条件：</span></span>
<span class="line"><span>- [保持 API 不变 / 兼容旧版本 / 等]</span></span></code></pre></div><h3 id="避坑指南" tabindex="-1">避坑指南 <a class="header-anchor" href="#避坑指南" aria-label="Permalink to &quot;避坑指南&quot;">​</a></h3><ul><li><strong>不要一口气要求太多</strong>：任务越大，AI 出错的概率越高</li><li><strong>及时纠正错误</strong>：发现问题立即反馈，不要等到最后</li><li><strong>保存有效的提示词</strong>：好的提示词可以复用</li><li><strong>理解 AI 的局限性</strong>：它的知识有截止日期，新特性可能不了解</li></ul>`,14))])}const k=t(h,[["render",g]]);export{C as __pageData,k as default};
