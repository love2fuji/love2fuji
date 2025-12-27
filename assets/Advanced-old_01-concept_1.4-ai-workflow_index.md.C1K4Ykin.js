import{_ as d,C as o,c as r,o as n,a3 as i,b as l,w as a,a as e,G as t,a4 as h}from"./chunks/framework.CUcrqFol.js";const y=JSON.parse('{"title":"1.4 如何让 AI 成为真·队友——AI 协作工作流实战与最佳实践","description":"1.4 如何让 AI 成为真·队友——AI 协作工作流实战与最佳实践 认知重构 AI 不是\\"代替你写代码的工具\\"，而是\\"与你协作的队友\\"。高效的人机协作，需要建立一套可复用的工作流。 AI 协作的三个层次 | 层次 | 特点 | 典型场景 | |------|------|----------| | **工具使用**","frontmatter":{"title":"1.4 如何让 AI 成为真·队友——AI 协作工作流实战与最佳实践","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/01-concept/1.4-ai-workflow/index.md","filePath":"Advanced-old/01-concept/1.4-ai-workflow/index.md","lastUpdated":1766168364000}'),k={name:"Advanced-old/01-concept/1.4-ai-workflow/index.md"};function c(E,s,g,A,b,u){const p=o("Mermaid");return n(),r("div",null,[s[2]||(s[2]=i('<h1 id="_1-4-如何让-ai-成为真·队友——ai-协作工作流实战与最佳实践" tabindex="-1">1.4 如何让 AI 成为真·队友——AI 协作工作流实战与最佳实践 <a class="header-anchor" href="#_1-4-如何让-ai-成为真·队友——ai-协作工作流实战与最佳实践" aria-label="Permalink to &quot;1.4 如何让 AI 成为真·队友——AI 协作工作流实战与最佳实践&quot;">​</a></h1><h3 id="认知重构" tabindex="-1">认知重构 <a class="header-anchor" href="#认知重构" aria-label="Permalink to &quot;认知重构&quot;">​</a></h3><p>AI 不是&quot;代替你写代码的工具&quot;，而是&quot;与你协作的队友&quot;。高效的人机协作，需要建立一套可复用的工作流。</p><h3 id="ai-协作的三个层次" tabindex="-1">AI 协作的三个层次 <a class="header-anchor" href="#ai-协作的三个层次" aria-label="Permalink to &quot;AI 协作的三个层次&quot;">​</a></h3>',4)),(n(),l(h,null,{default:a(()=>[t(p,{id:"mermaid-12",class:"mermaid",graph:"graph%20TB%0A%20%20%20%20subgraph%20Level1%5B%22%E7%AC%AC%E4%B8%80%E5%B1%82%EF%BC%9A%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%22%5D%0A%20%20%20%20%20%20%20%20L1%5B%22%E8%AE%A9%20AI%20%E5%B8%AE%E6%88%91%E5%86%99%E4%BB%A3%E7%A0%81%22%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20Level2%5B%22%E7%AC%AC%E4%BA%8C%E5%B1%82%EF%BC%9A%E6%B5%81%E7%A8%8B%E5%8D%8F%E4%BD%9C%22%5D%0A%20%20%20%20%20%20%20%20L2%5B%22%E8%AE%A9%20AI%20%E5%8F%82%E4%B8%8E%E6%95%B4%E4%B8%AA%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%22%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20Level3%5B%22%E7%AC%AC%E4%B8%89%E5%B1%82%EF%BC%9A%E6%80%9D%E7%BB%B4%E4%BC%99%E4%BC%B4%22%5D%0A%20%20%20%20%20%20%20%20L3%5B%22%E8%AE%A9%20AI%20%E5%8F%82%E4%B8%8E%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%92%8C%E5%86%B3%E7%AD%96%22%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20Level1%20--%3E%20Level2%20--%3E%20Level3%0A"})]),fallback:a(()=>[...s[0]||(s[0]=[e(" Loading... ",-1)])]),_:1})),s[3]||(s[3]=i(`<table tabindex="0"><thead><tr><th>层次</th><th>特点</th><th>典型场景</th></tr></thead><tbody><tr><td><strong>工具使用</strong></td><td>单点调用，用完即弃</td><td>&quot;帮我写个函数&quot;</td></tr><tr><td><strong>流程协作</strong></td><td>持续对话，上下文连贯</td><td>&quot;我们一起实现这个功能&quot;</td></tr><tr><td><strong>思维伙伴</strong></td><td>参与决策，提供建议</td><td>&quot;这个架构方案你怎么看？&quot;</td></tr></tbody></table><h3 id="高效工作流模板" tabindex="-1">高效工作流模板 <a class="header-anchor" href="#高效工作流模板" aria-label="Permalink to &quot;高效工作流模板&quot;">​</a></h3><h4 id="阶段-1-需求定义" tabindex="-1">阶段 1：需求定义 <a class="header-anchor" href="#阶段-1-需求定义" aria-label="Permalink to &quot;阶段 1：需求定义&quot;">​</a></h4><p>在开始编码之前，先与 AI 一起梳理需求：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我需要实现 [功能名称]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>背景：</span></span>
<span class="line"><span>[简要描述为什么需要这个功能]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户故事：</span></span>
<span class="line"><span>作为 [用户角色]，我希望 [做某事]，以便 [获得某种价值]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>验收标准：</span></span>
<span class="line"><span>1. [标准 1]</span></span>
<span class="line"><span>2. [标准 2]</span></span>
<span class="line"><span>3. [标准 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我分析这个需求，看看有没有遗漏的点。</span></span></code></pre></div><h4 id="阶段-2-方案设计" tabindex="-1">阶段 2：方案设计 <a class="header-anchor" href="#阶段-2-方案设计" aria-label="Permalink to &quot;阶段 2：方案设计&quot;">​</a></h4><p>让 AI 参与技术方案的设计：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>基于上面的需求，请帮我设计技术方案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>技术栈：Next.js 16 + TypeScript + Tailwind CSS + Prisma</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请考虑：</span></span>
<span class="line"><span>1. 数据结构设计</span></span>
<span class="line"><span>2. API 接口设计</span></span>
<span class="line"><span>3. 组件拆分</span></span>
<span class="line"><span>4. 边界情况处理</span></span></code></pre></div><h4 id="阶段-3-分步实现" tabindex="-1">阶段 3：分步实现 <a class="header-anchor" href="#阶段-3-分步实现" aria-label="Permalink to &quot;阶段 3：分步实现&quot;">​</a></h4><p>按照方案，分步让 AI 生成代码：</p>`,10)),(n(),l(h,null,{default:a(()=>[t(p,{id:"mermaid-86",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%22%5D%20--%3E%20B%5B%22API%20%E6%8E%A5%E5%8F%A3%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22UI%20%E7%BB%84%E4%BB%B6%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%22%5D%0A"})]),fallback:a(()=>[...s[1]||(s[1]=[e(" Loading... ",-1)])]),_:1})),s[4]||(s[4]=i(`<p><strong>关键原则</strong>：每一步都确认 OK 再进入下一步。</p><h4 id="阶段-4-审查优化" tabindex="-1">阶段 4：审查优化 <a class="header-anchor" href="#阶段-4-审查优化" aria-label="Permalink to &quot;阶段 4：审查优化&quot;">​</a></h4><p>完成实现后，让 AI 帮你审查：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请审查以下代码，检查：</span></span>
<span class="line"><span>1. 逻辑是否正确</span></span>
<span class="line"><span>2. 是否有安全问题</span></span>
<span class="line"><span>3. 是否有性能问题</span></span>
<span class="line"><span>4. 代码是否符合最佳实践</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[粘贴代码]</span></span></code></pre></div><h3 id="上下文管理策略" tabindex="-1">上下文管理策略 <a class="header-anchor" href="#上下文管理策略" aria-label="Permalink to &quot;上下文管理策略&quot;">​</a></h3><p>AI 的记忆有限，需要主动管理上下文：</p><h4 id="_1-项目规则文件" tabindex="-1">1. 项目规则文件 <a class="header-anchor" href="#_1-项目规则文件" aria-label="Permalink to &quot;1. 项目规则文件&quot;">​</a></h4><p>在项目根目录创建 <code>.cursorrules</code> 或 <code>CLAUDE.md</code>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 项目规则</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Next.js 16 (App Router)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript (严格模式)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tailwind CSS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma + PostgreSQL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 代码规范</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用函数组件，不使用 class 组件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 优先使用 Server Components</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文件名使用 kebab-case</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 组件名使用 PascalCase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 目录结构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/app - 页面和路由</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/components - 可复用组件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/lib - 工具函数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/types - 类型定义</span></span></code></pre></div><h4 id="_2-任务开始时同步上下文" tabindex="-1">2. 任务开始时同步上下文 <a class="header-anchor" href="#_2-任务开始时同步上下文" aria-label="Permalink to &quot;2. 任务开始时同步上下文&quot;">​</a></h4><p>每次开始新任务，先提供必要的背景：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我正在开发一个 [项目类型] 项目。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前任务：[任务描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>相关文件：</span></span>
<span class="line"><span>- [文件 1 路径及作用]</span></span>
<span class="line"><span>- [文件 2 路径及作用]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在我需要...</span></span></code></pre></div><h4 id="_3-定期总结进度" tabindex="-1">3. 定期总结进度 <a class="header-anchor" href="#_3-定期总结进度" aria-label="Permalink to &quot;3. 定期总结进度&quot;">​</a></h4><p>长对话后，请 AI 总结：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请总结一下我们这次对话完成了什么：</span></span>
<span class="line"><span>1. 实现了哪些功能</span></span>
<span class="line"><span>2. 还有什么待办事项</span></span>
<span class="line"><span>3. 需要注意的问题</span></span></code></pre></div><h3 id="协作工作流检查清单" tabindex="-1">协作工作流检查清单 <a class="header-anchor" href="#协作工作流检查清单" aria-label="Permalink to &quot;协作工作流检查清单&quot;">​</a></h3><p>在每个开发任务中，按照以下流程进行：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 任务：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">任务名称</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. 需求定义</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 明确功能目标</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 定义验收标准</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 识别边界情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. 方案设计</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 确定数据结构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 设计 API 接口</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 规划组件结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. 分步实现</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 实现数据层</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 实现接口层</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 实现 UI 层</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 处理错误情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 4. 审查验收</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 代码审查通过</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 功能测试通过</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 边界情况覆盖</span></span></code></pre></div><h3 id="常见协作模式" tabindex="-1">常见协作模式 <a class="header-anchor" href="#常见协作模式" aria-label="Permalink to &quot;常见协作模式&quot;">​</a></h3><h4 id="模式-1-结对编程" tabindex="-1">模式 1：结对编程 <a class="header-anchor" href="#模式-1-结对编程" aria-label="Permalink to &quot;模式 1：结对编程&quot;">​</a></h4><p>像真人结对编程一样，实时讨论：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我现在要实现 [功能]，先写一个基础版本...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[粘贴你写的代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你看这样写对不对？有没有更好的写法？</span></span></code></pre></div><h4 id="模式-2-代码评审" tabindex="-1">模式 2：代码评审 <a class="header-anchor" href="#模式-2-代码评审" aria-label="Permalink to &quot;模式 2：代码评审&quot;">​</a></h4><p>让 AI 扮演 Code Reviewer：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请以严格的 Code Reviewer 角色审查以下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[粘贴代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请指出：</span></span>
<span class="line"><span>- 潜在的 bug</span></span>
<span class="line"><span>- 可以优化的地方</span></span>
<span class="line"><span>- 不符合最佳实践的写法</span></span></code></pre></div><h4 id="模式-3-橡皮鸭调试" tabindex="-1">模式 3：橡皮鸭调试 <a class="header-anchor" href="#模式-3-橡皮鸭调试" aria-label="Permalink to &quot;模式 3：橡皮鸭调试&quot;">​</a></h4><p>当你卡住时，向 AI 解释你的问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我遇到了一个问题，让我解释一下...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现象：[描述问题现象]</span></span>
<span class="line"><span>我的理解：[你认为应该是什么样]</span></span>
<span class="line"><span>已尝试：[你已经尝试的方法]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>能帮我分析一下可能的原因吗？</span></span></code></pre></div><h3 id="避坑指南" tabindex="-1">避坑指南 <a class="header-anchor" href="#避坑指南" aria-label="Permalink to &quot;避坑指南&quot;">​</a></h3><ol><li><strong>不要完全依赖 AI</strong>：AI 是助手，不是替代品。最终决策权在你</li><li><strong>不要一口气要太多</strong>：大任务拆成小任务，逐步完成</li><li><strong>及时纠正错误</strong>：发现 AI 走偏了，立即指出</li><li><strong>保存有价值的对话</strong>：好的解决方案和提示词值得保存复用</li></ol><h3 id="本章小结" tabindex="-1">本章小结 <a class="header-anchor" href="#本章小结" aria-label="Permalink to &quot;本章小结&quot;">​</a></h3><p>高效的 AI 协作需要：</p><ol><li><strong>建立流程</strong>：需求 → 设计 → 实现 → 审查</li><li><strong>管理上下文</strong>：项目规则 + 任务背景 + 定期总结</li><li><strong>灵活切换模式</strong>：结对编程 / 代码评审 / 问题讨论</li><li><strong>保持主导权</strong>：AI 是队友，但你是项目负责人</li></ol>`,33))])}const F=d(k,[["render",c]]);export{y as __pageData,F as default};
