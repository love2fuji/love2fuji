import{_ as t,C as p,c as h,o as a,a3 as i,b as e,w as n,a as k,G as E,a4 as d}from"./chunks/framework.CUcrqFol.js";const B=JSON.parse('{"title":"5.4.3 万一...怎么办——边界条件与异常处理：系统响应的完整描述","description":"5.4.3 万一...怎么办——边界条件与异常处理 一句话破题 预判所有可能出错的情况，让 AI 知道**每种异常该如何响应**。 为什么边界条件很重要 正常流程只占代码的 20%，异常处理占 80%： 如果不定义边界条件，AI 生成的代码可能： 遗漏重要的错误处理 返回不一致的错误格式 产生安全漏洞 边界条件的分类","frontmatter":{"title":"5.4.3 万一...怎么办——边界条件与异常处理：系统响应的完整描述","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.4-structured-prd/5.4.3-edge-cases.md","filePath":"Advanced-old/05-product/5.4-structured-prd/5.4.3-edge-cases.md","lastUpdated":1766168364000}'),r={name:"Advanced-old/05-product/5.4-structured-prd/5.4.3-edge-cases.md"};function o(g,s,c,F,y,A){const l=p("Mermaid");return a(),h("div",null,[s[1]||(s[1]=i('<h1 id="_5-4-3-万一-怎么办——边界条件与异常处理" tabindex="-1">5.4.3 万一...怎么办——边界条件与异常处理 <a class="header-anchor" href="#_5-4-3-万一-怎么办——边界条件与异常处理" aria-label="Permalink to &quot;5.4.3 万一...怎么办——边界条件与异常处理&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>预判所有可能出错的情况，让 AI 知道<strong>每种异常该如何响应</strong>。</p><h3 id="为什么边界条件很重要" tabindex="-1">为什么边界条件很重要 <a class="header-anchor" href="#为什么边界条件很重要" aria-label="Permalink to &quot;为什么边界条件很重要&quot;">​</a></h3><p>正常流程只占代码的 20%，异常处理占 80%：</p>',5)),(a(),e(d,null,{default:n(()=>[E(l,{id:"mermaid-15",class:"mermaid",graph:"graph%20TB%0A%20%20%20%20A%5B%22%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%22%5D%20--%3E%20B%7B%22%E8%BE%93%E5%85%A5%E5%90%88%E6%B3%95%3F%22%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%22%E6%AD%A3%E5%B8%B8%E5%A4%84%E7%90%86%22%5D%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D%5B%22%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%22%5D%0A%20%20%20%20C%20--%3E%20E%7B%22%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99%E9%80%9A%E8%BF%87%3F%22%7D%0A%20%20%20%20E%20--%3E%7C%E6%98%AF%7C%20F%5B%22%E6%88%90%E5%8A%9F%E5%93%8D%E5%BA%94%22%5D%0A%20%20%20%20E%20--%3E%7C%E5%90%A6%7C%20G%5B%22%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%22%5D%0A%20%20%20%20C%20--%3E%20H%7B%22%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C%E6%88%90%E5%8A%9F%3F%22%7D%0A%20%20%20%20H%20--%3E%7C%E6%98%AF%7C%20F%0A%20%20%20%20H%20--%3E%7C%E5%90%A6%7C%20I%5B%22%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%22%5D%0A"})]),fallback:n(()=>[...s[0]||(s[0]=[k(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=i(`<p>如果不定义边界条件，AI 生成的代码可能：</p><ul><li>遗漏重要的错误处理</li><li>返回不一致的错误格式</li><li>产生安全漏洞</li></ul><h3 id="边界条件的分类" tabindex="-1">边界条件的分类 <a class="header-anchor" href="#边界条件的分类" aria-label="Permalink to &quot;边界条件的分类&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 边界条件清单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. 输入边界</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 必填字段为空</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字段格式错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字段超出范围</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 非法字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. 业务边界</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 资源不存在</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 资源已存在（重复）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 无权限访问</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 超出配额限制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. 系统边界</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库连接失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第三方服务超时</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 服务器内部错误</span></span></code></pre></div><h3 id="异常处理的标准格式" tabindex="-1">异常处理的标准格式 <a class="header-anchor" href="#异常处理的标准格式" aria-label="Permalink to &quot;异常处理的标准格式&quot;">​</a></h3><p>每种异常都要说明：</p><table tabindex="0"><thead><tr><th>异常情况</th><th>HTTP 状态码</th><th>错误码</th><th>错误消息</th><th>处理建议</th></tr></thead><tbody><tr><td>邮箱为空</td><td>400</td><td>MISSING_EMAIL</td><td>请输入邮箱</td><td>前端表单验证</td></tr><tr><td>邮箱格式错误</td><td>400</td><td>INVALID_EMAIL</td><td>邮箱格式不正确</td><td>前端正则校验</td></tr><tr><td>邮箱已存在</td><td>409</td><td>EMAIL_EXISTS</td><td>该邮箱已被注册</td><td>提示去登录</td></tr><tr><td>用户不存在</td><td>404</td><td>USER_NOT_FOUND</td><td>用户不存在</td><td>-</td></tr><tr><td>密码错误</td><td>401</td><td>INVALID_PASSWORD</td><td>密码错误</td><td>不透露具体原因</td></tr></tbody></table><h3 id="错误响应的统一格式" tabindex="-1">错误响应的统一格式 <a class="header-anchor" href="#错误响应的统一格式" aria-label="Permalink to &quot;错误响应的统一格式&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ERROR_CODE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;给用户看的友好提示&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;details&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;reason&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;格式不正确&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="实际案例-用户登录" tabindex="-1">实际案例：用户登录 <a class="header-anchor" href="#实际案例-用户登录" aria-label="Permalink to &quot;实际案例：用户登录&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 登录接口异常处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 输入验证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 条件 | 响应 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 邮箱为空 | 400 MISSING_EMAIL |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 密码为空 | 400 MISSING_PASSWORD |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 邮箱格式错误 | 400 INVALID_EMAIL |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 业务验证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 条件 | 响应 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 用户不存在 | 401 INVALID_CREDENTIALS |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 密码错误 | 401 INVALID_CREDENTIALS |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 账号被禁用 | 403 ACCOUNT_DISABLED |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 登录次数过多 | 429 TOO_MANY_ATTEMPTS |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 安全考虑</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户不存在和密码错误返回相同的错误码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 避免攻击者通过错误信息探测有效账号</span></span></code></pre></div><h3 id="边界值测试清单" tabindex="-1">边界值测试清单 <a class="header-anchor" href="#边界值测试清单" aria-label="Permalink to &quot;边界值测试清单&quot;">​</a></h3><p>为每个功能列出测试边界：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 文章发布 - 边界测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 标题</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 空标题 → 400 MISSING_TITLE</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1 个字符 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100 个字符 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 101 个字符 → 400 TITLE_TOO_LONG</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 包含 HTML 标签 → 自动转义</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 内容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 空内容 → 400 MISSING_CONTENT</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1 个字符 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100000 个字符 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100001 个字符 → 400 CONTENT_TOO_LONG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 标签</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0 个标签 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 5 个标签 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 6 个标签 → 400 TOO_MANY_TAGS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签名 50 字符 → 成功</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标签名 51 字符 → 400 TAG_TOO_LONG</span></span></code></pre></div><h3 id="让-ai-帮你发现边界条件" tabindex="-1">让 AI 帮你发现边界条件 <a class="header-anchor" href="#让-ai-帮你发现边界条件" aria-label="Permalink to &quot;让 AI 帮你发现边界条件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要实现用户注册功能，请帮我列出所有需要处理的边界条件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 边界条件清单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 输入验证</span></span>
<span class="line"><span>1. 邮箱</span></span>
<span class="line"><span>   - 为空 → 400 MISSING_EMAIL</span></span>
<span class="line"><span>   - 格式错误 → 400 INVALID_EMAIL</span></span>
<span class="line"><span>   - 长度超过 255 → 400 EMAIL_TOO_LONG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 密码</span></span>
<span class="line"><span>   - 为空 → 400 MISSING_PASSWORD</span></span>
<span class="line"><span>   - 长度小于 8 → 400 PASSWORD_TOO_SHORT</span></span>
<span class="line"><span>   - 长度大于 20 → 400 PASSWORD_TOO_LONG</span></span>
<span class="line"><span>   - 不包含字母 → 400 PASSWORD_WEAK</span></span>
<span class="line"><span>   - 不包含数字 → 400 PASSWORD_WEAK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 业务验证</span></span>
<span class="line"><span>1. 邮箱已被注册 → 409 EMAIL_EXISTS</span></span>
<span class="line"><span>2. 触发反垃圾规则 → 429 RATE_LIMITED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 系统异常</span></span>
<span class="line"><span>1. 数据库连接失败 → 500 INTERNAL_ERROR</span></span>
<span class="line"><span>2. 邮件服务不可用 → 注册成功，但记录发送失败</span></span></code></pre></div><h3 id="优雅降级策略" tabindex="-1">优雅降级策略 <a class="header-anchor" href="#优雅降级策略" aria-label="Permalink to &quot;优雅降级策略&quot;">​</a></h3><p>对于非关键功能，考虑降级处理：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 降级策略</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 发送验证邮件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 正常：注册成功后立即发送</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 降级：邮件服务故障时，记录到队列，稍后重试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户提示：&quot;注册成功，验证邮件稍后送达&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 头像上传</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 正常：上传到 OSS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 降级：OSS 故障时，保存到本地临时目录</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后续：定时任务迁移到 OSS</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>先列再补</strong>：先想正常流程，再逐个想&quot;如果...怎么办&quot;</li><li><strong>安全优先</strong>：敏感操作的错误信息要模糊化</li><li><strong>用户友好</strong>：错误消息要让用户知道该怎么做</li><li><strong>统一格式</strong>：所有接口用相同的错误响应结构</li><li><strong>记录日志</strong>：服务端错误要有详细日志，但不暴露给用户</li></ol>`,21))])}const b=t(r,[["render",o]]);export{B as __pageData,b as default};
