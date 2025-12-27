import{_ as t,C as l,c as e,o as a,a3 as n,b as h,w as i,a as k,G as d,a4 as o}from"./chunks/framework.CUcrqFol.js";const b=JSON.parse('{"title":"5.4.2 数据从哪来，到哪去——输入输出定义：明确的数据流与接口描述","description":"5.4.2 数据从哪来，到哪去——输入输出定义 一句话破题 明确的输入输出定义，让 AI 知道**接收什么数据、返回什么结果**。 为什么输入输出很重要 模糊的输入输出定义是代码错误的主要来源： | 模糊的定义 | AI 可能的理解 | 你期望的 | |------------|---------------|----","frontmatter":{"title":"5.4.2 数据从哪来，到哪去——输入输出定义：明确的数据流与接口描述","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.4-structured-prd/5.4.2-io.md","filePath":"Advanced-old/05-product/5.4-structured-prd/5.4.2-io.md","lastUpdated":1766168364000}'),r={name:"Advanced-old/05-product/5.4-structured-prd/5.4.2-io.md"};function E(c,s,g,u,y,F){const p=l("Mermaid");return a(),e("div",null,[s[1]||(s[1]=n('<h1 id="_5-4-2-数据从哪来-到哪去——输入输出定义" tabindex="-1">5.4.2 数据从哪来，到哪去——输入输出定义 <a class="header-anchor" href="#_5-4-2-数据从哪来-到哪去——输入输出定义" aria-label="Permalink to &quot;5.4.2 数据从哪来，到哪去——输入输出定义&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>明确的输入输出定义，让 AI 知道<strong>接收什么数据、返回什么结果</strong>。</p><h3 id="为什么输入输出很重要" tabindex="-1">为什么输入输出很重要 <a class="header-anchor" href="#为什么输入输出很重要" aria-label="Permalink to &quot;为什么输入输出很重要&quot;">​</a></h3>',4)),(a(),h(o,null,{default:i(()=>[d(p,{id:"mermaid-12",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E8%BE%93%E5%85%A5%5Cn%E7%94%A8%E6%88%B7%E6%8F%90%E4%BE%9B%E4%BB%80%E4%B9%88%22%5D%20--%3E%20B%5B%22%E5%A4%84%E7%90%86%5Cn%E7%B3%BB%E7%BB%9F%E5%81%9A%E4%BB%80%E4%B9%88%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E8%BE%93%E5%87%BA%5Cn%E8%BF%94%E5%9B%9E%E4%BB%80%E4%B9%88%E7%BB%93%E6%9E%9C%22%5D%0A"})]),fallback:i(()=>[...s[0]||(s[0]=[k(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=n(`<p>模糊的输入输出定义是代码错误的主要来源：</p><table tabindex="0"><thead><tr><th>模糊的定义</th><th>AI 可能的理解</th><th>你期望的</th></tr></thead><tbody><tr><td>&quot;接收用户数据&quot;</td><td>只有 name？</td><td>email + password + name</td></tr><tr><td>&quot;返回用户信息&quot;</td><td>包括密码？</td><td>不包括敏感字段</td></tr><tr><td>&quot;分页返回&quot;</td><td>一页多少条？</td><td>10 条/页</td></tr></tbody></table><h3 id="输入定义的要素" tabindex="-1">输入定义的要素 <a class="header-anchor" href="#输入定义的要素" aria-label="Permalink to &quot;输入定义的要素&quot;">​</a></h3><p>每个输入字段应该说明：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 字段 | 类型 | 必填 | 默认值 | 约束条件 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|--------|----------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| email | string | 是 | - | 有效邮箱格式 | 用户邮箱 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| password | string | 是 | - | 8-20 字符 | 登录密码 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| page | number | 否 | 1 | &gt;= 1 | 页码 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| limit | number | 否 | 10 | 1-100 | 每页条数 |</span></span></code></pre></div><h3 id="输出定义的要素" tabindex="-1">输出定义的要素 <a class="header-anchor" href="#输出定义的要素" aria-label="Permalink to &quot;输出定义的要素&quot;">​</a></h3><p>成功和失败要分开定义：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 成功响应 (200)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string | null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISO8601 时间戳&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string (JWT)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="失败响应" tabindex="-1">失败响应 <a class="header-anchor" href="#失败响应" aria-label="Permalink to &quot;失败响应&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ERROR_CODE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;人类可读的错误描述&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 数据流的完整描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用图表展示数据的流转：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`mermaid</span></span>
<span class="line"><span>sequenceDiagram</span></span>
<span class="line"><span>    participant U as 用户</span></span>
<span class="line"><span>    participant F as 前端</span></span>
<span class="line"><span>    participant A as API</span></span>
<span class="line"><span>    participant D as 数据库</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    U-&gt;&gt;F: 填写表单</span></span>
<span class="line"><span>    F-&gt;&gt;F: 前端验证</span></span>
<span class="line"><span>    F-&gt;&gt;A: POST /api/register</span></span>
<span class="line"><span>    A-&gt;&gt;A: 后端验证</span></span>
<span class="line"><span>    A-&gt;&gt;D: 查询邮箱是否存在</span></span>
<span class="line"><span>    D--&gt;&gt;A: 不存在</span></span>
<span class="line"><span>    A-&gt;&gt;D: 创建用户</span></span>
<span class="line"><span>    D--&gt;&gt;A: 用户数据</span></span>
<span class="line"><span>    A--&gt;&gt;F: 200 + 用户信息</span></span>
<span class="line"><span>    F--&gt;&gt;U: 显示成功</span></span></code></pre></div><h3 id="常见的数据类型说明" tabindex="-1">常见的数据类型说明 <a class="header-anchor" href="#常见的数据类型说明" aria-label="Permalink to &quot;常见的数据类型说明&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 数据类型约定</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 基础类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string: 字符串</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number: 数字（整数或浮点）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean: true/false</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> null: 空值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 复合类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> array&lt;T&gt;: T 类型的数组</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> object: 键值对对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 特殊类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id: 唯一标识符（如 &quot;user_abc123&quot;）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> email: 有效邮箱格式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url: 有效 URL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> datetime: ISO8601 格式时间戳</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uuid: UUID 格式字符串</span></span></code></pre></div><h3 id="输入验证规则" tabindex="-1">输入验证规则 <a class="header-anchor" href="#输入验证规则" aria-label="Permalink to &quot;输入验证规则&quot;">​</a></h3><p>明确每个字段的验证规则：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### email</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 格式：xxx@xxx.xxx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 大小写不敏感</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 最大长度：255 字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### password</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 长度：8-20 字符</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 必须包含：至少 1 个字母 + 1 个数字</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 可选包含：特殊字符 !@#$%^&amp;*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### name</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 长度：1-50 字符</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 允许中文、英文、数字</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不允许特殊字符</span></span></code></pre></div><h3 id="分页输出格式" tabindex="-1">分页输出格式 <a class="header-anchor" href="#分页输出格式" aria-label="Permalink to &quot;分页输出格式&quot;">​</a></h3><p>分页是常见场景，建议标准化：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 分页响应格式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前页数据</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pagination&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前页码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;limit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 每页条数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;total&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 总条数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;totalPages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // 总页数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 实际案例：文章列表 API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 获取文章列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 请求</span></span>
<span class="line"><span>- 方法：GET</span></span>
<span class="line"><span>- 路径：/api/posts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 输入参数（Query）</span></span>
<span class="line"><span>| 参数 | 类型 | 必填 | 默认值 | 说明 |</span></span>
<span class="line"><span>|------|------|------|--------|------|</span></span>
<span class="line"><span>| page | number | 否 | 1 | 页码 |</span></span>
<span class="line"><span>| limit | number | 否 | 10 | 每页条数 |</span></span>
<span class="line"><span>| category | string | 否 | - | 分类筛选 |</span></span>
<span class="line"><span>| search | string | 否 | - | 关键词搜索 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 成功响应 (200)</span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;data&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;id&quot;: &quot;post_123&quot;,</span></span>
<span class="line"><span>      &quot;title&quot;: &quot;文章标题&quot;,</span></span>
<span class="line"><span>      &quot;excerpt&quot;: &quot;摘要...&quot;,</span></span>
<span class="line"><span>      &quot;author&quot;: {</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;user_456&quot;,</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;张三&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;createdAt&quot;: &quot;2024-01-15T10:00:00Z&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;pagination&quot;: {</span></span>
<span class="line"><span>    &quot;page&quot;: 1,</span></span>
<span class="line"><span>    &quot;limit&quot;: 10,</span></span>
<span class="line"><span>    &quot;total&quot;: 50,</span></span>
<span class="line"><span>    &quot;totalPages&quot;: 5</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 实用建议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **用表格列出字段**：比文字描述更清晰</span></span>
<span class="line"><span>2. **给出示例数据**：让 AI 知道期望的格式</span></span>
<span class="line"><span>3. **区分必填和可选**：避免遗漏验证</span></span>
<span class="line"><span>4. **说明边界值**：最大长度、范围限制</span></span>
<span class="line"><span>5. **保持一致性**：整个项目用相同的格式约定</span></span></code></pre></div>`,21))])}const C=t(r,[["render",E]]);export{b as __pageData,C as default};
