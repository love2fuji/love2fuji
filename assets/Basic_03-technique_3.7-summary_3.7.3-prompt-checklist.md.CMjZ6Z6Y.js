import{_ as a,c as n,o as i,a3 as p}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"3.7.3 提示词速查清单","description":"3.7.3 提示词速查清单 本节提供一系列可直接使用的速查清单和模板，建议收藏或打印备用。 一页纸速查表：提问前必查 在向 AI 提问之前，快速检查这九项： 分场景 Prompt 模板 场景一：代码生成 适用于：创建新组件、实现新功能、生成完整模块 **填写示例**： 场景二：代码修改 适用于：修复 Bug、优化性能、","frontmatter":{"title":"3.7.3 提示词速查清单"},"headers":[],"relativePath":"Basic/03-technique/3.7-summary/3.7.3-prompt-checklist.md","filePath":"Basic/03-technique/3.7-summary/3.7.3-prompt-checklist.md","lastUpdated":1765094268000}'),l={name:"Basic/03-technique/3.7-summary/3.7.3-prompt-checklist.md"};function t(e,s,h,k,d,E){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_3-7-3-提示词速查清单" tabindex="-1">3.7.3 提示词速查清单 <a class="header-anchor" href="#_3-7-3-提示词速查清单" aria-label="Permalink to &quot;3.7.3 提示词速查清单&quot;">​</a></h1><p>本节提供一系列可直接使用的速查清单和模板，建议收藏或打印备用。</p><h2 id="一页纸速查表-提问前必查" tabindex="-1">一页纸速查表：提问前必查 <a class="header-anchor" href="#一页纸速查表-提问前必查" aria-label="Permalink to &quot;一页纸速查表：提问前必查&quot;">​</a></h2><p>在向 AI 提问之前，快速检查这九项：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    提示词自检清单 v1.0                        │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 1. 我说清楚【背景】了吗？                                  │</span></span>
<span class="line"><span>│       （项目类型、技术栈、当前进度）                          │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 2. 我说清楚【任务】了吗？                                  │</span></span>
<span class="line"><span>│       （要做什么、输入输出是什么）                            │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 3. 我说清楚【约束】了吗？                                  │</span></span>
<span class="line"><span>│       （必须遵守的限制、不能做什么）                          │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 4. 我说清楚【格式】了吗？                                  │</span></span>
<span class="line"><span>│       （要完整代码还是片段、需要注释吗）                      │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 5. 我给【示例】了吗？                                      │</span></span>
<span class="line"><span>│       （如果需要特定格式输出）                                │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 6. 我的提示词够【具体】吗？                                │</span></span>
<span class="line"><span>│       （能否更精确地描述期望）                                │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 7. 我告诉 AI【什么不能做】了吗？                           │</span></span>
<span class="line"><span>│       （防止 AI「加戏」）                                     │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 8. 我准备好【迭代】了吗？                                  │</span></span>
<span class="line"><span>│       （不期待一次完美）                                      │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>│  □ 9. 我整合了【第二章的思考成果】吗？                        │</span></span>
<span class="line"><span>│       （用户画像、MVP 范围、灵魂三问）                        │</span></span>
<span class="line"><span>│                                                             │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="分场景-prompt-模板" tabindex="-1">分场景 Prompt 模板 <a class="header-anchor" href="#分场景-prompt-模板" aria-label="Permalink to &quot;分场景 Prompt 模板&quot;">​</a></h2><h3 id="场景一-代码生成" tabindex="-1">场景一：代码生成 <a class="header-anchor" href="#场景一-代码生成" aria-label="Permalink to &quot;场景一：代码生成&quot;">​</a></h3><p>适用于：创建新组件、实现新功能、生成完整模块</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【背景】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目类型：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">网页应用/数据分析/自动化脚本/...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">技术栈：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">React/Python/Node.js/...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当前进度：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目刚开始/已有基础结构/...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【任务】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我实现 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 功能描述：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用户做什么，系统做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输入：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用户输入什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">系统输出什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【约束】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">必须：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约束1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约束2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不能：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约束3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约束4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【格式要求】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 完整代码文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 包含 TypeScript 类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 包含关键注释</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 包含使用说明</span></span></code></pre></div><p><strong>填写示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【背景】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目类型：个人待办清单网页应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">技术栈：React + TypeScript + Tailwind CSS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当前进度：项目已初始化，已有 AddTask 组件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【任务】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我实现「删除任务」功能：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 功能描述：用户点击任务右侧的删除图标，该任务从列表中移除</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输入：用户点击删除图标</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出：任务从列表中消失，显示简短的撤销提示</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【约束】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">必须：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 删除前显示确认提示（防止误删）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 删除后 3 秒内可撤销</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 样式用 Tailwind CSS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不能：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不用任何 UI 组件库</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不用 confirm() 弹窗（体验不好）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【格式要求】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 完整代码文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 包含 TypeScript 类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 包含关键注释</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 包含使用说明</span></span></code></pre></div><h3 id="场景二-代码修改" tabindex="-1">场景二：代码修改 <a class="header-anchor" href="#场景二-代码修改" aria-label="Permalink to &quot;场景二：代码修改&quot;">​</a></h3><p>适用于：修复 Bug、优化性能、重构代码</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【当前代码】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴当前代码]</span></span></code></pre></div><p>【问题描述】 现在的问题是：[具体描述问题现象] 期望的行为是：[描述正确的行为]</p><p>【修改要求】</p><ul><li>[要求1]</li><li>[要求2]</li></ul><p>【约束】</p><ul><li>只修改必要的部分，保持其他代码不变</li><li>[其他约束]</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**填写示例**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>【当前代码】</span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>const handleSubmit = () =&gt; {</span></span>
<span class="line"><span>  if (inputValue) {</span></span>
<span class="line"><span>    addTask(inputValue);</span></span>
<span class="line"><span>    setInputValue(&#39;&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>【问题描述】 现在的问题是：输入空格也能添加任务 期望的行为是：只有真正有内容时才能添加，空格应该被忽略</p><p>【修改要求】</p><ul><li>添加前去除首尾空格</li><li>去除空格后如果为空，显示提示</li></ul><p>【约束】</p><ul><li>只修改必要的部分，保持其他代码不变</li><li>提示用 toast 而不是 alert</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景三：问题排查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：代码报错、功能异常、性能问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>【问题现象】</span></span>
<span class="line"><span>[描述你看到了什么]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【期望行为】</span></span>
<span class="line"><span>[描述你期望看到什么]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴相关代码]</span></span></code></pre></div><p>【已尝试的方法】</p><ol><li>[尝试1]：[结果]</li><li>[尝试2]：[结果]</li></ol><p>【环境信息】</p><ul><li>浏览器/运行环境：[版本]</li><li>相关库版本：[版本]</li></ul><p>【请帮我】</p><ol><li>分析可能的原因</li><li>给出解决方案</li><li>解释为什么会出现这个问题</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**填写示例**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>【问题现象】</span></span>
<span class="line"><span>点击「完成任务」按钮后，任务状态没有变化，控制台没有报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【期望行为】</span></span>
<span class="line"><span>点击后任务左侧的圆圈应该变成勾选状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>const toggleComplete = (id: string) =&gt; {</span></span>
<span class="line"><span>  setTasks(tasks.map(task =&gt; </span></span>
<span class="line"><span>    task.id === id ? { ...task, complete: !task.complete } : task</span></span>
<span class="line"><span>  ));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>【已尝试的方法】</p><ol><li>检查 id 是否正确传递：console.log 确认 id 是对的</li><li>检查 tasks 状态：更新前后 tasks 数组没有变化</li></ol><p>【环境信息】</p><ul><li>浏览器：Chrome 120</li><li>React 版本：18.2.0</li></ul><p>【请帮我】</p><ol><li>分析可能的原因</li><li>给出解决方案</li><li>解释为什么会出现这个问题</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 场景四：技术选型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：选择库、框架、架构方案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>【项目背景】</span></span>
<span class="line"><span>[简要描述项目]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【选型需求】</span></span>
<span class="line"><span>我需要选择 [选型类型]，主要考虑：</span></span>
<span class="line"><span>- [考虑因素1]</span></span>
<span class="line"><span>- [考虑因素2]</span></span>
<span class="line"><span>- [考虑因素3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【候选方案】（可选）</span></span>
<span class="line"><span>1. [方案A]</span></span>
<span class="line"><span>2. [方案B]</span></span>
<span class="line"><span>3. [方案C]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【请帮我】</span></span>
<span class="line"><span>1. 分析每个方案的优缺点</span></span>
<span class="line"><span>2. 给出推荐方案及理由</span></span>
<span class="line"><span>3. 说明什么情况下应该选择其他方案</span></span></code></pre></div><p><strong>填写示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【项目背景】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">个人待办清单应用，目前数据存在 localStorage，想支持多设备同步</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【选型需求】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我需要选择后端数据存储方案，主要考虑：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 免费或低成本（个人项目）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 上手简单（我是后端小白）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持用户认证</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【候选方案】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Supabase</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Firebase</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 自己搭建 Node.js + MongoDB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【请帮我】</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 分析每个方案的优缺点</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 给出推荐方案及理由</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明什么情况下应该选择其他方案</span></span></code></pre></div><h2 id="常见错误自检清单" tabindex="-1">常见错误自检清单 <a class="header-anchor" href="#常见错误自检清单" aria-label="Permalink to &quot;常见错误自检清单&quot;">​</a></h2><p>在发送 Prompt 前，检查是否犯了这五个常见错误：</p><table tabindex="0"><thead><tr><th>#</th><th>错误</th><th>检查方法</th><th>修正方式</th></tr></thead><tbody><tr><td>1</td><td><strong>没有背景</strong></td><td>删掉背景后 AI 还能理解吗？</td><td>加上项目类型和技术栈</td></tr><tr><td>2</td><td><strong>太模糊</strong></td><td>「优化代码」优化什么？</td><td>具体说明优化哪个方面</td></tr><tr><td>3</td><td><strong>没有约束</strong></td><td>AI 可能「加戏」吗？</td><td>加上「不做清单」</td></tr><tr><td>4</td><td><strong>没有格式</strong></td><td>AI 输出格式随机？</td><td>指定要代码还是解释</td></tr><tr><td>5</td><td><strong>一次要太多</strong></td><td>任务超过 3 个要点？</td><td>拆分成多轮对话</td></tr></tbody></table><h2 id="幻觉验证快速指南" tabindex="-1">幻觉验证快速指南 <a class="header-anchor" href="#幻觉验证快速指南" aria-label="Permalink to &quot;幻觉验证快速指南&quot;">​</a></h2><p>当 AI 推荐了你不熟悉的包或 API 时，用这个流程验证：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI 推荐了一个包或 API</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ▼</span></span>
<span class="line"><span>┌─────────────────────────┐</span></span>
<span class="line"><span>│ 1. 验证包是否存在         │</span></span>
<span class="line"><span>│    npm search &lt;包名&gt;     │</span></span>
<span class="line"><span>│    或访问 npmjs.com      │</span></span>
<span class="line"><span>└─────────────────────────┘</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ├─ 不存在 ──────────▶ 🔴 包幻觉，要求 AI 重新推荐</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ▼ 存在</span></span>
<span class="line"><span>┌─────────────────────────┐</span></span>
<span class="line"><span>│ 2. 检查包的可靠性         │</span></span>
<span class="line"><span>│    - 周下载量 &gt; 1000?    │</span></span>
<span class="line"><span>│    - 最近更新 &lt; 1年?     │</span></span>
<span class="line"><span>│    - GitHub stars &gt; 100? │</span></span>
<span class="line"><span>└─────────────────────────┘</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ├─ 不满足 ──────────▶ 🟡 谨慎使用，考虑替代方案</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ▼ 满足</span></span>
<span class="line"><span>┌─────────────────────────┐</span></span>
<span class="line"><span>│ 3. 验证 API 是否正确      │</span></span>
<span class="line"><span>│    查阅官方文档          │</span></span>
<span class="line"><span>└─────────────────────────┘</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ├─ API 不存在 ─────▶ 🔴 API 幻觉，查文档找正确 API</span></span>
<span class="line"><span>        │</span></span>
<span class="line"><span>        ▼ API 存在</span></span>
<span class="line"><span>        ✅ 可以使用</span></span></code></pre></div><h2 id="迭代反馈模板" tabindex="-1">迭代反馈模板 <a class="header-anchor" href="#迭代反馈模板" aria-label="Permalink to &quot;迭代反馈模板&quot;">​</a></h2><p>当 AI 的输出不满意时，使用这个模板给反馈：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【问题】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">具体指出哪里不对</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【原因】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">解释为什么这样不行</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【期望】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">明确说明你想要什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【示例】（可选）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">给一个你期望的示例</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><strong>填写示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【问题】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你给的代码中，删除任务后没有撤销功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【原因】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户可能误删，需要有后悔的机会</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【期望】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">删除后显示一个 3 秒的「撤销」提示，点击可以恢复任务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">【示例】</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">类似 Gmail 删除邮件后底部出现的「撤销」按钮</span></span></code></pre></div><h2 id="可复制的万能模板" tabindex="-1">可复制的万能模板 <a class="header-anchor" href="#可复制的万能模板" aria-label="Permalink to &quot;可复制的万能模板&quot;">​</a></h2><p>这是一个通用模板，适用于大多数场景：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我正在做 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">技术栈：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术栈</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">目标用户：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用户描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 当前任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">具体描述要做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 要求</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">要求1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">要求2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">要求3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 不需要</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">不需要1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">不需要2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 输出格式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">说明期望的输出格式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 关于我</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术水平</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，如果有 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">注意事项</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，请提醒我。</span></span></code></pre></div><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>提问前必查</strong>：背景、任务、约束、格式、示例、具体性、不做清单、迭代准备、第二章成果</p><p>✓ <strong>四种场景模板</strong>：代码生成、代码修改、问题排查、技术选型</p><p>✓ <strong>五个常见错误</strong>：没背景、太模糊、没约束、没格式、一次要太多</p><p>✓ <strong>幻觉验证</strong>：先验证存在性，再检查可靠性，最后查官方文档</p><p>下一节，我们将通过四个综合练习，帮助你内化这些技能。</p>`,62)])])}const o=a(l,[["render",t]]);export{c as __pageData,o as default};
