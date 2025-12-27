import{_ as a,c as n,o as t,a3 as p}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"3.7.1 本章核心要点回顾","description":"3.7.1 本章核心要点回顾 六大核心技能总览 本章教会你六项核心技能。记住这张表，你就记住了本章的精华： | 技能 | 核心问题 | 一句话答案 | 对应章节 | |-----|---------|-----------|---------| | **上下文思维** | AI 需要知道什么？ | 项目背景 + 任务细","frontmatter":{"title":"3.7.1 本章核心要点回顾"},"headers":[],"relativePath":"Basic/03-technique/3.7-summary/3.7.1-key-takeaways.md","filePath":"Basic/03-technique/3.7-summary/3.7.1-key-takeaways.md","lastUpdated":1765094268000}'),i={name:"Basic/03-technique/3.7-summary/3.7.1-key-takeaways.md"};function l(e,s,d,r,h,o){return t(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_3-7-1-本章核心要点回顾" tabindex="-1">3.7.1 本章核心要点回顾 <a class="header-anchor" href="#_3-7-1-本章核心要点回顾" aria-label="Permalink to &quot;3.7.1 本章核心要点回顾&quot;">​</a></h1><h2 id="六大核心技能总览" tabindex="-1">六大核心技能总览 <a class="header-anchor" href="#六大核心技能总览" aria-label="Permalink to &quot;六大核心技能总览&quot;">​</a></h2><p>本章教会你六项核心技能。记住这张表，你就记住了本章的精华：</p><table tabindex="0"><thead><tr><th>技能</th><th>核心问题</th><th>一句话答案</th><th>对应章节</th></tr></thead><tbody><tr><td><strong>上下文思维</strong></td><td>AI 需要知道什么？</td><td>项目背景 + 任务细节 + 个人需求</td><td>3.1</td></tr><tr><td><strong>结构化表达</strong></td><td>如何组织信息？</td><td>用 S.C.A.F.F. 或 R.G.C. 框架</td><td>3.2</td></tr><tr><td><strong>技巧选择</strong></td><td>什么情况用什么技巧？</td><td>Zero-shot → Few-shot → CoT → ToT</td><td>3.3</td></tr><tr><td><strong>PRD 整合</strong></td><td>如何把想法变成任务书？</td><td>整合第二章成果，填入 PRD 模板</td><td>3.4</td></tr><tr><td><strong>迭代对话</strong></td><td>AI 没做对怎么办？</td><td>精确反馈 + 逐步逼近</td><td>3.5</td></tr><tr><td><strong>问题处理</strong></td><td>AI 出错了怎么办？</td><td>诊断根因 + 精确修正 + 验证幻觉</td><td>3.6</td></tr></tbody></table><h2 id="从「差提示词」到「好提示词」的蜕变" tabindex="-1">从「差提示词」到「好提示词」的蜕变 <a class="header-anchor" href="#从「差提示词」到「好提示词」的蜕变" aria-label="Permalink to &quot;从「差提示词」到「好提示词」的蜕变&quot;">​</a></h2><p>学完本章，你的提示词应该发生这样的变化：</p><h3 id="蜕变前-模糊、不完整" tabindex="-1">蜕变前：模糊、不完整 <a class="header-anchor" href="#蜕变前-模糊、不完整" aria-label="Permalink to &quot;蜕变前：模糊、不完整&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>帮我做一个待办清单</span></span></code></pre></div><p>问题清单：</p><ul><li>❌ 没有项目背景</li><li>❌ 没有技术栈</li><li>❌ 没有功能范围</li><li>❌ 没有约束条件</li><li>❌ 没有输出格式</li></ul><h3 id="蜕变后-清晰、结构化" tabindex="-1">蜕变后：清晰、结构化 <a class="header-anchor" href="#蜕变后-清晰、结构化" aria-label="Permalink to &quot;蜕变后：清晰、结构化&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Situation - 情境】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我在做一个个人待办清单网页应用。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">技术栈：React + TypeScript + Tailwind CSS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标用户：容易忘事的职场新人（就是我自己）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">设计原则：极简，打开就是今日待办，添加任务 3 秒内完成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Challenge - 挑战】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实现「添加任务」功能：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用户在输入框输入任务内容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 按回车键或点击添加按钮，任务添加到列表</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加成功后自动清空输入框</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 空内容不能添加（显示简单提示）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Audience - 受众】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码维护者是我自己，React 初学者，请在关键逻辑处加注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Format - 格式】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">给我完整的 AddTask 组件代码，使用 TypeScript</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【Foundations - 约束】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不用任何外部状态管理库</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不用任何 UI 组件库</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 样式用 Tailwind CSS</span></span></code></pre></div><p>检查清单：</p><ul><li>✅ 有项目背景</li><li>✅ 有技术栈</li><li>✅ 有功能范围</li><li>✅ 有约束条件</li><li>✅ 有输出格式</li></ul><h2 id="技巧选择决策树" tabindex="-1">技巧选择决策树 <a class="header-anchor" href="#技巧选择决策树" aria-label="Permalink to &quot;技巧选择决策树&quot;">​</a></h2><p>遇到任务不知道用什么技巧？按这个流程走：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>开始</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│ 这个任务 AI「直接会做」吗？          │</span></span>
<span class="line"><span>│ （代码转换、内容生成、代码解释）      │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ 是 ──────────────────────────────▶ Zero-shot（直接问）</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼ 否</span></span>
<span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│ 需要特定的输出格式吗？              │</span></span>
<span class="line"><span>│ （API 文档、分类任务、风格模仿）     │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ 是 ──────────────────────────────▶ Few-shot（给 2-3 个示例）</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼ 否</span></span>
<span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│ 需要多步推理/分析吗？               │</span></span>
<span class="line"><span>│ （复杂度分析、Bug 排查、逻辑审查）   │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ 是 ──────────────────────────────▶ Chain of Thought（分步思考）</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼ 否</span></span>
<span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│ 需要对比多个方案吗？                │</span></span>
<span class="line"><span>│ （技术选型、架构决策）              │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ 是 ──────────────────────────────▶ Tree of Thoughts（多方案对比）</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼ 否</span></span>
<span class="line"><span>┌─────────────────────────────────────┐</span></span>
<span class="line"><span>│ 输出质量很重要吗？                  │</span></span>
<span class="line"><span>│ （核心代码、公开文档）              │</span></span>
<span class="line"><span>└─────────────────────────────────────┘</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ 是 ──────────────────────────────▶ 加上 Self-Critique（自查修正）</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ▼ 否</span></span>
<span class="line"><span>    Zero-shot 就够了</span></span></code></pre></div><h2 id="五个技巧的使用场景速查" tabindex="-1">五个技巧的使用场景速查 <a class="header-anchor" href="#五个技巧的使用场景速查" aria-label="Permalink to &quot;五个技巧的使用场景速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th>技巧</th><th>使用频率</th><th>典型场景</th><th>关键词</th></tr></thead><tbody><tr><td><strong>Zero-shot</strong></td><td>50%</td><td>代码转换、内容生成、代码解释</td><td>「直接问」</td></tr><tr><td><strong>Few-shot</strong></td><td>25%</td><td>API 文档生成、分类任务、风格模仿</td><td>「给示例」</td></tr><tr><td><strong>Chain of Thought</strong></td><td>15%</td><td>复杂度分析、Bug 排查、逻辑审查</td><td>「分步骤」</td></tr><tr><td><strong>Tree of Thoughts</strong></td><td>2%</td><td>技术选型、架构决策</td><td>「比方案」</td></tr><tr><td><strong>Self-Critique</strong></td><td>8%</td><td>核心代码、公开文档</td><td>「自检查」</td></tr></tbody></table><p><strong>实践建议</strong>：</p><ol><li>从 Zero-shot 开始尝试</li><li>如果输出不满意，再升级到其他技巧</li><li>重要输出记得加 Self-Critique</li></ol><h2 id="心法与技法的完整闭环" tabindex="-1">心法与技法的完整闭环 <a class="header-anchor" href="#心法与技法的完整闭环" aria-label="Permalink to &quot;心法与技法的完整闭环&quot;">​</a></h2><p>第二章（心法）和第三章（技法）解决的是不同问题，但缺一不可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                        完整闭环                              │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│   第二章：心法                    第三章：技法               │</span></span>
<span class="line"><span>│   ──────────────                 ──────────────             │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│   问题发现 ─────────────────────▶ 写入 PRD 背景             │</span></span>
<span class="line"><span>│   JTBD 思维 ────────────────────▶ 描述用户任务              │</span></span>
<span class="line"><span>│   逆向思维 ─────────────────────▶ 列出约束条件              │</span></span>
<span class="line"><span>│   减法思维 ─────────────────────▶ P0/P1/P2 优先级           │</span></span>
<span class="line"><span>│   故事思维 ─────────────────────▶ 用户画像 + 场景           │</span></span>
<span class="line"><span>│   灵魂三问 ─────────────────────▶ 最终自检                  │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│   输出：清晰的需求                输出：AI 能执行的 Prompt    │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span></code></pre></div><table tabindex="0"><thead><tr><th>维度</th><th>心法（第2章）</th><th>技法（第3章）</th></tr></thead><tbody><tr><td><strong>核心问题</strong></td><td>做什么？为什么做？</td><td>怎么让 AI 理解我要做什么？</td></tr><tr><td><strong>输入</strong></td><td>模糊的想法</td><td>清晰的需求</td></tr><tr><td><strong>输出</strong></td><td>清晰的需求</td><td>AI 能执行的指令</td></tr><tr><td><strong>关键能力</strong></td><td>产品思维、用户洞察</td><td>Prompt 工程、需求表达</td></tr></tbody></table><h2 id="本章关键公式" tabindex="-1">本章关键公式 <a class="header-anchor" href="#本章关键公式" aria-label="Permalink to &quot;本章关键公式&quot;">​</a></h2><p>记住这三个公式，你就掌握了本章的精髓：</p><h3 id="公式一-ai-输出质量公式" tabindex="-1">公式一：AI 输出质量公式 <a class="header-anchor" href="#公式一-ai-输出质量公式" aria-label="Permalink to &quot;公式一：AI 输出质量公式&quot;">​</a></h3><blockquote><p><strong>AI 输出质量 = 上下文质量 × AI 能力</strong></p></blockquote><p>AI 的能力是固定的，你能控制的只有上下文质量。</p><h3 id="公式二-好提示词公式" tabindex="-1">公式二：好提示词公式 <a class="header-anchor" href="#公式二-好提示词公式" aria-label="Permalink to &quot;公式二：好提示词公式&quot;">​</a></h3><blockquote><p><strong>好提示词 = 背景 + 任务 + 约束 + 格式 + 示例（可选）</strong></p></blockquote><p>缺少任何一个要素，AI 的输出都可能偏离预期。</p><h3 id="公式三-迭代修正公式" tabindex="-1">公式三：迭代修正公式 <a class="header-anchor" href="#公式三-迭代修正公式" aria-label="Permalink to &quot;公式三：迭代修正公式&quot;">​</a></h3><blockquote><p><strong>精确修正 = 指出问题 + 说明原因 + 给出期望</strong></p></blockquote><p>模糊的「不对」不如精确的「这里应该是那样」。</p><h2 id="四种代码幻觉速查" tabindex="-1">四种代码幻觉速查 <a class="header-anchor" href="#四种代码幻觉速查" aria-label="Permalink to &quot;四种代码幻觉速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>危害程度</th><th>表现</th><th>验证方法</th></tr></thead><tbody><tr><td><strong>包幻觉</strong></td><td>🔴 高</td><td>推荐不存在的 npm/pip 包</td><td><code>npm search &lt;包名&gt;</code> 或访问官网</td></tr><tr><td><strong>API 幻觉</strong></td><td>🟡 中</td><td>编造不存在的函数或方法</td><td>查阅官方文档</td></tr><tr><td><strong>逻辑幻觉</strong></td><td>🟡 中</td><td>代码逻辑与描述不符</td><td>用边界情况测试</td></tr><tr><td><strong>版本幻觉</strong></td><td>🟡 中</td><td>使用已废弃的语法或 API</td><td>检查版本兼容性</td></tr></tbody></table><p><strong>验证习惯</strong>：对 AI 推荐的包和 API，先验证再使用。</p><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>六大技能</strong>：上下文思维、结构化表达、技巧选择、PRD 整合、迭代对话、问题处理</p><p>✓ <strong>技巧选择流程</strong>：Zero-shot → Few-shot → CoT → ToT，重要输出加 Self-Critique</p><p>✓ <strong>心法与技法的关系</strong>：心法帮你想清楚，技法帮你说明白，两者缺一不可</p><p>✓ <strong>三个关键公式</strong>：输出质量公式、好提示词公式、迭代修正公式</p><p>下一节，我们将把第二章和第三章串联起来，形成从想法到代码的完整工作流。</p>`,45)])])}const g=a(i,[["render",l]]);export{k as __pageData,g as default};
