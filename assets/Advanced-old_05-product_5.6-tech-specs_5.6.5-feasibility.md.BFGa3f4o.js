import{_ as a,c as n,o as t,a3 as i}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"5.6.5 我一个人搞得定吗——单人自评：可行性与工作量估算","description":"5.6.5 我一个人搞得定吗——单人自评 一句话破题 独立开发者需要诚实地评估：**这个项目我能在预期时间内完成吗？** 可行性自检清单 在开始之前，问自己这些问题： | 问题 | 是 | 否 | |------|----|----| | 我理解业务需求吗？ | 继续 | 需要澄清 | | 技术栈我熟悉吗？ | 继续","frontmatter":{"title":"5.6.5 我一个人搞得定吗——单人自评：可行性与工作量估算","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.6-tech-specs/5.6.5-feasibility.md","filePath":"Advanced-old/05-product/5.6-tech-specs/5.6.5-feasibility.md","lastUpdated":1766168364000}'),l={name:"Advanced-old/05-product/5.6-tech-specs/5.6.5-feasibility.md"};function p(e,s,h,d,r,o){return t(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="_5-6-5-我一个人搞得定吗——单人自评" tabindex="-1">5.6.5 我一个人搞得定吗——单人自评 <a class="header-anchor" href="#_5-6-5-我一个人搞得定吗——单人自评" aria-label="Permalink to &quot;5.6.5 我一个人搞得定吗——单人自评&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>独立开发者需要诚实地评估：<strong>这个项目我能在预期时间内完成吗？</strong></p><h3 id="可行性自检清单" tabindex="-1">可行性自检清单 <a class="header-anchor" href="#可行性自检清单" aria-label="Permalink to &quot;可行性自检清单&quot;">​</a></h3><p>在开始之前，问自己这些问题：</p><table tabindex="0"><thead><tr><th>问题</th><th>是</th><th>否</th></tr></thead><tbody><tr><td>我理解业务需求吗？</td><td>继续</td><td>需要澄清</td></tr><tr><td>技术栈我熟悉吗？</td><td>继续</td><td>需要学习时间</td></tr><tr><td>有类似项目经验吗？</td><td>更准确</td><td>估算要加 buffer</td></tr><tr><td>依赖的服务都了解吗？</td><td>继续</td><td>需要调研</td></tr><tr><td>时间充足吗？</td><td>继续</td><td>需要缩减范围</td></tr></tbody></table><h3 id="工作量估算方法" tabindex="-1">工作量估算方法 <a class="header-anchor" href="#工作量估算方法" aria-label="Permalink to &quot;工作量估算方法&quot;">​</a></h3><h4 id="方法一-功能分解法" tabindex="-1">方法一：功能分解法 <a class="header-anchor" href="#方法一-功能分解法" aria-label="Permalink to &quot;方法一：功能分解法&quot;">​</a></h4><p>把项目拆成最小的功能单元，分别估算：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 博客系统工作量估算</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 后端开发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 模块 | 功能点 | 预估时间 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 用户认证 | 登录/注册/登出 | 4h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文章管理 | CRUD + 发布状态 | 6h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 分类标签 | CRUD | 3h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文件上传 | 图片上传 | 3h |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 前端开发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 模块 | 功能点 | 预估时间 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 首页 | 文章列表 | 4h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 详情页 | 文章渲染 | 3h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 后台 | 文章编辑器 | 6h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 认证 | 登录表单 | 2h |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 其他</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项目 | 预估时间 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|----------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 项目初始化 | 2h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 部署配置 | 3h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 测试调试 | 8h |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文档 | 2h |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 合计</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 开发时间：46h</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 加 30% buffer：60h</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 按每天 4h 有效时间：15 天</span></span></code></pre></div><h4 id="方法二-类比法" tabindex="-1">方法二：类比法 <a class="header-anchor" href="#方法二-类比法" aria-label="Permalink to &quot;方法二：类比法&quot;">​</a></h4><p>参考类似项目的实际时间：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>上次做类似项目：10 天</span></span>
<span class="line"><span>这次更复杂 × 1.5：15 天</span></span>
<span class="line"><span>新技术学习 + 2 天：17 天</span></span></code></pre></div><h3 id="独立开发者时间陷阱" tabindex="-1">独立开发者时间陷阱 <a class="header-anchor" href="#独立开发者时间陷阱" aria-label="Permalink to &quot;独立开发者时间陷阱&quot;">​</a></h3><table tabindex="0"><thead><tr><th>常见低估点</th><th>实际耗时</th></tr></thead><tbody><tr><td>&quot;这个很简单&quot;</td><td>往往不简单</td></tr><tr><td>&quot;查个文档就行&quot;</td><td>可能查半天</td></tr><tr><td>&quot;调试应该很快&quot;</td><td>经常最耗时</td></tr><tr><td>&quot;部署几分钟&quot;</td><td>环境问题多</td></tr></tbody></table><p><strong>经验法则</strong>：初步估算后乘以 1.5 ~ 2</p><h3 id="有效工作时间" tabindex="-1">有效工作时间 <a class="header-anchor" href="#有效工作时间" aria-label="Permalink to &quot;有效工作时间&quot;">​</a></h3><p>独立开发者一天的真实时间分布：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一天 8 小时</span></span>
<span class="line"><span>├── 有效编码时间：4h（最理想）</span></span>
<span class="line"><span>├── 调试/查资料：2h</span></span>
<span class="line"><span>├── 休息/中断：1h</span></span>
<span class="line"><span>└── 沟通/杂事：1h</span></span></code></pre></div><p>所以估算时用<strong>有效时间</strong>而不是总时间。</p><h3 id="ai-辅助开发的时间调整" tabindex="-1">AI 辅助开发的时间调整 <a class="header-anchor" href="#ai-辅助开发的时间调整" aria-label="Permalink to &quot;AI 辅助开发的时间调整&quot;">​</a></h3><p>使用 AI 辅助后，某些任务会变快：</p><table tabindex="0"><thead><tr><th>任务类型</th><th>传统耗时</th><th>AI 辅助后</th></tr></thead><tbody><tr><td>写样板代码</td><td>1h</td><td>0.2h</td></tr><tr><td>查文档/示例</td><td>0.5h</td><td>0.1h</td></tr><tr><td>调试错误</td><td>1h</td><td>0.5h</td></tr><tr><td>学习新 API</td><td>2h</td><td>0.5h</td></tr></tbody></table><p>但要注意：</p><ul><li>审查 AI 代码需要时间</li><li>复杂逻辑仍需自己思考</li><li>集成和测试不会变快</li></ul><h3 id="让-ai-帮你估算" tabindex="-1">让 AI 帮你估算 <a class="header-anchor" href="#让-ai-帮你估算" aria-label="Permalink to &quot;让 AI 帮你估算&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：帮我估算这个博客系统的开发时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>技术栈：Next.js + Prisma + PostgreSQL</span></span>
<span class="line"><span>功能：文章 CRUD、分类标签、用户认证、Markdown 编辑</span></span>
<span class="line"><span>我对 Next.js 熟悉，Prisma 第一次用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 工作量估算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 开发时间</span></span>
<span class="line"><span>| 阶段 | 时间 | 说明 |</span></span>
<span class="line"><span>|------|------|------|</span></span>
<span class="line"><span>| 环境搭建 | 2h | 项目初始化、数据库 |</span></span>
<span class="line"><span>| 数据模型 | 3h | Prisma Schema 设计 |</span></span>
<span class="line"><span>| 用户认证 | 4h | next-auth 集成 |</span></span>
<span class="line"><span>| 文章模块 | 8h | CRUD + 编辑器 |</span></span>
<span class="line"><span>| 分类标签 | 4h | 基础 CRUD |</span></span>
<span class="line"><span>| 前端页面 | 10h | 列表/详情/后台 |</span></span>
<span class="line"><span>| 测试调试 | 6h | 各模块联调 |</span></span>
<span class="line"><span>| 部署上线 | 3h | Vercel + 数据库 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 合计</span></span>
<span class="line"><span>- 基础时间：40h</span></span>
<span class="line"><span>- Prisma 学习 buffer：+8h  </span></span>
<span class="line"><span>- 总计：48h</span></span>
<span class="line"><span>- 按每天 4h：12 天</span></span>
<span class="line"><span>- 建议预留：2 周</span></span></code></pre></div><h3 id="何时该缩减范围" tabindex="-1">何时该缩减范围 <a class="header-anchor" href="#何时该缩减范围" aria-label="Permalink to &quot;何时该缩减范围&quot;">​</a></h3><p>如果估算结果超出预期，优先考虑：</p><ol><li><strong>砍功能</strong>：先做核心功能</li><li><strong>用现成方案</strong>：评论用第三方</li><li><strong>降低标准</strong>：先能用，再好看</li><li><strong>分阶段</strong>：MVP → V1 → V2</li></ol><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>诚实面对自己</strong>：不要自欺欺人</li><li><strong>记录实际时间</strong>：下次估算更准</li><li><strong>预留 buffer</strong>：总会有意外</li><li><strong>及时调整范围</strong>：发现不对劲就缩减</li></ol>`,32)])])}const g=a(l,[["render",p]]);export{k as __pageData,g as default};
