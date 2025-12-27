import{_ as p,C as l,c as e,o as a,a3 as n,b as h,w as i,a as d,G as r,a4 as o}from"./chunks/framework.CUcrqFol.js";const m=JSON.parse('{"title":"7.3 活的文档才有用——内部 API 文档：Markdown/Swagger/Postman；同库同 PR 更新","description":"7.3 API 文档 核心问题 | 问题 | 本节解答 | |------|----------| | 文档用什么格式？ | Markdown 简单直接，OpenAPI 可交互 | | 怎么让文档可以点着试？ | 使用 Swagger UI | | 怎么测试 API？ | 使用 Postman 集合 | | 代码改了文","frontmatter":{"title":"7.3 活的文档才有用——内部 API 文档：Markdown/Swagger/Postman；同库同 PR 更新","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/07-api/7.3-api-documentation/index.md","filePath":"Advanced-old/07-api/7.3-api-documentation/index.md","lastUpdated":1766168364000}'),k={name:"Advanced-old/07-api/7.3-api-documentation/index.md"};function E(c,s,g,u,A,b){const t=l("Mermaid");return a(),e("div",null,[s[1]||(s[1]=n('<h1 id="_7-3-api-文档" tabindex="-1">7.3 API 文档 <a class="header-anchor" href="#_7-3-api-文档" aria-label="Permalink to &quot;7.3 API 文档&quot;">​</a></h1><h2 id="核心问题" tabindex="-1">核心问题 <a class="header-anchor" href="#核心问题" aria-label="Permalink to &quot;核心问题&quot;">​</a></h2><table tabindex="0"><thead><tr><th>问题</th><th>本节解答</th></tr></thead><tbody><tr><td>文档用什么格式？</td><td>Markdown 简单直接，OpenAPI 可交互</td></tr><tr><td>怎么让文档可以点着试？</td><td>使用 Swagger UI</td></tr><tr><td>怎么测试 API？</td><td>使用 Postman 集合</td></tr><tr><td>代码改了文档怎么同步？</td><td>代码注释自动生成文档</td></tr></tbody></table><h2 id="文档类型对比" tabindex="-1">文档类型对比 <a class="header-anchor" href="#文档类型对比" aria-label="Permalink to &quot;文档类型对比&quot;">​</a></h2>',4)),(a(),h(o,null,{default:i(()=>[r(t,{id:"mermaid-55",class:"mermaid",graph:"flowchart%20LR%0A%20%20%20%20subgraph%20%E9%9D%99%E6%80%81%5B%22%E9%9D%99%E6%80%81%E6%96%87%E6%A1%A3%22%5D%0A%20%20%20%20%20%20%20%20MD%5B%22Markdown%22%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20%E4%BA%A4%E4%BA%92%5B%22%E4%BA%A4%E4%BA%92%E6%96%87%E6%A1%A3%22%5D%0A%20%20%20%20%20%20%20%20OpenAPI%5B%22OpenAPI%2FSwagger%22%5D%0A%20%20%20%20%20%20%20%20Postman%5B%22Postman%22%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20MD%20--%3E%7C%22%E7%AE%80%E5%8D%95%E6%98%93%E5%86%99%22%7C%20%E4%BA%BA%E8%AF%BB%0A%20%20%20%20OpenAPI%20--%3E%7C%22%E5%8F%AF%E6%B5%8B%E8%AF%95%22%7C%20%E6%9C%BA%E5%99%A8%E8%AF%BB%0A%20%20%20%20Postman%20--%3E%7C%22%E5%8F%AF%E5%88%86%E4%BA%AB%22%7C%20%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%0A"})]),fallback:i(()=>[...s[0]||(s[0]=[d(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=n(`<table tabindex="0"><thead><tr><th>格式</th><th>优势</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>Markdown</strong></td><td>简单、版本控制友好</td><td>内部文档、快速记录</td></tr><tr><td><strong>OpenAPI</strong></td><td>标准化、可生成 UI</td><td>正式 API、对外接口</td></tr><tr><td><strong>Postman</strong></td><td>可测试、可分享</td><td>接口调试、团队协作</td></tr></tbody></table><h2 id="本节内容" tabindex="-1">本节内容 <a class="header-anchor" href="#本节内容" aria-label="Permalink to &quot;本节内容&quot;">​</a></h2><table tabindex="0"><thead><tr><th>小节</th><th>主题</th><th>核心知识点</th></tr></thead><tbody><tr><td>7.3.1</td><td>文档格式选择</td><td>Markdown vs OpenAPI</td></tr><tr><td>7.3.2</td><td>Swagger UI</td><td>交互式 API 文档</td></tr><tr><td>7.3.3</td><td>Postman 集合</td><td>API 测试与分享</td></tr><tr><td>7.3.4</td><td>文档同步</td><td>代码变更驱动文档更新</td></tr></tbody></table><h2 id="好文档的标准" tabindex="-1">好文档的标准 <a class="header-anchor" href="#好文档的标准" aria-label="Permalink to &quot;好文档的标准&quot;">​</a></h2><h3 id="必备内容" tabindex="-1">必备内容 <a class="header-anchor" href="#必备内容" aria-label="Permalink to &quot;必备内容&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## POST /api/users</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">创建新用户</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 请求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Headers:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`Authorization: Bearer &lt;token&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (必需)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Body:**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 字段 | 类型 | 必需 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| email | string | 是 | 用户邮箱 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| password | string | 是 | 密码，至少 8 位 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| name | string | 否 | 显示名称 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**成功 (201):**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user_123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;张三&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>错误 (400):</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;VALIDATION_ERROR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邮箱格式不正确&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 文档清单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 项目 | 必需 | 说明 |</span></span>
<span class="line"><span>|------|------|------|</span></span>
<span class="line"><span>| 接口地址 | ✅ | 完整 URL 路径 |</span></span>
<span class="line"><span>| HTTP 方法 | ✅ | GET/POST/PUT/DELETE |</span></span>
<span class="line"><span>| 功能描述 | ✅ | 一句话说明作用 |</span></span>
<span class="line"><span>| 请求参数 | ✅ | 参数名、类型、是否必需 |</span></span>
<span class="line"><span>| 请求示例 | ✅ | 实际的请求 JSON |</span></span>
<span class="line"><span>| 响应示例 | ✅ | 成功和错误响应 |</span></span>
<span class="line"><span>| 状态码 | ✅ | 可能返回的状态码 |</span></span>
<span class="line"><span>| 认证方式 | ✅ | 需要什么认证 |</span></span>
<span class="line"><span>| 错误码 | 推荐 | 业务错误码列表 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 学习目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成本节后，你将能够：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 选择合适的文档格式</span></span>
<span class="line"><span>2. 编写清晰的 API 文档</span></span>
<span class="line"><span>3. 使用 Swagger UI 创建交互文档</span></span>
<span class="line"><span>4. 使用 Postman 测试和分享 API</span></span>
<span class="line"><span>5. 实现文档与代码同步更新</span></span></code></pre></div>`,9))])}const F=p(k,[["render",E]]);export{m as __pageData,F as default};
