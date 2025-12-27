import{_ as i,C as e,c as t,o as a,a3 as n,b as c,w as p,a as o,G as d,a4 as r}from"./chunks/framework.CUcrqFol.js";const V=JSON.parse('{"title":"5.3.5 哪些功能最重要——AI 协助 MVP 视角收敛：优先级排序与最小可用版本定义","description":"5.3.5 哪些功能最重要——MVP 视角收敛 一句话破题 MVP 不是\\"做一个简陋的版本\\"，而是**用最小成本验证核心价值**。 什么是 MVP MVP（Minimum Viable Product）= 最小可行产品 **MVP 的核心理念**： 不是做一个\\"半成品\\" 而是做一个\\"能验证想法的完整闭环\\" 用最少的功能","frontmatter":{"title":"5.3.5 哪些功能最重要——AI 协助 MVP 视角收敛：优先级排序与最小可用版本定义","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.5-mvp.md","filePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.5-mvp.md","lastUpdated":1766168364000}'),h={name:"Advanced-old/05-product/5.3-requirements-analysis/5.3.5-mvp.md"};function u(g,s,k,P,b,E){const l=e("Mermaid");return a(),t("div",null,[s[1]||(s[1]=n('<h1 id="_5-3-5-哪些功能最重要——mvp-视角收敛" tabindex="-1">5.3.5 哪些功能最重要——MVP 视角收敛 <a class="header-anchor" href="#_5-3-5-哪些功能最重要——mvp-视角收敛" aria-label="Permalink to &quot;5.3.5 哪些功能最重要——MVP 视角收敛&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>MVP 不是&quot;做一个简陋的版本&quot;，而是<strong>用最小成本验证核心价值</strong>。</p><h3 id="什么是-mvp" tabindex="-1">什么是 MVP <a class="header-anchor" href="#什么是-mvp" aria-label="Permalink to &quot;什么是 MVP&quot;">​</a></h3><p>MVP（Minimum Viable Product）= 最小可行产品</p>',5)),(a(),c(r,null,{default:p(()=>[d(l,{id:"mermaid-15",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%22%E6%89%80%E6%9C%89%E6%83%B3%E5%81%9A%E7%9A%84%E5%8A%9F%E8%83%BD%5Cn100%25%22%5D%20--%3E%20B%5B%22MVP%5Cn%E6%A0%B8%E5%BF%83%2020%25%22%5D%0A%20%20%20%20B%20--%3E%20C%5B%22%E7%94%A8%E6%88%B7%E5%8F%8D%E9%A6%88%22%5D%0A%20%20%20%20C%20--%3E%20D%5B%22%E8%BF%AD%E4%BB%A3%E4%BC%98%E5%8C%96%22%5D%0A%20%20%20%20D%20--%3E%20E%5B%22%E5%AE%8C%E6%95%B4%E4%BA%A7%E5%93%81%22%5D%0A"})]),fallback:p(()=>[...s[0]||(s[0]=[o(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=n(`<p><strong>MVP 的核心理念</strong>：</p><ul><li>不是做一个&quot;半成品&quot;</li><li>而是做一个&quot;能验证想法的完整闭环&quot;</li><li>用最少的功能，验证用户是否真的需要这个产品</li></ul><h3 id="如何定义-mvp" tabindex="-1">如何定义 MVP <a class="header-anchor" href="#如何定义-mvp" aria-label="Permalink to &quot;如何定义 MVP&quot;">​</a></h3><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要做一个 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">产品描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，功能列表如下：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能列表</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我定义 MVP：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 哪些功能是 MVP 必须有的？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 判断标准是什么？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MVP 需要多长时间可以完成？</span></span></code></pre></div><p><strong>示例对话</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要做一个博客系统，功能列表：</span></span>
<span class="line"><span>- 文章 CRUD</span></span>
<span class="line"><span>- Markdown 编辑器</span></span>
<span class="line"><span>- 分类标签</span></span>
<span class="line"><span>- 评论系统</span></span>
<span class="line"><span>- 搜索功能</span></span>
<span class="line"><span>- RSS 订阅</span></span>
<span class="line"><span>- 阅读统计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我定义 MVP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## MVP 定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### MVP 必须包含</span></span>
<span class="line"><span>| 功能 | 理由 | 预计工时 |</span></span>
<span class="line"><span>|------|------|----------|</span></span>
<span class="line"><span>| 文章创建/编辑/删除 | 核心功能，没有就不是博客 | 4h |</span></span>
<span class="line"><span>| Markdown 编辑器 | 目标用户的基本预期 | 2h |</span></span>
<span class="line"><span>| 文章列表和详情页 | 内容展示的基础 | 3h |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**MVP 工时估算：约 9 小时（1-2 天）**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### MVP 可以不包含</span></span>
<span class="line"><span>| 功能 | 理由 | 延后优先级 |</span></span>
<span class="line"><span>|------|------|------------|</span></span>
<span class="line"><span>| 分类标签 | 文章少时不需要 | V1.1 |</span></span>
<span class="line"><span>| 评论系统 | 可用第三方替代 | V1.2 |</span></span>
<span class="line"><span>| 搜索功能 | 文章少时不急需 | V1.1 |</span></span>
<span class="line"><span>| RSS 订阅 | 增强功能 | V1.2 |</span></span>
<span class="line"><span>| 阅读统计 | 锦上添花 | V1.3 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 判断标准</span></span>
<span class="line"><span>一个博客的 MVP 能回答这个问题：</span></span>
<span class="line"><span>**&quot;我能不能用它写文章并让别人看到？&quot;**</span></span>
<span class="line"><span>- 能写 ✓</span></span>
<span class="line"><span>- 能保存 ✓</span></span>
<span class="line"><span>- 能展示 ✓</span></span>
<span class="line"><span>→ MVP 达成</span></span></code></pre></div><h3 id="mvp-判断的四个问题" tabindex="-1">MVP 判断的四个问题 <a class="header-anchor" href="#mvp-判断的四个问题" aria-label="Permalink to &quot;MVP 判断的四个问题&quot;">​</a></h3><p>在决定某个功能是否进入 MVP 时，问自己：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 没有这个功能，产品还能用吗？</span></span>
<span class="line"><span>   - 能用 → 不进 MVP</span></span>
<span class="line"><span>   - 不能用 → 进 MVP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 这个功能能被其他方式替代吗？</span></span>
<span class="line"><span>   - 能替代 → 不进 MVP（如：评论可用 Giscus 替代）</span></span>
<span class="line"><span>   - 不能替代 → 进 MVP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 这个功能是解决核心问题还是锦上添花？</span></span>
<span class="line"><span>   - 核心问题 → 进 MVP</span></span>
<span class="line"><span>   - 锦上添花 → 不进 MVP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 实现这个功能需要多少成本？</span></span>
<span class="line"><span>   - 成本低且有价值 → 进 MVP</span></span>
<span class="line"><span>   - 成本高 → 延后</span></span></code></pre></div><h3 id="优先级排序矩阵" tabindex="-1">优先级排序矩阵 <a class="header-anchor" href="#优先级排序矩阵" aria-label="Permalink to &quot;优先级排序矩阵&quot;">​</a></h3><p>使用重要性和紧急性两个维度来排序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>         紧急</span></span>
<span class="line"><span>          ↑</span></span>
<span class="line"><span>    P0    |   P1</span></span>
<span class="line"><span>  (立即做) | (尽快做)</span></span>
<span class="line"><span>    ------+------</span></span>
<span class="line"><span>    P2    |   P3</span></span>
<span class="line"><span>  (计划做) | (以后再说)</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>  ← 不重要 ─┼─ 重要 →</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>        不紧急</span></span></code></pre></div><p><strong>让 AI 帮你排序</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：请帮我给这些功能排优先级：</span></span>
<span class="line"><span>[功能列表]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>排序标准：</span></span>
<span class="line"><span>- 用户价值：对用户有多重要</span></span>
<span class="line"><span>- 实现成本：需要多少开发时间</span></span>
<span class="line"><span>- 依赖关系：是否依赖其他功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 优先级排序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P0（MVP 必须）</span></span>
<span class="line"><span>1. 文章 CRUD - 价值高/成本低/无依赖</span></span>
<span class="line"><span>2. 文章列表 - 价值高/成本低/依赖 CRUD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P1（第二版）</span></span>
<span class="line"><span>3. 分类标签 - 价值中/成本低/依赖 CRUD</span></span>
<span class="line"><span>4. 搜索 - 价值高/成本中/依赖列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P2（第三版）</span></span>
<span class="line"><span>5. 评论 - 价值中/成本高/可替代</span></span>
<span class="line"><span>6. RSS - 价值低/成本低/依赖列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P3（以后考虑）</span></span>
<span class="line"><span>7. 阅读统计 - 价值低/成本中</span></span></code></pre></div><h3 id="mvp-的验收标准" tabindex="-1">MVP 的验收标准 <a class="header-anchor" href="#mvp-的验收标准" aria-label="Permalink to &quot;MVP 的验收标准&quot;">​</a></h3><p>MVP 完成的标志是能够回答核心问题：</p><table tabindex="0"><thead><tr><th>产品类型</th><th>核心问题</th><th>MVP 验收标准</th></tr></thead><tbody><tr><td>博客系统</td><td>能写文章并展示吗？</td><td>发布一篇文章并能访问</td></tr><tr><td>电商网站</td><td>能下单购买吗？</td><td>完成一次完整购买流程</td></tr><tr><td>社交应用</td><td>能发消息给朋友吗？</td><td>发送并接收一条消息</td></tr><tr><td>工具应用</td><td>能解决核心问题吗？</td><td>用工具完成一次任务</td></tr></tbody></table><h3 id="常见误区" tabindex="-1">常见误区 <a class="header-anchor" href="#常见误区" aria-label="Permalink to &quot;常见误区&quot;">​</a></h3><p><strong>误区 1：MVP = 简陋版</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 界面丑、Bug 多、体验差的&quot;能用就行&quot;版本</span></span>
<span class="line"><span>✅ 功能精简但体验完整的&quot;小而美&quot;版本</span></span></code></pre></div><p><strong>误区 2：什么都想放进 MVP</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ &quot;这个功能很简单，顺便加上吧&quot;</span></span>
<span class="line"><span>✅ &quot;这个功能对验证核心价值有帮助吗？&quot;</span></span></code></pre></div><p><strong>误区 3：MVP 完成后就结束</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 发布 MVP 后就不管了</span></span>
<span class="line"><span>✅ MVP 是起点，收集反馈、持续迭代</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>先做减法</strong>：列完功能后，问&quot;哪些可以不做&quot;</li><li><strong>一周原则</strong>：MVP 最好能在一周内完成</li><li><strong>用户视角</strong>：MVP 要能让用户完成一个完整的任务</li><li><strong>快速迭代</strong>：MVP 上线后，根据反馈快速优化</li></ol>`,27))])}const v=i(h,[["render",u]]);export{V as __pageData,v as default};
