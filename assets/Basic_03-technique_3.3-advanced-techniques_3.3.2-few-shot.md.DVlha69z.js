import{_ as a,c as n,o as i,a3 as t}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"3.3.2 Few-shot Prompting：用示例教会 AI","description":"3.3.2 Few-shot Prompting：用示例教会 AI 经过本节学习，你将掌握 Few-shot 的定义和工作原理 为什么示例比长篇解释更有效 如何选择高质量的示例 示例数量的最佳实践 Few-shot 的适用场景和局限性 什么是 Few-shot Prompting Few-shot（少样本）的意思是：*","frontmatter":{"title":"3.3.2 Few-shot Prompting：用示例教会 AI"},"headers":[],"relativePath":"Basic/03-technique/3.3-advanced-techniques/3.3.2-few-shot.md","filePath":"Basic/03-technique/3.3-advanced-techniques/3.3.2-few-shot.md","lastUpdated":1765094268000}'),p={name:"Basic/03-technique/3.3-advanced-techniques/3.3.2-few-shot.md"};function e(l,s,h,d,r,o){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="_3-3-2-few-shot-prompting-用示例教会-ai" tabindex="-1">3.3.2 Few-shot Prompting：用示例教会 AI <a class="header-anchor" href="#_3-3-2-few-shot-prompting-用示例教会-ai" aria-label="Permalink to &quot;3.3.2 Few-shot Prompting：用示例教会 AI&quot;">​</a></h1><h2 id="经过本节学习-你将掌握" tabindex="-1">经过本节学习，你将掌握 <a class="header-anchor" href="#经过本节学习-你将掌握" aria-label="Permalink to &quot;经过本节学习，你将掌握&quot;">​</a></h2><ul><li>Few-shot 的定义和工作原理</li><li>为什么示例比长篇解释更有效</li><li>如何选择高质量的示例</li><li>示例数量的最佳实践</li><li>Few-shot 的适用场景和局限性</li></ul><h2 id="什么是-few-shot-prompting" tabindex="-1">什么是 Few-shot Prompting <a class="header-anchor" href="#什么是-few-shot-prompting" aria-label="Permalink to &quot;什么是 Few-shot Prompting&quot;">​</a></h2><p>Few-shot（少样本）的意思是：<strong>给 AI 几个示例，让它学习模式后处理新任务</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>任务：将用户需求转换为技术任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例1：</span></span>
<span class="line"><span>需求：&quot;用户可以添加待办事项&quot;</span></span>
<span class="line"><span>任务：</span></span>
<span class="line"><span>- 创建输入框组件</span></span>
<span class="line"><span>- 实现添加按钮点击事件</span></span>
<span class="line"><span>- 更新任务列表状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例2：</span></span>
<span class="line"><span>需求：&quot;用户可以删除待办事项&quot;</span></span>
<span class="line"><span>任务：</span></span>
<span class="line"><span>- 为每个任务添加删除按钮</span></span>
<span class="line"><span>- 实现删除确认逻辑</span></span>
<span class="line"><span>- 从列表中移除对应任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在请处理：</span></span>
<span class="line"><span>需求：&quot;用户可以标记任务为已完成&quot;</span></span></code></pre></div><p>AI 看到两个示例后，就「学会」了转换规则，能按相同格式处理新需求。</p><h2 id="核心洞见-为什么示例比解释更有效" tabindex="-1">核心洞见：为什么示例比解释更有效 <a class="header-anchor" href="#核心洞见-为什么示例比解释更有效" aria-label="Permalink to &quot;核心洞见：为什么示例比解释更有效&quot;">​</a></h2><blockquote><p>&quot;展示一次，胜过解释一百遍。&quot;</p></blockquote><p>这不是夸张。人类学习新技能时，看示范比听讲解更有效。AI 也一样。</p><table tabindex="0"><thead><tr><th>方式</th><th>效果</th><th>原因</th></tr></thead><tbody><tr><td>长篇解释规则</td><td>容易遗漏细节，格式不稳定</td><td>AI 需要「理解」你的意图</td></tr><tr><td>提供示例</td><td>格式一致，细节完整</td><td>AI 直接「模仿」模式</td></tr></tbody></table><p><strong>实际测试表明</strong>：对于格式化输出任务，Few-shot 的准确率比 Zero-shot 高出 20-40%。</p><h2 id="示例数量-多少个最合适" tabindex="-1">示例数量：多少个最合适？ <a class="header-anchor" href="#示例数量-多少个最合适" aria-label="Permalink to &quot;示例数量：多少个最合适？&quot;">​</a></h2><table tabindex="0"><thead><tr><th>数量</th><th>适用场景</th><th>权衡</th></tr></thead><tbody><tr><td><strong>1 个</strong>（One-shot）</td><td>格式明确，规则简单</td><td>最省 token，但模式可能不够清晰</td></tr><tr><td><strong>2-3 个</strong></td><td>大多数场景</td><td>平衡效果和成本，推荐默认选择</td></tr><tr><td><strong>4-5 个</strong></td><td>复杂模式、边界情况多</td><td>效果更好，但 token 消耗增加</td></tr><tr><td><strong>更多</strong></td><td>很少需要</td><td>收益递减，考虑是否需要微调</td></tr></tbody></table><p><strong>经验法则</strong>：从 2 个示例开始，如果输出不稳定，再增加到 3 个。</p><h2 id="如何选择高质量示例" tabindex="-1">如何选择高质量示例 <a class="header-anchor" href="#如何选择高质量示例" aria-label="Permalink to &quot;如何选择高质量示例&quot;">​</a></h2><h3 id="原则一-代表性" tabindex="-1">原则一：代表性 <a class="header-anchor" href="#原则一-代表性" aria-label="Permalink to &quot;原则一：代表性&quot;">​</a></h3><p>示例要覆盖<strong>典型情况</strong>，不要全是特例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 差示例选择（全是边界情况）：</span></span>
<span class="line"><span>- 空字符串处理</span></span>
<span class="line"><span>- 超长文本处理</span></span>
<span class="line"><span>- 特殊字符处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 好示例选择（先典型，后边界）：</span></span>
<span class="line"><span>- 普通长度的文本（典型）</span></span>
<span class="line"><span>- 包含中英文混合的文本（常见变体）</span></span>
<span class="line"><span>- 空字符串处理（边界情况）</span></span></code></pre></div><h3 id="原则二-多样性" tabindex="-1">原则二：多样性 <a class="header-anchor" href="#原则二-多样性" aria-label="Permalink to &quot;原则二：多样性&quot;">​</a></h3><p>示例要覆盖<strong>不同类型</strong>，避免 AI 过度拟合单一模式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>任务：分类用户反馈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ 差示例（全是负面）：</span></span>
<span class="line"><span>- &quot;太难用了&quot; → 负面</span></span>
<span class="line"><span>- &quot;垃圾软件&quot; → 负面</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 好示例（覆盖各类）：</span></span>
<span class="line"><span>- &quot;太难用了&quot; → 负面</span></span>
<span class="line"><span>- &quot;还不错，但希望能加个夜间模式&quot; → 中性</span></span>
<span class="line"><span>- &quot;用了三个月，效率提升很多&quot; → 正面</span></span></code></pre></div><h3 id="原则三-格式一致" tabindex="-1">原则三：格式一致 <a class="header-anchor" href="#原则三-格式一致" aria-label="Permalink to &quot;原则三：格式一致&quot;">​</a></h3><p>所有示例的<strong>输入输出格式必须统一</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 格式不一致：</span></span>
<span class="line"><span>示例1：输入 &quot;...&quot; → 输出：任务列表</span></span>
<span class="line"><span>示例2：输入：&quot;...&quot; 输出 - 任务1 - 任务2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 格式一致：</span></span>
<span class="line"><span>示例1：</span></span>
<span class="line"><span>输入：&quot;...&quot;</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>- 任务1</span></span>
<span class="line"><span>- 任务2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例2：</span></span>
<span class="line"><span>输入：&quot;...&quot;</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>- 任务1</span></span>
<span class="line"><span>- 任务2</span></span></code></pre></div><h2 id="差提示词-vs-好提示词" tabindex="-1">差提示词 vs 好提示词 <a class="header-anchor" href="#差提示词-vs-好提示词" aria-label="Permalink to &quot;差提示词 vs 好提示词&quot;">​</a></h2><h3 id="❌-差提示词" tabindex="-1">❌ 差提示词 <a class="header-anchor" href="#❌-差提示词" aria-label="Permalink to &quot;❌ 差提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>帮我把用户故事转成开发任务，格式要清晰，包含前端和后端的工作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户故事：作为用户，我希望能够搜索任务</span></span></code></pre></div><p><strong>问题</strong>：没有示例，AI 不知道你期望的「清晰格式」是什么样。</p><h3 id="✅-好提示词" tabindex="-1">✅ 好提示词 <a class="header-anchor" href="#✅-好提示词" aria-label="Permalink to &quot;✅ 好提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>任务：将用户故事转换为开发任务清单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>用户故事：作为用户，我希望能够按日期筛选任务</span></span>
<span class="line"><span>开发任务：</span></span>
<span class="line"><span>【前端】</span></span>
<span class="line"><span>- 添加日期选择器组件</span></span>
<span class="line"><span>- 实现筛选状态管理</span></span>
<span class="line"><span>- 更新任务列表渲染逻辑</span></span>
<span class="line"><span>【后端】</span></span>
<span class="line"><span>- 添加日期筛选 API 参数</span></span>
<span class="line"><span>- 实现数据库查询条件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在请处理：</span></span>
<span class="line"><span>用户故事：作为用户，我希望能够搜索任务</span></span></code></pre></div><h3 id="输出对比" tabindex="-1">输出对比 <a class="header-anchor" href="#输出对比" aria-label="Permalink to &quot;输出对比&quot;">​</a></h3><p>好提示词的输出会严格遵循示例格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>开发任务：</span></span>
<span class="line"><span>【前端】</span></span>
<span class="line"><span>- 添加搜索输入框组件</span></span>
<span class="line"><span>- 实现搜索关键词状态管理</span></span>
<span class="line"><span>- 实现防抖搜索逻辑</span></span>
<span class="line"><span>- 更新任务列表渲染，高亮匹配文字</span></span>
<span class="line"><span>【后端】</span></span>
<span class="line"><span>- 添加搜索关键词 API 参数</span></span>
<span class="line"><span>- 实现模糊匹配数据库查询</span></span></code></pre></div><h2 id="实战示例-待办清单项目" tabindex="-1">实战示例：待办清单项目 <a class="header-anchor" href="#实战示例-待办清单项目" aria-label="Permalink to &quot;实战示例：待办清单项目&quot;">​</a></h2><p>小李需要 AI 帮他生成多个组件的 TypeScript 类型定义。他希望格式统一。</p><h3 id="few-shot-提示词" tabindex="-1">Few-shot 提示词 <a class="header-anchor" href="#few-shot-提示词" aria-label="Permalink to &quot;Few-shot 提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>任务：为 React 组件生成 TypeScript Props 类型定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例1：</span></span>
<span class="line"><span>组件描述：一个显示任务标题的组件，标题必填，可选显示完成状态</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>interface TaskTitleProps {</span></span>
<span class="line"><span>  title: string;           // 任务标题，必填</span></span>
<span class="line"><span>  isCompleted?: boolean;   // 完成状态，可选</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例2：</span></span>
<span class="line"><span>组件描述：一个按钮组件，显示文字必填，点击事件必填，可选禁用状态</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>interface ButtonProps {</span></span>
<span class="line"><span>  label: string;           // 按钮文字，必填</span></span>
<span class="line"><span>  onClick: () =&gt; void;     // 点击事件，必填</span></span>
<span class="line"><span>  disabled?: boolean;      // 禁用状态，可选</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在请处理：</span></span>
<span class="line"><span>组件描述：一个任务卡片组件，包含标题必填、描述可选、截止日期可选、优先级必填（高/中/低）</span></span></code></pre></div><h3 id="ai-输出" tabindex="-1">AI 输出 <a class="header-anchor" href="#ai-输出" aria-label="Permalink to &quot;AI 输出&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TaskCardProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 任务标题，必填</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 任务描述，可选</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  dueDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 截止日期，可选</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  priority</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;high&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;medium&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;low&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 优先级，必填</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>注意 AI 自动学会了：</p><ul><li>注释风格（<code>// 说明，必填/可选</code>）</li><li>可选属性用 <code>?</code></li><li>枚举类型用联合类型</li></ul><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><table tabindex="0"><thead><tr><th>场景</th><th>示例</th><th>为什么需要 Few-shot</th></tr></thead><tbody><tr><td>格式化输出</td><td>生成 API 文档</td><td>确保格式一致</td></tr><tr><td>分类任务</td><td>情感分析、标签分类</td><td>明确分类标准</td></tr><tr><td>转换任务</td><td>需求 → 任务、代码 → 文档</td><td>学习转换规则</td></tr><tr><td>风格模仿</td><td>按特定风格写文案</td><td>学习语言风格</td></tr></tbody></table><h2 id="few-shot-的局限性" tabindex="-1">Few-shot 的局限性 <a class="header-anchor" href="#few-shot-的局限性" aria-label="Permalink to &quot;Few-shot 的局限性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>局限</th><th>表现</th><th>解决方案</th></tr></thead><tbody><tr><td>Token 消耗高</td><td>示例占用大量上下文</td><td>精简示例，只保留关键信息</td></tr><tr><td>示例选择难</td><td>选错示例导致效果差</td><td>遵循代表性、多样性、一致性原则</td></tr><tr><td>过度模仿</td><td>AI 照搬示例细节</td><td>用不同的示例内容，只保留格式相同</td></tr></tbody></table><h2 id="可复制模板" tabindex="-1">可复制模板 <a class="header-anchor" href="#可复制模板" aria-label="Permalink to &quot;可复制模板&quot;">​</a></h2><h3 id="通用-few-shot-模板" tabindex="-1">通用 Few-shot 模板 <a class="header-anchor" href="#通用-few-shot-模板" aria-label="Permalink to &quot;通用 Few-shot 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">任务：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">任务描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">示例1：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输入：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例输入1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例输出1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">示例2：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输入：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例输入2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例输出2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现在请处理：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输入：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">实际输入</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="分类任务模板" tabindex="-1">分类任务模板 <a class="header-anchor" href="#分类任务模板" aria-label="Permalink to &quot;分类任务模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">任务：将用户反馈分类为 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">类别列表</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">示例：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">反馈：&quot;[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例反馈1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">分类：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">类别</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">反馈：&quot;[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例反馈2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">分类：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">类别</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">反馈：&quot;[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例反馈3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">分类：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">类别</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请分类：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">反馈：&quot;[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">待分类内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&quot;</span></span></code></pre></div><h3 id="转换任务模板" tabindex="-1">转换任务模板 <a class="header-anchor" href="#转换任务模板" aria-label="Permalink to &quot;转换任务模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">任务：将 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">源格式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 转换为 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">目标格式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">转换规则示例：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">源：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例源内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例目标内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">源：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例源内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">示例目标内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请转换：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">源：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">实际内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="进阶预告-动态-few-shot" tabindex="-1">进阶预告：动态 Few-shot <a class="header-anchor" href="#进阶预告-动态-few-shot" aria-label="Permalink to &quot;进阶预告：动态 Few-shot&quot;">​</a></h2><p>在进阶版中，你会学到「动态 Few-shot」——根据用户输入<strong>自动选择最相关的示例</strong>，进一步提升效果并节省 token。</p><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>Few-shot 的本质</strong>：用示例教会 AI 模式，而非用文字解释规则</p><p>✓ <strong>示例数量</strong>：2-3 个是最佳平衡点</p><p>✓ <strong>示例选择三原则</strong>：代表性、多样性、格式一致性</p><p>✓ <strong>适用场景</strong>：格式化输出、分类、转换、风格模仿</p><p>✓ <strong>与 Zero-shot 的选择</strong>：如果 Zero-shot 格式不稳定，换用 Few-shot</p><p>下一节，我们学习如何让 AI「想一想再回答」——Chain of Thought。</p>`,62)])])}const E=a(p,[["render",e]]);export{c as __pageData,E as default};
