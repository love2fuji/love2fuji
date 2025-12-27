import{_ as a,c as n,o as t,a3 as p}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"5.5.4 到底先做哪个——优先级矩阵：重要性 vs 紧急性分析","description":"5.5.4 到底先做哪个——优先级矩阵 一句话破题 用**重要性**和**紧急性**两个维度，科学地决定功能的开发顺序。 艾森豪威尔矩阵 | 象限 | 特征 | 行动 | |------|------|------| | P0 | 重要且紧急 | 立即做，投入核心资源 | | P1 | 紧急不重要 | 尽快做，可以简化","frontmatter":{"title":"5.5.4 到底先做哪个——优先级矩阵：重要性 vs 紧急性分析","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.5-user-stories/5.5.4-prioritization.md","filePath":"Advanced-old/05-product/5.5-user-stories/5.5.4-prioritization.md","lastUpdated":1766168364000}'),i={name:"Advanced-old/05-product/5.5-user-stories/5.5.4-prioritization.md"};function l(e,s,d,h,o,r){return t(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_5-5-4-到底先做哪个——优先级矩阵" tabindex="-1">5.5.4 到底先做哪个——优先级矩阵 <a class="header-anchor" href="#_5-5-4-到底先做哪个——优先级矩阵" aria-label="Permalink to &quot;5.5.4 到底先做哪个——优先级矩阵&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>用<strong>重要性</strong>和<strong>紧急性</strong>两个维度，科学地决定功能的开发顺序。</p><h3 id="艾森豪威尔矩阵" tabindex="-1">艾森豪威尔矩阵 <a class="header-anchor" href="#艾森豪威尔矩阵" aria-label="Permalink to &quot;艾森豪威尔矩阵&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>              紧急</span></span>
<span class="line"><span>               ↑</span></span>
<span class="line"><span>       ┌───────┼───────┐</span></span>
<span class="line"><span>       │  P1   │  P0   │</span></span>
<span class="line"><span>       │ 尽快做 │ 立即做 │</span></span>
<span class="line"><span>       ├───────┼───────┤</span></span>
<span class="line"><span>       │  P3   │  P2   │</span></span>
<span class="line"><span>       │ 以后说 │ 计划做 │</span></span>
<span class="line"><span>       └───────┼───────┘</span></span>
<span class="line"><span>    不重要 ←───┼───→ 重要</span></span>
<span class="line"><span>               │</span></span>
<span class="line"><span>             不紧急</span></span></code></pre></div><table tabindex="0"><thead><tr><th>象限</th><th>特征</th><th>行动</th></tr></thead><tbody><tr><td>P0</td><td>重要且紧急</td><td>立即做，投入核心资源</td></tr><tr><td>P1</td><td>紧急不重要</td><td>尽快做，可以简化实现</td></tr><tr><td>P2</td><td>重要不紧急</td><td>计划做，安排到迭代中</td></tr><tr><td>P3</td><td>不重要不紧急</td><td>以后说，或者不做</td></tr></tbody></table><h3 id="如何判断重要性" tabindex="-1">如何判断重要性 <a class="header-anchor" href="#如何判断重要性" aria-label="Permalink to &quot;如何判断重要性&quot;">​</a></h3><p>问自己：<strong>对用户核心价值有多大影响？</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>高重要性：</span></span>
<span class="line"><span>- 没有这个功能，产品无法使用</span></span>
<span class="line"><span>- 影响核心用户体验</span></span>
<span class="line"><span>- 是竞争差异化的关键</span></span>
<span class="line"><span></span></span>
<span class="line"><span>低重要性：</span></span>
<span class="line"><span>- 有也行，没有也不影响使用</span></span>
<span class="line"><span>- 只有少数用户会用</span></span>
<span class="line"><span>- 锦上添花的功能</span></span></code></pre></div><h3 id="如何判断紧急性" tabindex="-1">如何判断紧急性 <a class="header-anchor" href="#如何判断紧急性" aria-label="Permalink to &quot;如何判断紧急性&quot;">​</a></h3><p>问自己：<strong>时间敏感度有多高？</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>高紧急性：</span></span>
<span class="line"><span>- 有明确的截止日期</span></span>
<span class="line"><span>- 不做会阻塞其他工作</span></span>
<span class="line"><span>- 用户在等这个功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>低紧急性：</span></span>
<span class="line"><span>- 没有时间要求</span></span>
<span class="line"><span>- 可以随时开始做</span></span>
<span class="line"><span>- 用户暂时不需要</span></span></code></pre></div><h3 id="实际案例-博客系统功能排序" tabindex="-1">实际案例：博客系统功能排序 <a class="header-anchor" href="#实际案例-博客系统功能排序" aria-label="Permalink to &quot;实际案例：博客系统功能排序&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 功能优先级排序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### P0 - 立即做（MVP 必须）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 功能 | 重要性 | 紧急性 | 理由 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文章 CRUD | 高 | 高 | 核心功能 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文章列表 | 高 | 高 | 核心功能 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文章详情 | 高 | 高 | 核心功能 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### P1 - 尽快做（MVP 后第一优先）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 功能 | 重要性 | 紧急性 | 理由 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 分类标签 | 中 | 中 | 内容组织 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Markdown 编辑器 | 中 | 高 | 用户期待 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### P2 - 计划做（下个版本）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 功能 | 重要性 | 紧急性 | 理由 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 搜索 | 高 | 低 | 文章多了才需要 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| SEO | 高 | 低 | 可后续优化 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### P3 - 以后说（暂不规划）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 功能 | 重要性 | 紧急性 | 理由 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 评论 | 低 | 低 | 可用第三方 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 多语言 | 低 | 低 | 初期不需要 |</span></span></code></pre></div><h3 id="moscow-方法" tabindex="-1">MoSCoW 方法 <a class="header-anchor" href="#moscow-方法" aria-label="Permalink to &quot;MoSCoW 方法&quot;">​</a></h3><p>另一种常用的优先级划分方法：</p><table tabindex="0"><thead><tr><th>级别</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td><strong>M</strong>ust have</td><td>必须有</td><td>没有就无法交付</td></tr><tr><td><strong>S</strong>hould have</td><td>应该有</td><td>重要但非关键</td></tr><tr><td><strong>C</strong>ould have</td><td>可以有</td><td>有时间就做</td></tr><tr><td><strong>W</strong>on&#39;t have</td><td>不做</td><td>本次不考虑</td></tr></tbody></table><h3 id="rice-评分法" tabindex="-1">RICE 评分法 <a class="header-anchor" href="#rice-评分法" aria-label="Permalink to &quot;RICE 评分法&quot;">​</a></h3><p>更量化的优先级评估方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RICE 分数 = (Reach × Impact × Confidence) / Effort</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Reach：影响多少用户</span></span>
<span class="line"><span>- Impact：对每个用户的影响程度（0.25/0.5/1/2/3）</span></span>
<span class="line"><span>- Confidence：对评估的信心程度（100%/80%/50%）</span></span>
<span class="line"><span>- Effort：开发所需人天</span></span></code></pre></div><p><strong>示例</strong>：</p><table tabindex="0"><thead><tr><th>功能</th><th>Reach</th><th>Impact</th><th>Confidence</th><th>Effort</th><th>RICE</th></tr></thead><tbody><tr><td>搜索</td><td>100</td><td>2</td><td>80%</td><td>3</td><td>53</td></tr><tr><td>评论</td><td>50</td><td>1</td><td>50%</td><td>5</td><td>5</td></tr><tr><td>SEO</td><td>1000</td><td>1</td><td>80%</td><td>2</td><td>400</td></tr></tbody></table><h3 id="让-ai-帮你排优先级" tabindex="-1">让 AI 帮你排优先级 <a class="header-anchor" href="#让-ai-帮你排优先级" aria-label="Permalink to &quot;让 AI 帮你排优先级&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：以下功能请帮我排优先级：</span></span>
<span class="line"><span>- 文章 CRUD</span></span>
<span class="line"><span>- 评论系统</span></span>
<span class="line"><span>- 搜索功能</span></span>
<span class="line"><span>- RSS 订阅</span></span>
<span class="line"><span>- 多语言支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>排序依据：博客系统 MVP，独立开发，两周时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 优先级排序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P0（必须做）</span></span>
<span class="line"><span>1. **文章 CRUD** - 核心功能，没有就不是博客</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P1（应该做）</span></span>
<span class="line"><span>2. **搜索功能** - 文章多了必须有，但 MVP 可简化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P2（可以延后）</span></span>
<span class="line"><span>3. **评论系统** - 可用 Giscus 替代</span></span>
<span class="line"><span>4. **RSS 订阅** - 增强功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### P3（暂不考虑）</span></span>
<span class="line"><span>5. **多语言支持** - 初期不需要</span></span></code></pre></div><h3 id="优先级调整原则" tabindex="-1">优先级调整原则 <a class="header-anchor" href="#优先级调整原则" aria-label="Permalink to &quot;优先级调整原则&quot;">​</a></h3><p>优先级不是固定的，需要动态调整：</p><ol><li><strong>依赖关系</strong>：被依赖的功能优先级提高</li><li><strong>用户反馈</strong>：用户强烈需求的优先级提高</li><li><strong>资源变化</strong>：资源充足时可提前做 P2</li><li><strong>风险变化</strong>：高风险功能可能需要提前验证</li></ol><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>先粗后细</strong>：先分 P0/P1/P2/P3，再细排顺序</li><li><strong>团队对齐</strong>：确保大家对优先级有共识</li><li><strong>可视化</strong>：用看板工具展示优先级</li><li><strong>定期回顾</strong>：每个迭代开始时重新评估</li></ol>`,29)])])}const g=a(i,[["render",l]]);export{k as __pageData,g as default};
