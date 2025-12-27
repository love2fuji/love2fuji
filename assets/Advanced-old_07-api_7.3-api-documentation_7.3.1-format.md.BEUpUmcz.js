import{_ as p,C as t,c as h,o as i,a3 as a,b as k,w as n,a as e,G as E,a4 as r}from"./chunks/framework.CUcrqFol.js";const C=JSON.parse('{"title":"7.3.1 API 文档怎么写——文档格式选择：Markdown vs OpenAPI","description":"7.3.1 文档格式选择 一句话破题 Markdown 适合快速记录，OpenAPI 适合正式发布——选择取决于谁在读文档、怎么用文档。 两种格式对比 | 方面 | Markdown | OpenAPI | |------|----------|---------| | **学习成本** | 低 | 中 | | **编","frontmatter":{"title":"7.3.1 API 文档怎么写——文档格式选择：Markdown vs OpenAPI","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/07-api/7.3-api-documentation/7.3.1-format.md","filePath":"Advanced-old/07-api/7.3-api-documentation/7.3.1-format.md","lastUpdated":1766168364000}'),d={name:"Advanced-old/07-api/7.3-api-documentation/7.3.1-format.md"};function g(o,s,y,c,F,u){const l=t("Mermaid");return i(),h("div",null,[s[1]||(s[1]=a(`<h1 id="_7-3-1-文档格式选择" tabindex="-1">7.3.1 文档格式选择 <a class="header-anchor" href="#_7-3-1-文档格式选择" aria-label="Permalink to &quot;7.3.1 文档格式选择&quot;">​</a></h1><h2 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h2><p>Markdown 适合快速记录，OpenAPI 适合正式发布——选择取决于谁在读文档、怎么用文档。</p><h2 id="两种格式对比" tabindex="-1">两种格式对比 <a class="header-anchor" href="#两种格式对比" aria-label="Permalink to &quot;两种格式对比&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方面</th><th>Markdown</th><th>OpenAPI</th></tr></thead><tbody><tr><td><strong>学习成本</strong></td><td>低</td><td>中</td></tr><tr><td><strong>编写速度</strong></td><td>快</td><td>慢</td></tr><tr><td><strong>可交互性</strong></td><td>无</td><td>有</td></tr><tr><td><strong>代码生成</strong></td><td>不支持</td><td>支持</td></tr><tr><td><strong>验证能力</strong></td><td>无</td><td>有</td></tr><tr><td><strong>适用场景</strong></td><td>内部文档</td><td>对外 API</td></tr></tbody></table><h2 id="markdown-文档" tabindex="-1">Markdown 文档 <a class="header-anchor" href="#markdown-文档" aria-label="Permalink to &quot;Markdown 文档&quot;">​</a></h2><h3 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h3><ul><li>所有人都会写</li><li>Git 版本控制友好</li><li>与代码放在一起</li><li>无需额外工具</li></ul><h3 id="模板示例" tabindex="-1">模板示例 <a class="header-anchor" href="#模板示例" aria-label="Permalink to &quot;模板示例&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 用户管理 API</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 创建用户</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**POST**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`/api/users\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">创建一个新的用户账户。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 认证</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">需要 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`Admin\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 权限的 Token。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 请求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Headers:**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Header | 类型 | 必需 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Authorization | string | 是 | Bearer Token |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Body:**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 字段 | 类型 | 必需 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| email | string | 是 | 用户邮箱，需要唯一 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| password | string | 是 | 密码，至少 8 位 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| name | string | 否 | 显示名称 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**示例:**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;email&quot;: &quot;user@example.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;password&quot;: &quot;securepassword123&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;name&quot;: &quot;张三&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**成功 (201 Created):**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;id&quot;: &quot;user_abc123&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;email&quot;: &quot;user@example.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;name&quot;: &quot;张三&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;createdAt&quot;: &quot;2024-01-15T10:30:00Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**错误 (400 Bad Request):**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;error&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;code&quot;: &quot;VALIDATION_ERROR&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;message&quot;: &quot;请求参数验证失败&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;details&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { &quot;field&quot;: &quot;email&quot;, &quot;message&quot;: &quot;邮箱格式不正确&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**错误 (409 Conflict):**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;error&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;code&quot;: &quot;EMAIL_EXISTS&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;message&quot;: &quot;邮箱已被注册&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span></code></pre></div><h3 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── README.md        # API 概述</span></span>
<span class="line"><span>│   ├── auth.md          # 认证相关</span></span>
<span class="line"><span>│   ├── users.md         # 用户管理</span></span>
<span class="line"><span>│   ├── posts.md         # 文章管理</span></span>
<span class="line"><span>│   └── errors.md        # 错误码列表</span></span></code></pre></div><h2 id="openapi-文档" tabindex="-1">OpenAPI 文档 <a class="header-anchor" href="#openapi-文档" aria-label="Permalink to &quot;OpenAPI 文档&quot;">​</a></h2><h3 id="优势-1" tabindex="-1">优势 <a class="header-anchor" href="#优势-1" aria-label="Permalink to &quot;优势&quot;">​</a></h3><ul><li>标准化格式</li><li>可生成交互 UI</li><li>可生成客户端代码</li><li>可做请求验证</li></ul><h3 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># openapi.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">openapi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户管理 API</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户相关的 API 接口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">servers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://api.example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">生产环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:3000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">本地开发</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  /api/users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      summary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">创建用户</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">创建一个新的用户账户</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户管理</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      security</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bearerAuth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      requestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          application/json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              $ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#/components/schemas/CreateUserRequest&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">user@example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">securepassword123</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">张三</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      responses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;201&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">创建成功</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            application/json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                $ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#/components/schemas/UserResponse&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;400&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">验证失败</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            application/json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                $ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#/components/schemas/ErrorResponse&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;409&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">邮箱已存在</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            application/json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                $ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#/components/schemas/ErrorResponse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">components</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  securitySchemes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    bearerAuth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bearer</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      bearerFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">JWT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  schemas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    CreateUserRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">password</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">email</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户邮箱</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          minLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">密码，至少 8 位</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">显示名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    UserResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            createdAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">date-time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ErrorResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">array</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">object</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  field</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">string</span></span></code></pre></div><h2 id="如何选择" tabindex="-1">如何选择？ <a class="header-anchor" href="#如何选择" aria-label="Permalink to &quot;如何选择？&quot;">​</a></h2>`,18)),(i(),k(r,null,{default:n(()=>[E(l,{id:"mermaid-166",class:"mermaid",graph:"flowchart%20TD%0A%20%20%20%20Start%5B%22%E9%9C%80%E8%A6%81%20API%20%E6%96%87%E6%A1%A3%22%5D%20--%3E%20Q1%7B%22%E5%AF%B9%E5%A4%96%E6%8F%90%E4%BE%9B%3F%22%7D%0A%20%20%20%20Q1%20--%3E%7C%22%E6%98%AF%22%7C%20OpenAPI%5B%22%E4%BD%BF%E7%94%A8%20OpenAPI%22%5D%0A%20%20%20%20Q1%20--%3E%7C%22%E5%90%A6%22%7C%20Q2%7B%22%E9%9C%80%E8%A6%81%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%3F%22%7D%0A%20%20%20%20Q2%20--%3E%7C%22%E6%98%AF%22%7C%20OpenAPI%0A%20%20%20%20Q2%20--%3E%7C%22%E5%90%A6%22%7C%20Q3%7B%22%E5%9B%A2%E9%98%9F%E7%86%9F%E6%82%89%20YAML%3F%22%7D%0A%20%20%20%20Q3%20--%3E%7C%22%E6%98%AF%22%7C%20OpenAPI%0A%20%20%20%20Q3%20--%3E%7C%22%E5%90%A6%22%7C%20MD%5B%22%E4%BD%BF%E7%94%A8%20Markdown%22%5D%0A"})]),fallback:n(()=>[...s[0]||(s[0]=[e(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=a(`<table tabindex="0"><thead><tr><th>场景</th><th>推荐格式</th></tr></thead><tbody><tr><td>内部微服务</td><td>Markdown</td></tr><tr><td>公开 REST API</td><td>OpenAPI</td></tr><tr><td>小团队项目</td><td>Markdown</td></tr><tr><td>需要 SDK 生成</td><td>OpenAPI</td></tr><tr><td>快速原型</td><td>Markdown</td></tr><tr><td>正式产品 API</td><td>OpenAPI</td></tr></tbody></table><h2 id="混合使用" tabindex="-1">混合使用 <a class="header-anchor" href="#混合使用" aria-label="Permalink to &quot;混合使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── overview.md      # Markdown: 概述和快速入门</span></span>
<span class="line"><span>│   ├── openapi.yaml     # OpenAPI: 详细接口定义</span></span>
<span class="line"><span>│   └── examples/        # Markdown: 使用示例</span></span></code></pre></div><h2 id="觉知-常见问题" tabindex="-1">觉知：常见问题 <a class="header-anchor" href="#觉知-常见问题" aria-label="Permalink to &quot;觉知：常见问题&quot;">​</a></h2><h3 id="_1-文档过于简略" tabindex="-1">1. 文档过于简略 <a class="header-anchor" href="#_1-文档过于简略" aria-label="Permalink to &quot;1. 文档过于简略&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 创建用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POST /api/users</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 创建用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POST /api/users</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">创建新用户账户。需要管理员权限。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**请求参数：**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 字段 | 类型 | 必需 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| email | string | 是 | 有效的邮箱地址 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><h3 id="_2-缺少错误响应" tabindex="-1">2. 缺少错误响应 <a class="header-anchor" href="#_2-缺少错误响应" aria-label="Permalink to &quot;2. 缺少错误响应&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ 只写成功响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ 包含所有可能的错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 400: 参数验证失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 401: 未认证</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 403: 无权限</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 409: 资源冲突</span></span></code></pre></div><h3 id="_3-示例数据不真实" tabindex="-1">3. 示例数据不真实 <a class="header-anchor" href="#_3-示例数据不真实" aria-label="Permalink to &quot;3. 示例数据不真实&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ❌ 无意义的示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test@test.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ✅ 真实的示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;张三&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhangsan@company.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="本节小结" tabindex="-1">本节小结 <a class="header-anchor" href="#本节小结" aria-label="Permalink to &quot;本节小结&quot;">​</a></h2><table tabindex="0"><thead><tr><th>要点</th><th>说明</th></tr></thead><tbody><tr><td><strong>Markdown</strong></td><td>简单快速，适合内部</td></tr><tr><td><strong>OpenAPI</strong></td><td>标准化，可交互</td></tr><tr><td><strong>选择依据</strong></td><td>谁读、怎么用</td></tr><tr><td><strong>混合使用</strong></td><td>概述用 MD，详情用 OpenAPI</td></tr></tbody></table>`,12))])}const m=p(d,[["render",g]]);export{C as __pageData,m as default};
