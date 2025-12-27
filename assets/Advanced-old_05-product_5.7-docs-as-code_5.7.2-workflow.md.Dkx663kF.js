import{_ as d,C as r,c as o,o as n,a3 as i,b as l,w as a,a as t,G as e,a4 as h}from"./chunks/framework.CUcrqFol.js";const y=JSON.parse('{"title":"5.7.2 改了代码必须改文档——PR 流程：代码变更必须同步文档更新","description":"5.7.2 改了代码必须改文档——PR 流程 一句话破题 最好的文档更新时机是**改代码的时候**，而不是\\"以后再补\\"。 代码与文档同步更新 什么时候需要更新文档 | 代码变更类型 | 需要更新的文档 | |--------------|----------------| | 新增 API 接口 | API 文档 |","frontmatter":{"title":"5.7.2 改了代码必须改文档——PR 流程：代码变更必须同步文档更新","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.7-docs-as-code/5.7.2-workflow.md","filePath":"Advanced-old/05-product/5.7-docs-as-code/5.7.2-workflow.md","lastUpdated":1766168364000}'),k={name:"Advanced-old/05-product/5.7-docs-as-code/5.7.2-workflow.md"};function c(g,s,E,F,u,B){const p=r("Mermaid");return n(),o("div",null,[s[2]||(s[2]=i('<h1 id="_5-7-2-改了代码必须改文档——pr-流程" tabindex="-1">5.7.2 改了代码必须改文档——PR 流程 <a class="header-anchor" href="#_5-7-2-改了代码必须改文档——pr-流程" aria-label="Permalink to &quot;5.7.2 改了代码必须改文档——PR 流程&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>最好的文档更新时机是<strong>改代码的时候</strong>，而不是&quot;以后再补&quot;。</p><h3 id="代码与文档同步更新" tabindex="-1">代码与文档同步更新 <a class="header-anchor" href="#代码与文档同步更新" aria-label="Permalink to &quot;代码与文档同步更新&quot;">​</a></h3>',4)),(n(),l(h,null,{default:a(()=>[e(p,{id:"mermaid-12",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E4%BF%AE%E6%94%B9%E4%BB%A3%E7%A0%81%22%5D%20--%3E%20B%5B%22%E5%90%8C%E6%97%B6%E4%BF%AE%E6%94%B9%E6%96%87%E6%A1%A3%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E5%90%8C%E4%B8%80%E4%B8%AA%20commit%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22%E5%90%8C%E4%B8%80%E4%B8%AA%20PR%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22%E4%B8%80%E8%B5%B7%20review%22%5D%0A%20%20%20%20E%20--%3E%20F%5B%22%E4%B8%80%E8%B5%B7%E5%90%88%E5%B9%B6%22%5D%0A"})]),fallback:a(()=>[...s[0]||(s[0]=[t(" Loading... ",-1)])]),_:1})),s[3]||(s[3]=i(`<h3 id="什么时候需要更新文档" tabindex="-1">什么时候需要更新文档 <a class="header-anchor" href="#什么时候需要更新文档" aria-label="Permalink to &quot;什么时候需要更新文档&quot;">​</a></h3><table tabindex="0"><thead><tr><th>代码变更类型</th><th>需要更新的文档</th></tr></thead><tbody><tr><td>新增 API 接口</td><td>API 文档</td></tr><tr><td>修改接口参数</td><td>API 文档</td></tr><tr><td>添加新功能</td><td>使用指南</td></tr><tr><td>修改配置方式</td><td>部署文档</td></tr><tr><td>修改数据库结构</td><td>架构文档</td></tr></tbody></table><h3 id="pr-提交规范" tabindex="-1">PR 提交规范 <a class="header-anchor" href="#pr-提交规范" aria-label="Permalink to &quot;PR 提交规范&quot;">​</a></h3><p>包含文档更新的 commit 信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 功能开发 + 文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">feat:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加文章搜索功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 实现关键词搜索</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加搜索结果分页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 更新</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修复 Bug + 文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fix:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 修复登录超时问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 延长</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 有效期</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 更新认证文档说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单独文档更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 更新部署文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 部署说明</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 修正环境变量配置</span></span></code></pre></div><h3 id="pr-检查清单" tabindex="-1">PR 检查清单 <a class="header-anchor" href="#pr-检查清单" aria-label="Permalink to &quot;PR 检查清单&quot;">​</a></h3><p>在提交 PR 前，检查：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## PR 检查清单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 代码能正常运行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 通过所有测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 没有 lint 错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 文档</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] API 变更是否更新了 docs/api.md</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 新功能是否添加了使用说明</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 配置变更是否更新了 README</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 数据库变更是否更新了架构文档</span></span></code></pre></div><h3 id="独立开发者的简化流程" tabindex="-1">独立开发者的简化流程 <a class="header-anchor" href="#独立开发者的简化流程" aria-label="Permalink to &quot;独立开发者的简化流程&quot;">​</a></h3><p>一个人开发时，流程可以简化：</p>`,10)),(n(),l(h,null,{default:a(()=>[e(p,{id:"mermaid-90",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E5%86%99%E4%BB%A3%E7%A0%81%22%5D%20--%3E%20B%5B%22%E5%86%99%E6%96%87%E6%A1%A3%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22commit%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22push%22%5D%0A"})]),fallback:a(()=>[...s[1]||(s[1]=[t(" Loading... ",-1)])]),_:1})),s[4]||(s[4]=i(`<p>关键是养成习惯：</p><ul><li>每次改代码问自己：&quot;这个改动需要更新文档吗？&quot;</li><li>如果需要，<strong>立刻</strong>更新，不要拖延</li></ul><h3 id="文档更新的最佳时机" tabindex="-1">文档更新的最佳时机 <a class="header-anchor" href="#文档更新的最佳时机" aria-label="Permalink to &quot;文档更新的最佳时机&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 不好的做法</span></span>
<span class="line"><span>1. 写完所有代码</span></span>
<span class="line"><span>2. 项目要上线了</span></span>
<span class="line"><span>3. 想起来还没写文档</span></span>
<span class="line"><span>4. 补文档（已经忘了很多细节）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 好的做法</span></span>
<span class="line"><span>1. 写 API 代码</span></span>
<span class="line"><span>2. 立刻写 API 文档</span></span>
<span class="line"><span>3. commit: &quot;feat: 添加用户注册接口&quot;</span></span>
<span class="line"><span>4. 继续下一个功能</span></span></code></pre></div><h3 id="让-ai-帮你写文档" tabindex="-1">让 AI 帮你写文档 <a class="header-anchor" href="#让-ai-帮你写文档" aria-label="Permalink to &quot;让 AI 帮你写文档&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我刚写了一个用户登录 API，帮我写文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POST /api/auth/login</span></span>
<span class="line"><span>参数：email, password</span></span>
<span class="line"><span>返回：user 对象和 token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## POST /api/auth/login</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户登录接口。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 请求参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 参数 | 类型 | 必填 | 说明 |</span></span>
<span class="line"><span>|------|------|------|------|</span></span>
<span class="line"><span>| email | string | 是 | 用户邮箱 |</span></span>
<span class="line"><span>| password | string | 是 | 用户密码 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 成功响应</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;user&quot;: {</span></span>
<span class="line"><span>    &quot;id&quot;: &quot;user_123&quot;,</span></span>
<span class="line"><span>    &quot;email&quot;: &quot;user@example.com&quot;,</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;张三&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIs...&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 错误响应</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 状态码 | 错误码 | 说明 |</span></span>
<span class="line"><span>|--------|--------|------|</span></span>
<span class="line"><span>| 400 | MISSING_EMAIL | 邮箱不能为空 |</span></span>
<span class="line"><span>| 401 | INVALID_CREDENTIALS | 邮箱或密码错误 |</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>代码和文档同一个 commit</strong>：保证版本对应</li><li><strong>不要拖延</strong>：写完代码立刻写文档</li><li><strong>用 AI 加速</strong>：让 AI 生成文档草稿</li><li><strong>简洁为上</strong>：文档够用就行，不必过度详细</li></ol>`,8))])}const b=d(k,[["render",c]]);export{y as __pageData,b as default};
