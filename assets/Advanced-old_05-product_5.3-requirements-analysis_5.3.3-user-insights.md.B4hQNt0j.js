import{_ as l,C as e,c as t,o as a,a3 as n,b as d,w as p,a as r,G as c,a4 as o}from"./chunks/framework.CUcrqFol.js";const m=JSON.parse('{"title":"5.3.3 用户到底想要什么——AI 协助用户洞察：用户画像分析与需求挖掘","description":"5.3.3 用户到底想要什么——AI 协助用户洞察 一句话破题 让 AI 帮你**站在用户角度思考**，发现你作为开发者看不到的需求。 为什么需要用户洞察 开发者视角和用户视角往往存在偏差： | 你以为的需求 | 用户真实的需求 | |--------------|----------------| | 功能越多越好","frontmatter":{"title":"5.3.3 用户到底想要什么——AI 协助用户洞察：用户画像分析与需求挖掘","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.3-user-insights.md","filePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.3-user-insights.md","lastUpdated":1766168364000}'),h={name:"Advanced-old/05-product/5.3-requirements-analysis/5.3.3-user-insights.md"};function E(k,s,g,u,A,b){const i=e("Mermaid");return a(),t("div",null,[s[1]||(s[1]=n(`<h1 id="_5-3-3-用户到底想要什么——ai-协助用户洞察" tabindex="-1">5.3.3 用户到底想要什么——AI 协助用户洞察 <a class="header-anchor" href="#_5-3-3-用户到底想要什么——ai-协助用户洞察" aria-label="Permalink to &quot;5.3.3 用户到底想要什么——AI 协助用户洞察&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>让 AI 帮你<strong>站在用户角度思考</strong>，发现你作为开发者看不到的需求。</p><h3 id="为什么需要用户洞察" tabindex="-1">为什么需要用户洞察 <a class="header-anchor" href="#为什么需要用户洞察" aria-label="Permalink to &quot;为什么需要用户洞察&quot;">​</a></h3><p>开发者视角和用户视角往往存在偏差：</p><table tabindex="0"><thead><tr><th>你以为的需求</th><th>用户真实的需求</th></tr></thead><tbody><tr><td>功能越多越好</td><td>核心功能好用就行</td></tr><tr><td>界面要炫酷</td><td>找得到想要的功能</td></tr><tr><td>技术要先进</td><td>加载速度快、不卡</td></tr><tr><td>数据结构要完美</td><td>操作步骤要少</td></tr></tbody></table><h3 id="用-ai-构建用户画像" tabindex="-1">用 AI 构建用户画像 <a class="header-anchor" href="#用-ai-构建用户画像" aria-label="Permalink to &quot;用 AI 构建用户画像&quot;">​</a></h3><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要做一个 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">产品描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我分析目标用户：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户是谁？（人口统计特征）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户在什么场景下使用？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户的核心痛点是什么？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户期望获得什么价值？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户可能的顾虑是什么？</span></span></code></pre></div><p><strong>示例对话</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要做一个个人博客系统，目标用户是技术人员</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 用户画像分析</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1. 用户是谁</span></span>
<span class="line"><span>- 年龄：25-40 岁</span></span>
<span class="line"><span>- 职业：程序员、技术经理、技术自媒体</span></span>
<span class="line"><span>- 技术水平：熟悉 Markdown、Git，有一定开发能力</span></span>
<span class="line"><span>- 特点：追求效率，对技术有洁癖</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 2. 使用场景</span></span>
<span class="line"><span>- 记录技术学习笔记和踩坑经验</span></span>
<span class="line"><span>- 分享开源项目和技术方案</span></span>
<span class="line"><span>- 建立个人技术品牌</span></span>
<span class="line"><span>- 求职时展示技术能力</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3. 核心痛点</span></span>
<span class="line"><span>- 第三方平台审核严格、限制多</span></span>
<span class="line"><span>- 担心平台关闭导致内容丢失</span></span>
<span class="line"><span>- 想要自定义域名和样式</span></span>
<span class="line"><span>- 现有方案（如 Hexo）配置繁琐</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4. 期望价值</span></span>
<span class="line"><span>- 快速发布文章，专注内容</span></span>
<span class="line"><span>- 良好的 SEO，被搜索引擎收录</span></span>
<span class="line"><span>- 代码高亮、Markdown 支持</span></span>
<span class="line"><span>- 稳定运行，不用操心维护</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 5. 可能顾虑</span></span>
<span class="line"><span>- 自建博客的服务器成本</span></span>
<span class="line"><span>- 维护精力（更新、安全）</span></span>
<span class="line"><span>- 迁移成本（已有内容如何导入）</span></span></code></pre></div><h3 id="从用户画像推导功能" tabindex="-1">从用户画像推导功能 <a class="header-anchor" href="#从用户画像推导功能" aria-label="Permalink to &quot;从用户画像推导功能&quot;">​</a></h3><p>用户画像不是终点，而是推导功能的起点：</p>`,13)),(a(),d(o,null,{default:p(()=>[c(i,{id:"mermaid-78",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E7%94%A8%E6%88%B7%E7%97%9B%E7%82%B9%5Cn%E9%85%8D%E7%BD%AE%E7%B9%81%E7%90%90%22%5D%20--%3E%20B%5B%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%5Cn%E5%BC%80%E7%AE%B1%E5%8D%B3%E7%94%A8%22%5D%0A%20%20%20%20C%5B%22%E7%94%A8%E6%88%B7%E6%9C%9F%E6%9C%9B%5Cn%E4%B8%93%E6%B3%A8%E5%86%85%E5%AE%B9%22%5D%20--%3E%20D%5B%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%5CnMarkdown%20%E7%BC%96%E8%BE%91%E5%99%A8%22%5D%0A%20%20%20%20E%5B%22%E7%94%A8%E6%88%B7%E9%A1%BE%E8%99%91%5Cn%E8%BF%81%E7%A7%BB%E6%88%90%E6%9C%AC%22%5D%20--%3E%20F%5B%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%5Cn%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%22%5D%0A"})]),fallback:p(()=>[...s[0]||(s[0]=[r(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=n(`<p><strong>痛点到功能的映射</strong>：</p><table tabindex="0"><thead><tr><th>用户痛点</th><th>对应功能</th></tr></thead><tbody><tr><td>平台审核多</td><td>完全自主可控</td></tr><tr><td>担心丢失</td><td>本地备份、导出</td></tr><tr><td>配置繁琐</td><td>一键部署、默认配置</td></tr><tr><td>SEO 差</td><td>自动生成 sitemap、meta</td></tr></tbody></table><h3 id="用-ai-验证需求" tabindex="-1">用 AI 验证需求 <a class="header-anchor" href="#用-ai-验证需求" aria-label="Permalink to &quot;用 AI 验证需求&quot;">​</a></h3><p>在确定功能后，可以让 AI 从用户角度验证：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我计划在博客系统中实现以下功能：</span></span>
<span class="line"><span>- Markdown 编辑器</span></span>
<span class="line"><span>- 文章分类</span></span>
<span class="line"><span>- 评论系统</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请从用户角度评估，有没有遗漏的重要需求？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：从用户角度，还建议考虑：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 高优先级遗漏</span></span>
<span class="line"><span>1. **搜索功能**：文章多了之后，用户需要快速找到历史内容</span></span>
<span class="line"><span>2. **草稿保存**：写长文时意外关闭页面，内容不能丢失</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 中优先级建议</span></span>
<span class="line"><span>3. **RSS 订阅**：技术用户习惯用 RSS 阅读器</span></span>
<span class="line"><span>4. **代码块复制**：一键复制代码片段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 可后续迭代</span></span>
<span class="line"><span>5. **阅读统计**：了解哪些文章受欢迎</span></span>
<span class="line"><span>6. **系列文章**：将相关文章组织成系列</span></span></code></pre></div><h3 id="用户访谈的-ai-替代" tabindex="-1">用户访谈的 AI 替代 <a class="header-anchor" href="#用户访谈的-ai-替代" aria-label="Permalink to &quot;用户访谈的 AI 替代&quot;">​</a></h3><p>如果没有条件做真实用户访谈，可以让 AI 模拟：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：请扮演一个想要搭建技术博客的程序员，回答我的问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：好的，我是一名有 5 年经验的后端工程师，最近想搭建一个技术博客...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：你最看重博客系统的什么特性？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：首先是 Markdown 支持，这是必须的。其次是部署要简单，</span></span>
<span class="line"><span>我不想花太多时间在运维上。另外，加载速度要快，</span></span>
<span class="line"><span>我自己访问一个网站如果超过 3 秒就会关掉...</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>区分用户和客户</strong>：使用产品的人和付费的人可能不同</li><li><strong>避免自我代入</strong>：你不是典型用户，你的需求不代表大多数</li><li><strong>关注行为而非态度</strong>：用户说&quot;我想要 X&quot;不一定代表他真的会用</li><li><strong>持续验证</strong>：上线后收集真实反馈，修正用户画像</li></ol>`,10))])}const _=l(h,[["render",E]]);export{m as __pageData,_ as default};
