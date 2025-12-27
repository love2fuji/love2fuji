import{_ as a,c as i,o as n,a3 as t}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"8.5.2 技术方案靠不靠谱——技术评审：方案设计与风险评估","description":"8.5.2 技术方案靠不靠谱——技术评审 代码写到一半发现方案走不通，是最浪费时间的事——技术评审让你提前避坑。 技术评审的目标 | 目标 | 说明 | |------|------| | 方案可行 | 确保技术方案能落地 | | 风险识别 | 提前发现潜在问题 | | 知识共享 | 团队成员了解系统设计 | | 优化","frontmatter":{"title":"8.5.2 技术方案靠不靠谱——技术评审：方案设计与风险评估","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/08-workflow/8.5-workflow-process/8.5.2-tech-review.md","filePath":"Advanced-old/08-workflow/8.5-workflow-process/8.5.2-tech-review.md","lastUpdated":1766168364000}'),l={name:"Advanced-old/08-workflow/8.5-workflow-process/8.5.2-tech-review.md"};function e(h,s,p,d,r,o){return n(),i("div",null,[...s[0]||(s[0]=[t(`<h1 id="_8-5-2-技术方案靠不靠谱——技术评审" tabindex="-1">8.5.2 技术方案靠不靠谱——技术评审 <a class="header-anchor" href="#_8-5-2-技术方案靠不靠谱——技术评审" aria-label="Permalink to &quot;8.5.2 技术方案靠不靠谱——技术评审&quot;">​</a></h1><p>代码写到一半发现方案走不通，是最浪费时间的事——技术评审让你提前避坑。</p><h2 id="技术评审的目标" tabindex="-1">技术评审的目标 <a class="header-anchor" href="#技术评审的目标" aria-label="Permalink to &quot;技术评审的目标&quot;">​</a></h2><table tabindex="0"><thead><tr><th>目标</th><th>说明</th></tr></thead><tbody><tr><td>方案可行</td><td>确保技术方案能落地</td></tr><tr><td>风险识别</td><td>提前发现潜在问题</td></tr><tr><td>知识共享</td><td>团队成员了解系统设计</td></tr><tr><td>优化方案</td><td>集思广益改进设计</td></tr></tbody></table><h2 id="什么情况需要技术评审" tabindex="-1">什么情况需要技术评审 <a class="header-anchor" href="#什么情况需要技术评审" aria-label="Permalink to &quot;什么情况需要技术评审&quot;">​</a></h2><table tabindex="0"><thead><tr><th>场景</th><th>需要评审</th><th>示例</th></tr></thead><tbody><tr><td>新系统</td><td>是</td><td>新项目架构设计</td></tr><tr><td>重大重构</td><td>是</td><td>数据库迁移、框架升级</td></tr><tr><td>复杂功能</td><td>是</td><td>支付系统、权限系统</td></tr><tr><td>简单功能</td><td>否</td><td>加个按钮、改个文案</td></tr><tr><td>性能优化</td><td>视情况</td><td>涉及架构变更需要</td></tr></tbody></table><h2 id="技术方案文档模板" tabindex="-1">技术方案文档模板 <a class="header-anchor" href="#技术方案文档模板" aria-label="Permalink to &quot;技术方案文档模板&quot;">​</a></h2><h3 id="adr-architecture-decision-record" tabindex="-1">ADR (Architecture Decision Record) <a class="header-anchor" href="#adr-architecture-decision-record" aria-label="Permalink to &quot;ADR (Architecture Decision Record)&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ADR-001: 用户认证方案选型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">已采纳</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">需要实现用户认证功能，支持多端登录、token 刷新等场景。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 决策</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">采用 JWT + Refresh Token 方案，配合 NextAuth.js 实现。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 方案对比</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 方案 | 优点 | 缺点 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Session | 简单、可随时失效 | 需要服务端存储、扩展性差 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| JWT | 无状态、扩展性好 | Token 泄露风险、无法主动失效 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| JWT + Refresh | 平衡安全与体验 | 实现复杂度略高 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 实现方案</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. Token 设计</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Access Token: 有效期 15 分钟</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Refresh Token: 有效期 7 天，存储在 HttpOnly Cookie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. 刷新机制</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端拦截 401 响应</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 自动使用 Refresh Token 获取新的 Access Token</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Refresh Token 失效则跳转登录页</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. 安全措施</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Access Token 存储在内存</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Refresh Token 使用 HttpOnly Cookie</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持单点登出（Redis 黑名单）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 后果</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 需要引入 Redis 存储 Token 黑名单</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端需要实现 Token 刷新逻辑</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 预估开发周期 3 天</span></span></code></pre></div><h3 id="技术设计文档-简版" tabindex="-1">技术设计文档（简版） <a class="header-anchor" href="#技术设计文档-简版" aria-label="Permalink to &quot;技术设计文档（简版）&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 技术设计：消息通知系统</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 1. 需求概述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实现站内消息通知，支持系统通知和用户消息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 2. 架构设计</span></span></code></pre></div><p>┌──────────┐ ┌──────────┐ ┌──────────┐ │ Producer │ --&gt; │ Queue │ --&gt; │ Consumer │ │ (API) │ │ (Redis) │ │ (Worker) │ └──────────┘ └──────────┘ └──────────┘ │ ▼ ┌──────────────┐ │ Database │ └──────────────┘</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 3. 数据模型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`prisma</span></span>
<span class="line"><span>model Notification {</span></span>
<span class="line"><span>  id        String   @id @default(cuid())</span></span>
<span class="line"><span>  userId    String</span></span>
<span class="line"><span>  type      String   // system, mention, reply</span></span>
<span class="line"><span>  content   Json</span></span>
<span class="line"><span>  read      Boolean  @default(false)</span></span>
<span class="line"><span>  createdAt DateTime @default(now())</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-api-设计" tabindex="-1">4. API 设计 <a class="header-anchor" href="#_4-api-设计" aria-label="Permalink to &quot;4. API 设计&quot;">​</a></h2><ul><li>GET /api/notifications - 获取通知列表</li><li>PATCH /api/notifications/:id/read - 标记已读</li><li>DELETE /api/notifications/:id - 删除通知</li></ul><h2 id="_5-风险与对策" tabindex="-1">5. 风险与对策 <a class="header-anchor" href="#_5-风险与对策" aria-label="Permalink to &quot;5. 风险与对策&quot;">​</a></h2><table tabindex="0"><thead><tr><th>风险</th><th>对策</th></tr></thead><tbody><tr><td>消息量大导致性能问题</td><td>分页查询 + 索引优化</td></tr><tr><td>消息丢失</td><td>Redis 持久化 + 重试机制</td></tr><tr><td>并发写入</td><td>消息队列削峰</td></tr></tbody></table><h2 id="_6-排期" tabindex="-1">6. 排期 <a class="header-anchor" href="#_6-排期" aria-label="Permalink to &quot;6. 排期&quot;">​</a></h2><ul><li>基础功能：2 天</li><li>消息队列：1 天</li><li>测试上线：1 天</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 技术评审流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`mermaid</span></span>
<span class="line"><span>flowchart TD</span></span>
<span class="line"><span>    A[编写技术方案] --&gt; B[团队内部评审]</span></span>
<span class="line"><span>    B --&gt; C{通过?}</span></span>
<span class="line"><span>    C --&gt;|需修改| D[修改方案]</span></span>
<span class="line"><span>    D --&gt; B</span></span>
<span class="line"><span>    C --&gt;|通过| E[存档文档]</span></span>
<span class="line"><span>    E --&gt; F[开始开发]</span></span></code></pre></div><h2 id="评审检查清单" tabindex="-1">评审检查清单 <a class="header-anchor" href="#评审检查清单" aria-label="Permalink to &quot;评审检查清单&quot;">​</a></h2><h3 id="可行性" tabindex="-1">可行性 <a class="header-anchor" href="#可行性" aria-label="Permalink to &quot;可行性&quot;">​</a></h3><ul><li>[ ] 技术方案是否完整？</li><li>[ ] 是否有技术风险？</li><li>[ ] 依赖的服务是否可用？</li><li>[ ] 有没有更简单的方案？</li></ul><h3 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h3><ul><li>[ ] 预估的 QPS 是多少？</li><li>[ ] 数据量增长后能否支撑？</li><li>[ ] 有没有潜在的性能瓶颈？</li></ul><h3 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h3><ul><li>[ ] 敏感数据如何存储？</li><li>[ ] 接口是否需要鉴权？</li><li>[ ] 有没有注入风险？</li></ul><h3 id="可维护性" tabindex="-1">可维护性 <a class="header-anchor" href="#可维护性" aria-label="Permalink to &quot;可维护性&quot;">​</a></h3><ul><li>[ ] 方案是否易于理解？</li><li>[ ] 后续扩展是否方便？</li><li>[ ] 是否有过度设计？</li></ul><h2 id="ai-辅助技术评审" tabindex="-1">AI 辅助技术评审 <a class="header-anchor" href="#ai-辅助技术评审" aria-label="Permalink to &quot;AI 辅助技术评审&quot;">​</a></h2><p><strong>示例 Prompt</strong>：</p><blockquote><p>&quot;我设计了一个消息队列方案，使用 Redis 的 List 结构实现。请帮我评审：</p><ol><li>可能存在的技术风险</li><li>性能瓶颈在哪里</li><li>有没有更好的替代方案&quot;</li></ol></blockquote><h2 id="验收清单" tabindex="-1">验收清单 <a class="header-anchor" href="#验收清单" aria-label="Permalink to &quot;验收清单&quot;">​</a></h2><ul><li>[ ] 能编写基本的技术方案文档</li><li>[ ] 理解 ADR 的结构和用途</li><li>[ ] 知道技术评审的关键检查点</li><li>[ ] 能识别方案中的潜在风险</li></ul>`,34)])])}const g=a(l,[["render",e]]);export{c as __pageData,g as default};
