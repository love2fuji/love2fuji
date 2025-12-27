import{_ as a,c as n,o as i,a3 as t}from"./chunks/framework.CUcrqFol.js";const g=JSON.parse('{"title":"5.6.4 提前想想会出什么错——风险评估：技术风险与缓解措施","description":"5.6.4 提前想想会出什么错——风险评估 一句话破题 风险评估就是提前问自己：**什么可能出错？出错了怎么办？** 风险评估的意义 常见技术风险类型 | 风险类型 | 示例 | 影响程度 | |----------|------|----------| | **技术可行性** | 第一次用某个技术 | 高 | | *","frontmatter":{"title":"5.6.4 提前想想会出什么错——风险评估：技术风险与缓解措施","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.6-tech-specs/5.6.4-risk-assessment.md","filePath":"Advanced-old/05-product/5.6-tech-specs/5.6.4-risk-assessment.md","lastUpdated":1766168364000}'),l={name:"Advanced-old/05-product/5.6-tech-specs/5.6.4-risk-assessment.md"};function p(h,s,e,d,k,r){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="_5-6-4-提前想想会出什么错——风险评估" tabindex="-1">5.6.4 提前想想会出什么错——风险评估 <a class="header-anchor" href="#_5-6-4-提前想想会出什么错——风险评估" aria-label="Permalink to &quot;5.6.4 提前想想会出什么错——风险评估&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>风险评估就是提前问自己：<strong>什么可能出错？出错了怎么办？</strong></p><h3 id="风险评估的意义" tabindex="-1">风险评估的意义 <a class="header-anchor" href="#风险评估的意义" aria-label="Permalink to &quot;风险评估的意义&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>没有风险评估：</span></span>
<span class="line"><span>  开发到一半发现 → 技术选型有问题 → 推倒重来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有风险评估：</span></span>
<span class="line"><span>  开发前就发现 → 调整方案或准备备选 → 平稳推进</span></span></code></pre></div><h3 id="常见技术风险类型" tabindex="-1">常见技术风险类型 <a class="header-anchor" href="#常见技术风险类型" aria-label="Permalink to &quot;常见技术风险类型&quot;">​</a></h3><table tabindex="0"><thead><tr><th>风险类型</th><th>示例</th><th>影响程度</th></tr></thead><tbody><tr><td><strong>技术可行性</strong></td><td>第一次用某个技术</td><td>高</td></tr><tr><td><strong>性能风险</strong></td><td>担心扛不住流量</td><td>中</td></tr><tr><td><strong>安全风险</strong></td><td>认证、数据泄露</td><td>高</td></tr><tr><td><strong>依赖风险</strong></td><td>第三方服务不可用</td><td>中</td></tr><tr><td><strong>时间风险</strong></td><td>工作量低估</td><td>中</td></tr></tbody></table><h3 id="风险评估模板" tabindex="-1">风险评估模板 <a class="header-anchor" href="#风险评估模板" aria-label="Permalink to &quot;风险评估模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 风险评估</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 风险 1：Prisma 不熟悉</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **概率**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：高（第一次使用）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **影响**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：中（可能需要更多时间）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **缓解措施**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 先做一个小 demo 熟悉 API</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 准备好官方文档作为参考</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 复杂操作让 AI 协助</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 风险 2：图片上传性能</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **概率**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：低</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **影响**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：中</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **缓解措施**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端压缩后再上传</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 CDN 加速</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置文件大小限制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 风险 3：用户量突增</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **概率**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：低（初期）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **影响**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：高</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **缓解措施**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 Vercel 自动扩容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库连接池</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加缓存层（后续）</span></span></code></pre></div><h3 id="风险矩阵" tabindex="-1">风险矩阵 <a class="header-anchor" href="#风险矩阵" aria-label="Permalink to &quot;风险矩阵&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>             高影响</span></span>
<span class="line"><span>               ↑</span></span>
<span class="line"><span>       ┌───────┼───────┐</span></span>
<span class="line"><span>       │ 关注  │ 优先  │</span></span>
<span class="line"><span>       │       │ 处理  │</span></span>
<span class="line"><span>       ├───────┼───────┤</span></span>
<span class="line"><span>       │ 接受  │ 关注  │</span></span>
<span class="line"><span>       │       │       │</span></span>
<span class="line"><span>       └───────┼───────┘</span></span>
<span class="line"><span>    低概率 ←───┼───→ 高概率</span></span>
<span class="line"><span>               │</span></span>
<span class="line"><span>             低影响</span></span></code></pre></div><table tabindex="0"><thead><tr><th>象限</th><th>行动</th></tr></thead><tbody><tr><td>高概率 + 高影响</td><td>优先处理，制定详细缓解计划</td></tr><tr><td>高概率 + 低影响</td><td>关注，准备简单应对方案</td></tr><tr><td>低概率 + 高影响</td><td>关注，准备应急预案</td></tr><tr><td>低概率 + 低影响</td><td>接受风险，出问题再处理</td></tr></tbody></table><h3 id="实际案例-博客系统风险" tabindex="-1">实际案例：博客系统风险 <a class="header-anchor" href="#实际案例-博客系统风险" aria-label="Permalink to &quot;实际案例：博客系统风险&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 博客系统技术风险评估</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 高优先级风险</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 风险 | 概率 | 影响 | 缓解措施 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 认证实现不当 | 中 | 高 | 使用成熟的 next-auth |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 密码存储不安全 | 中 | 高 | 使用 bcrypt 加密 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 中优先级风险</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 风险 | 概率 | 影响 | 缓解措施 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 首页加载慢 | 中 | 中 | SSG + CDN |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 数据库查询慢 | 低 | 中 | 添加索引 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 低优先级风险</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 风险 | 概率 | 影响 | 缓解措施 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Markdown 解析问题 | 低 | 低 | 用成熟库 |</span></span></code></pre></div><h3 id="风险应对策略" tabindex="-1">风险应对策略 <a class="header-anchor" href="#风险应对策略" aria-label="Permalink to &quot;风险应对策略&quot;">​</a></h3><p>针对不同风险，有不同的应对方式：</p><table tabindex="0"><thead><tr><th>策略</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>规避</strong></td><td>换一种方案</td><td>风险太大不值得冒</td></tr><tr><td><strong>转移</strong></td><td>用第三方服务</td><td>不想自己承担</td></tr><tr><td><strong>缓解</strong></td><td>降低概率或影响</td><td>必须面对但可以准备</td></tr><tr><td><strong>接受</strong></td><td>承认风险存在</td><td>影响小或成本低</td></tr></tbody></table><h3 id="让-ai-帮你发现风险" tabindex="-1">让 AI 帮你发现风险 <a class="header-anchor" href="#让-ai-帮你发现风险" aria-label="Permalink to &quot;让 AI 帮你发现风险&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：分析这个博客系统技术方案可能有什么风险</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 潜在技术风险</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 安全风险</span></span>
<span class="line"><span>1. **XSS 攻击**：Markdown 渲染时可能执行恶意脚本</span></span>
<span class="line"><span>   - 缓解：使用 sanitize-html 清洗输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. **CSRF 攻击**：POST 接口可能被跨站调用</span></span>
<span class="line"><span>   - 缓解：next-auth 自带 CSRF 保护</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 性能风险</span></span>
<span class="line"><span>1. **N+1 查询**：列表页加载作者信息</span></span>
<span class="line"><span>   - 缓解：使用 Prisma include 预加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. **大文件上传**：内存溢出</span></span>
<span class="line"><span>   - 缓解：限制文件大小，使用流式上传</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 依赖风险</span></span>
<span class="line"><span>1. **Vercel 免费额度用尽**</span></span>
<span class="line"><span>   - 缓解：监控用量，准备备选方案</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>列出所有担心的点</strong>：宁可多想不要遗漏</li><li><strong>评估概率和影响</strong>：不是所有风险都需要处理</li><li><strong>每个风险都要有对策</strong>：哪怕是&quot;接受&quot;</li><li><strong>新技术先做 Spike</strong>：写个小 demo 验证可行性</li></ol>`,21)])])}const E=a(l,[["render",p]]);export{g as __pageData,E as default};
