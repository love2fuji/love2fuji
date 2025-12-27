import{_ as a,c as n,o as i,a3 as t}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"3.3.4 Tree of Thoughts：探索多条推理路径","description":"3.3.4 Tree of Thoughts：探索多条推理路径 **定位说明**：这是一个可选的高级技巧。日常 Vibe Coding 中，大部分场景用 Zero-shot、Few-shot、CoT 已经足够。Tree of Thoughts 主要用于**技术选型、架构决策**等需要对比多个方案的场景，约占日常工作的","frontmatter":{"title":"3.3.4 Tree of Thoughts：探索多条推理路径"},"headers":[],"relativePath":"Basic/03-technique/3.3-advanced-techniques/3.3.4-tree-of-thoughts.md","filePath":"Basic/03-technique/3.3-advanced-techniques/3.3.4-tree-of-thoughts.md","lastUpdated":1765094268000}'),e={name:"Basic/03-technique/3.3-advanced-techniques/3.3.4-tree-of-thoughts.md"};function p(l,s,h,d,o,r){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="_3-3-4-tree-of-thoughts-探索多条推理路径" tabindex="-1">3.3.4 Tree of Thoughts：探索多条推理路径 <a class="header-anchor" href="#_3-3-4-tree-of-thoughts-探索多条推理路径" aria-label="Permalink to &quot;3.3.4 Tree of Thoughts：探索多条推理路径&quot;">​</a></h1><blockquote><p><strong>定位说明</strong>：这是一个可选的高级技巧。日常 Vibe Coding 中，大部分场景用 Zero-shot、Few-shot、CoT 已经足够。Tree of Thoughts 主要用于<strong>技术选型、架构决策</strong>等需要对比多个方案的场景，约占日常工作的 5%。如果你刚入门，可以先跳过本节，遇到需要时再回来查阅。</p></blockquote><h2 id="经过本节学习-你将掌握" tabindex="-1">经过本节学习，你将掌握 <a class="header-anchor" href="#经过本节学习-你将掌握" aria-label="Permalink to &quot;经过本节学习，你将掌握&quot;">​</a></h2><ul><li>Tree of Thoughts（ToT）的定义和适用场景</li><li>ToT 与 Chain of Thought 的区别</li><li>完整版和简化版 ToT 的使用方法</li><li>什么时候需要 ToT，什么时候不需要</li></ul><h2 id="什么是-tree-of-thoughts" tabindex="-1">什么是 Tree of Thoughts <a class="header-anchor" href="#什么是-tree-of-thoughts" aria-label="Permalink to &quot;什么是 Tree of Thoughts&quot;">​</a></h2><p>Tree of Thoughts（思维树，简称 ToT）的核心思想是：<strong>让 AI 探索多条可能的路径，对比后选择最优方案</strong>。</p><p>如果把 Chain of Thought 比作「一条路走到底」，那 Tree of Thoughts 就是「先看看有哪几条路，比较一下再决定走哪条」。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Chain of Thought（线性）：</span></span>
<span class="line"><span>问题 → 步骤1 → 步骤2 → 步骤3 → 答案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tree of Thoughts（树状）：</span></span>
<span class="line"><span>问题 → 方案A → 评估A</span></span>
<span class="line"><span>     → 方案B → 评估B  → 对比 → 推荐最优</span></span>
<span class="line"><span>     → 方案C → 评估C</span></span></code></pre></div><h2 id="tot-与-cot-的区别" tabindex="-1">ToT 与 CoT 的区别 <a class="header-anchor" href="#tot-与-cot-的区别" aria-label="Permalink to &quot;ToT 与 CoT 的区别&quot;">​</a></h2><table tabindex="0"><thead><tr><th>维度</th><th>Chain of Thought</th><th>Tree of Thoughts</th></tr></thead><tbody><tr><td>推理路径</td><td>单一路径</td><td>多条并行路径</td></tr><tr><td>适用场景</td><td>有标准答案的问题</td><td>需要权衡对比的决策</td></tr><tr><td>输出形式</td><td>分步推导到结论</td><td>多方案对比后推荐</td></tr><tr><td>Token 消耗</td><td>中等</td><td>较高</td></tr><tr><td>日常使用频率</td><td>高（约 30%）</td><td>低（约 5%）</td></tr></tbody></table><p><strong>选择建议</strong>：</p><ul><li>如果问题有「正确答案」→ 用 CoT</li><li>如果需要「选择最优方案」→ 用 ToT</li></ul><h2 id="核心适用场景" tabindex="-1">核心适用场景 <a class="header-anchor" href="#核心适用场景" aria-label="Permalink to &quot;核心适用场景&quot;">​</a></h2><p>ToT 最适合以下场景：</p><h3 id="_1-技术选型" tabindex="-1">1. 技术选型 <a class="header-anchor" href="#_1-技术选型" aria-label="Permalink to &quot;1. 技术选型&quot;">​</a></h3><p>选择数据库、框架、第三方服务等。</p><h3 id="_2-架构决策" tabindex="-1">2. 架构决策 <a class="header-anchor" href="#_2-架构决策" aria-label="Permalink to &quot;2. 架构决策&quot;">​</a></h3><p>设计系统架构、API 风格、数据模型等。</p><h3 id="_3-方案对比" tabindex="-1">3. 方案对比 <a class="header-anchor" href="#_3-方案对比" aria-label="Permalink to &quot;3. 方案对比&quot;">​</a></h3><p>多种实现方式的优劣分析。</p><h3 id="_4-复杂问题分解" tabindex="-1">4. 复杂问题分解 <a class="header-anchor" href="#_4-复杂问题分解" aria-label="Permalink to &quot;4. 复杂问题分解&quot;">​</a></h3><p>需要从多个角度切入的问题。</p><h2 id="差提示词-vs-好提示词" tabindex="-1">差提示词 vs 好提示词 <a class="header-anchor" href="#差提示词-vs-好提示词" aria-label="Permalink to &quot;差提示词 vs 好提示词&quot;">​</a></h2><h3 id="场景-为待办清单选择数据存储方案" tabindex="-1">场景：为待办清单选择数据存储方案 <a class="header-anchor" href="#场景-为待办清单选择数据存储方案" aria-label="Permalink to &quot;场景：为待办清单选择数据存储方案&quot;">​</a></h3><h3 id="❌-差提示词" tabindex="-1">❌ 差提示词 <a class="header-anchor" href="#❌-差提示词" aria-label="Permalink to &quot;❌ 差提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单应用应该用什么方式存储数据？</span></span></code></pre></div><p><strong>问题</strong>：AI 可能只推荐一种方案，没有对比分析。</p><h3 id="✅-好提示词-使用-tot" tabindex="-1">✅ 好提示词（使用 ToT） <a class="header-anchor" href="#✅-好提示词-使用-tot" aria-label="Permalink to &quot;✅ 好提示词（使用 ToT）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我正在做一个个人待办清单应用，需要选择数据存储方案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>项目背景：</span></span>
<span class="line"><span>- 用户量：仅自己使用</span></span>
<span class="line"><span>- 数据量：预计几百条任务</span></span>
<span class="line"><span>- 部署方式：静态网页托管（如 Vercel）</span></span>
<span class="line"><span>- 技术栈：React + TypeScript</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出 3 种不同的存储方案，对每种方案分析：</span></span>
<span class="line"><span>1. 实现复杂度（1-5分，5分最复杂）</span></span>
<span class="line"><span>2. 数据持久性</span></span>
<span class="line"><span>3. 是否需要后端</span></span>
<span class="line"><span>4. 适合的场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后，根据我的项目情况，推荐最适合的方案并说明理由。</span></span></code></pre></div><h3 id="好提示词的-ai-输出" tabindex="-1">好提示词的 AI 输出 <a class="header-anchor" href="#好提示词的-ai-输出" aria-label="Permalink to &quot;好提示词的 AI 输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 方案分析</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 方案一：localStorage</span></span>
<span class="line"><span>- 实现复杂度：1分</span></span>
<span class="line"><span>- 数据持久性：仅本地浏览器，换设备丢失</span></span>
<span class="line"><span>- 是否需要后端：不需要</span></span>
<span class="line"><span>- 适合场景：个人工具、原型验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 方案二：IndexedDB</span></span>
<span class="line"><span>- 实现复杂度：3分</span></span>
<span class="line"><span>- 数据持久性：本地浏览器，支持更大数据量</span></span>
<span class="line"><span>- 是否需要后端：不需要</span></span>
<span class="line"><span>- 适合场景：需要存储大量结构化数据的本地应用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 方案三：Supabase（云数据库）</span></span>
<span class="line"><span>- 实现复杂度：3分</span></span>
<span class="line"><span>- 数据持久性：云端存储，多设备同步</span></span>
<span class="line"><span>- 是否需要后端：不需要（BaaS 服务）</span></span>
<span class="line"><span>- 适合场景：需要多设备同步、有扩展计划</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 推荐方案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>根据你的情况（仅自己使用、几百条数据、静态托管），推荐 **方案一：localStorage**。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>理由：</span></span>
<span class="line"><span>1. 实现最简单，几行代码即可</span></span>
<span class="line"><span>2. 数据量小，localStorage 完全够用</span></span>
<span class="line"><span>3. 不需要额外服务，符合静态托管要求</span></span>
<span class="line"><span>4. 作为 MVP 快速验证，之后有需要再升级</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果后续需要多设备同步，可以再迁移到 Supabase。</span></span></code></pre></div><h2 id="实战示例-登录功能方案选型" tabindex="-1">实战示例：登录功能方案选型 <a class="header-anchor" href="#实战示例-登录功能方案选型" aria-label="Permalink to &quot;实战示例：登录功能方案选型&quot;">​</a></h2><p>小李的待办清单需要添加登录功能，他想对比几种实现方式。</p><h3 id="tot-提示词" tabindex="-1">ToT 提示词 <a class="header-anchor" href="#tot-提示词" aria-label="Permalink to &quot;ToT 提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单应用需要添加用户登录功能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>项目背景：</span></span>
<span class="line"><span>- 个人项目，用户量预计 &lt; 100 人</span></span>
<span class="line"><span>- 技术栈：Next.js + TypeScript</span></span>
<span class="line"><span>- 部署在 Vercel</span></span>
<span class="line"><span>- 希望实现尽量简单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析以下三种登录方案：</span></span>
<span class="line"><span>1. 传统用户名密码登录</span></span>
<span class="line"><span>2. 手机验证码登录</span></span>
<span class="line"><span>3. 第三方 OAuth 登录（如 GitHub、Google）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对每种方案分析：</span></span>
<span class="line"><span>- 实现复杂度</span></span>
<span class="line"><span>- 用户体验</span></span>
<span class="line"><span>- 安全性</span></span>
<span class="line"><span>- 维护成本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后推荐一种，并说明理由。</span></span></code></pre></div><h3 id="ai-输出要点" tabindex="-1">AI 输出要点 <a class="header-anchor" href="#ai-输出要点" aria-label="Permalink to &quot;AI 输出要点&quot;">​</a></h3><p>AI 会分析三种方案的优劣，并根据「个人项目、用户量小、希望简单」的背景，推荐最适合的方案（可能是第三方 OAuth，因为不用自己管理密码）。</p><h2 id="简化版-tot-日常快速使用" tabindex="-1">简化版 ToT：日常快速使用 <a class="header-anchor" href="#简化版-tot-日常快速使用" aria-label="Permalink to &quot;简化版 ToT：日常快速使用&quot;">​</a></h2><p>如果不需要完整的多方案对比，可以用简化版：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请给出 2-3 种不同的实现思路，简要对比优缺点后推荐一种。</span></span></code></pre></div><p>这种方式输出更简洁，适合日常快速决策。</p><h3 id="简化版示例" tabindex="-1">简化版示例 <a class="header-anchor" href="#简化版示例" aria-label="Permalink to &quot;简化版示例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我想实现任务的拖拽排序功能，请给出 2-3 种实现思路，简要对比后推荐一种。</span></span>
<span class="line"><span>技术栈：React + TypeScript</span></span></code></pre></div><h3 id="简化版输出" tabindex="-1">简化版输出 <a class="header-anchor" href="#简化版输出" aria-label="Permalink to &quot;简化版输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>三种实现思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. react-beautiful-dnd</span></span>
<span class="line"><span>   优点：功能完善，动画流畅</span></span>
<span class="line"><span>   缺点：包体积大，已停止维护</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. @dnd-kit</span></span>
<span class="line"><span>   优点：现代化设计，体积小，维护活跃</span></span>
<span class="line"><span>   缺点：学习曲线稍陡</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 原生 HTML5 Drag API</span></span>
<span class="line"><span>   优点：无依赖</span></span>
<span class="line"><span>   缺点：需要大量代码，动画效果需自己实现</span></span>
<span class="line"><span></span></span>
<span class="line"><span>推荐：@dnd-kit</span></span>
<span class="line"><span>理由：现代化、轻量、社区活跃，适合长期维护的项目。</span></span></code></pre></div><h2 id="什么时候不需要-tot" tabindex="-1">什么时候不需要 ToT <a class="header-anchor" href="#什么时候不需要-tot" aria-label="Permalink to &quot;什么时候不需要 ToT&quot;">​</a></h2><table tabindex="0"><thead><tr><th>场景</th><th>用 ToT？</th><th>原因</th></tr></thead><tbody><tr><td>实现一个具体功能</td><td>❌</td><td>直接写代码即可</td></tr><tr><td>修复一个 Bug</td><td>❌</td><td>用 CoT 逐步排查</td></tr><tr><td>格式化输出</td><td>❌</td><td>用 Few-shot</td></tr><tr><td>技术选型</td><td>✅</td><td>需要对比多个选项</td></tr><tr><td>架构设计</td><td>✅</td><td>需要权衡多种方案</td></tr></tbody></table><p><strong>判断标准</strong>：如果你心里已经有了大致方向，只是想确认，不需要 ToT。如果你需要 AI 帮你「做选择」，用 ToT。</p><h2 id="可复制模板" tabindex="-1">可复制模板 <a class="header-anchor" href="#可复制模板" aria-label="Permalink to &quot;可复制模板&quot;">​</a></h2><h3 id="完整版-tot-模板" tabindex="-1">完整版 ToT 模板 <a class="header-anchor" href="#完整版-tot-模板" aria-label="Permalink to &quot;完整版 ToT 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我需要 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">决策内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目背景：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">背景信息1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">背景信息2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">关键约束</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请给出 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">数量</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 种不同的方案，对每种方案分析：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">评估维度1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">评估维度2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">评估维度3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">评估维度4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">最后，根据我的项目情况，推荐最适合的方案并说明理由。</span></span></code></pre></div><h3 id="简化版-tot-模板" tabindex="-1">简化版 ToT 模板 <a class="header-anchor" href="#简化版-tot-模板" aria-label="Permalink to &quot;简化版 ToT 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">实现目标</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">背景：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">简要背景</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请给出 2-3 种不同的思路，简要对比优缺点后推荐一种。</span></span></code></pre></div><h3 id="技术选型专用模板" tabindex="-1">技术选型专用模板 <a class="header-anchor" href="#技术选型专用模板" aria-label="Permalink to &quot;技术选型专用模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我需要选择 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">选型类型：数据库/框架/第三方服务</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目情况：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 规模：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用户量/数据量</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 技术栈：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">现有技术</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 部署方式：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">部署环境</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 团队情况：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术水平/人数</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">评估维度：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 实现复杂度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 性能表现</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 维护成本</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 社区生态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请对比 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">候选方案列表</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，推荐最适合的选择。</span></span></code></pre></div><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>ToT 的本质</strong>：探索多条路径，对比后选择最优方案</p><p>✓ <strong>与 CoT 的区别</strong>：CoT 是单路径推理，ToT 是多方案对比</p><p>✓ <strong>适用场景</strong>：技术选型、架构决策、方案对比（约占 5%）</p><p>✓ <strong>简化版</strong>：日常快速使用「给出 2-3 种思路，对比后推荐」</p><p>✓ <strong>不要滥用</strong>：如果已有方向，直接执行即可</p><p>下一节，我们学习如何让 AI 自我检查——Self-Critique。</p>`,62)])])}const g=a(e,[["render",p]]);export{c as __pageData,g as default};
