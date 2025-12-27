import{_ as a,c as n,o as t,a3 as i}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"5.6.1 程序如何互相调用——接口设计：RESTful API 规范与约定","description":"5.6.1 程序如何互相调用——接口设计 一句话破题 接口设计就是定义**前后端如何对话**：谁发起、说什么、怎么回应。 RESTful API 基础 REST 是一种设计风格，核心思想是**把一切当作资源**： | HTTP 方法 | 含义 | 示例 | |-----------|------|------| | G","frontmatter":{"title":"5.6.1 程序如何互相调用——接口设计：RESTful API 规范与约定","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.6-tech-specs/5.6.1-interface-design.md","filePath":"Advanced-old/05-product/5.6-tech-specs/5.6.1-interface-design.md","lastUpdated":1766168364000}'),p={name:"Advanced-old/05-product/5.6-tech-specs/5.6.1-interface-design.md"};function l(e,s,d,h,o,r){return t(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="_5-6-1-程序如何互相调用——接口设计" tabindex="-1">5.6.1 程序如何互相调用——接口设计 <a class="header-anchor" href="#_5-6-1-程序如何互相调用——接口设计" aria-label="Permalink to &quot;5.6.1 程序如何互相调用——接口设计&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>接口设计就是定义<strong>前后端如何对话</strong>：谁发起、说什么、怎么回应。</p><h3 id="restful-api-基础" tabindex="-1">RESTful API 基础 <a class="header-anchor" href="#restful-api-基础" aria-label="Permalink to &quot;RESTful API 基础&quot;">​</a></h3><p>REST 是一种设计风格，核心思想是<strong>把一切当作资源</strong>：</p><table tabindex="0"><thead><tr><th>HTTP 方法</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>GET</td><td>获取资源</td><td>GET /posts - 获取文章列表</td></tr><tr><td>POST</td><td>创建资源</td><td>POST /posts - 创建文章</td></tr><tr><td>PUT</td><td>更新资源（全量）</td><td>PUT /posts/1 - 更新文章</td></tr><tr><td>PATCH</td><td>更新资源（部分）</td><td>PATCH /posts/1 - 部分更新</td></tr><tr><td>DELETE</td><td>删除资源</td><td>DELETE /posts/1 - 删除文章</td></tr></tbody></table><h3 id="接口设计模板" tabindex="-1">接口设计模板 <a class="header-anchor" href="#接口设计模板" aria-label="Permalink to &quot;接口设计模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## POST /api/posts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 功能描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">创建新文章</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 请求参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 字段 | 类型 | 必填 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| title | string | 是 | 文章标题，1-100 字符 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| content | string | 是 | 文章内容，Markdown 格式 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| categoryId | string | 是 | 分类 ID |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tags | string[] | 否 | 标签数组，最多 5 个 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 请求示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的第一篇文章&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;# Hello</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这是内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cat_123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;技术&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;教程&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应示例" tabindex="-1">响应示例 <a class="header-anchor" href="#响应示例" aria-label="Permalink to &quot;响应示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;post_456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的第一篇文章&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-first-post&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024-01-15T10:00:00Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="错误响应" tabindex="-1">错误响应 <a class="header-anchor" href="#错误响应" aria-label="Permalink to &quot;错误响应&quot;">​</a></h3><table tabindex="0"><thead><tr><th>状态码</th><th>错误码</th><th>说明</th></tr></thead><tbody><tr><td>400</td><td>MISSING_TITLE</td><td>标题不能为空</td></tr><tr><td>400</td><td>TITLE_TOO_LONG</td><td>标题超过 100 字符</td></tr><tr><td>401</td><td>UNAUTHORIZED</td><td>未登录</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### URL 设计规范</span></span></code></pre></div><p>✅ 好的设计 GET /api/posts # 获取文章列表 GET /api/posts/:id # 获取单篇文章 POST /api/posts # 创建文章 PUT /api/posts/:id # 更新文章 DELETE /api/posts/:id # 删除文章 GET /api/posts/:id/comments # 获取文章的评论</p><p>❌ 不好的设计 GET /api/getPostList # 动词不该出现在 URL POST /api/createPost # 动词重复 GET /api/post/1/comment # 单复数不一致</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 分页与过滤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 列表接口通用参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 分页</span></span>
<span class="line"><span>| 参数 | 类型 | 默认值 | 说明 |</span></span>
<span class="line"><span>|------|------|--------|------|</span></span>
<span class="line"><span>| page | number | 1 | 页码 |</span></span>
<span class="line"><span>| pageSize | number | 10 | 每页数量 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 排序</span></span>
<span class="line"><span>| 参数 | 类型 | 说明 |</span></span>
<span class="line"><span>|------|------|------|</span></span>
<span class="line"><span>| sortBy | string | 排序字段 |</span></span>
<span class="line"><span>| order | &quot;asc&quot; \\| &quot;desc&quot; | 排序方向 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 过滤</span></span>
<span class="line"><span>| 参数 | 类型 | 说明 |</span></span>
<span class="line"><span>|------|------|------|</span></span>
<span class="line"><span>| categoryId | string | 按分类筛选 |</span></span>
<span class="line"><span>| keyword | string | 关键词搜索 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 响应格式</span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;data&quot;: [...],</span></span>
<span class="line"><span>  &quot;pagination&quot;: {</span></span>
<span class="line"><span>    &quot;page&quot;: 1,</span></span>
<span class="line"><span>    &quot;pageSize&quot;: 10,</span></span>
<span class="line"><span>    &quot;total&quot;: 100,</span></span>
<span class="line"><span>    &quot;totalPages&quot;: 10</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 让 AI 帮你设计接口</span></span></code></pre></div><p>你：帮我设计博客系统的 API 接口</p><p>AI：## 博客系统 API 设计</p><h3 id="文章模块" tabindex="-1">文章模块 <a class="header-anchor" href="#文章模块" aria-label="Permalink to &quot;文章模块&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>GET</td><td>/api/posts</td><td>获取文章列表</td></tr><tr><td>GET</td><td>/api/posts/:slug</td><td>获取文章详情</td></tr><tr><td>POST</td><td>/api/posts</td><td>创建文章</td></tr><tr><td>PUT</td><td>/api/posts/:id</td><td>更新文章</td></tr><tr><td>DELETE</td><td>/api/posts/:id</td><td>删除文章</td></tr></tbody></table><h3 id="分类模块" tabindex="-1">分类模块 <a class="header-anchor" href="#分类模块" aria-label="Permalink to &quot;分类模块&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>GET</td><td>/api/categories</td><td>获取分类列表</td></tr><tr><td>POST</td><td>/api/categories</td><td>创建分类</td></tr></tbody></table><h3 id="认证模块" tabindex="-1">认证模块 <a class="header-anchor" href="#认证模块" aria-label="Permalink to &quot;认证模块&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>POST</td><td>/api/auth/login</td><td>登录</td></tr><tr><td>POST</td><td>/api/auth/logout</td><td>登出</td></tr><tr><td>GET</td><td>/api/auth/me</td><td>获取当前用户</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 接口版本管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当接口需要破坏性变更时：</span></span></code></pre></div><p>方案一：URL 路径版本 /api/v1/posts /api/v2/posts</p><p>方案二：Header 版本 Accept: application/vnd.blog.v1+json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>对于个人项目，建议使用 URL 路径版本，更直观。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 实用建议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **保持一致性**：所有接口风格统一</span></span>
<span class="line"><span>2. **先设计后实现**：写代码前先把接口定义好</span></span>
<span class="line"><span>3. **用 AI 检查**：让 AI 帮你发现设计问题</span></span>
<span class="line"><span>4. **文档即代码**：用 TypeScript 类型定义接口</span></span></code></pre></div>`,29)])])}const E=a(p,[["render",l]]);export{c as __pageData,E as default};
