import{_ as a,c as i,o as n,a3 as t}from"./chunks/framework.CUcrqFol.js";const E=JSON.parse('{"title":"3.5.5 知道何时开始新对话","description":"3.5.5 知道何时开始新对话 经过本节学习，你将掌握 识别「该开新对话」的三个信号 理解为什么「清新开始」有时比「继续修补」更高效 学会「搬家」：把关键信息从旧对话带到新对话 获得一个可复制的新对话启动模板 旧对话太长会怎样？ 在 3.5.4 中，我们讲了上下文窗口的概念。当对话太长时，早期内容会被挤出窗口，导致 A","frontmatter":{"title":"3.5.5 知道何时开始新对话"},"headers":[],"relativePath":"Basic/03-technique/3.5-iterative-dialogue/3.5.5-start-new-chat.md","filePath":"Basic/03-technique/3.5-iterative-dialogue/3.5.5-start-new-chat.md","lastUpdated":1765094268000}'),p={name:"Basic/03-technique/3.5-iterative-dialogue/3.5.5-start-new-chat.md"};function l(e,s,h,k,d,r){return n(),i("div",null,[...s[0]||(s[0]=[t(`<h1 id="_3-5-5-知道何时开始新对话" tabindex="-1">3.5.5 知道何时开始新对话 <a class="header-anchor" href="#_3-5-5-知道何时开始新对话" aria-label="Permalink to &quot;3.5.5 知道何时开始新对话&quot;">​</a></h1><h2 id="经过本节学习-你将掌握" tabindex="-1">经过本节学习，你将掌握 <a class="header-anchor" href="#经过本节学习-你将掌握" aria-label="Permalink to &quot;经过本节学习，你将掌握&quot;">​</a></h2><ul><li>识别「该开新对话」的三个信号</li><li>理解为什么「清新开始」有时比「继续修补」更高效</li><li>学会「搬家」：把关键信息从旧对话带到新对话</li><li>获得一个可复制的新对话启动模板</li></ul><h2 id="旧对话太长会怎样" tabindex="-1">旧对话太长会怎样？ <a class="header-anchor" href="#旧对话太长会怎样" aria-label="Permalink to &quot;旧对话太长会怎样？&quot;">​</a></h2><p>在 3.5.4 中，我们讲了上下文窗口的概念。当对话太长时，早期内容会被挤出窗口，导致 AI「失忆」。</p><p>但问题不止于此。即使内容没被挤出，<strong>太长的对话也会降低 AI 的表现</strong>：</p><table tabindex="0"><thead><tr><th>问题</th><th>原因</th></tr></thead><tbody><tr><td>回复变慢</td><td>需要处理更多历史信息</td></tr><tr><td>容易遗漏指令</td><td>关键信息淹没在大量对话中</td></tr><tr><td>更容易出错</td><td>历史中的矛盾信息会干扰判断</td></tr><tr><td>难以调试</td><td>你也很难回溯问题出在哪一轮</td></tr></tbody></table><p>有时候，开一个新对话比在旧对话里继续挣扎更有效。</p><h2 id="三个「该开新对话」的信号" tabindex="-1">三个「该开新对话」的信号 <a class="header-anchor" href="#三个「该开新对话」的信号" aria-label="Permalink to &quot;三个「该开新对话」的信号&quot;">​</a></h2><h3 id="信号一-对话超过-20-轮" tabindex="-1">信号一：对话超过 20 轮 <a class="header-anchor" href="#信号一-对话超过-20-轮" aria-label="Permalink to &quot;信号一：对话超过 20 轮&quot;">​</a></h3><p>这是一个经验值。当对话轮次超过 20 轮（你发一条、AI 回一条算一轮），就应该考虑开新对话了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>为什么是 20 轮？</span></span>
<span class="line"><span>- 每轮对话平均 500-1000 tokens</span></span>
<span class="line"><span>- 20 轮 ≈ 10K-20K tokens</span></span>
<span class="line"><span>- 已经占用了相当比例的上下文窗口</span></span></code></pre></div><p><strong>例外情况</strong>：如果你用的是大上下文窗口模型（如 Claude 200K），可以适当放宽到 30-40 轮。</p><h3 id="信号二-ai-开始「忘记」早期约定" tabindex="-1">信号二：AI 开始「忘记」早期约定 <a class="header-anchor" href="#信号二-ai-开始「忘记」早期约定" aria-label="Permalink to &quot;信号二：AI 开始「忘记」早期约定&quot;">​</a></h3><p>当你发现以下情况时，说明上下文管理已经失效：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 你第 1 轮说用 TypeScript，AI 第 18 轮给你 JavaScript</span></span>
<span class="line"><span>❌ 你第 3 轮说不要用 any，AI 第 15 轮代码里全是 any</span></span>
<span class="line"><span>❌ 你问&quot;按照之前的格式&quot;，AI 问你&quot;什么格式？&quot;</span></span></code></pre></div><p><strong>判断方法</strong>：如果你发现自己需要反复重申同一个约定（超过 3 次），就该开新对话了。</p><h3 id="信号三-话题发生根本转变" tabindex="-1">信号三：话题发生根本转变 <a class="header-anchor" href="#信号三-话题发生根本转变" aria-label="Permalink to &quot;信号三：话题发生根本转变&quot;">​</a></h3><p>当你从一个任务转向另一个完全不同的任务时，旧对话的历史反而会干扰。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>旧话题：实现用户登录功能</span></span>
<span class="line"><span>新话题：设计数据库表结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>两个话题关系不大，旧对话中的登录代码会占用上下文空间，</span></span>
<span class="line"><span>却对设计数据库没有帮助。</span></span></code></pre></div><p><strong>经验法则</strong>：如果新任务和之前的对话内容没有直接关联，开新对话。</p><h2 id="三个信号的速查表" tabindex="-1">三个信号的速查表 <a class="header-anchor" href="#三个信号的速查表" aria-label="Permalink to &quot;三个信号的速查表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>信号</th><th>判断标准</th><th>行动</th></tr></thead><tbody><tr><td>轮次过多</td><td>超过 20 轮</td><td>考虑开新对话</td></tr><tr><td>AI 失忆</td><td>反复重申约定超过 3 次</td><td>立即开新对话</td></tr><tr><td>话题转变</td><td>新任务与历史无关</td><td>开新对话</td></tr></tbody></table><h2 id="如何「搬家」-把关键信息带到新对话" tabindex="-1">如何「搬家」：把关键信息带到新对话 <a class="header-anchor" href="#如何「搬家」-把关键信息带到新对话" aria-label="Permalink to &quot;如何「搬家」：把关键信息带到新对话&quot;">​</a></h2><p>开新对话不意味着从零开始。你需要把关键信息「搬」到新对话中。</p><h3 id="第一步-从旧对话中提取关键信息" tabindex="-1">第一步：从旧对话中提取关键信息 <a class="header-anchor" href="#第一步-从旧对话中提取关键信息" aria-label="Permalink to &quot;第一步：从旧对话中提取关键信息&quot;">​</a></h3><p>在旧对话结束前，让 AI 帮你总结：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请总结我们这次对话的关键信息，包括：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 项目的技术栈和约定</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 已完成的功能列表</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当前的代码结构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遗留的问题或待办事项</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请用简洁的 Markdown 格式输出，方便我复制到新对话中。</span></span></code></pre></div><h3 id="第二步-保存总结" tabindex="-1">第二步：保存总结 <a class="header-anchor" href="#第二步-保存总结" aria-label="Permalink to &quot;第二步：保存总结&quot;">​</a></h3><p>把 AI 的总结保存下来。可以：</p><ul><li>复制到一个文本文件</li><li>保存到项目的 README 或 NOTES.md</li><li>直接记在脑子里（如果内容不多）</li></ul><h3 id="第三步-在新对话中重建上下文" tabindex="-1">第三步：在新对话中重建上下文 <a class="header-anchor" href="#第三步-在新对话中重建上下文" aria-label="Permalink to &quot;第三步：在新对话中重建上下文&quot;">​</a></h3><p>用提取的信息开始新对话：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要继续开发一个待办清单项目。以下是项目背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术栈**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React 18 + TypeScript</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tailwind CSS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zustand 状态管理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**已完成功能**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加任务（带空输入验证）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 删除任务（带确认提示）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 任务列表展示</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**代码结构**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/components/AddTaskForm.tsx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/components/TaskList.tsx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/components/TaskItem.tsx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src/store/taskStore.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**当前任务**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实现任务编辑功能——点击任务可以修改标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请基于以上背景，帮我实现任务编辑功能。</span></span></code></pre></div><h2 id="可复制模板-新对话启动-prompt" tabindex="-1">可复制模板：新对话启动 Prompt <a class="header-anchor" href="#可复制模板-新对话启动-prompt" aria-label="Permalink to &quot;可复制模板：新对话启动 Prompt&quot;">​</a></h2><h3 id="通用模板" tabindex="-1">通用模板 <a class="header-anchor" href="#通用模板" aria-label="Permalink to &quot;通用模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要继续开发 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。以下是项目背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术栈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 编码约定</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约定1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约定2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约定3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 已完成功能</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 代码结构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">目录/文件1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">目录/文件2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 本次任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">详细描述你要做的事情</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请基于以上背景开始。</span></span></code></pre></div><h3 id="简化模板-适用于简单项目" tabindex="-1">简化模板（适用于简单项目） <a class="header-anchor" href="#简化模板-适用于简单项目" aria-label="Permalink to &quot;简化模板（适用于简单项目）&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">继续开发 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，技术栈：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术栈</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">已完成：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">简要列举</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现在要做：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">本次任务</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">注意事项：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约定1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">约定2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="带代码上下文的模板" tabindex="-1">带代码上下文的模板 <a class="header-anchor" href="#带代码上下文的模板" aria-label="Permalink to &quot;带代码上下文的模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我要继续开发一个功能。以下是相关的现有代码：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**现有组件**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（TaskList.tsx）：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`tsx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里粘贴相关代码片段</span></span></code></pre></div><p><strong>现在需要</strong>： [描述你需要 AI 做的事情]</p><p><strong>请注意</strong>：</p><ul><li>保持和现有代码风格一致</li><li>[其他约定]</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 什么时候不需要开新对话？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有时候旧对话还是更好的选择：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 情况 | 建议 | 原因 |</span></span>
<span class="line"><span>|-----|------|------|</span></span>
<span class="line"><span>| 对话还在 10 轮以内 | 继续旧对话 | 历史信息仍然有价值 |</span></span>
<span class="line"><span>| 正在调试一个 bug | 继续旧对话 | 错误上下文很重要 |</span></span>
<span class="line"><span>| 功能实现到一半 | 继续旧对话 | 避免重新解释 |</span></span>
<span class="line"><span>| 需要引用之前的代码 | 继续旧对话 | 代码在历史中可直接引用 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**核心原则**：如果旧对话的历史对当前任务仍然有帮助，继续用；如果已经变成负担，果断开新的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 「清新开始」的心理优势</span></span>
<span class="line"><span></span></span>
<span class="line"><span>除了技术原因，开新对话还有心理上的好处：</span></span></code></pre></div><p>旧对话： &quot;之前改了这么多轮还没改好，是不是我的问题...&quot;</p><p>新对话： &quot;这是一个全新的开始，这次一定可以&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>有时候，一个干净的起点能帮助你更清晰地思考问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 实战技巧：对话命名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>很多 AI 工具支持给对话命名。善用这个功能：</span></span></code></pre></div><p>❌ 默认命名：&quot;New Chat&quot;、&quot;Untitled&quot; ✅ 有意义的命名：&quot;待办清单-添加功能&quot;、&quot;待办清单-删除功能&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>好的命名能帮你：</span></span>
<span class="line"><span>- 快速找到历史对话</span></span>
<span class="line"><span>- 知道每个对话在做什么</span></span>
<span class="line"><span>- 决定是继续旧对话还是开新对话</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本节要点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ **三个信号**：超过 20 轮、AI 反复失忆、话题根本转变</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ **清新开始的价值**：有时比继续修补更高效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ **搬家流程**：让 AI 总结 → 保存 → 新对话中重建上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ **启动模板**：用结构化的 Prompt 开始新对话，快速重建上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✓ **对话命名**：给对话起有意义的名字，便于管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本章总结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>恭喜你完成了 3.5 节「迭代对话的艺术」的学习。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回顾一下你学到了什么：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 小节 | 核心收获 |</span></span>
<span class="line"><span>|-----|---------|</span></span>
<span class="line"><span>| 3.5.1 | 一次搞定是幻觉，迭代是常态 |</span></span>
<span class="line"><span>| 3.5.2 | 三阶段模型：看方向 → 改问题 → 磨细节 |</span></span>
<span class="line"><span>| 3.5.3 | SBI 反馈框架，让 AI 精准理解你的修改需求 |</span></span>
<span class="line"><span>| 3.5.4 | 四个上下文管理技巧 + 工具级配置 |</span></span>
<span class="line"><span>| 3.5.5 | 知道何时「搬家」，如何「搬家」 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**一句话总结**：迭代不是失败，而是通往成功的必经之路。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下一节（3.6），我们将学习当 AI「不听话」时——输出错误、产生幻觉、代码有 bug——如何诊断问题并修正。</span></span></code></pre></div>`,50)])])}const c=a(p,[["render",l]]);export{E as __pageData,c as default};
